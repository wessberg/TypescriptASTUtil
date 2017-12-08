import {IPrinter} from "./i-printer";
import {createPrinter, EmitHint, isSourceFile, NewLineKind, Node, NodeArray, Printer as TypescriptPrinter, SyntaxKind} from "typescript";

/**
 * A class that can print a SourceFile
 */
export class Printer implements IPrinter {
	/**
	 * Keys to discard when stringifying a Node
	 * @type {Set<string>}
	 */
	private static readonly DISCARD_KEYS = new Set(["parent", "flags", "transformFlags", "symbol", "identifiers", "classifiableNames", "lineMap", "modifierFlagsCache", "imports", "moduleAugmentations", "ambientModuleNames", "nextContainer", "locals", "scriptSnapshot", "symbolCount", "flowNode", "bindDiagnostics", "languageVersion", "fileName", "languageVariant", "isDeclarationFile", "scriptKind", "referencedFiles", "typeReferenceDirectives", "amdDependencies", "path", "version", "parseDiagnostics", "nodeCount", "identifierCount", "endOfFileToken", "autoGenerateKind", "autoGenerateId", "original", "localSymbol"]);

	/**
	 * The spacing to use when stringifying a Node
	 * @type {string}
	 */
	private static readonly SPACING: string = "  ";

	/**
	 * A printer that can print a Typescript AST
	 * @type {Printer}
	 */
	private readonly printer: TypescriptPrinter = createPrinter({newLine: NewLineKind.LineFeed});

	/**
	 * Stringifies a Node in a compact, readable representation
	 * @param {Node|NodeArray<Node>} node
	 * @param {Iterable<string>} [stripKeys]
	 * @returns {string}
	 */
	public stringify (node: Node|NodeArray<Node>, stripKeys?: Iterable<string>): string {
		// Generate the set of additional keys to strip
		const additionalStripKeys = stripKeys == null ? null : new Set(stripKeys);

		return JSON.stringify(node, (key, value) => {

			// Replace a SyntaxKind value with its name for better readability
			if (key === "kind" || key === "token") return SyntaxKind[value];

			// If any keys are provided to 'stripKeys', check if they have the key and filter it out if it matches
			if (additionalStripKeys != null && additionalStripKeys.has(key)) {
				return undefined;
			}

			// If any of the default discarded keys matches the current key, filter it out
			if (Printer.DISCARD_KEYS.has(key)) {
				return undefined;
			}

			// Otherwise, return the value
			return value;
		}, Printer.SPACING);
	}

	/**
	 * Prints a Node
	 * @param {Node} node
	 * @returns {string}
	 */
	public print (node: Node): string {
		if (isSourceFile(node)) {
			return this.printer.printFile(node);
		}
		else {
			// Make sure that the type has a SourceFile. If it doesn't, mock it. Otherwise, the printer may fail
			if (node.getSourceFile == null || node.getSourceFile() == null) {
				// tslint:disable
				(<any>node).getSourceFile = () => ({text: ""});
				// tslint:enable
			}
			return this.printer.printNode(EmitHint.Unspecified, node, node.getSourceFile());
		}
	}
}