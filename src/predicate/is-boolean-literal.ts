import {Statement, Declaration, Expression, Node, BooleanLiteral, SyntaxKind} from "typescript";
/**
 * A predicate function that returns true if the given Statement is a BooleanLiteral.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isBooleanLiteral (statement: Statement|Declaration|Expression|Node): statement is BooleanLiteral {
	return statement.kind === SyntaxKind.TrueKeyword || statement.kind === SyntaxKind.FalseKeyword;
}