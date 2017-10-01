/**
 * Returns true if the provided item is an item with a 'identifierCount' property
 * @param item
 * @returns {boolean}
 */
export function hasIdentifierCount<T> (item: T): item is T&{ identifierCount: number } {
	return item != null && "identifierCount" in item;
}