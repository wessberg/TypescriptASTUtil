import {isIdentifier, isModuleDeclaration, JSDocNamespaceBody, Node} from "typescript";

/**
 * Returns true if the provided Node is a NamespaceBody
 * @param {Node} node
 * @returns {boolean}
 */
export function isJSDocNamespaceBody (node: Node): node is JSDocNamespaceBody {
	return isIdentifier(node) || isModuleDeclaration(node);
}