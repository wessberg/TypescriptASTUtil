/**
 * Returns true if the provided item is an item with a 'classifiableNames' property
 * @param item
 * @returns {boolean}
 */
export function hasClassifiableNames<T> (item: T): item is T&{ classifiableNames: Map<string, boolean> } {
	return item != null && "classifiableNames" in item;
}