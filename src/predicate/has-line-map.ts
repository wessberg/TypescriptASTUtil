/**
 * Returns true if the provided item is an item with a 'lineMap' property
 * @param item
 * @returns {boolean}
 */
export function hasLineMap<T> (item: T): item is T&{ lineMap: number[] } {
	return item != null && "lineMap" in item;
}