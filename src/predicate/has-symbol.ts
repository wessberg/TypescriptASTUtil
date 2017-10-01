import {Symbol} from "typescript";
/**
 * Returns true if the provided item is an item with a Symbol property
 * @param item
 * @returns {boolean}
 */
export function hasSymbol<T> (item: T): item is T&{ symbol: Symbol } {
	return item != null && "symbol" in item;
}