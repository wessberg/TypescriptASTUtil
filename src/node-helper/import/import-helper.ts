import {Identifier, ImportDeclaration, ImportSpecifier, isNamedImports, isNamespaceImport, NamedImportBindings, NamedImports, NamespaceImport} from "typescript";
import {IImportHelper} from "./i-import-helper";

/**
 * A class that helps with working with ImportDeclarations through the Typescript ASt
 */
export class ImportHelper implements IImportHelper {

	/**
	 * Returns the default binding name for an ImportDeclaration (such as 'import name from "something"' where the identifier for 'name' would be returned)
	 * @param {ImportDeclaration} importDeclaration
	 * @returns {Identifier}
	 */
	public getNameForImportDeclaration (importDeclaration: ImportDeclaration): Identifier|undefined {
		if (importDeclaration.importClause == null) return;
		return importDeclaration.importClause == null ? undefined : importDeclaration.importClause.name;
	}

	/**
	 * Returns true if the provided ImportDeclaration has any named imports (e.g. at least has '{}' brackets)
	 * @param {ImportDeclaration} importDeclaration
	 * @returns {boolean}
	 */
	public hasNamedImports (importDeclaration: ImportDeclaration): boolean {
		return this.getNamedImportsForImportDeclaration(importDeclaration) != null;
	}

	/**
	 * Returns true if the provided ImportDeclaration already imports the provided named import.
	 * A named import is anything in between "{" and "}" in an import.
	 * @param namedImport
	 * @param {ImportDeclaration} importDeclaration
	 * @returns {boolean}
	 */
	public hasNamedImport (namedImport: { name: string; propertyName: string|null }, importDeclaration: ImportDeclaration): boolean {
		const namedImports = this.getNamedImportsForImportDeclaration(importDeclaration);
		if (namedImports == null) return false;
		return namedImports.elements.find(element => this.matchesNamedImport(namedImport, element)) != null;
	}

	/**
	 * Returns true if the provided ImportDeclaration has a namespace import
	 * @param {ts.ImportDeclaration} importDeclaration
	 * @returns {boolean}
	 */
	public hasNamespaceImport (importDeclaration: ImportDeclaration): boolean {
		return this.getNamespaceImportForImportDeclaration(importDeclaration) != null;
	}

	/**
	 * Returns true if the provided ImportDeclaration has a namespace import with the provided name
	 * @param {string} namespaceName
	 * @param {ImportDeclaration} importDeclaration
	 * @returns {boolean}
	 */
	public hasNamespaceImportWithName (namespaceName: string, importDeclaration: ImportDeclaration): boolean {
		const namespace = this.getNamespaceImportForImportDeclaration(importDeclaration);
		if (namespace == null) return false;

		return namespace.name.text === namespaceName;
	}

	/**
	 * Returns true if the import declaration has a name (e.g. a default import)
	 * @param {ImportDeclaration} importDeclaration
	 * @returns {boolean}
	 */
	public hasName (importDeclaration: ImportDeclaration): boolean {
		return this.getNameForImportDeclaration(importDeclaration) != null;
	}

	/**
	 * Returns true if the import declaration has a name (e.g. a default import)
	 * and it is identical with the provided one
	 * @param {string} name
	 * @param {ts.ImportDeclaration} importDeclaration
	 * @returns {boolean}
	 */
	public hasSpecificName (name: string, importDeclaration: ImportDeclaration): boolean {
		const importName = this.getNameForImportDeclaration(importDeclaration);
		return importName != null && importName.text === name;
	}

	/**
	 * Takes all NamedImports for an ImportDeclaration.
	 * This is all named imports that isn't namespace imports (such as 'import {A, B, C} from "something')
	 * @param {ImportDeclaration} importDeclaration
	 * @returns {NamedImports?}
	 */
	public getNamedImportsForImportDeclaration (importDeclaration: ImportDeclaration): NamedImports|undefined {
		// Return undefined if
		// 1. The import has no importClause (in which case it just imports the path)
		// 2. if it doesn't have any named bindings
		// 3. if the named bindings isn't named imports (in which case it is a namespace import)
		if (
			importDeclaration.importClause == null ||
			importDeclaration.importClause.namedBindings == null ||
			!isNamedImports(importDeclaration.importClause.namedBindings)
		) return;

		return importDeclaration.importClause.namedBindings;
	}

	/**
	 * Takes the namespace import for an ImportDeclaration, if it has any
	 * @param {ImportDeclaration} importDeclaration
	 * @returns {NamespaceImport}
	 */
	public getNamespaceImportForImportDeclaration (importDeclaration: ImportDeclaration): NamespaceImport|undefined {
		// Return undefined if
		// 1. The import has no importClause (in which case it just imports the path)
		// 2. if it doesn't have any named bindings
		// 3. if the named bindings isn't a namespace import (in which case it is named bindings such as 'import {A, B, C} from "something"')
		if (
			importDeclaration.importClause == null ||
			importDeclaration.importClause.namedBindings == null ||
			!isNamespaceImport(importDeclaration.importClause.namedBindings)
		) return;

		return importDeclaration.importClause.namedBindings;
	}

	/**
	 * Takes the named imports or the namespace import for an ImportDeclaration, if it has any
	 * @param {ImportDeclaration} importDeclaration
	 * @returns {NamedImportBindings}
	 */
	public getNamedImportBindingsForImportDeclaration (importDeclaration: ImportDeclaration): NamedImportBindings|undefined {
		// Return undefined if
		// 1. The import has no importClause (in which case it just imports the path)
		// 2. if it doesn't have any named bindings
		if (
			importDeclaration.importClause == null ||
			importDeclaration.importClause.namedBindings == null
		) return;

		return importDeclaration.importClause.namedBindings;
	}

	/**
	 * Returns true if the namedImport matches the provided ImportSpecifier
	 * @param namedImport
	 * @param {ImportSpecifier} specifier
	 * @returns {boolean}
	 */
	protected matchesNamedImport (namedImport: { name: string; propertyName: string|null }, specifier: ImportSpecifier): boolean {
		return specifier.name.text === namedImport.name && (specifier.propertyName == null || specifier.propertyName.text === namedImport.propertyName);
	}

}