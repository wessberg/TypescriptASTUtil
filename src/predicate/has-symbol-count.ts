/**
 * Returns true if the provided item is an item with a 'symbolCount' property
 * @param item
 * @returns {boolean}
 */
export function hasSymbolCount<T> (item: T): item is T & {symbolCount: number} {
	return item != null && "symbolCount" in item;
}