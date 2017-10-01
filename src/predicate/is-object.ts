/*tslint:disable:no-any*/
/**
 * Returns true if the provided item is an object
 * @param item
 * @returns {boolean}
 */
export function isObject (item: any): item is {[key: string]: any} {
	if (item === null) {
		return false;
	}
	return ((typeof item === "function") || (typeof item === "object"));
}
/*tslint:enable:no-any*/