import {Node, NodeArray, NodeFlags, SyntaxKind} from "typescript/lib/typescript";
import {INodeMatcherUtil} from "../util/node-matcher-util/i-node-matcher-util";
import {IPrinter} from "../util/printer/i-printer";
import {INodeUpdaterUtil} from "../util/node-updater-util/i-node-updater-util";

export interface ITypescriptASTUtil extends INodeMatcherUtil, INodeUpdaterUtil, IPrinter {
	takeName (identifier: Node|undefined): string;
	getRawText (identifier: Node): string;
	serializeFlag (flag: NodeFlags): string;
	serializeToken (token: SyntaxKind): string;
	getFilteredStatements<T extends Node> (statements: NodeArray<Node>|Node, kinds?: SyntaxKind|Iterable<SyntaxKind>|null|undefined, recursive?: boolean): NodeArray<T>;
	/*tslint:disable:no-any*/
	filterStatements<T extends Node> (callback: (node: T) => any, statements: NodeArray<Node>|Node, kinds?: SyntaxKind|Iterable<SyntaxKind>|null|undefined, recursive?: boolean): void;
	/*tslint:enable:no-any*/
}