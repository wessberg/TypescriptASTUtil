import {Expression, Node, Statement, SyntaxKind, NodeFlags, NodeArray} from "typescript/lib/typescript";

export interface ITypescriptASTUtil {
	takeName (identifier: Statement|Expression|Node|undefined): string;
	getRawText (identifier: Statement|Expression|Node): string;
	stringify (identifier: Statement|Node|Expression, compact?: boolean): string;
	serializeFlag (flag: NodeFlags): string;
	serializeToken (token: SyntaxKind): string;
	filterStatements <T extends (Statement|Expression|Node)> (statements: NodeArray<Statement|Expression|Node>, kinds: SyntaxKind|ReadonlyArray<SyntaxKind>, recursive?: boolean): NodeArray<T>;
	findChildStatements (statement: Statement|Expression|Node): NodeArray<Statement|Expression|Node>;
}