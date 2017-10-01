import {ImportExpression, Node, SyntaxKind} from "typescript";

/**
 * Returns true if the provided Node is a ImportExpression
 * @param {Node} node
 * @returns {boolean}
 */
export function isImportExpression (node: Node): node is ImportExpression {
	return node != null && node.kind === SyntaxKind.ImportKeyword;
}