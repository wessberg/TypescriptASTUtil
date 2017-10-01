import {NodeMatcherItem} from "./node-matcher-item";
import {Node, NodeArray} from "typescript";

export interface INodeMatcherUtil {
	match <T extends NodeMatcherItem> (node: T, matchWithin: Iterable<T>|NodeArray<Node>): T|undefined;
	matchIndex<T extends NodeMatcherItem> (node: T, matchWithin: Iterable<T>|NodeArray<Node>): number;
}