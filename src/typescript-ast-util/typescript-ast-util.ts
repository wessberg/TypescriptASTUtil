import {createNodeArray, forEachChild, isArrowFunction, isBreakStatement, isCallExpression, isClassDeclaration, isClassLike, isComputedPropertyName, isConstructorDeclaration, isContinueStatement, isDecorator, isElementAccessExpression, isEnumDeclaration, isExportAssignment, isExportSpecifier, isExpressionWithTypeArguments, isExternalModuleReference, isFunctionDeclaration, isFunctionExpression, isIdentifier, isImportClause, isImportEqualsDeclaration, isImportSpecifier, isInterfaceDeclaration, isJSDocParameterTag, isJSDocPropertyTag, isJSDocTypedefTag, isJsxAttribute, isLabeledStatement, isMetaProperty, isMissingDeclaration, isNamespaceExportDeclaration, isNamespaceImport, isNewExpression, isNumericLiteral, isParenthesizedExpression, isParenthesizedTypeNode, isPropertyAccessExpression, isPropertyAssignment, isPropertyDeclaration, isPropertySignature, isQualifiedName, isShorthandPropertyAssignment, isStringLiteral, isThisTypeNode, isTypeAliasDeclaration, isTypeAssertion, isTypeParameterDeclaration, isTypePredicateNode, isTypeReferenceNode, Node, NodeArray, NodeFlags, SyntaxKind, tokenToString} from "typescript";
import {ITypescriptASTUtil} from "./i-typescript-ast-util";

/**
 * A helper class for working with Typescript's AST
 */
export class TypescriptASTUtil implements ITypescriptASTUtil {

	/**
	 * Returns the raw contents of the given identifier
	 * @param {Node} identifier
	 * @returns {string}
	 */
	public getRawText (identifier: Node): string {
		const sourceFile = identifier.getSourceFile();
		if (sourceFile == null) return "";
		return sourceFile.text.slice(identifier.pos, identifier.end);
	}

	/**
	 * Takes the name of the provided identifier, if possible.
	 * @throws {TypeError} If the name could not be detected.
	 * @param {Statement | Expression | Node} identifier
	 * @returns {string}
	 */
	public takeName (identifier: Node|undefined): string {
		if (identifier == null) return "";

		if (
			isTypeParameterDeclaration(identifier) ||
			isShorthandPropertyAssignment(identifier) ||
			isJsxAttribute(identifier) ||
			isMetaProperty(identifier) ||
			isPropertySignature(identifier) ||
			isPropertyDeclaration(identifier) ||
			isPropertyAssignment(identifier) ||
			isClassLike(identifier) ||
			isClassDeclaration(identifier) ||
			isInterfaceDeclaration(identifier) ||
			isTypeAliasDeclaration(identifier) ||
			isEnumDeclaration(identifier) ||
			isImportEqualsDeclaration(identifier) ||
			isImportClause(identifier) ||
			isNamespaceImport(identifier) ||
			isNamespaceExportDeclaration(identifier) ||
			isImportSpecifier(identifier) ||
			isExportSpecifier(identifier) ||
			isJSDocTypedefTag(identifier) ||
			isJSDocPropertyTag(identifier) ||
			isJSDocParameterTag(identifier) ||
			isExportAssignment(identifier)
		) {
			return this.takeName(identifier.name);
		}

		if (
			isBreakStatement(identifier) ||
			isContinueStatement(identifier) ||
			isLabeledStatement(identifier)
		) {
			return this.takeName(identifier.label);
		}

		if (isTypePredicateNode(identifier)) {
			return this.takeName(identifier.parameterName);
		}

		if (isPropertyAccessExpression(identifier)) {
			return `${this.takeName(identifier.expression)}.${this.takeName(identifier.name)}`;
		}

		if (isElementAccessExpression(identifier)) {
			return `${this.takeName(identifier.expression)}[${this.takeName(identifier.argumentExpression)}]`;
		}

		if (isStringLiteral(identifier)) {
			return `"${identifier.text}"`;
		}

		if (
			isComputedPropertyName(identifier) ||
			isNewExpression(identifier) ||
			isExpressionWithTypeArguments(identifier) ||
			isCallExpression(identifier) ||
			isDecorator(identifier) ||
			isExternalModuleReference(identifier) ||
			isParenthesizedExpression(identifier) ||
			isTypeAssertion(identifier)
		) {
			return this.takeName(identifier.expression);
		}

		if (isParenthesizedTypeNode(identifier)) {
			return this.takeName(identifier.type);
		}

		if (
			isNumericLiteral(identifier) ||
			isIdentifier(identifier)
		) {
			return identifier.text;
		}

		if (isQualifiedName(identifier)) {
			return `${this.takeName(identifier.left)}.${this.takeName(identifier.right)}`;
		}

		if (
			isFunctionDeclaration(identifier) ||
			isFunctionExpression(identifier) ||
			isMissingDeclaration(identifier)
		) {
			return this.takeName(identifier.name);
		}

		if (identifier.kind === SyntaxKind.SuperKeyword) {
			return "super";
		}

		if (isConstructorDeclaration(identifier)) {
			return "constructor";
		}

		if (isThisTypeNode(identifier)) {
			return "this";
		}

		if (isTypeReferenceNode(identifier)) {
			return this.takeName(identifier.typeName);
		}

		if (isArrowFunction(identifier)) {
			return "";
		}

		throw new TypeError(`${this.constructor.name} could not detect the name of a property of kind ${SyntaxKind[identifier.kind]} around here:\n${this.getRawText(identifier)}.`);
	}

	/**
	 * Serializes the given flag and returns the textual representation of it.
	 * @param {NodeFlags} flag
	 * @returns {string}
	 */
	public serializeFlag (flag: NodeFlags): string {
		switch (flag) {
			case NodeFlags.Const:
				return "const";
			case NodeFlags.Let:
				return "let";
			default:
				throw new TypeError(`${this.constructor.name} could not serialize a flag of kind: ${NodeFlags[flag]}`);
		}
	}

	/**
	 * Serializes the given token (operand) and returns the textual representation of it.
	 * @param {SyntaxKind} token
	 * @returns {string}
	 */
	public serializeToken (token: SyntaxKind): string {
		const stringified = tokenToString(token);
		return stringified == null ? "" : stringified;
	}

	/**
	 * Filters the provided Statements and only returns the requested kinds of Statements
	 * @template T
	 * @param {Function} callback
	 * @param {NodeArray<Node>} statements
	 * @param {SyntaxKind | Iterable<SyntaxKind>|null|?} kinds
	 * @param {boolean} recursive
	 * @returns {NodeArray<T extends Node>}
	 */

	/*tslint:disable:no-any*/
	public filterStatements<T extends Node> (callback: (node: T) => any, statements: NodeArray<Node>|Node, kinds?: SyntaxKind|Iterable<SyntaxKind>|null|undefined, recursive: boolean = false): void {
		/*tslint:enable:no-any*/
		const normalizedKinds = kinds == null ? null : typeof kinds === "number" || typeof kinds === "string" ? [kinds] : [...kinds];
		const nodes: ReadonlyArray<Node> = Array.isArray(statements) ? statements : <ReadonlyArray<Node>> [statements];
		nodes.forEach(statement => {
			// Add it if the node has one of the requested kinds.
			if (normalizedKinds == null || normalizedKinds.some(kind => statement.kind === kind)) callback(<T>statement);
			if (recursive) {
				forEachChild(statement, node => this.filterStatements(callback, node, kinds, recursive));
			}
		});
	}

	/**
	 * Gets all filtered statements
	 * @param {NodeArray<Node> | Node} statements
	 * @param {SyntaxKind | Iterable<SyntaxKind>} kinds
	 * @param {boolean} recursive
	 * @returns {NodeArray<Node>}
	 */
	public getFilteredStatements<T extends Node> (statements: NodeArray<Node>|Node, kinds?: SyntaxKind|Iterable<SyntaxKind>|null|undefined, recursive: boolean = false): NodeArray<T> {
		const filteredStatements: Node[] = [];
		this.filterStatements(node => filteredStatements.push(node), statements, kinds, recursive);
		return createNodeArray(<T[]>filteredStatements);
	}
}