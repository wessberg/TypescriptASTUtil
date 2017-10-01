import {BooleanLiteral, Node, SyntaxKind} from "typescript";

/**
 * A predicate function that returns true if the given Statement is a BooleanLiteral.
 * @param {Node} statement
 * @returns {boolean}
 */
export function isBooleanLiteral (statement: Node): statement is BooleanLiteral {
	return statement != null && (statement.kind === SyntaxKind.TrueKeyword || statement.kind === SyntaxKind.FalseKeyword);
}