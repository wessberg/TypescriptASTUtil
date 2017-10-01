import {BindingPattern, isArrayBindingPattern, isObjectBindingPattern, Node} from "typescript";

/**
 * Returns true if the provided Node is a BindingPattern
 * @param {Node} node
 * @returns {boolean}
 */
export function isBindingPattern (node: Node): node is BindingPattern {
	return isObjectBindingPattern(node) || isArrayBindingPattern(node);
}