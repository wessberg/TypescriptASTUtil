import {NodeMatcherItem} from "./node-matcher-item";
import {NodeArray, Node} from "typescript";

export interface INodeMatcherUtil {
	match <T extends NodeMatcherItem> (node: T, matchWithin: Iterable<T>|NodeArray<Node>): T|undefined;
	matchIndex<T extends NodeMatcherItem> (node: T, matchWithin: Iterable<T>|NodeArray<Node>): number;
}