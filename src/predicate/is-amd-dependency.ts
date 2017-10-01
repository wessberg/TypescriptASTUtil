import {AmdDependency} from "typescript";
import {NodeMatcherItem} from "../node-matcher-util/node-matcher-item";

/**
 * Returns true if the provided node is an AmdDependency
 * @param {NodeMatcherItem} node
 * @returns {boolean}
 */
export function isAmdDependency (node: NodeMatcherItem): node is AmdDependency {
	return node != null && "path" in node && "name" in node;
}