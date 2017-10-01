import {ArrayBindingElement, isBindingElement, isOmittedExpression, Node} from "typescript";

/**
 * Returns true if the provided node is an ArrayBindingElement
 * @param {Node} node
 * @returns {boolean}
 */
export function isArrayBindingElement (node: Node): node is ArrayBindingElement {
	return isBindingElement(node) || isOmittedExpression(node);
}