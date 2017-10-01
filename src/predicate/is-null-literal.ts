import {Node, NullLiteral, SyntaxKind} from "typescript";

/**
 * Returns true if the provided Node is a NullLiteral
 * @param {Node} node
 * @returns {boolean}
 */
export function isNullLiteral (node: Node): node is NullLiteral {
	return node != null && node.kind === SyntaxKind.NullKeyword;
}