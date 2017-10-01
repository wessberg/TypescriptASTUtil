/**
 * Returns true if the provided item is an item with a 'nodeCount' property
 * @param item
 * @returns {boolean}
 */
export function hasNodeCount<T> (item: T): item is T&{ nodeCount: number } {
	return item != null && "nodeCount" in item;
}