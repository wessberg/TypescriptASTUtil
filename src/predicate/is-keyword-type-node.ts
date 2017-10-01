import {Node, KeywordTypeNode, SyntaxKind} from "typescript";

/**
 * Returns true if a node a KeywordTypeNode
 * @param {Node} node
 * @returns {boolean}
 */
export function isKeywordTypeNode (node: Node): node is KeywordTypeNode {
	const {kind} = node;
	switch (kind) {
		case SyntaxKind.AnyKeyword:
		case SyntaxKind.NumberKeyword:
		case SyntaxKind.ObjectKeyword:
		case SyntaxKind.BooleanKeyword:
		case SyntaxKind.StringKeyword:
		case SyntaxKind.SymbolKeyword:
		case SyntaxKind.ThisKeyword:
		case SyntaxKind.VoidKeyword:
		case SyntaxKind.UndefinedKeyword:
		case SyntaxKind.NullKeyword:
		case SyntaxKind.NeverKeyword:
			return true;
		default:
			return false;
	}
}