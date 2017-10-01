import {Node} from "typescript";

/**
 * Returns true if the provided item is an item with a 'nextContainer' property
 * @param item
 * @returns {boolean}
 */
export function hasNextContainer<T> (item: T): item is T & {nextContainer: Node} {
	return item != null && "nextContainer" in item;
}