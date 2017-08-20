import {SyntaxKind, Expression, Declaration, Statement, Node} from "typescript";

// Typescript doesn't have a FirstNode interface apparently. So this is an extension.
/*tslint:disable*/
export interface FirstNode extends Expression, Declaration {
	kind: SyntaxKind.FirstNode;
	left: Expression;
	right: Expression;
}
/*tslint:enable*/

/**
 * A predicate function that returns true if the given Statement is a FirstNode.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isFirstNode (statement: Statement|Declaration|Expression|Node): statement is FirstNode {
	return statement.kind === SyntaxKind.FirstNode;
}