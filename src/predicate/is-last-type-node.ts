import {SyntaxKind, Expression, Declaration, Statement, Node, Identifier} from "typescript";

// Typescript doesn't have a LastTypeNode interface apparently. So this is an extension.
/*tslint:disable*/
export interface LastTypeNode extends Expression, Declaration {
	kind: SyntaxKind.LastTypeNode;
	literal: Identifier;
}
/*tslint:enable*/

/**
 * A predicate function that returns true if the given Statement is a LastTypeNode.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isLastTypeNode (statement: Statement|Declaration|Expression|Node): statement is LastTypeNode {
	return statement.kind === SyntaxKind.LastTypeNode;
}