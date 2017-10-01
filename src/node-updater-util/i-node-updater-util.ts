import {Node, SourceFile} from "typescript";
import {INodeUpdaterUtilUpdateOptionsDict} from "./i-node-updater-util-update-options-dict";
import {INodeUpdaterLanguageServiceOption} from "./i-node-updater-language-service-option";

export interface INodeUpdaterUtil {
	addInPlace<T extends Node> (newNode: T, sourceFile: SourceFile, languageService: INodeUpdaterLanguageServiceOption, options?: Partial<INodeUpdaterUtilUpdateOptionsDict>): T;
	updateInPlace<T extends Node> (newNode: T, existing: T, languageService: INodeUpdaterLanguageServiceOption, options?: Partial<INodeUpdaterUtilUpdateOptionsDict>): T;
}