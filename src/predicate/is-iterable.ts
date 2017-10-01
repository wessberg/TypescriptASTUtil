/**
 * Checks if something is an Iterable
 * @param item
 * @returns {boolean}
 */
export function isIterable<T> (item: T|Iterable<T>|undefined|null|{}): item is Iterable<T> {
	if (item == null) return false;
	return typeof (<Iterable<T>>item)[Symbol.iterator] === "function";
}