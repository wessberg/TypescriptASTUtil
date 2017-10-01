import {ModuleBody, Node} from "typescript";
import {isNamespaceBody} from "./is-namespace-body";
import {isJSDocNamespaceBody} from "./is-jsdoc-namespace-body";

/**
 * Returns true if the provided Node is a ModuleBody
 * @param {Node} node
 * @returns {boolean}
 */
export function isModuleBody (node: Node): node is ModuleBody {
	return isNamespaceBody(node) || isJSDocNamespaceBody(node);
}