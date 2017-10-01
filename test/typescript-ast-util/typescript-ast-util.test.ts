import {createImportDeclaration, createLiteral} from "typescript";
import {test} from "ava";
import {TypescriptLanguageService} from "@wessberg/typescript-language-service";
import {FileLoader} from "@wessberg/fileloader";
import {PathUtil} from "@wessberg/pathutil";
import {ModuleUtil} from "@wessberg/moduleutil";
import {TypescriptPackageReassembler} from "@wessberg/typescript-package-reassembler";
import {NodeUpdaterUtil} from "../../src/node-updater-util/node-updater-util";
import {Printer} from "../../src/printer/printer";
import {NodeMatcherUtil} from "../../src/node-matcher-util/node-matcher-util";

const importDeclaration = createImportDeclaration(undefined, undefined, undefined, createLiteral("foo"));
const fileLoader = new FileLoader();
const pathUtil = new PathUtil(fileLoader);
const moduleUtil = new ModuleUtil(fileLoader, pathUtil);
const reassembler = new TypescriptPackageReassembler();
const languageService = new TypescriptLanguageService(moduleUtil, pathUtil, fileLoader, reassembler);
const sourceFile = languageService.addFile({path: "./test/demo/a_file.ts"});

const printer = new Printer();
const nodeUpdater = new NodeUpdaterUtil(new NodeMatcherUtil(), printer);
nodeUpdater.addInPlace(importDeclaration, sourceFile, languageService);

test("foo", t => {
	console.log(printer.print(sourceFile));
	t.true(true);
});