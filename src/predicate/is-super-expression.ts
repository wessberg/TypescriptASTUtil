import {Node, SuperExpression, SyntaxKind} from "typescript";

/**
 * Returns true if the provided Node is a SuperExpression
 * @param {Node} node
 * @returns {boolean}
 */
export function isSuperExpression (node: Node): node is SuperExpression {
	return node != null && node.kind === SyntaxKind.SuperKeyword;
}