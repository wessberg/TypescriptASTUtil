import {NodeMatcherItem} from "../util/node-matcher-util/node-matcher-item";
import {FileReference} from "typescript";

/**
 * Returns true if the provided node is a FileReference
 * @param {FileReference} node
 * @returns {boolean}
 */
export function isFileReference (node: NodeMatcherItem): node is FileReference {
	return node != null && "pos" in node && "end" in node && "fileName" in node;
}