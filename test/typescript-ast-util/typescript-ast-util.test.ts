import {test} from "ava";
import {TypescriptLanguageService} from "@wessberg/typescript-language-service";
import {FileLoader} from "@wessberg/fileloader";
import {PathUtil} from "@wessberg/pathutil";
import {ModuleUtil} from "@wessberg/moduleutil";
import {TypescriptPackageReassembler} from "@wessberg/typescript-package-reassembler";
import {Printer} from "../../src/printer/printer";
import {TypescriptASTUtil} from "../../src/typescript-ast-util/typescript-ast-util";
import {ClassDeclaration, PropertyDeclaration} from "typescript";

const fileLoader = new FileLoader();
const pathUtil = new PathUtil(fileLoader);
const moduleUtil = new ModuleUtil(fileLoader, pathUtil);
const reassembler = new TypescriptPackageReassembler();
const languageService = new TypescriptLanguageService(moduleUtil, pathUtil, fileLoader, reassembler);
const sourceFile = languageService.addFile({path: "./test/demo/a_file.ts"});
const astUtil = new TypescriptASTUtil();

const printer = new Printer();

test("foo", t => {
	console.log(printer.print(sourceFile));
	const classDeclaration = <ClassDeclaration>sourceFile.statements[0];
	const property = <PropertyDeclaration> classDeclaration.members[0];
	console.log(astUtil.getTypeNameOfExpression(property.initializer!));
	t.true(true);
});