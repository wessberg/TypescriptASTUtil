import {JSDocUnknownTag, Node, SyntaxKind} from "typescript";

/**
 * Returns true if the provided Node is a JSDocUnknownTag
 * @param {Node} node
 * @returns {boolean}
 */
export function isJSDocUnknownTag (node: Node): node is JSDocUnknownTag {
	return node != null && node.kind === SyntaxKind.JSDocTag;
}