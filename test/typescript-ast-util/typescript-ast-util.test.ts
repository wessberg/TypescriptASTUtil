import {createSourceFile, ScriptTarget} from "typescript";
import {test} from "ava";
import {TypescriptASTUtil} from "../../src/typescript-ast-util/typescript-ast-util";

const fileName = "a_file.ts";
const sourceCode = `
for (let i = 0; i < 10; i++) {
	console.log("foo");
	continue;
}
`;
const sourceFile = createSourceFile(fileName, sourceCode, ScriptTarget.ESNext);
const astUtil = new TypescriptASTUtil();

test("foo", t => {
	console.log(sourceFile, astUtil);
	t.true(true);
});