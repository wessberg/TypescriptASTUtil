/*tslint:disable:no-any*/
import {Node, NodeArray} from "typescript";

/**
 * Returns true if the provided item is a NodeArray
 * @param item
 * @returns {boolean}
 */
export function isNodeArray<T extends Node> (item: any): item is NodeArray<T> {
	return Array.isArray(item) && "pos" in item && "end" in item;
}

/*tslint:enable:no-any*/