import {Node, SyntaxKind, ThisExpression} from "typescript";

/**
 * Returns true if the provided Node is a ThisExpression
 * @param {Node} node
 * @returns {boolean}
 */
export function isThisExpression (node: Node): node is ThisExpression {
	return node != null && node.kind === SyntaxKind.ThisKeyword;
}