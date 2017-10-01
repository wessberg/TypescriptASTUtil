import {IClassHelper} from "./i-class-helper";
import {ClassDeclaration, ClassElement, ClassExpression, ConstructorDeclaration, createNodeArray, ExpressionWithTypeArguments, isAccessor, isConstructorDeclaration, isGetAccessorDeclaration, isIdentifier, isMethodDeclaration, isPropertyDeclaration, isSetAccessorDeclaration, isStringLiteral, Node, NodeArray, SourceFile, SyntaxKind} from "typescript";
import {ITypescriptASTUtil} from "../../typescript-ast-util/i-typescript-ast-util";

/**
 * A class for working with classes
 */
export class ClassHelper implements IClassHelper {
	constructor (private astUtil: ITypescriptASTUtil) {
	}

	/**
	 * Gets all ClassDeclarations and ClassExpressions for the provided SourceFile
	 * @param {SourceFile} sourceFile
	 * @returns {NodeArray<ClassDeclaration|ClassExpression|ClassExpression>}
	 */
	public getClasses (sourceFile: SourceFile): NodeArray<ClassDeclaration|ClassExpression|ClassExpression> {
		return this.astUtil.getFilteredStatements(sourceFile.statements, [SyntaxKind.ClassDeclaration, SyntaxKind.ClassExpression]);
	}

	/**
	 * Gets the name of the provided class declaration, if it has any
	 * @param {ClassDeclaration|ClassExpression} classDeclaration
	 * @returns {string}
	 */
	public getNameOfClass (classDeclaration: ClassDeclaration|ClassExpression): string|undefined {
		return classDeclaration.name == null ? undefined : classDeclaration.name.text;
	}

	/**
	 * Gets the extended class of the provided class, if it has any
	 * @param {ClassDeclaration|ClassExpression} classDeclaration
	 * @returns {ClassDeclaration|ClassExpression}
	 */
	public getExtendedClass (classDeclaration: ClassDeclaration|ClassExpression): ExpressionWithTypeArguments|undefined {
		// If no heritage clauses exist, the class doesn't extend anything
		if (classDeclaration.heritageClauses == null) return undefined;

		const extendsClass = classDeclaration.heritageClauses.find(clause => clause.token === SyntaxKind.ExtendsKeyword);

		// If none of the clauses were an 'extends' clause, the class doesn't extend anything
		if (extendsClass == null) return undefined;

		// Return the first extended class expression (there can only be 1)
		return extendsClass.types[0];
	}

	/**
	 * Gets all implemented interfaces of the provided ClassDeclaration|ClassExpression
	 * @param {ClassDeclaration|ClassExpression} classDeclaration
	 * @returns {NodeArray<ExpressionWithTypeArguments>}
	 */
	public getImplements (classDeclaration: ClassDeclaration|ClassExpression): NodeArray<ExpressionWithTypeArguments> {
		// If no heritage clauses exist, the class doesn't extend anything
		if (classDeclaration.heritageClauses == null) return createNodeArray();

		const extendsClass = classDeclaration.heritageClauses.find(clause => clause.token === SyntaxKind.ImplementsKeyword);

		// If none of the clauses were an 'extends' clause, the class doesn't extend anything
		if (extendsClass == null) return createNodeArray();

		// Return the first extended class expression (there can only be 1)
		return extendsClass.types;
	}

	/**
	 * Gets the constructor of the provided ClassDeclaration|ClassExpression
	 * @param {ClassDeclaration|ClassExpression} classDeclaration
	 * @returns {ConstructorDeclaration}
	 */
	public getConstructor (classDeclaration: ClassDeclaration|ClassExpression): ConstructorDeclaration|undefined {
		return <ConstructorDeclaration|undefined> classDeclaration.members.find(member => isConstructorDeclaration(member));
	}

	/**
	 * Gets the member of the class with the provided name. In case there are multiple (such as will
	 * be the case with getters and setters, the first matched one will be returned).
	 * @param {string} name
	 * @param {ClassDeclaration|ClassExpression} classDeclaration
	 * @returns {ClassElement}
	 */
	public getMemberWithName (name: string, classDeclaration: ClassDeclaration|ClassExpression): ClassElement|undefined {
		return classDeclaration.members.find(member => {
			if (isConstructorDeclaration(member)) {
				return name === "constructor";
			}

			else if (isMethodDeclaration(member) || isPropertyDeclaration(member) || isAccessor(member)) {
				return ((isIdentifier(member.name) || isStringLiteral(member.name)) && member.name.text === name && !this.hasModifierWithKind(SyntaxKind.StaticKeyword, member));
			}
			return false;
		});
	}

	/**
	 * Gets the static member of the class with the provided name. In case there are multiple (such as will
	 * be the case with getters and setters, the first matched one will be returned).
	 * @param {string} name
	 * @param {ClassDeclaration|ClassExpression} classDeclaration
	 * @returns {ClassElement}
	 */
	public getStaticMemberWithName (name: string, classDeclaration: ClassDeclaration|ClassExpression): ClassElement|undefined {
		return classDeclaration.members.find(member => {
			if (isConstructorDeclaration(member)) {
				return name === "constructor";
			}

			else if (isMethodDeclaration(member) || isPropertyDeclaration(member) || isAccessor(member)) {
				return ((isIdentifier(member.name) || isStringLiteral(member.name)) && member.name.text === name && this.hasModifierWithKind(SyntaxKind.StaticKeyword, member));
			}
			return false;
		});
	}

	/**
	 * Returns true if the class doesn't extend any other class
	 * @param {ClassDeclaration|ClassExpression} classDeclaration
	 * @returns {boolean}
	 */
	public isBaseClass (classDeclaration: ClassDeclaration|ClassExpression): boolean {
		return this.getExtendedClass(classDeclaration) == null;
	}

	/**
	 * Returns true if the provided class extends a class with the provided name
	 * @param {string} name
	 * @param {ts.ClassDeclaration|ClassExpression} classDeclaration
	 * @returns {boolean}
	 */
	public doesExtendClassWithName (name: string, classDeclaration: ClassDeclaration|ClassExpression): boolean {
		const extendedClass = this.getExtendedClass(classDeclaration);
		// If the class doesn't extend anything, return false.
		if (extendedClass == null) return false;

		// It does if the expression is an identifier with text equal to the provided name
		return isIdentifier(extendedClass.expression) && extendedClass.expression.text === name;
	}

	/**
	 * Returns true if the provided class implements an interface with a name equal to the provided one
	 * @param {string} name
	 * @param {ts.ClassDeclaration|ClassExpression} classDeclaration
	 * @returns {boolean}
	 */
	public doesImplementInterfaceWithName (name: string, classDeclaration: ClassDeclaration|ClassExpression): boolean {
		const implementedInterfaces = this.getImplements(classDeclaration);

		// It does if any of the implemented interfaces is an identifier with a name equal to the provided one
		return implementedInterfaces.some(implementedInterface => isIdentifier(implementedInterface.expression) && implementedInterface.expression.text === name);
	}

	/**
	 * Returns true if the provided class has a constructor
	 * @param {ts.ClassDeclaration|ClassExpression} classDeclaration
	 * @returns {boolean}
	 */
	public hasConstructor (classDeclaration: ClassDeclaration|ClassExpression): boolean {
		return this.getConstructor(classDeclaration) != null;
	}

	/**
	 * Returns true if the provided class has a member with a name equal to the provided one
	 * @param {string} name
	 * @param {ClassDeclaration|ClassExpression} classDeclaration
	 * @returns {boolean}
	 */
	public hasMemberWithName (name: string, classDeclaration: ClassDeclaration|ClassExpression): boolean {
		return this.getMemberWithName(name, classDeclaration) != null;
	}

	/**
	 * Returns true if the provided class has a static member with a name equal to the provided one
	 * @param {string} name
	 * @param {ClassDeclaration|ClassExpression} classDeclaration
	 * @returns {boolean}
	 */
	public hasStaticMemberWithName (name: string, classDeclaration: ClassDeclaration|ClassExpression): boolean {
		return this.getStaticMemberWithName(name, classDeclaration) != null;
	}

	/**
	 * Returns true if the provided class has a getter with a name equal to the provided one
	 * @param {string} name
	 * @param {ClassDeclaration|ClassExpression} classDeclaration
	 * @returns {boolean}
	 */
	public hasGetterWithName (name: string, classDeclaration: ClassDeclaration|ClassExpression): boolean {
		return classDeclaration.members.find(member => isGetAccessorDeclaration(member) && (isIdentifier(member.name) || isStringLiteral(member.name)) && member.name.text === name) != null;
	}

	/**
	 * Returns true if the provided class has a setter with a name equal to the provided one
	 * @param {string} name
	 * @param {ClassDeclaration|ClassExpression} classDeclaration
	 * @returns {boolean}
	 */
	public hasSetterWithName (name: string, classDeclaration: ClassDeclaration|ClassExpression): boolean {
		return classDeclaration.members.find(member => isSetAccessorDeclaration(member) && (isIdentifier(member.name) || isStringLiteral(member.name)) && member.name.text === name) != null;
	}

	/**
	 * Returns true if the class has a modifier with the provided kind
	 * @param {ts.SyntaxKind} kind
	 * @param {Node} classMember
	 * @returns {boolean}
	 */
	private hasModifierWithKind (kind: SyntaxKind, classMember: Node): boolean {
		if (classMember.modifiers == null) return false;
		return classMember.modifiers.find(modifier => modifier.kind === kind) != null;
	}
}