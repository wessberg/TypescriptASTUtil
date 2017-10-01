import {isModuleBlock, NamespaceBody, Node} from "typescript";
import {isNamespaceDeclaration} from "./is-namespace-declaration";

/**
 * Returns true if the provided Node is a NamespaceBody
 * @param {Node} node
 * @returns {boolean}
 */
export function isNamespaceBody (node: Node): node is NamespaceBody {
	return isModuleBlock(node) || isNamespaceDeclaration(node);
}