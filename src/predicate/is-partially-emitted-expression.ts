import {Node, PartiallyEmittedExpression, SyntaxKind} from "typescript";

/**
 * Returns true if the provided Node is a PartiallyEmittedExpression
 * @param {Node} node
 * @returns {boolean}
 */
export function isPartiallyEmittedExpression (node: Node): node is PartiallyEmittedExpression {
	return node != null && node.kind === SyntaxKind.PartiallyEmittedExpression;
}