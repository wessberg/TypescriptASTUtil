import {Node, NodeArray, SourceFile} from "typescript";

export interface IPrinter {
	print (sourceFile: SourceFile): string;
	stringify (node: Node|NodeArray<Node>): string;
}