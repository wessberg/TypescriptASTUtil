import {isModuleDeclaration, NamespaceDeclaration, Node} from "typescript";

/**
 * Returns true if the provided Node is a NamespaceDeclaration
 * @param {Node} node
 * @returns {boolean}
 */
export function isNamespaceDeclaration (node: Node): node is NamespaceDeclaration {
	return isModuleDeclaration(node);
}