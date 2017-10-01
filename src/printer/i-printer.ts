import {Node, NodeArray} from "typescript";

export interface IPrinter {
	print (node: Node): string;
	stringify (node: Node|NodeArray<Node>): string;
}