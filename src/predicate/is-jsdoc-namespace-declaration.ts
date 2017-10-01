import {isModuleDeclaration, JSDocNamespaceDeclaration, Node} from "typescript";

/**
 * Returns true if the provided Node is a JSDocNamespaceDeclaration
 * @param {Node} node
 * @returns {boolean}
 */
export function isJSDocNamespaceDeclaration (node: Node): node is JSDocNamespaceDeclaration {
	return isModuleDeclaration(node);
}