/*tslint:disable:no-any*/
import {TextRange} from "typescript";

/**
 * Returns true if the provided item has a TextRange
 * @param item
 * @returns {boolean}
 */
export function hasTextRange (item: any): item is TextRange {
	return item != null && "pos" in item && "end" in item;
}

/*tslint:enable:no-any*/