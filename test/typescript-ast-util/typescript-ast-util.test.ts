import {createImportDeclaration, createLiteral} from "typescript";
import {test} from "ava";
import {TypescriptASTUtil} from "../../src/typescript-ast-util/typescript-ast-util";
import {TypescriptLanguageService} from "@wessberg/typescript-language-service";
import {FileLoader} from "@wessberg/fileloader";
import {PathUtil} from "@wessberg/pathutil";
import {ModuleUtil} from "@wessberg/moduleutil";
import {TypescriptPackageReassembler} from "@wessberg/typescript-package-reassembler";

const importDeclaration = createImportDeclaration(undefined, undefined, undefined, createLiteral("foo"));
const fileLoader = new FileLoader();
const pathUtil = new PathUtil(fileLoader);
const moduleUtil = new ModuleUtil(fileLoader, pathUtil);
const reassembler = new TypescriptPackageReassembler();
const languageService = new TypescriptLanguageService(moduleUtil, pathUtil, fileLoader, reassembler);
const sourceFile = languageService.addFile({path: "./test/demo/a_file.ts"});

const astUtil = new TypescriptASTUtil();
astUtil.addInPlace(importDeclaration, sourceFile, languageService);

test("foo", t => {
	console.log(astUtil.print(sourceFile));
	t.true(true);
});