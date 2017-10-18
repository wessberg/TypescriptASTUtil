/*tslint:disable:no-any*/
import {Node, NodeArray} from "typescript";

/**
 * Returns true if the provided item is a NodeArray or a normal array of nodes
 * @param item
 * @returns {boolean}
 */
export function isNodeArrayOrMutableArrayOfNodes<T extends Node> (item: any): item is NodeArray<T>|T[] {
	return Array.isArray(item);
}

/*tslint:enable:no-any*/