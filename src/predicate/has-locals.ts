import {Symbol} from "typescript";

/**
 * Returns true if the provided item is an item with a 'locals' property
 * @param item
 * @returns {boolean}
 */
export function hasLocals<T> (item: T): item is T&{ locals: Map<string, Symbol>|null } {
	return item != null && "locals" in item;
}