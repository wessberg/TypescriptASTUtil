import {DeclarationName, isComputedPropertyName, isIdentifier, isNumericLiteral, isStringLiteral, Node} from "typescript";
import {isBindingPattern} from "./is-binding-pattern";

/**
 * Returns true if the provided node is a DeclarationName
 * @param {Node} node
 * @returns {boolean}
 */
export function isDeclarationName (node: Node): node is DeclarationName {
	return isIdentifier(node) || isStringLiteral(node) || isNumericLiteral(node) || isComputedPropertyName(node) || isBindingPattern(node);
}