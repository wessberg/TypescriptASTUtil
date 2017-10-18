import {JSDoc} from "typescript";

/**
 * Returns true if the provided item is an item with a 'jsDoc' property
 * @param item
 * @returns {boolean}
 */
export function hasJsDoc<T> (item: T): item is T & { jsDoc: JSDoc[] } {
	return item != null && "jsDoc" in item;
}