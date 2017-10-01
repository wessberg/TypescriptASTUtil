import {SourceFile} from "typescript";

export interface INodeUpdaterLanguageServiceOption {
	addFile (options: { path: string; content: string }): SourceFile;
}