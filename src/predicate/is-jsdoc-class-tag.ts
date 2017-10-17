import {JSDocClassTag, Node, SyntaxKind} from "typescript";

/**
 * Returns true if the provided Node is a JSDocClassTag
 * @param {Node} node
 * @returns {boolean}
 */
export function isJSDocClassTag (node: Node): node is JSDocClassTag {
	return node != null && node.kind === SyntaxKind.JSDocClassTag;
}