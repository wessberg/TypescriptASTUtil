import {Expression, Node, Statement, SyntaxKind, NodeFlags} from "typescript/lib/typescript";

export interface ITypescriptASTUtil {
	takeName (identifier: Statement|Expression|Node|undefined): string;
	getRawText (identifier: Statement|Expression|Node): string;
	stringify (identifier: Statement|Node|Expression, compact?: boolean): string;
	serializeFlag (flag: NodeFlags): string;
	serializeToken (token: SyntaxKind): string;
}