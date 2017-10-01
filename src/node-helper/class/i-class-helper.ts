import {ClassDeclaration, ClassExpression, ClassElement, ConstructorDeclaration, ExpressionWithTypeArguments, NodeArray, SourceFile} from "typescript";

export interface IClassHelper {
	getClasses (sourceFile: SourceFile): NodeArray<ClassDeclaration|ClassExpression>;
	getNameOfClass (classDeclaration: ClassDeclaration|ClassExpression): string|undefined;
	getExtendedClass (classDeclaration: ClassDeclaration|ClassExpression): ExpressionWithTypeArguments|undefined;
	getImplements (classDeclaration: ClassDeclaration|ClassExpression): NodeArray<ExpressionWithTypeArguments>;
	getConstructor (classDeclaration: ClassDeclaration|ClassExpression): ConstructorDeclaration|undefined;
	getMemberWithName (name: string, classDeclaration: ClassDeclaration|ClassExpression): ClassElement|undefined;
	getStaticMemberWithName (name: string, classDeclaration: ClassDeclaration|ClassExpression): ClassElement|undefined;

	isBaseClass (classDeclaration: ClassDeclaration|ClassExpression): boolean;
	doesExtendClassWithName (name: string, classDeclaration: ClassDeclaration|ClassExpression): boolean;
	doesImplementInterfaceWithName (name: string, classDeclaration: ClassDeclaration|ClassExpression): boolean;
	hasConstructor (classDeclaration: ClassDeclaration|ClassExpression): boolean;
	hasMemberWithName (name: string, classDeclaration: ClassDeclaration|ClassExpression): boolean;
	hasStaticMemberWithName (name: string, classDeclaration: ClassDeclaration|ClassExpression): boolean;
	hasGetterWithName (name: string, classDeclaration: ClassDeclaration|ClassExpression): boolean;
	hasSetterWithName (name: string, classDeclaration: ClassDeclaration|ClassExpression): boolean;
}