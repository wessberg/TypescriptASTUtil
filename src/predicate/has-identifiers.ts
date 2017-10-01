/**
 * Returns true if the provided item is an item with a 'identifiers' property
 * @param item
 * @returns {boolean}
 */
export function hasIdentifiers<T> (item: T): item is T&{ identifiers: Map<string, string> } {
	return item != null && "identifiers" in item;
}