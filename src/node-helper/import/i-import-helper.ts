import {Identifier, ImportDeclaration, NamedImportBindings, NamedImports, NamespaceImport, NodeArray, SourceFile} from "typescript";

export interface IImportHelper {

	getImportsWithNamedImport (namedImport: {name: string; propertyName: string|null}, path: string, sourceFile: SourceFile): NodeArray<ImportDeclaration>;
	getImportsForPath (path: string, sourceFile: SourceFile): NodeArray<ImportDeclaration>;
	getImports (sourceFile: SourceFile): NodeArray<ImportDeclaration>;
	getNameForImportDeclaration (importDeclaration: ImportDeclaration): Identifier|undefined;
	getNamedImportBindingsForImportDeclaration (importDeclaration: ImportDeclaration): NamedImportBindings|undefined;
	getNamedImportsForImportDeclaration (importDeclaration: ImportDeclaration): NamedImports|undefined;
	getNamespaceImportForImportDeclaration (importDeclaration: ImportDeclaration): NamespaceImport|undefined;

	hasNamedImports (importDeclaration: ImportDeclaration): boolean;
	hasNamedImport (namedImport: { name: string; propertyName: string|null }, importDeclaration: ImportDeclaration): boolean;
	hasName (importDeclaration: ImportDeclaration): boolean;
	hasSpecificName (name: string, importDeclaration: ImportDeclaration): boolean;
	hasNamespaceImport (importDeclaration: ImportDeclaration): boolean;
	hasNamespaceImportWithName (namespaceName: string, importDeclaration: ImportDeclaration): boolean;
}