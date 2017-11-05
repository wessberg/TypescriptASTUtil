import {Node, NodeArray, NodeFlags, SyntaxKind} from "typescript/lib/typescript";

export interface ITypescriptASTUtil {
	clearPositions <T extends Node> (node: T|NodeArray<T>): T;
	getTypeNameOfExpression (expression: Node, acceptIdentifierAsTypeName?: boolean): string;
	takeName (identifier: Node|undefined): string;
	getRawText (identifier: Node): string;
	serializeFlag (flag: NodeFlags): string;
	serializeToken (token: SyntaxKind): string;
	getFilteredStatements<T extends Node> (statements: NodeArray<Node>|Node, kinds?: SyntaxKind|Iterable<SyntaxKind>|null|undefined, recursive?: boolean): NodeArray<T>;
	/*tslint:disable:no-any*/
	filterStatements<T extends Node> (callback: (node: T) => any, statements: NodeArray<Node>|Node, kinds?: SyntaxKind|Iterable<SyntaxKind>|null|undefined, recursive?: boolean): void;
	/*tslint:enable:no-any*/
}