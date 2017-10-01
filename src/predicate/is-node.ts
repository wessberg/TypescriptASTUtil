/*tslint:disable:no-any*/
import {isObject} from "./is-object";
import {Node} from "typescript";

/**
 * Returns true if the provided item is a Node
 * @param item
 * @returns {boolean}
 */
export function isTypescriptNode (item: any): item is Node {
	return isObject(item) && "kind" in item && "flags" in item;
}
/*tslint:enable:no-any*/