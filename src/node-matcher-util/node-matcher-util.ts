import {INodeMatcherUtil} from "./i-node-matcher-util";
import {AccessorDeclaration, AmdDependency, ArrayBindingElement, ArrayBindingPattern, ArrayLiteralExpression, ArrayTypeNode, ArrowFunction, AsExpression, AsteriskToken, AtToken, AwaitExpression, AwaitKeywordToken, BinaryExpression, BinaryOperatorToken, BindingElement, BindingName, BindingPattern, Block, BooleanLiteral, BreakStatement, CallExpression, CallSignatureDeclaration, CaseBlock, CaseClause, CaseOrDefaultClause, CatchClause, ClassDeclaration, ClassElement, ClassExpression, ClassLikeDeclaration, ColonToken, ComputedPropertyName, ConciseBody, ConditionalExpression, ConstructorDeclaration, ConstructorTypeNode, ConstructSignatureDeclaration, ContinueStatement, DebuggerStatement, Declaration, DeclarationName, DeclarationStatement, Decorator, DefaultClause, DeleteExpression, DoStatement, DotDotDotToken, ElementAccessExpression, EmptyStatement, EntityName, EnumDeclaration, EnumMember, EqualsGreaterThanToken, ExportAssignment, ExportDeclaration, ExportSpecifier, Expression, ExpressionStatement, ExpressionWithTypeArguments, ExternalModuleReference, FileReference, ForInitializer, ForInStatement, ForOfStatement, ForStatement, FunctionBody, FunctionDeclaration, FunctionExpression, FunctionLikeDeclarationBase, FunctionOrConstructorTypeNode, FunctionTypeNode, GetAccessorDeclaration, HeritageClause, Identifier, IfStatement, ImportClause, ImportDeclaration, ImportEqualsDeclaration, ImportExpression, ImportSpecifier, IndexedAccessTypeNode, IndexSignatureDeclaration, InterfaceDeclaration, IntersectionTypeNode, isAccessor, isArrayBindingPattern, isArrayLiteralExpression, isArrayTypeNode, isArrowFunction, isAsExpression, isAwaitExpression, isBinaryExpression, isBindingElement, isBindingName, isBlock, isBreakStatement, isCallExpression, isCallSignatureDeclaration, isCaseBlock, isCaseClause, isCaseOrDefaultClause, isCatchClause, isClassDeclaration, isClassExpression, isComputedPropertyName, isConditionalExpression, isConstructorDeclaration, isConstructorTypeNode, isConstructSignatureDeclaration, isContinueStatement, isDebuggerStatement, isDecorator, isDefaultClause, isDeleteExpression, isDoStatement, isElementAccessExpression, isEmptyStatement, isEntityName, isEnumDeclaration, isEnumMember, isExportAssignment, isExportDeclaration, isExportSpecifier, isExpressionStatement, isExpressionWithTypeArguments, isExternalModuleReference, isForInStatement, isForOfStatement, isForStatement, isFunctionDeclaration, isFunctionExpression, isFunctionOrConstructorTypeNode, isFunctionTypeNode, isGetAccessorDeclaration, isHeritageClause, isIdentifier, isIfStatement, isImportClause, isImportDeclaration, isImportEqualsDeclaration, isImportSpecifier, isIndexedAccessTypeNode, isIndexSignatureDeclaration, isInterfaceDeclaration, isIntersectionTypeNode, isJSDoc, isJSDocAllType, isJSDocAugmentsTag, isJSDocFunctionType, isJSDocNonNullableType, isJSDocNullableType, isJSDocOptionalType, isJSDocParameterTag, isJSDocPropertyTag, isJSDocReturnTag, isJSDocTemplateTag, isJSDocTypedefTag, isJSDocTypeExpression, isJSDocTypeLiteral, isJSDocTypeTag, isJSDocUnknownType, isJSDocVariadicType, isJsxAttribute, isJsxAttributes, isJsxClosingElement, isJsxElement, isJsxExpression, isJsxOpeningElement, isJsxSelfClosingElement, isJsxSpreadAttribute, isJsxText, isLabeledStatement, isLiteralTypeNode, isMappedTypeNode, isMetaProperty, isMethodDeclaration, isMethodSignature, isMissingDeclaration, isModuleBlock, isModuleDeclaration, isNamedExports, isNamedImports, isNamespaceExportDeclaration, isNamespaceImport, isNewExpression, isNonNullExpression, isNoSubstitutionTemplateLiteral, isNumericLiteral, isObjectBindingPattern, isObjectLiteralElementLike, isObjectLiteralExpression, isOmittedExpression, isParameter, isParenthesizedExpression, isParenthesizedTypeNode, isPostfixUnaryExpression, isPrefixUnaryExpression, isPropertyAccessExpression, isPropertyAssignment, isPropertyDeclaration, isPropertyName, isPropertySignature, isQualifiedName, isRegularExpressionLiteral, isReturnStatement, isSemicolonClassElement, isSetAccessorDeclaration, isShorthandPropertyAssignment, isSpreadAssignment, isSpreadElement, isStringLiteral, isSwitchStatement, isTaggedTemplateExpression, isTemplateExpression, isTemplateHead, isTemplateLiteral, isTemplateMiddle, isTemplateSpan, isTemplateTail, isThisTypeNode, isThrowStatement, isToken, isTryStatement, isTupleTypeNode, isTypeAliasDeclaration, isTypeAssertion, isTypeElement, isTypeLiteralNode, isTypeOfExpression, isTypeOperatorNode, isTypeParameterDeclaration, isTypePredicateNode, isTypeQueryNode, isTypeReferenceNode, isUnionTypeNode, isVariableDeclaration, isVariableDeclarationList, isVariableStatement, isVoidExpression, isWhileStatement, isWithStatement, isYieldExpression, IterationStatement, JSDoc, JSDocAllType, JSDocAugmentsTag, JSDocClassTag, JSDocFunctionType, JSDocNamespaceBody, JSDocNamespaceDeclaration, JSDocNonNullableType, JSDocNullableType, JSDocOptionalType, JSDocParameterTag, JSDocPropertyLikeTag, JSDocPropertyTag, JSDocReturnTag, JSDocTag, JSDocTemplateTag, JSDocType, JSDocTypedefTag, JSDocTypeExpression, JSDocTypeLiteral, JSDocTypeTag, JSDocUnknownTag, JSDocUnknownType, JSDocVariadicType, JsxAttribute, JsxAttributes, JsxChild, JsxClosingElement, JsxElement, JsxExpression, JsxOpeningElement, JsxSelfClosingElement, JsxSpreadAttribute, JsxTagNameExpression, JsxText, KeywordTypeNode, LabeledStatement, LeftHandSideExpression, LiteralExpression, LiteralLikeNode, LiteralTypeNode, MappedTypeNode, MemberExpression, MetaProperty, MethodDeclaration, MethodSignature, MissingDeclaration, Modifier, ModuleBlock, ModuleDeclaration, ModuleName, ModuleReference, NamedDeclaration, NamedExports, NamedImportBindings, NamedImports, NamespaceBody, NamespaceDeclaration, NamespaceExportDeclaration, NamespaceImport, NewExpression, Node, NodeArray, NonNullExpression, NoSubstitutionTemplateLiteral, NullLiteral, NumericLiteral, ObjectBindingPattern, ObjectLiteralElement, ObjectLiteralElementLike, ObjectLiteralExpression, ObjectLiteralExpressionBase, OmittedExpression, ParameterDeclaration, ParenthesizedExpression, ParenthesizedTypeNode, PartiallyEmittedExpression, PostfixUnaryExpression, PrefixUnaryExpression, PrimaryExpression, PropertyAccessExpression, PropertyAssignment, PropertyDeclaration, PropertyName, PropertySignature, QualifiedName, QuestionToken, ReadonlyToken, RegularExpressionLiteral, ReturnStatement, SemicolonClassElement, SetAccessorDeclaration, ShorthandPropertyAssignment, SignatureDeclaration, SpreadAssignment, SpreadElement, Statement, StringLiteral, SuperExpression, SwitchStatement, SyntaxKind, TaggedTemplateExpression, TemplateExpression, TemplateHead, TemplateLiteral, TemplateMiddle, TemplateSpan, TemplateTail, TextRange, ThisExpression, ThisTypeNode, ThrowStatement, Token, TryStatement, TupleTypeNode, TypeAliasDeclaration, TypeAssertion, TypeElement, TypeLiteralNode, TypeNode, TypeOfExpression, TypeOperatorNode, TypeParameterDeclaration, TypePredicateNode, TypeQueryNode, TypeReferenceNode, UnaryExpression, UnionTypeNode, UpdateExpression, VariableDeclaration, VariableDeclarationList, VariableStatement, VoidExpression, WhileStatement, WithStatement, YieldExpression} from "typescript";
import {NodeMatcherItem} from "./node-matcher-item";
import {isAmdDependency} from "../predicate/is-amd-dependency";
import {isFileReference} from "../predicate/is-file-reference";
import {isTypescriptNode} from "../predicate/is-node";
import {isDeclarationName} from "../predicate/is-declaration-name";
import {isBindingPattern} from "../predicate/is-binding-pattern";
import {isArrayBindingElement} from "../predicate/is-array-binding-element";
import {isKeywordTypeNode} from "../predicate/is-keyword-type-node";
import {isPartiallyEmittedExpression} from "../predicate/is-partially-emitted-expression";
import {isNullLiteral} from "../predicate/is-null-literal";
import {isBooleanLiteral} from "../predicate/is-boolean-literal";
import {isThisExpression} from "../predicate/is-this-expression";
import {isSuperExpression} from "../predicate/is-super-expression";
import {isImportExpression} from "../predicate/is-import-expression";
import {isNamespaceDeclaration} from "../predicate/is-namespace-declaration";
import {isJSDocNamespaceDeclaration} from "../predicate/is-jsdoc-namespace-declaration";
import {isNamespaceBody} from "../predicate/is-namespace-body";
import {isJSDocNamespaceBody} from "../predicate/is-jsdoc-namespace-body";
import {isJSDocClassTag, isJSDocUnknownTag} from "../";

/**
 * A class that helps with matching nodes
 */
export class NodeMatcherUtil implements INodeMatcherUtil {

	/**
	 * Matches the provided node with any of the nodes within the provided Array
	 * @template T
	 * @param {T} node
	 * @param {Iterable<T>|NodeArray<Node>} matchWithin
	 * @returns {T?}
	 */
	public match<T extends NodeMatcherItem> (node: T, matchWithin: Iterable<T>|NodeArray<Node>): T|undefined {
		// If the array already includes the node, return it
		const normalizedMatchWithin = [...matchWithin];
		if (normalizedMatchWithin.includes(node)) return node;

		// Find the closest match
		return <T|undefined> normalizedMatchWithin.find(matchNode => this.matchNodeMatcherItemWithNodeMatcherItem(node, matchNode));
	}

	/**
	 * Matches the provided node with any of the nodes within the provided Array and return its' index
	 * @template T
	 * @param {T} node
	 * @param {Iterable<T>|NodeArray<Node>} matchWithin
	 * @returns {number}
	 */
	public matchIndex<T extends NodeMatcherItem> (node: T, matchWithin: Iterable<T>|NodeArray<Node>): number {
		// If the array already includes the node, return its index
		const normalizedMatchWithin = [...matchWithin];
		const existingIndex = normalizedMatchWithin.indexOf(node);
		if (existingIndex >= 0) return existingIndex;

		// Find the closest match
		return normalizedMatchWithin.findIndex(matchNode => this.matchNodeMatcherItemWithNodeMatcherItem(node, matchNode));
	}

	/**
	 * Matches the provided NodeMatcherItem with the provided NodeMatcherItem
	 * @param {T} node
	 * @param {T} matchNode
	 * @returns {boolean}
	 */
	private matchNodeMatcherItemWithNodeMatcherItem<T extends NodeMatcherItem> (node: T, matchNode: T|Node): boolean {
		if (isAmdDependency(matchNode)) {
			return this.matchNodeMatcherItemWithAmdDependency(node, matchNode);
		}

		else if (isFileReference(matchNode)) {
			return this.matchNodeMatcherItemWithFileReference(node, matchNode);
		}

		else if (!isTypescriptNode(node) || !isTypescriptNode(matchNode)) {
			return false;
		}

		else {
			return this.matchNodeWithNode(node, matchNode);
		}
	}

	/**
	 * Matches the provided NodeMatcherItem with the provided AmdDependency
	 * @param {NodeMatcherItem} node
	 * @param {AmdDependency} matchNode
	 * @returns {boolean}
	 */
	private matchNodeMatcherItemWithAmdDependency (node: NodeMatcherItem, matchNode: AmdDependency): boolean {
		// If the node is not an AmdDependency, return false
		if (!isAmdDependency(node)) return false;
		const pathMatch = node.path === matchNode.path;
		const nameMatch = node.name === matchNode.name;

		return pathMatch && nameMatch;
	}

	/**
	 * Matches the provided NodeMatcherItem with the provided FileReference
	 * @param {NodeMatcherItem} node
	 * @param {FileReference} matchNode
	 * @returns {boolean}
	 */
	private matchNodeMatcherItemWithFileReference (node: NodeMatcherItem, matchNode: FileReference): boolean {
		// If the node is not an FileReference, return false
		if (!isFileReference(node)) return false;

		return node.fileName === matchNode.fileName;
	}

	/**
	 * Matches the provided node with the provided Node
	 * @param {T} node
	 * @param {Node} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithNode<T extends Node> (node: T, matchNode: Node): boolean {
		if (isIdentifier(matchNode)) {
			return this.matchNodeWithIdentifier(node, matchNode);
		}
		else if (isQualifiedName(matchNode)) {
			return this.matchNodeWithQualifiedName(node, matchNode);
		}

		else if (isEntityName(matchNode)) {
			return this.matchNodeWithEntityName(node, matchNode);
		}

		else if (isPropertyName(matchNode)) {
			return this.matchNodeWithPropertyName(node, matchNode);
		}

		else if (isStringLiteral(matchNode)) {
			return this.matchNodeWithStringLiteral(node, matchNode);
		}

		else if (isNumericLiteral(matchNode)) {
			return this.matchNodeWithNumericLiteral(node, matchNode);
		}

		else if (isComputedPropertyName(matchNode)) {
			return this.matchNodeWithComputedPropertyName(node, matchNode);
		}

		else if (isDeclarationName(matchNode)) {
			return this.matchNodeWithDeclarationName(node, matchNode);
		}

		else if (isBindingPattern(matchNode)) {
			return this.matchNodeWithBindingPattern(node, matchNode);
		}

		else if (isArrayBindingPattern(matchNode)) {
			return this.matchNodeWithArrayBindingPattern(node, matchNode);
		}

		else if (isObjectBindingPattern(matchNode)) {
			return this.matchNodeWithObjectBindingPattern(node, matchNode);
		}

		else if (isArrayBindingElement(matchNode)) {
			return this.matchNodeWithArrayBindingElement(node, matchNode);
		}

		else if (isBindingElement(matchNode)) {
			return this.matchNodeWithBindingElement(node, matchNode);
		}

		else if (isOmittedExpression(matchNode)) {
			return this.matchNodeWithOmittedExpression(node, matchNode);
		}

		else if (isBindingName(matchNode)) {
			return this.matchNodeWithBindingName(node, matchNode);
		}

		else if (isDecorator(matchNode)) {
			return this.matchNodeWithDecorator(node, matchNode);
		}

		else if (isKeywordTypeNode(matchNode)) {
			return this.matchNodeWithKeywordTypeNode(node, matchNode);
		}

		else if (isThisTypeNode(matchNode)) {
			return this.matchNodeWithThisTypeNode(node, matchNode);
		}

		else if (isFunctionOrConstructorTypeNode(matchNode)) {
			return this.matchNodeWithFunctionOrConstructorTypeNode(node, matchNode);
		}

		else if (isFunctionTypeNode(matchNode)) {
			return this.matchNodeWithFunctionTypeNode(node, matchNode);
		}

		else if (isConstructorTypeNode(matchNode)) {
			return this.matchNodeWithConstructorTypeNode(node, matchNode);
		}

		else if (isParameter(matchNode)) {
			return this.matchNodeWithParameterDeclaration(node, matchNode);
		}

		else if (isTypeParameterDeclaration(matchNode)) {
			return this.matchNodeWithTypeParameterDeclaration(node, matchNode);
		}

		else if (isToken(matchNode)) {
			return this.matchNodeWithToken(node, matchNode);
		}

		else if (isCallSignatureDeclaration(matchNode)) {
			return this.matchNodeWithCallSignatureDeclaration(node, matchNode);
		}

		else if (isConstructSignatureDeclaration(matchNode)) {
			return this.matchNodeWithConstructSignatureDeclaration(node, matchNode);
		}

		else if (isVariableDeclaration(matchNode)) {
			return this.matchNodeWithVariableDeclaration(node, matchNode);
		}

		else if (isVariableDeclarationList(matchNode)) {
			return this.matchNodeWithVariableDeclarationList(node, matchNode);
		}

		else if (isPropertySignature(matchNode)) {
			return this.matchNodeWithPropertySignature(node, matchNode);
		}

		else if (isPropertyDeclaration(matchNode)) {
			return this.matchNodeWithPropertyDeclaration(node, matchNode);
		}

		else if (isPropertyAssignment(matchNode)) {
			return this.matchNodeWithPropertyAssignment(node, matchNode);
		}

		else if (isShorthandPropertyAssignment(matchNode)) {
			return this.matchNodeWithShorthandPropertyAssignment(node, matchNode);
		}

		else if (isSpreadAssignment(matchNode)) {
			return this.matchNodeWithSpreadAssignment(node, matchNode);
		}

		else if (isFunctionDeclaration(matchNode)) {
			return this.matchNodeWithFunctionDeclaration(node, matchNode);
		}

		else if (isBlock(matchNode)) {
			return this.matchNodeWithBlock(node, matchNode);
		}

		else if (isMethodSignature(matchNode)) {
			return this.matchNodeWithMethodSignature(node, matchNode);
		}

		else if (isMethodDeclaration(matchNode)) {
			return this.matchNodeWithMethodDeclaration(node, matchNode);
		}

		else if (isConstructorDeclaration(matchNode)) {
			return this.matchNodeWithConstructorDeclaration(node, matchNode);
		}

		else if (isSemicolonClassElement(matchNode)) {
			return this.matchNodeWithSemiColonClassElement(node, matchNode);
		}

		else if (isGetAccessorDeclaration(matchNode)) {
			return this.matchNodeWithGetAccessorDeclaration(node, matchNode);
		}

		else if (isSetAccessorDeclaration(matchNode)) {
			return this.matchNodeWithSetAccessorDeclaration(node, matchNode);
		}

		else if (isAccessor(matchNode)) {
			return this.matchNodeWithAccessorDeclaration(node, matchNode);
		}

		else if (isIndexSignatureDeclaration(matchNode)) {
			return this.matchNodeWithIndexSignatureDeclaration(node, matchNode);
		}

		else if (isTypeReferenceNode(matchNode)) {
			return this.matchNodeWithTypeReferenceNode(node, matchNode);
		}

		else if (isTypePredicateNode(matchNode)) {
			return this.matchNodeWithTypePredicateNode(node, matchNode);
		}

		else if (isTypeQueryNode(matchNode)) {
			return this.matchNodeWithTypeQueryNode(node, matchNode);
		}

		else if (isTypeElement(matchNode)) {
			return this.matchNodeWithTypeElement(node, matchNode);
		}

		else if (isTypeLiteralNode(matchNode)) {
			return this.matchNodeWithTypeLiteralNode(node, matchNode);
		}

		else if (isArrayTypeNode(matchNode)) {
			return this.matchNodeWithArrayTypeNode(node, matchNode);
		}

		else if (isTupleTypeNode(matchNode)) {
			return this.matchNodeWithTupleTypeNode(node, matchNode);
		}

		else if (isUnionTypeNode(matchNode)) {
			return this.matchNodeWithUnionTypeNode(node, matchNode);
		}

		else if (isIntersectionTypeNode(matchNode)) {
			return this.matchNodeWithIntersectionTypeNode(node, matchNode);
		}

		else if (isParenthesizedTypeNode(matchNode)) {
			return this.matchNodeWithParenthesizedTypeNode(node, matchNode);
		}

		else if (isTypeOperatorNode(matchNode)) {
			return this.matchNodeWithTypeOperatorNode(node, matchNode);
		}

		else if (isIndexedAccessTypeNode(matchNode)) {
			return this.matchNodeWithIndexedAccessTypeNode(node, matchNode);
		}

		else if (isMappedTypeNode(matchNode)) {
			return this.matchNodeWithMappedTypeNode(node, matchNode);
		}

		else if (isLiteralTypeNode(matchNode)) {
			return this.matchNodeWithLiteralTypeNode(node, matchNode);
		}

		else if (isPartiallyEmittedExpression(matchNode)) {
			return this.matchNodeWithPartiallyEmittedExpression(node, matchNode);
		}

		else if (isPrefixUnaryExpression(matchNode)) {
			return this.matchNodeWithPrefixUnaryExpression(node, matchNode);
		}

		else if (isPostfixUnaryExpression(matchNode)) {
			return this.matchNodeWithPostfixUnaryExpression(node, matchNode);
		}

		else if (isNullLiteral(matchNode)) {
			return this.matchNodeWithNullLiteral(node, matchNode);
		}

		else if (isBooleanLiteral(matchNode)) {
			return this.matchNodeWithBooleanLiteral(node, matchNode);
		}

		else if (isThisExpression(matchNode)) {
			return this.matchNodeWithThisExpression(node, matchNode);
		}

		else if (isSuperExpression(matchNode)) {
			return this.matchNodeWithSuperExpression(node, matchNode);
		}

		else if (isImportExpression(matchNode)) {
			return this.matchNodeWithImportExpression(node, matchNode);
		}

		else if (isDeleteExpression(matchNode)) {
			return this.matchNodeWithDeleteExpression(node, matchNode);
		}

		else if (isTypeOfExpression(matchNode)) {
			return this.matchNodeWithTypeOfExpression(node, matchNode);
		}

		else if (isVoidExpression(matchNode)) {
			return this.matchNodeWithVoidExpression(node, matchNode);
		}

		else if (isAwaitExpression(matchNode)) {
			return this.matchNodeWithAwaitExpression(node, matchNode);
		}

		else if (isYieldExpression(matchNode)) {
			return this.matchNodeWithYieldExpression(node, matchNode);
		}

		else if (isBinaryExpression(matchNode)) {
			return this.matchNodeWithBinaryExpression(node, matchNode);
		}

		else if (isConditionalExpression(matchNode)) {
			return this.matchNodeWithConditionalExpression(node, matchNode);
		}

		else if (isFunctionExpression(matchNode)) {
			return this.matchNodeWithFunctionExpression(node, matchNode);
		}

		else if (isArrowFunction(matchNode)) {
			return this.matchNodeWithArrowFunction(node, matchNode);
		}

		else if (isRegularExpressionLiteral(matchNode)) {
			return this.matchNodeWithRegularExpressionLiteral(node, matchNode);
		}

		else if (isNoSubstitutionTemplateLiteral(matchNode)) {
			return this.matchNodeWithNoSubstitutionTemplateLiteral(node, <NoSubstitutionTemplateLiteral> matchNode);
		}

		else if (isTemplateHead(matchNode)) {
			return this.matchNodeWithTemplateHead(node, matchNode);
		}

		else if (isTemplateMiddle(matchNode)) {
			return this.matchNodeWithTemplateMiddle(node, matchNode);
		}

		else if (isTemplateTail(matchNode)) {
			return this.matchNodeWithTemplateTail(node, matchNode);
		}

		else if (isTemplateExpression(matchNode)) {
			return this.matchNodeWithTemplateExpression(node, matchNode);
		}

		else if (isTemplateSpan(matchNode)) {
			return this.matchNodeWithTemplateSpan(node, matchNode);
		}

		else if (isParenthesizedExpression(matchNode)) {
			return this.matchNodeWithParenthesizedExpression(node, matchNode);
		}

		else if (isArrayLiteralExpression(matchNode)) {
			return this.matchNodeWithArrayLiteralExpression(node, matchNode);
		}

		else if (isSpreadElement(matchNode)) {
			return this.matchNodeWithSpreadElement(node, matchNode);
		}

		else if (isObjectLiteralExpression(matchNode)) {
			return this.matchNodeWithObjectLiteralExpression(node, matchNode);
		}

		else if (isObjectLiteralElementLike(matchNode)) {
			return this.matchNodeWithObjectLiteralElementLike(node, matchNode);
		}

		else if (isPropertyAccessExpression(matchNode)) {
			return this.matchNodeWithPropertyAccessExpression(node, matchNode);
		}

		else if (isElementAccessExpression(matchNode)) {
			return this.matchNodeWithElementAccessExpression(node, matchNode);
		}

		else if (isCallExpression(matchNode)) {
			return this.matchNodeWithCallExpression(node, matchNode);
		}

		else if (isExpressionWithTypeArguments(matchNode)) {
			return this.matchNodeWithExpressionWithTypeArguments(node, matchNode);
		}

		else if (isNewExpression(matchNode)) {
			return this.matchNodeWithNewExpression(node, matchNode);
		}

		else if (isTaggedTemplateExpression(matchNode)) {
			return this.matchNodeWithTaggedTemplateExpression(node, matchNode);
		}

		else if (isAsExpression(matchNode)) {
			return this.matchNodeWithAsExpression(node, matchNode);
		}

		else if (isTypeAssertion(matchNode)) {
			return this.matchNodeWithTypeAssertion(node, matchNode);
		}

		else if (isNonNullExpression(matchNode)) {
			return this.matchNodeWithNonNullExpression(node, matchNode);
		}

		else if (isMetaProperty(matchNode)) {
			return this.matchNodeWithMetaProperty(node, matchNode);
		}

		else if (isJsxElement(matchNode)) {
			return this.matchNodeWithJsxElement(node, matchNode);
		}

		else if (isJsxOpeningElement(matchNode)) {
			return this.matchNodeWithJsxOpeningElement(node, matchNode);
		}

		else if (isJsxClosingElement(matchNode)) {
			return this.matchNodeWithJsxClosingElement(node, matchNode);
		}

		else if (isJsxAttributes(matchNode)) {
			return this.matchNodeWithJsxAttributes(node, matchNode);
		}

		else if (isJsxAttribute(matchNode)) {
			return this.matchNodeWithJsxAttribute(node, matchNode);
		}

		else if (isJsxSpreadAttribute(matchNode)) {
			return this.matchNodeWithJsxSpreadAttribute(node, matchNode);
		}

		else if (isJsxExpression(matchNode)) {
			return this.matchNodeWithJsxExpression(node, matchNode);
		}

		else if (isJsxSelfClosingElement(matchNode)) {
			return this.matchNodeWithJsxSelfClosingElement(node, matchNode);
		}

		else if (isJsxText(matchNode)) {
			return this.matchNodeWithJsxText(node, matchNode);
		}

		else if (isEmptyStatement(matchNode)) {
			return this.matchNodeWithEmptyStatement(node, matchNode);
		}

		else if (isDebuggerStatement(matchNode)) {
			return this.matchNodeWithDebuggerStatement(node, matchNode);
		}

		else if (isMissingDeclaration(matchNode)) {
			return this.matchNodeWithMissingDeclaration(node, matchNode);
		}

		else if (isVariableStatement(matchNode)) {
			return this.matchNodeWithVariableStatement(node, matchNode);
		}

		else if (isExpressionStatement(matchNode)) {
			return this.matchNodeWithExpressionStatement(node, matchNode);
		}

		else if (isIfStatement(matchNode)) {
			return this.matchNodeWithIfStatement(node, matchNode);
		}

		else if (isDoStatement(matchNode)) {
			return this.matchNodeWithDoStatement(node, matchNode);
		}

		else if (isWhileStatement(matchNode)) {
			return this.matchNodeWithWhileStatement(node, matchNode);
		}

		else if (isForStatement(matchNode)) {
			return this.matchNodeWithForStatement(node, matchNode);
		}

		else if (isForInStatement(matchNode)) {
			return this.matchNodeWithForInStatement(node, matchNode);
		}

		else if (isForOfStatement(matchNode)) {
			return this.matchNodeWithForOfStatement(node, matchNode);
		}

		else if (isBreakStatement(matchNode)) {
			return this.matchNodeWithBreakStatement(node, matchNode);
		}

		else if (isContinueStatement(matchNode)) {
			return this.matchNodeWithContinueStatement(node, matchNode);
		}

		else if (isReturnStatement(matchNode)) {
			return this.matchNodeWithReturnStatement(node, matchNode);
		}

		else if (isWithStatement(matchNode)) {
			return this.matchNodeWithWithStatement(node, matchNode);
		}

		else if (isSwitchStatement(matchNode)) {
			return this.matchNodeWithSwitchStatement(node, matchNode);
		}

		else if (isCaseBlock(matchNode)) {
			return this.matchNodeWithCaseBlock(node, matchNode);
		}

		else if (isCaseClause(matchNode)) {
			return this.matchNodeWithCaseClause(node, matchNode);
		}

		else if (isDefaultClause(matchNode)) {
			return this.matchNodeWithDefaultClause(node, matchNode);
		}

		else if (isLabeledStatement(matchNode)) {
			return this.matchNodeWithLabeledStatement(node, matchNode);
		}

		else if (isThrowStatement(matchNode)) {
			return this.matchNodeWithThrowStatement(node, matchNode);
		}

		else if (isTryStatement(matchNode)) {
			return this.matchNodeWithTryStatement(node, matchNode);
		}

		else if (isCatchClause(matchNode)) {
			return this.matchNodeWithCatchClause(node, matchNode);
		}

		else if (isClassDeclaration(matchNode)) {
			return this.matchNodeWithClassDeclaration(node, matchNode);
		}

		else if (isHeritageClause(matchNode)) {
			return this.matchNodeWithHeritageClause(node, matchNode);
		}

		else if (isClassExpression(matchNode)) {
			return this.matchNodeWithClassExpression(node, matchNode);
		}

		else if (isInterfaceDeclaration(matchNode)) {
			return this.matchNodeWithInterfaceDeclaration(node, matchNode);
		}

		else if (isTypeAliasDeclaration(matchNode)) {
			return this.matchNodeWithTypeAliasDeclaration(node, matchNode);
		}

		else if (isEnumMember(matchNode)) {
			return this.matchNodeWithEnumMember(node, matchNode);
		}

		else if (isEnumDeclaration(matchNode)) {
			return this.matchNodeWithEnumDeclaration(node, matchNode);
		}

		else if (isModuleBlock(matchNode)) {
			return this.matchNodeWithModuleBlock(node, matchNode);
		}

		else if (isModuleDeclaration(matchNode)) {
			return this.matchNodeWithModuleDeclaration(node, matchNode);
		}

		else if (isExternalModuleReference(matchNode)) {
			return this.matchNodeWithExternalModuleReference(node, matchNode);
		}

		else if (isImportEqualsDeclaration(matchNode)) {
			return this.matchNodeWithImportEqualsDeclaration(node, matchNode);
		}

		else if (isImportDeclaration(matchNode)) {
			return this.matchNodeWithImportDeclaration(node, matchNode);
		}

		else if (isImportClause(matchNode)) {
			return this.matchNodeWithImportClause(node, matchNode);
		}

		else if (isNamespaceImport(matchNode)) {
			return this.matchNodeWithNamespaceImport(node, matchNode);
		}

		else if (isNamedImports(matchNode)) {
			return this.matchNodeWithNamedImports(node, matchNode);
		}

		else if (isImportSpecifier(matchNode)) {
			return this.matchNodeWithImportSpecifier(node, matchNode);
		}

		else if (isNamespaceExportDeclaration(matchNode)) {
			return this.matchNodeWithNamespaceExportDeclaration(node, matchNode);
		}

		else if (isExportDeclaration(matchNode)) {
			return this.matchNodeWithExportDeclaration(node, matchNode);
		}

		else if (isNamedExports(matchNode)) {
			return this.matchNodeWithNamedExports(node, matchNode);
		}

		else if (isExportSpecifier(matchNode)) {
			return this.matchNodeWithExportSpecifier(node, matchNode);
		}

		else if (isExportAssignment(matchNode)) {
			return this.matchNodeWithExportAssignment(node, matchNode);
		}

		/* tslint:disable:no-any*/
		else if (isJSDocAllType(<any>matchNode)) {
			return this.matchNodeWithJSDocAllType(node, <any>matchNode);
		}
		/* tslint:enable:no-any*/

		else if (isJSDocUnknownType(matchNode)) {
			return this.matchNodeWithJSDocUnknownType(node, matchNode);
		}

		else if (isJSDocNonNullableType(matchNode)) {
			return this.matchNodeWithJSDocNonNullableType(node, matchNode);
		}

		else if (isJSDocNullableType(matchNode)) {
			return this.matchNodeWithJSDocNullableType(node, matchNode);
		}

		else if (isJSDocOptionalType(matchNode)) {
			return this.matchNodeWithJSDocOptionalType(node, matchNode);
		}

		else if (isJSDocFunctionType(matchNode)) {
			return this.matchNodeWithJSDocFunctionType(node, matchNode);
		}

		else if (isJSDocVariadicType(matchNode)) {
			return this.matchNodeWithJSDocVariadicType(node, matchNode);
		}

		else if (isJSDoc(matchNode)) {
			return this.matchNodeWithJSDoc(node, matchNode);
		}

		else if (isJSDocUnknownTag(matchNode)) {
			return this.matchNodeWithJSDocUnknownTag(node, matchNode);
		}

		else if (isJSDocAugmentsTag(matchNode)) {
			return this.matchNodeWithJSDocAugmentsTag(node, matchNode);
		}

		else if (isJSDocClassTag(matchNode)) {
			return this.matchNodeWithJSDocClassTag(node, matchNode);
		}

		else if (isJSDocTemplateTag(matchNode)) {
			return this.matchNodeWithJSDocTemplateTag(node, matchNode);
		}

		else if (isJSDocReturnTag(matchNode)) {
			return this.matchNodeWithJSDocReturnTag(node, matchNode);
		}

		else if (isJSDocTypeTag(matchNode)) {
			return this.matchNodeWithJSDocTypeTag(node, matchNode);
		}

		else if (isJSDocTypedefTag(matchNode)) {
			return this.matchNodeWithJSDocTypedefTag(node, matchNode);
		}

		else if (isJSDocPropertyTag(matchNode)) {
			return this.matchNodeWithJSDocPropertyTag(node, matchNode);
		}

		else if (isJSDocParameterTag(matchNode)) {
			return this.matchNodeWithJSDocParameterTag(node, matchNode);
		}

		else if (isJSDocTypeLiteral(matchNode)) {
			return this.matchNodeWithJSDocTypeLiteral(node, matchNode);
		}

		else if (isJSDocTypeExpression(matchNode)) {
			return this.matchNodeWithJSDocTypeExpression(node, matchNode);
		}

		return false;
	}

	/**
	 * Matches the provided Node with the provided JSDocTypeLiteral
	 * @param {Node} node
	 * @param {JSDocTypeLiteral} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocTypeLiteral (node: Node, matchNode: JSDocTypeLiteral): boolean {
		// If the node is not a JSDocTypeLiteral, return false
		if (!isJSDocTypeLiteral(node)) return false;

		return this.allIsMatched(
			this.matchJSDocType(node, matchNode),
			this.matchAllNodesIfGiven(node.jsDocPropertyTags, matchNode.jsDocPropertyTags, this.matchNodeWithJSDocPropertyLikeTag),
			node.isArrayType === matchNode.isArrayType
		);
	}

	/**
	 * Matches a Node with a JSDocPropertyLikeTag
	 * @param {Node} node
	 * @param {JSDocPropertyLikeTag} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocPropertyLikeTag (node: Node, matchNode: JSDocPropertyLikeTag): boolean {
		return this.matchNodeWithNode(node, matchNode);
	}

	/**
	 * Matches the provided Node with the provided JSDocParameterTag
	 * @param {Node} node
	 * @param {JSDocParameterTag} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocParameterTag (node: Node, matchNode: JSDocParameterTag): boolean {
		// If the node is not a JSDocParameterTag, return false
		if (!isJSDocParameterTag(node)) return false;

		return this.allIsMatched(
			this.matchJSDocPropertyLikeTag(node, matchNode)
		);
	}

	/**
	 * Matches the provided Node with the provided JSDocPropertyTag
	 * @param {Node} node
	 * @param {JSDocPropertyTag} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocPropertyTag (node: Node, matchNode: JSDocPropertyTag): boolean {
		// If the node is not a JSDocPropertyTag, return false
		if (!isJSDocPropertyTag(node)) return false;

		return this.allIsMatched(
			this.matchJSDocPropertyLikeTag(node, matchNode)
		);
	}

	/**
	 * Matches the provided Node with the provided JSDocTypedefTag
	 * @param {Node} node
	 * @param {JSDocTypedefTag} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocTypedefTag (node: Node, matchNode: JSDocTypedefTag): boolean {
		// If the node is not a JSDocTypedefTag, return false
		if (!isJSDocTypedefTag(node)) return false;

		return this.allIsMatched(
			this.matchJSDocTag(node, matchNode),
			this.matchNamedDeclaration(node, matchNode),
			this.matchNodeIfGiven(node.fullName, matchNode.fullName, this.matchNodeWithNode),
			this.matchNodeIfGiven(node.name, matchNode.name, this.matchNodeWithIdentifier),
			this.matchNodeIfGiven(node.typeExpression, matchNode.typeExpression, this.matchNodeWithNode)
		);
	}

	/**
	 * Matches the provided Node with the provided JSDocTypeTag
	 * @param {Node} node
	 * @param {JSDocTypeTag} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocTypeTag (node: Node, matchNode: JSDocTypeTag): boolean {
		// If the node is not a JSDocTypeTag, return false
		if (!isJSDocTypeTag(node)) return false;

		return this.allIsMatched(
			this.matchJSDocTag(node, matchNode),
			this.matchNodeWithJSDocTypeExpression(node.typeExpression, matchNode.typeExpression)
		);
	}

	/**
	 * Matches the provided Node with the provided JSDocReturnTag
	 * @param {Node} node
	 * @param {JSDocReturnTag} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocReturnTag (node: Node, matchNode: JSDocReturnTag): boolean {
		// If the node is not a JSDocReturnTag, return false
		if (!isJSDocReturnTag(node)) return false;

		return this.allIsMatched(
			this.matchJSDocTag(node, matchNode),
			this.matchNodeWithJSDocTypeExpression(node.typeExpression, matchNode.typeExpression)
		);
	}

	/**
	 * Matches the provided Node with the provided JSDocTemplateTag
	 * @param {Node} node
	 * @param {JSDocTemplateTag} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocTemplateTag (node: Node, matchNode: JSDocTemplateTag): boolean {
		// If the node is not a JSDocTemplateTag, return false
		if (!isJSDocTemplateTag(node)) return false;

		return this.allIsMatched(
			this.matchJSDocTag(node, matchNode),
			this.matchAllNodes(node.typeParameters, matchNode.typeParameters, this.matchNodeWithTypeParameterDeclaration)
		);
	}

	/**
	 * Matches the provided Node with the provided JSDocClassTag
	 * @param {Node} node
	 * @param {JSDocClassTag} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocClassTag (node: Node, matchNode: JSDocClassTag): boolean {
		// If the node is not a JSDocClassTag, return false
		if (!isJSDocClassTag(node)) return false;

		return this.allIsMatched(
			this.matchJSDocTag(node, matchNode)
		);
	}

	/**
	 * Matches the provided Node with the provided JSDocAugmentsTag
	 * @param {Node} node
	 * @param {JSDocAugmentsTag} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocAugmentsTag (node: Node, matchNode: JSDocAugmentsTag): boolean {
		// If the node is not a JSDocAugmentsTag, return false
		if (!isJSDocAugmentsTag(node)) return false;

		return this.allIsMatched(
			this.matchJSDocTag(node, matchNode),
			this.matchNodeWithJSDocTypeExpression(node.typeExpression, matchNode.typeExpression)
		);
	}

	/**
	 * Matches the provided Node with the provided JSDocUnknownTag
	 * @param {Node} node
	 * @param {JSDocUnknownTag} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocUnknownTag (node: Node, matchNode: JSDocUnknownTag): boolean {
		// If the node is not a JSDocUnknownTag, return false
		if (!isJSDocUnknownTag(node)) return false;

		return this.allIsMatched(
			this.matchJSDocTag(node, matchNode)
		);
	}

	/**
	 * Matches a Node with a JSDocTag
	 * @param {Node} node
	 * @param {JSDocTag} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocTag (node: Node, matchNode: JSDocTag): boolean {
		return this.matchNodeWithNode(node, matchNode);
	}

	/**
	 * Matches the provided Node with the provided JSDoc
	 * @param {Node} node
	 * @param {JSDoc} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDoc (node: Node, matchNode: JSDoc): boolean {
		// If the node is not a JSDoc, return false
		if (!isJSDoc(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchAllNodesIfGiven(node.tags, matchNode.tags, this.matchNodeWithJSDocTag),
			node.comment === matchNode.comment
		);
	}

	/**
	 * Matches the provided Node with the provided JSDocVariadicType
	 * @param {Node} node
	 * @param {JSDocVariadicType} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocVariadicType (node: Node, matchNode: JSDocVariadicType): boolean {
		// If the node is not a JSDocVariadicType, return false
		if (!isJSDocVariadicType(node)) return false;

		return this.allIsMatched(
			this.matchJSDocType(node, matchNode),
			this.matchNodeWithTypeNode(node.type, matchNode.type)
		);
	}

	/**
	 * Matches the provided Node with the provided JSDocFunctionType
	 * @param {Node} node
	 * @param {JSDocFunctionType} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocFunctionType (node: Node, matchNode: JSDocFunctionType): boolean {
		// If the node is not a JSDocFunctionType, return false
		if (!isJSDocFunctionType(node)) return false;

		return this.allIsMatched(
			this.matchJSDocType(node, matchNode),
			this.matchSignatureDeclaration(node, matchNode)
		);
	}

	/**
	 * Matches a TextRange
	 * @param {TextRange} _node
	 * @param {TextRange} _matchNode
	 * @returns {boolean}
	 */
	private matchTextRange (_node: TextRange, _matchNode: TextRange): boolean {
		// Don't match on any of the properties of a TextRange.
		return true;
	}

	/**
	 * Matches the provided Node with the provided JSDocOptionalType
	 * @param {Node} node
	 * @param {JSDocOptionalType} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocOptionalType (node: Node, matchNode: JSDocOptionalType): boolean {
		// If the node is not a JSDocOptionalType, return false
		if (!isJSDocOptionalType(node)) return false;

		return this.allIsMatched(
			this.matchJSDocType(node, matchNode),
			this.matchNodeWithTypeNode(node.type, matchNode.type)
		);
	}

	/**
	 * Matches the provided Node with the provided JSDocNonNullableType
	 * @param {Node} node
	 * @param {JSDocNonNullableType} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocNonNullableType (node: Node, matchNode: JSDocNonNullableType): boolean {
		// If the node is not a JSDocNonNullableType, return false
		if (!isJSDocNonNullableType(node)) return false;

		return this.allIsMatched(
			this.matchJSDocType(node, matchNode),
			this.matchNodeWithTypeNode(node.type, matchNode.type)
		);
	}

	/**
	 * Matches the provided Node with the provided JSDocNullableType
	 * @param {Node} node
	 * @param {JSDocNullableType} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocNullableType (node: Node, matchNode: JSDocNullableType): boolean {
		// If the node is not a JSDocNullableType, return false
		if (!isJSDocNullableType(node)) return false;

		return this.allIsMatched(
			this.matchJSDocType(node, matchNode),
			this.matchNodeWithTypeNode(node.type, matchNode.type)
		);
	}

	/**
	 * Matches the provided Node with the provided JSDocUnknownType
	 * @param {Node} node
	 * @param {JSDocUnknownType} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocUnknownType (node: Node, matchNode: JSDocUnknownType): boolean {
		// If the node is not a JSDocUnknownType, return false
		if (!isJSDocUnknownType(node)) return false;

		return this.allIsMatched(
			this.matchJSDocType(node, matchNode)
		);
	}

	/**
	 * Matches the provided Node with the provided JSDocAllType
	 * @param {Node} node
	 * @param {JSDocAllType} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocAllType (node: Node, matchNode: JSDocAllType): boolean {
		// If the node is not a JSDocAllType, return false
		/*tslint:disable:no-any*/
		if (!isJSDocAllType(<JSDocAllType><any>node)) return false;
		/*tslint:enable:no-any*/

		return this.allIsMatched(
			this.matchJSDocType(<JSDocAllType>node, matchNode)
		);
	}

	/**
	 * Matches the provided Node with the provided JSDocTypeExpression
	 * @param {Node} node
	 * @param {JSDocTypeExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocTypeExpression (node: Node, matchNode: JSDocTypeExpression): boolean {
		// If the node is not a JSDocTypeExpression, return false
		if (!isJSDocTypeExpression(node)) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchNodeWithTypeNode(node.type, matchNode.type)
		);
	}

	/**
	 * Matches the provided node with the provided Decorator
	 * @param {Node} node
	 * @param {Decorator} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithDecorator (node: Node, matchNode: Decorator): boolean {
		// If the node is not a Decorator, return false
		if (!isDecorator(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchNodeWithLeftHandSideExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided KeywordTypeNode
	 * @param {Node} node
	 * @param {KeywordTypeNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithKeywordTypeNode (node: Node, matchNode: KeywordTypeNode): boolean {
		// If the node is not a KeywordTypeNode, return false
		if (!(isKeywordTypeNode(node))) return false;

		return this.allIsMatched(
			this.matchKindWithKind(node.kind, matchNode.kind)
		);
	}

	/**
	 * Matches the provided node with the provided ThisTypeNode
	 * @param {Node} node
	 * @param {ThisTypeNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithThisTypeNode (node: Node, matchNode: ThisTypeNode): boolean {
		// If the node is not a ThisTypeNode, return false
		if (!(isThisTypeNode(node))) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided CallSignatureDeclaration
	 * @param {Node} node
	 * @param {CallSignatureDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithCallSignatureDeclaration (node: Node, matchNode: CallSignatureDeclaration): boolean {
		// If the node is not a CallSignatureDeclaration, return false
		if (!(isCallSignatureDeclaration(node))) return false;

		return this.allIsMatched(
			this.matchSignatureDeclaration(node, matchNode),
			this.matchTypeElement(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided ConstructSignatureDeclaration
	 * @param {Node} node
	 * @param {ConstructSignatureDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithConstructSignatureDeclaration (node: Node, matchNode: ConstructSignatureDeclaration): boolean {
		// If the node is not a ConstructSignatureDeclaration, return false
		if (!(isConstructSignatureDeclaration(node))) return false;

		return this.allIsMatched(
			this.matchSignatureDeclaration(node, matchNode),
			this.matchTypeElement(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided ClassDeclaration
	 * @param {Node} node
	 * @param {ClassDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithClassDeclaration (node: Node, matchNode: ClassDeclaration): boolean {
		// If the node is not a ClassDeclaration, return false
		if (!(isClassDeclaration(node))) return false;

		return this.allIsMatched(
			this.matchClassLikeDeclaration(node, matchNode),
			this.matchDeclarationStatement(node, matchNode),
			this.matchNodeIfGiven(node.name, matchNode.name, this.matchNodeWithIdentifier)
		);
	}

	/**
	 * Matches the provided node with the provided ClassExpression
	 * @param {Node} node
	 * @param {ClassExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithClassExpression (node: Node, matchNode: ClassExpression): boolean {
		// If the node is not a ClassExpression, return false
		if (!(isClassExpression(node))) return false;

		return this.allIsMatched(
			this.matchClassLikeDeclaration(node, matchNode),
			this.matchPrimaryExpression(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided ExternalModuleReference
	 * @param {Node} node
	 * @param {ExternalModuleReference} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithExternalModuleReference (node: Node, matchNode: ExternalModuleReference): boolean {
		// If the node is not a ExternalModuleReference, return false
		if (!(isExternalModuleReference(node))) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchNodeIfGiven(node.expression, matchNode.expression, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches the provided node with the provided InterfaceDeclaration
	 * @param {Node} node
	 * @param {InterfaceDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithInterfaceDeclaration (node: Node, matchNode: InterfaceDeclaration): boolean {
		// If the node is not a InterfaceDeclaration, return false
		if (!(isInterfaceDeclaration(node))) return false;

		return this.allIsMatched(
			this.matchDeclarationStatement(node, matchNode),
			this.matchNodeWithIdentifier(node.name, matchNode.name),
			this.matchAllNodesIfGiven(node.typeParameters, matchNode.typeParameters, this.matchNodeWithTypeParameterDeclaration),
			this.matchAllNodesIfGiven(node.heritageClauses, matchNode.heritageClauses, this.matchNodeWithHeritageClause),
			this.matchAllNodes(node.members, matchNode.members, this.matchNodeWithTypeElement)
		);
	}

	/**
	 * Matches the provided node with the provided TypeAliasDeclaration
	 * @param {Node} node
	 * @param {TypeAliasDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTypeAliasDeclaration (node: Node, matchNode: TypeAliasDeclaration): boolean {
		// If the node is not a TypeAliasDeclaration, return false
		if (!(isTypeAliasDeclaration(node))) return false;

		return this.allIsMatched(
			this.matchDeclarationStatement(node, matchNode),
			this.matchNodeWithIdentifier(node.name, matchNode.name),
			this.matchAllNodesIfGiven(node.typeParameters, matchNode.typeParameters, this.matchNodeWithTypeParameterDeclaration),
			this.matchNodeWithTypeNode(node.type, matchNode.type)
		);
	}

	/**
	 * Matches the provided node with the provided EnumMember
	 * @param {Node} node
	 * @param {EnumMember} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithEnumMember (node: Node, matchNode: EnumMember): boolean {
		// If the node is not a EnumMember, return false
		if (!(isEnumMember(node))) return false;

		return this.allIsMatched(
			this.matchNamedDeclaration(node, matchNode),
			this.matchNodeWithPropertyName(node.name, matchNode.name),
			this.matchNodeIfGiven(node.initializer, matchNode.initializer, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches the provided node with the provided EnumDeclaration
	 * @param {Node} node
	 * @param {EnumDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithEnumDeclaration (node: Node, matchNode: EnumDeclaration): boolean {
		// If the node is not a EnumDeclaration, return false
		if (!(isEnumDeclaration(node))) return false;

		return this.allIsMatched(
			this.matchDeclarationStatement(node, matchNode),
			this.matchNodeWithIdentifier(node.name, matchNode.name),
			this.matchAllNodes(node.members, matchNode.members, this.matchNodeWithEnumMember)
		);
	}

	/**
	 * Matches the provided node with the provided ModuleDeclaration
	 * @param {Node} node
	 * @param {ModuleDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithModuleDeclaration (node: Node, matchNode: ModuleDeclaration): boolean {
		// If the node is not a ModuleDeclaration, return false
		if (!(isModuleDeclaration(node))) return false;

		return this.allIsMatched(
			this.matchDeclarationStatement(node, matchNode),
			this.matchNodeWithModuleName(node.name, matchNode.name),
			this.matchNodeIfGiven(node.body, matchNode.body, this.matchNodeWithNode)
		);
	}

	/**
	 * Matches the provided node with the provided ModuleBlock
	 * @param {Node} node
	 * @param {ModuleBlock} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithModuleBlock (node: Node, matchNode: ModuleBlock): boolean {
		// If the node is not a ModuleBlock, return false
		if (!(isModuleBlock(node))) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchStatement(node, matchNode),
			this.matchAllNodes(node.statements, matchNode.statements, this.matchNodeWithStatement)
		);
	}

	/**
	 * Matches the provided node with the provided MappedTypeNode
	 * @param {Node} node
	 * @param {MappedTypeNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithMappedTypeNode (node: Node, matchNode: MappedTypeNode): boolean {
		// If the node is not a v, return false
		if (!(isMappedTypeNode(node))) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchDeclaration(node, matchNode),
			this.matchNodeIfGiven(node.readonlyToken, matchNode.readonlyToken, this.matchNodeWithReadonlyToken),
			this.matchNodeWithTypeParameterDeclaration(node.typeParameter, matchNode.typeParameter),
			this.matchNodeIfGiven(node.questionToken, matchNode.questionToken, this.matchNodeWithQuestionToken),
			this.matchNodeIfGiven(node.type, matchNode.type, this.matchNodeWithTypeNode)
		);
	}

	/**
	 * Matches the provided node with the provided FunctionOrConstructorTypeNode
	 * @param {Node} node
	 * @param {FunctionOrConstructorTypeNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithFunctionOrConstructorTypeNode (node: Node, matchNode: FunctionOrConstructorTypeNode): boolean {
		// If the node is not a FunctionOrConstructorTypeNode, return false
		if (!(isFunctionOrConstructorTypeNode(node))) return false;

		if (isFunctionTypeNode(matchNode)) return this.matchNodeWithFunctionTypeNode(node, matchNode);
		else if (isConstructorTypeNode(matchNode)) return this.matchNodeWithConstructorTypeNode(node, matchNode);

		return false;
	}

	/**
	 * Matches the provided node with the provided ParenthesizedTypeNode
	 * @param {Node} node
	 * @param {ParenthesizedTypeNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithParenthesizedTypeNode (node: Node, matchNode: ParenthesizedTypeNode): boolean {
		// If the node is not a ParenthesizedTypeNode, return false
		if (!(isParenthesizedTypeNode(node))) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchNodeWithTypeNode(node.type, matchNode.type)
		);
	}

	/**
	 * Matches the provided node with the provided TypeOperatorNode
	 * @param {Node} node
	 * @param {TypeOperatorNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTypeOperatorNode (node: Node, matchNode: TypeOperatorNode): boolean {
		// If the node is not a TypeOperatorNode, return false
		if (!(isTypeOperatorNode(node))) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchNodeWithTypeNode(node.type, matchNode.type)
		);
	}

	/**
	 * Matches the provided node with the provided IndexedAccessTypeNode
	 * @param {Node} node
	 * @param {IndexedAccessTypeNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithIndexedAccessTypeNode (node: Node, matchNode: IndexedAccessTypeNode): boolean {
		// If the node is not a IndexedAccessTypeNode, return false
		if (!(isIndexedAccessTypeNode(node))) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchNodeWithTypeNode(node.objectType, matchNode.objectType),
			this.matchNodeWithTypeNode(node.indexType, matchNode.indexType)
		);
	}

	/**
	 * Matches the provided node with the provided BooleanLiteral
	 * @param {Node} node
	 * @param {BooleanLiteral} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithBooleanLiteral (node: Node, matchNode: BooleanLiteral): boolean {
		// If the node is not a BooleanLiteral, return false
		if (!isBooleanLiteral(node)) return false;

		return this.allIsMatched(
			this.matchPrimaryExpression(node, matchNode),
			this.matchTypeNode(node, matchNode),
			this.matchKindWithKind(node.kind, matchNode.kind)
		);
	}

	/**
	 * Matches the provided node with the provided ThisExpression
	 * @param {Node} node
	 * @param {ThisExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithThisExpression (node: Node, matchNode: ThisExpression): boolean {
		// If the node is not a ThisExpression, return false
		if (!isThisExpression(node)) return false;

		return this.allIsMatched(
			this.matchPrimaryExpression(node, matchNode),
			this.matchKeywordTypeNode(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided SuperExpression
	 * @param {Node} node
	 * @param {SuperExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithSuperExpression (node: Node, matchNode: SuperExpression): boolean {
		// If the node is not a SuperExpression, return false
		if (!isSuperExpression(node)) return false;

		return this.allIsMatched(
			this.matchPrimaryExpression(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided ImportExpression
	 * @param {Node} node
	 * @param {ImportExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithImportExpression (node: Node, matchNode: ImportExpression): boolean {
		// If the Node is not an ImportExpression, return false
		if (!isImportExpression(node)) return false;

		return this.allIsMatched(
			this.matchPrimaryExpression(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided NullLiteral
	 * @param {Node} node
	 * @param {NullLiteral} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithNullLiteral (node: Node, matchNode: NullLiteral): boolean {
		if (!isNullLiteral(node)) return false;

		return this.allIsMatched(
			this.matchPrimaryExpression(node, matchNode),
			this.matchTypeNode(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided LiteralTypeNode
	 * @param {Node} node
	 * @param {LiteralTypeNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithLiteralTypeNode (node: Node, matchNode: LiteralTypeNode): boolean {
		// If the node is not a LiteralTypeNode, return false
		if (!(isLiteralTypeNode(node))) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchNodeWithExpression(node.literal, matchNode.literal)
		);
	}

	/**
	 * Matches the provided node with the provided PartiallyEmittedExpression
	 * @param {Node} node
	 * @param {PartiallyEmittedExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithPartiallyEmittedExpression (node: Node, matchNode: PartiallyEmittedExpression): boolean {
		// If the node is not a PartiallyEmittedExpression, return false
		if (!(isPartiallyEmittedExpression(node))) return false;

		return this.allIsMatched(
			this.matchLeftHandSideExpression(node, matchNode),
			this.matchNodeWithExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided DeleteExpression
	 * @param {Node} node
	 * @param {DeleteExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithDeleteExpression (node: Node, matchNode: DeleteExpression): boolean {
		// If the node is not a DeleteExpression, return false
		if (!(isDeleteExpression(node))) return false;

		return this.allIsMatched(
			this.matchUnaryExpression(node, matchNode),
			this.matchNodeWithUnaryExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided TypeOfExpression
	 * @param {Node} node
	 * @param {TypeOfExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTypeOfExpression (node: Node, matchNode: TypeOfExpression): boolean {
		// If the node is not a TypeOfExpression, return false
		if (!(isTypeOfExpression(node))) return false;

		return this.allIsMatched(
			this.matchUnaryExpression(node, matchNode),
			this.matchNodeWithUnaryExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided VoidExpression
	 * @param {Node} node
	 * @param {VoidExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithVoidExpression (node: Node, matchNode: VoidExpression): boolean {
		// If the node is not a VoidExpression, return false
		if (!(isVoidExpression(node))) return false;

		return this.allIsMatched(
			this.matchUnaryExpression(node, matchNode),
			this.matchNodeWithUnaryExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided AwaitExpression
	 * @param {Node} node
	 * @param {AwaitExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithAwaitExpression (node: Node, matchNode: AwaitExpression): boolean {
		// If the node is not a AwaitExpression, return false
		if (!(isAwaitExpression(node))) return false;

		return this.allIsMatched(
			this.matchUnaryExpression(node, matchNode),
			this.matchNodeWithUnaryExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided YieldExpression
	 * @param {Node} node
	 * @param {YieldExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithYieldExpression (node: Node, matchNode: YieldExpression): boolean {
		// If the node is not a YieldExpression, return false
		if (!(isYieldExpression(node))) return false;

		return this.allIsMatched(
			this.matchExpression(node, matchNode),
			this.matchNodeIfGiven(node.asteriskToken, matchNode.asteriskToken, this.matchNodeWithAsteriskToken),
			this.matchNodeIfGiven(node.expression, matchNode.expression, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches the provided node with the provided BinaryExpression
	 * @param {Node} node
	 * @param {BinaryExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithBinaryExpression (node: Node, matchNode: BinaryExpression): boolean {
		// If the node is not a BinaryExpression, return false
		if (!(isBinaryExpression(node))) return false;

		return this.allIsMatched(
			this.matchExpression(node, matchNode),
			this.matchDeclaration(node, matchNode),
			this.matchNodeWithExpression(node.left, matchNode.left),
			this.matchNodeWithBinaryOperatorToken(node.operatorToken, matchNode.operatorToken),
			this.matchNodeWithExpression(node.right, matchNode.right)
		);
	}

	/**
	 * Matches the provided node with the provided ConditionalExpression
	 * @param {Node} node
	 * @param {ConditionalExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithConditionalExpression (node: Node, matchNode: ConditionalExpression): boolean {
		// If the node is not a ConditionalExpression, return false
		if (!(isConditionalExpression(node))) return false;

		return this.allIsMatched(
			this.matchExpression(node, matchNode),
			this.matchNodeWithExpression(node.condition, matchNode.condition),
			this.matchNodeWithQuestionToken(node.questionToken, matchNode.questionToken),
			this.matchNodeWithExpression(node.whenTrue, matchNode.whenTrue),
			this.matchNodeWithColonToken(node.colonToken, matchNode.colonToken),
			this.matchNodeWithExpression(node.whenFalse, matchNode.whenFalse)
		);
	}

	/**
	 * Matches the provided node with the provided PrefixUnaryExpression
	 * @param {Node} node
	 * @param {PrefixUnaryExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithPrefixUnaryExpression (node: Node, matchNode: PrefixUnaryExpression): boolean {
		// If the node is not a PrefixUnaryExpression, return false
		if (!(isPrefixUnaryExpression(node))) return false;

		return this.allIsMatched(
			this.matchUpdateExpression(node, matchNode),
			this.matchKindWithKind(node.operator, matchNode.operator),
			this.matchNodeWithUnaryExpression(node.operand, matchNode.operand)
		);
	}

	/**
	 * Matches the provided node with the provided PostfixUnaryExpression
	 * @param {Node} node
	 * @param {PostfixUnaryExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithPostfixUnaryExpression (node: Node, matchNode: PostfixUnaryExpression): boolean {
		// If the node is not a PostfixUnaryExpression, return false
		if (!(isPostfixUnaryExpression(node))) return false;

		return this.allIsMatched(
			this.matchUpdateExpression(node, matchNode),
			this.matchKindWithKind(node.operator, matchNode.operator),
			this.matchNodeWithLeftHandSideExpression(node.operand, matchNode.operand)
		);
	}

	/**
	 * Matches the provided node with the provided UnionTypeNode
	 * @param {Node} node
	 * @param {UnionTypeNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithUnionTypeNode (node: Node, matchNode: UnionTypeNode): boolean {
		// If the node is not a UnionTypeNode, return false
		if (!(isUnionTypeNode(node))) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchAllNodes(node.types, matchNode.types, this.matchNodeWithTypeNode)
		);
	}

	/**
	 * Matches the provided node with the provided IntersectionTypeNode
	 * @param {Node} node
	 * @param {IntersectionTypeNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithIntersectionTypeNode (node: Node, matchNode: IntersectionTypeNode): boolean {
		// If the node is not a IntersectionTypeNode, return false
		if (!(isIntersectionTypeNode(node))) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchAllNodes(node.types, matchNode.types, this.matchNodeWithTypeNode)
		);
	}

	/**
	 * Matches the provided node with the provided FunctionTypeNode
	 * @param {Node} node
	 * @param {FunctionTypeNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithFunctionTypeNode (node: Node, matchNode: FunctionTypeNode): boolean {
		// If the node is not a FunctionTypeNode, return false
		if (!(isFunctionTypeNode(node))) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchSignatureDeclaration(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided ArrayTypeNode
	 * @param {Node} node
	 * @param {ArrayTypeNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithArrayTypeNode (node: Node, matchNode: ArrayTypeNode): boolean {
		// If the node is not a ArrayTypeNode, return false
		if (!(isArrayTypeNode(node))) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchNodeWithTypeNode(node.elementType, matchNode.elementType)
		);
	}

	/**
	 * Matches the provided node with the provided TupleTypeNode
	 * @param {Node} node
	 * @param {TupleTypeNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTupleTypeNode (node: Node, matchNode: TupleTypeNode): boolean {
		// If the node is not a TupleTypeNode, return false
		if (!(isTupleTypeNode(node))) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchAllNodes(node.elementTypes, matchNode.elementTypes, this.matchNodeWithTypeNode)
		);
	}

	/**
	 * Matches the provided node with the provided TypeLiteralNode
	 * @param {Node} node
	 * @param {TypeLiteralNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTypeLiteralNode (node: Node, matchNode: TypeLiteralNode): boolean {
		// If the node is not a TypeLiteralNode, return false
		if (!(isTypeLiteralNode(node))) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchDeclaration(node, matchNode),
			this.matchAllNodes(node.members, matchNode.members, this.matchNodeWithTypeElement)
		);
	}

	/**
	 * Matches the provided node with the provided TypeReferenceNode
	 * @param {Node} node
	 * @param {TypeReferenceNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTypeReferenceNode (node: Node, matchNode: TypeReferenceNode): boolean {
		// If the node is not a TypeReferenceNode, return false
		if (!(isTypeReferenceNode(node))) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchNodeWithEntityName(node.typeName, matchNode.typeName),
			this.matchAllNodesIfGiven(node.typeArguments, matchNode.typeArguments, this.matchNodeWithTypeNode)
		);
	}

	/**
	 * Matches the provided node with the provided TypePredicateNode
	 * @param {Node} node
	 * @param {TypePredicateNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTypePredicateNode (node: Node, matchNode: TypePredicateNode): boolean {
		// If the node is not a TypePredicateNode, return false
		if (!(isTypePredicateNode(node))) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchNodeWithNode(node.parameterName, matchNode.parameterName),
			this.matchNodeWithTypeNode(node.type, matchNode.type)
		);
	}

	/**
	 * Matches the provided node with the provided TypeQueryNode
	 * @param {Node} node
	 * @param {TypeQueryNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTypeQueryNode (node: Node, matchNode: TypeQueryNode): boolean {
		// If the node is not a TypeQueryNode, return false
		if (!(isTypeQueryNode(node))) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchNodeWithEntityName(node.exprName, matchNode.exprName)
		);
	}

	/**
	 * Matches the provided node with the provided FunctionDeclaration
	 * @param {Node} node
	 * @param {FunctionDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithFunctionDeclaration (node: Node, matchNode: FunctionDeclaration): boolean {
		// If the node is not a FunctionDeclaration, return false
		if (!(isFunctionDeclaration(node))) return false;

		return this.allIsMatched(
			this.matchFunctionLikeDeclarationBase(node, matchNode),
			this.matchDeclarationStatement(node, matchNode),
			this.matchNodeIfGiven(node.name, matchNode.name, this.matchNodeWithIdentifier),
			this.matchNodeIfGiven(node.body, matchNode.body, this.matchNodeWithFunctionBody)
		);
	}

	/**
	 * Matches the provided node with the provided FunctionExpression
	 * @param {Node} node
	 * @param {FunctionExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithFunctionExpression (node: Node, matchNode: FunctionExpression): boolean {
		// If the node is not a FunctionExpression, return false
		if (!(isFunctionExpression(node))) return false;

		return this.allIsMatched(
			this.matchPrimaryExpression(node, matchNode),
			this.matchFunctionLikeDeclarationBase(node, matchNode),
			this.matchNodeIfGiven(node.name, matchNode.name, this.matchNodeWithIdentifier),
			this.matchNodeWithFunctionBody(node.body, matchNode.body)
		);
	}

	/**
	 * Matches the provided node with the provided ArrowFunction
	 * @param {Node} node
	 * @param {ArrowFunction} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithArrowFunction (node: Node, matchNode: ArrowFunction): boolean {
		// If the node is not a ArrowFunction, return false
		if (!(isArrowFunction(node))) return false;

		return this.allIsMatched(
			this.matchExpression(node, matchNode),
			this.matchFunctionLikeDeclarationBase(node, matchNode),
			this.matchNodeWithEqualsGreaterThanToken(node.equalsGreaterThanToken, matchNode.equalsGreaterThanToken),
			this.matchNodeWithConciseBody(node.body, matchNode.body)
		);
	}

	/**
	 * Matches the provided node with the provided MethodSignature
	 * @param {Node} node
	 * @param {MethodSignature} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithMethodSignature (node: Node, matchNode: MethodSignature): boolean {
		// If the node is not a MethodSignature, return false
		if (!(isMethodSignature(node))) return false;

		return this.allIsMatched(
			this.matchSignatureDeclaration(node, matchNode),
			this.matchTypeElement(node, matchNode),
			this.matchNodeWithPropertyName(node.name, matchNode.name)
		);
	}

	/**
	 * Matches the provided node with the provided IndexSignatureDeclaration
	 * @param {Node} node
	 * @param {IndexSignatureDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithIndexSignatureDeclaration (node: Node, matchNode: IndexSignatureDeclaration): boolean {
		// If the node is not a IndexSignatureDeclaration, return false
		if (!(isIndexSignatureDeclaration(node))) return false;

		return this.allIsMatched(
			this.matchSignatureDeclaration(node, matchNode),
			this.matchClassElement(node, matchNode),
			this.matchTypeElement(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided MethodDeclaration
	 * @param {Node} node
	 * @param {MethodDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithMethodDeclaration (node: Node, matchNode: MethodDeclaration): boolean {
		// If the node is not a MethodDeclaration, return false
		if (!(isMethodDeclaration(node))) return false;

		return this.allIsMatched(
			this.matchFunctionLikeDeclarationBase(node, matchNode),
			this.matchClassElement(node, matchNode),
			this.matchObjectLiteralElement(node, matchNode),
			this.matchNodeWithPropertyName(node.name, matchNode.name),
			this.matchNodeIfGiven(node.body, matchNode.body, this.matchNodeWithFunctionBody)
		);
	}

	/**
	 * Matches the provided node with the provided GetAccessorDeclaration
	 * @param {Node} node
	 * @param {GetAccessorDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithGetAccessorDeclaration (node: Node, matchNode: GetAccessorDeclaration): boolean {
		// If the node is not a GetAccessorDeclaration, return false
		if (!(isGetAccessorDeclaration(node))) return false;

		return this.allIsMatched(
			this.matchFunctionLikeDeclarationBase(node, matchNode),
			this.matchClassElement(node, matchNode),
			this.matchObjectLiteralElement(node, matchNode),
			this.matchNodeWithPropertyName(node.name, matchNode.name),
			this.matchNodeWithFunctionBody(node.body, matchNode.body)
		);
	}

	/**
	 * Matches the provided node with the provided SetAccessorDeclaration
	 * @param {Node} node
	 * @param {SetAccessorDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithSetAccessorDeclaration (node: Node, matchNode: SetAccessorDeclaration): boolean {
		// If the node is not a SetAccessorDeclaration, return false
		if (!(isSetAccessorDeclaration(node))) return false;

		return this.allIsMatched(
			this.matchFunctionLikeDeclarationBase(node, matchNode),
			this.matchClassElement(node, matchNode),
			this.matchObjectLiteralElement(node, matchNode),
			this.matchNodeWithPropertyName(node.name, matchNode.name),
			this.matchNodeWithFunctionBody(node.body, matchNode.body)
		);
	}

	/**
	 * Matches the provided node with the provided ConstructorDeclaration
	 * @param {Node} node
	 * @param {ConstructorDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithConstructorDeclaration (node: Node, matchNode: ConstructorDeclaration): boolean {
		// If the node is not a ConstructorDeclaration, return false
		if (!(isConstructorDeclaration(node))) return false;

		return this.allIsMatched(
			this.matchFunctionLikeDeclarationBase(node, matchNode),
			this.matchClassElement(node, matchNode),
			this.matchNodeIfGiven(node.body, matchNode.body, this.matchNodeWithFunctionBody)
		);
	}

	/**
	 * Matches the provided node with the provided SemicolonClassElement
	 * @param {Node} node
	 * @param {SemicolonClassElement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithSemiColonClassElement (node: Node, matchNode: SemicolonClassElement): boolean {
		// If the node is not a SemicolonClassElement, return false
		if (!(isSemicolonClassElement(node))) return false;

		return this.allIsMatched(
			this.matchClassElement(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided Block
	 * @param {Node} node
	 * @param {Block} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithBlock (node: Node, matchNode: Block): boolean {
		// If the node is not a Block, return false
		if (!(isBlock(node))) return false;

		return this.allIsMatched(
			this.matchStatement(node, matchNode),
			this.matchAllNodes(node.statements, matchNode.statements, this.matchNodeWithStatement)
		);
	}

	/**
	 * Matches a Node with a FunctionBody
	 * @param {Node} node
	 * @param {FunctionBody} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithFunctionBody (node: Node, matchNode: FunctionBody): boolean {
		return this.matchNodeWithBlock(node, matchNode);
	}

	/**
	 * Matches a Node with a ConciseBody
	 * @param {Node} node
	 * @param {ConciseBody} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithConciseBody (node: Node, matchNode: ConciseBody): boolean {
		return this.matchNodeWithNode(node, matchNode);
	}

	/**
	 * Matches the provided node with the provided ConstructorTypeNode
	 * @param {Node} node
	 * @param {ConstructorTypeNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithConstructorTypeNode (node: Node, matchNode: ConstructorTypeNode): boolean {
		// If the node is not a ConstructorTypeNode, return false
		if (!(isConstructorTypeNode(node))) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchSignatureDeclaration(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided ComputedPropertyName
	 * @param {Node} node
	 * @param {ComputedPropertyName} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithComputedPropertyName (node: Node, matchNode: ComputedPropertyName): boolean {
		// If the node is not a StringLiteral, return false
		if (!isComputedPropertyName(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchNodeWithExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided BindingPattern
	 * @param {Node} node
	 * @param {BindingPattern} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithBindingPattern (node: Node, matchNode: BindingPattern): boolean {
		// If the node is not a BindingPattern, return false
		if (!isBindingPattern(node)) return false;

		if (isObjectBindingPattern(matchNode)) return this.matchNodeWithObjectBindingPattern(node, matchNode);
		else if (isArrayBindingPattern(matchNode)) return this.matchNodeWithArrayBindingPattern(node, matchNode);
		return false;
	}

	/**
	 * Matches the provided node with the provided ArrayBindingPattern
	 * @param {Node} node
	 * @param {ArrayBindingPattern} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithArrayBindingPattern (node: Node, matchNode: ArrayBindingPattern): boolean {
		// If the node is not a ObjectBindingPattern, return false
		if (!isArrayBindingPattern(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchAllNodes(node.elements, matchNode.elements, this.matchNodeWithArrayBindingElement)
		);
	}

	/**
	 * Matches a Node with a TypeNode
	 * @param {Node} node
	 * @param {TypeNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTypeNode (node: Node, matchNode: TypeNode): boolean {
		return this.matchNodeWithNode(node, matchNode);
	}

	/**
	 * Matches a Node with an Expression
	 * @param {Node} node
	 * @param {Expression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithExpression (node: Node, matchNode: Expression): boolean {
		return this.matchNodeWithNode(node, matchNode);
	}

	/**
	 * Matches a Node with an UnaryExpression
	 * @param {Node} node
	 * @param {UnaryExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithUnaryExpression (node: Node, matchNode: UnaryExpression): boolean {
		return this.matchNodeWithNode(node, matchNode);
	}

	/**
	 * Matches a Node with a Statement
	 * @param {Node} node
	 * @param {Statement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithStatement (node: Node, matchNode: Statement): boolean {
		return this.matchNodeWithNode(node, matchNode);
	}

	/**
	 * Matches a Node with a LeftHandSideExpression
	 * @param {Node} node
	 * @param {LeftHandSideExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithLeftHandSideExpression (node: Node, matchNode: LeftHandSideExpression): boolean {
		return this.matchNodeWithNode(node, matchNode);
	}

	/**
	 * Matches the provided node with the provided ObjectBindingPattern
	 * @param {Node} node
	 * @param {ObjectBindingPattern} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithObjectBindingPattern (node: Node, matchNode: ObjectBindingPattern): boolean {
		// If the node is not a ObjectBindingPattern, return false
		if (!isObjectBindingPattern(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchAllNodes(node.elements, matchNode.elements, this.matchNodeWithBindingElement)
		);
	}

	/**
	 * Matches the provided node with the provided ArrayBindingElement
	 * @param {Node} node
	 * @param {ArrayBindingElement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithArrayBindingElement (node: Node, matchNode: ArrayBindingElement): boolean {
		// If the node is not a DeclarationName, return false
		if (!isArrayBindingElement(node)) return false;

		if (isBindingElement(matchNode)) return this.matchNodeWithBindingElement(node, matchNode);
		else if (isOmittedExpression(matchNode)) return this.matchNodeWithOmittedExpression(node, matchNode);

		// The two nodes are different kinds of nodes. Return false
		return false;
	}

	/**
	 * Matches the provided node with the provided TypeElement
	 * @param {Node} node
	 * @param {TypeElement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTypeElement (node: Node, matchNode: TypeElement): boolean {
		return this.matchNodeWithNode(node, matchNode);
	}

	/**
	 * Matches the provided node with the provided HeritageClause
	 * @param {Node} node
	 * @param {HeritageClause} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithHeritageClause (node: Node, matchNode: HeritageClause): boolean {
		// Return false if the provided Node is not a HeritageClause
		if (!isHeritageClause(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchKindWithKind(node.token, matchNode.token),
			this.matchAllNodes(node.types, matchNode.types, this.matchNodeWithExpressionWithTypeArguments)
		);
	}

	/**
	 * Matches the provided node with the provided TemplateSpan
	 * @param {Node} node
	 * @param {TemplateSpan} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTemplateSpan (node: Node, matchNode: TemplateSpan): boolean {
		// Return false if the provided Node is not a TemplateSpan
		if (!isTemplateSpan(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchNodeWithExpression(node.expression, matchNode.expression),
			this.matchNodeWithNode(node.literal, matchNode.literal)
		);
	}

	/**
	 * Matches the provided node with the provided TypeParameterDeclaration
	 * @param {Node} node
	 * @param {TypeParameterDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTypeParameterDeclaration (node: Node, matchNode: TypeParameterDeclaration): boolean {
		// If the node is not a TypeParameterDeclaration, return false
		if (!isTypeParameterDeclaration(node)) return false;

		return this.allIsMatched(
			this.matchNamedDeclaration(node, matchNode),
			this.matchNodeWithIdentifier(node.name, matchNode.name),
			this.matchNodeIfGiven(node.constraint, matchNode.constraint, this.matchNodeWithTypeNode),
			this.matchNodeIfGiven(node.default, matchNode.default, this.matchNodeWithTypeNode),
			this.matchNodeIfGiven(node.expression, matchNode.expression, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches a node with a ClassElement
	 * @param {Node} node
	 * @param {ClassElement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithClassElement (node: Node, matchNode: ClassElement): boolean {
		return this.matchNodeWithNode(node, matchNode);
	}

	/**
	 * Matches the provided node with the provided PropertyDeclaration
	 * @param {Node} node
	 * @param {PropertyDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithPropertyDeclaration (node: Node, matchNode: PropertyDeclaration): boolean {
		// If the node is not a PropertyDeclaration, return false
		if (!isPropertyDeclaration(node)) return false;

		return this.allIsMatched(
			this.matchClassElement(node, matchNode),
			this.matchNodeIfGiven(node.questionToken, matchNode.questionToken, this.matchNodeWithQuestionToken),
			this.matchNodeWithPropertyName(node.name, matchNode.name),
			this.matchNodeIfGiven(node.type, matchNode.type, this.matchNodeWithTypeNode),
			this.matchNodeIfGiven(node.initializer, matchNode.initializer, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches the provided node with the provided PropertyAssignment
	 * @param {Node} node
	 * @param {PropertyAssignment} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithPropertyAssignment (node: Node, matchNode: PropertyAssignment): boolean {
		// If the node is not a PropertyAssignment, return false
		if (!isPropertyAssignment(node)) return false;

		return this.allIsMatched(
			this.matchObjectLiteralElement(node, matchNode),
			this.matchNodeWithPropertyName(node.name, matchNode.name),
			this.matchNodeIfGiven(node.questionToken, matchNode.questionToken, this.matchNodeWithQuestionToken),
			this.matchNodeWithExpression(node.initializer, matchNode.initializer)
		);
	}

	/**
	 * Matches the provided node with the provided PropertyAccessExpression
	 * @param {Node} node
	 * @param {PropertyAccessExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithPropertyAccessExpression (node: Node, matchNode: PropertyAccessExpression): boolean {
		// If the node is not a PropertyAccessExpression, return false
		if (!isPropertyAccessExpression(node)) return false;

		return this.allIsMatched(
			this.matchMemberExpression(node, matchNode),
			this.matchNamedDeclaration(node, matchNode),
			this.matchNodeWithLeftHandSideExpression(node.expression, matchNode.expression),
			this.matchNodeWithIdentifier(node.name, matchNode.name)
		);
	}

	/**
	 * Matches the provided node with the provided ElementAccessExpression
	 * @param {Node} node
	 * @param {ElementAccessExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithElementAccessExpression (node: Node, matchNode: ElementAccessExpression): boolean {
		// If the node is not a ElementAccessExpression, return false
		if (!isElementAccessExpression(node)) return false;

		return this.allIsMatched(
			this.matchMemberExpression(node, matchNode),
			this.matchNodeWithLeftHandSideExpression(node.expression, matchNode.expression),
			this.matchNodeIfGiven(node.argumentExpression, matchNode.argumentExpression, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches the provided node with the provided CallExpression
	 * @param {Node} node
	 * @param {CallExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithCallExpression (node: Node, matchNode: CallExpression): boolean {
		// If the node is not a CallExpression, return false
		if (!isCallExpression(node)) return false;

		return this.allIsMatched(
			this.matchLeftHandSideExpression(node, matchNode),
			this.matchDeclaration(node, matchNode),
			this.matchNodeWithLeftHandSideExpression(node.expression, matchNode.expression),
			this.matchAllNodesIfGiven(node.typeArguments, matchNode.typeArguments, this.matchNodeWithTypeNode),
			this.matchAllNodes(node.arguments, matchNode.arguments, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches the provided node with the provided IfStatement
	 * @param {Node} node
	 * @param {IfStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithIfStatement (node: Node, matchNode: IfStatement): boolean {
		// If the node is not a IfStatement, return false
		if (!isIfStatement(node)) return false;

		return this.allIsMatched(
			this.matchStatement(node, matchNode),
			this.matchNodeWithExpression(node.expression, matchNode.expression),
			this.matchNodeWithStatement(node.thenStatement, matchNode.thenStatement),
			this.matchNodeIfGiven(node.elseStatement, matchNode.elseStatement, this.matchNodeWithStatement)
		);
	}

	/**
	 * Matches the provided node with the provided DoStatement
	 * @param {Node} node
	 * @param {DoStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithDoStatement (node: Node, matchNode: DoStatement): boolean {
		// If the node is not a DoStatement, return false
		if (!isDoStatement(node)) return false;

		return this.allIsMatched(
			this.matchIterationStatement(node, matchNode),
			this.matchNodeWithExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided DoStatement
	 * @param {Node} node
	 * @param {DoStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithWhileStatement (node: Node, matchNode: WhileStatement): boolean {
		// If the node is not a WhileStatement, return false
		if (!isWhileStatement(node)) return false;

		return this.allIsMatched(
			this.matchIterationStatement(node, matchNode),
			this.matchNodeWithExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided ForStatement
	 * @param {Node} node
	 * @param {ForStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithForStatement (node: Node, matchNode: ForStatement): boolean {
		// If the node is not a ForStatement, return false
		if (!isForStatement(node)) return false;

		return this.allIsMatched(
			this.matchIterationStatement(node, matchNode),
			this.matchNodeIfGiven(node.initializer, matchNode.initializer, this.matchNodeWithForInitializer),
			this.matchNodeIfGiven(node.condition, matchNode.condition, this.matchNodeWithExpression),
			this.matchNodeIfGiven(node.incrementor, matchNode.incrementor, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches the provided node with the provided ForInStatement
	 * @param {Node} node
	 * @param {ForInStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithForInStatement (node: Node, matchNode: ForInStatement): boolean {
		// If the node is not a ForInStatement, return false
		if (!isForInStatement(node)) return false;

		return this.allIsMatched(
			this.matchIterationStatement(node, matchNode),
			this.matchNodeWithForInitializer(node.initializer, matchNode.initializer),
			this.matchNodeWithExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided ForOfStatement
	 * @param {Node} node
	 * @param {ForOfStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithForOfStatement (node: Node, matchNode: ForOfStatement): boolean {
		// If the node is not a ForOfStatement, return false
		if (!isForOfStatement(node)) return false;

		return this.allIsMatched(
			this.matchIterationStatement(node, matchNode),
			this.matchNodeIfGiven(node.awaitModifier, matchNode.awaitModifier, this.matchNodeWithAwaitKeywordToken),
			this.matchNodeWithForInitializer(node.initializer, matchNode.initializer),
			this.matchNodeWithExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided BreakStatement
	 * @param {Node} node
	 * @param {BreakStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithBreakStatement (node: Node, matchNode: BreakStatement): boolean {
		// If the node is not a BreakStatement, return false
		if (!isBreakStatement(node)) return false;

		return this.allIsMatched(
			this.matchStatement(node, matchNode),
			this.matchNodeIfGiven(node.label, matchNode.label, this.matchNodeWithIdentifier)
		);
	}

	/**
	 * Matches the provided node with the provided ContinueStatement
	 * @param {Node} node
	 * @param {ContinueStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithContinueStatement (node: Node, matchNode: ContinueStatement): boolean {
		// If the node is not a ContinueStatement, return false
		if (!isContinueStatement(node)) return false;

		return this.allIsMatched(
			this.matchStatement(node, matchNode),
			this.matchNodeIfGiven(node.label, matchNode.label, this.matchNodeWithIdentifier)
		);
	}

	/**
	 * Matches the provided node with the provided ReturnStatement
	 * @param {Node} node
	 * @param {ReturnStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithReturnStatement (node: Node, matchNode: ReturnStatement): boolean {
		// If the node is not a ReturnStatement, return false
		if (!isReturnStatement(node)) return false;

		return this.allIsMatched(
			this.matchStatement(node, matchNode),
			this.matchNodeIfGiven(node.expression, matchNode.expression, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches the provided node with the provided CaseClause
	 * @param {Node} node
	 * @param {CaseClause} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithCaseClause (node: Node, matchNode: CaseClause): boolean {
		// If the node is not a CaseClause, return false
		if (!isCaseClause(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchNodeWithExpression(node.expression, matchNode.expression),
			this.matchAllNodes(node.statements, matchNode.statements, this.matchNodeWithStatement)
		);
	}

	/**
	 * Matches the provided node with the provided DefaultClause
	 * @param {Node} node
	 * @param {DefaultClause} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithDefaultClause (node: Node, matchNode: DefaultClause): boolean {
		// If the node is not a DefaultClause, return false
		if (!isDefaultClause(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchAllNodes(node.statements, matchNode.statements, this.matchNodeWithStatement)
		);
	}

	/**
	 * Matches the provided node with the provided LabeledStatement
	 * @param {Node} node
	 * @param {LabeledStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithLabeledStatement (node: Node, matchNode: LabeledStatement): boolean {
		// If the node is not a LabeledStatement, return false
		if (!isLabeledStatement(node)) return false;

		return this.allIsMatched(
			this.matchStatement(node, matchNode),
			this.matchNodeWithIdentifier(node.label, matchNode.label),
			this.matchNodeWithStatement(node.statement, matchNode.statement)
		);
	}

	/**
	 * Matches the provided node with the provided ThrowStatement
	 * @param {Node} node
	 * @param {ThrowStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithThrowStatement (node: Node, matchNode: ThrowStatement): boolean {
		// If the node is not a ThrowStatement, return false
		if (!isThrowStatement(node)) return false;

		return this.allIsMatched(
			this.matchStatement(node, matchNode),
			this.matchNodeWithExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided TryStatement
	 * @param {Node} node
	 * @param {TryStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTryStatement (node: Node, matchNode: TryStatement): boolean {
		// If the node is not a TryStatement, return false
		if (!isTryStatement(node)) return false;

		return this.allIsMatched(
			this.matchStatement(node, matchNode),
			this.matchNodeWithBlock(node.tryBlock, matchNode.tryBlock),
			this.matchNodeIfGiven(node.catchClause, matchNode.catchClause, this.matchNodeWithCatchClause),
			this.matchNodeIfGiven(node.finallyBlock, matchNode.finallyBlock, this.matchNodeWithBlock)
		);
	}

	/**
	 * Matches the provided node with the provided CatchClause
	 * @param {Node} node
	 * @param {CatchClause} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithCatchClause (node: Node, matchNode: CatchClause): boolean {
		// If the node is not a CatchClause, return false
		if (!isCatchClause(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchNodeIfGiven(node.variableDeclaration, matchNode.variableDeclaration, this.matchNodeWithVariableDeclaration),
			this.matchNodeWithBlock(node.block, matchNode.block)
		);
	}

	/**
	 * Matches the provided node with the provided WithStatement
	 * @param {Node} node
	 * @param {WithStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithWithStatement (node: Node, matchNode: WithStatement): boolean {
		// If the node is not a WithStatement, return false
		if (!isWithStatement(node)) return false;

		return this.allIsMatched(
			this.matchStatement(node, matchNode),
			this.matchNodeWithExpression(node.expression, matchNode.expression),
			this.matchNodeWithStatement(node.statement, matchNode.statement)
		);
	}

	/**
	 * Matches the provided node with the provided SwitchStatement
	 * @param {Node} node
	 * @param {SwitchStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithSwitchStatement (node: Node, matchNode: SwitchStatement): boolean {
		// If the node is not a SwitchStatement, return false
		if (!isSwitchStatement(node)) return false;

		return this.allIsMatched(
			this.matchStatement(node, matchNode),
			this.matchNodeWithExpression(node.expression, matchNode.expression),
			this.matchNodeWithCaseBlock(node.caseBlock, matchNode.caseBlock)
		);
	}

	/**
	 * Matches the provided node with the provided CaseBlock
	 * @param {Node} node
	 * @param {CaseBlock} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithCaseBlock (node: Node, matchNode: CaseBlock): boolean {
		// If the node is not a CaseBlock, return false
		if (!isCaseBlock(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchAllNodes(node.clauses, matchNode.clauses, this.matchNodeWithCaseOrDefaultClause)
		);
	}

	/**
	 * Matches the provided node with the provided MissingDeclaration
	 * @param {Node} node
	 * @param {MissingDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithMissingDeclaration (node: Node, matchNode: MissingDeclaration): boolean {
		// If the node is not a MissingDeclaration, return false
		if (!isMissingDeclaration(node)) return false;

		return this.allIsMatched(
			this.matchDeclarationStatement(node, matchNode),
			this.matchClassElement(node, matchNode),
			this.matchObjectLiteralElement(node, matchNode),
			this.matchTypeElement(node, matchNode),
			this.matchNodeIfGiven(node.name, matchNode.name, this.matchNodeWithIdentifier)
		);
	}

	/**
	 * Matches the provided node with the provided VariableStatement
	 * @param {Node} node
	 * @param {VariableStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithVariableStatement (node: Node, matchNode: VariableStatement): boolean {
		// If the node is not a VariableStatement, return false
		if (!isVariableStatement(node)) return false;

		return this.allIsMatched(
			this.matchStatement(node, matchNode),
			this.matchNodeWithVariableDeclarationList(node.declarationList, matchNode.declarationList)
		);
	}

	/**
	 * Matches the provided node with the provided ExpressionStatement
	 * @param {Node} node
	 * @param {ExpressionStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithExpressionStatement (node: Node, matchNode: ExpressionStatement): boolean {
		// If the node is not a ExpressionStatement, return false
		if (!isExpressionStatement(node)) return false;

		return this.allIsMatched(
			this.matchStatement(node, matchNode),
			this.matchNodeWithExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided NewExpression
	 * @param {Node} node
	 * @param {NewExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithNewExpression (node: Node, matchNode: NewExpression): boolean {
		// If the node is not a NewExpression, return false
		if (!isNewExpression(node)) return false;

		return this.allIsMatched(
			this.matchPrimaryExpression(node, matchNode),
			this.matchDeclaration(node, matchNode),
			this.matchNodeWithLeftHandSideExpression(node.expression, matchNode.expression),
			this.matchAllNodesIfGiven(node.typeArguments, matchNode.typeArguments, this.matchNodeWithTypeNode),
			this.matchAllNodesIfGiven(node.arguments, matchNode.arguments, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches the provided node with the provided TaggedTemplateExpression
	 * @param {Node} node
	 * @param {TaggedTemplateExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTaggedTemplateExpression (node: Node, matchNode: TaggedTemplateExpression): boolean {
		// If the node is not a TaggedTemplateExpression, return false
		if (!isTaggedTemplateExpression(node)) return false;

		return this.allIsMatched(
			this.matchMemberExpression(node, matchNode),
			this.matchNodeWithLeftHandSideExpression(node.tag, matchNode.tag),
			this.matchNodeWithTemplateLiteral(node.template, matchNode.template)
		);
	}

	/**
	 * Matches a Node with a TemplateLiteral
	 * @param {Node} node
	 * @param {TemplateLiteral} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTemplateLiteral (node: Node, matchNode: TemplateLiteral): boolean {
		if (!isTemplateLiteral(node)) return false;

		if (isTemplateExpression(matchNode)) return this.matchNodeWithTemplateExpression(node, matchNode);
		return this.matchNodeWithNoSubstitutionTemplateLiteral(node, matchNode);
	}

	/**
	 * Matches the provided node with the provided AsExpression
	 * @param {Node} node
	 * @param {AsExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithAsExpression (node: Node, matchNode: AsExpression): boolean {
		// If the node is not a TaggedTemplateExpression, return false
		if (!isAsExpression(node)) return false;

		return this.allIsMatched(
			this.matchExpression(node, matchNode),
			this.matchNodeWithExpression(node.expression, matchNode.expression),
			this.matchNodeWithTypeNode(node.type, matchNode.type)
		);
	}

	/**
	 * Matches the provided node with the provided TypeAssertion
	 * @param {Node} node
	 * @param {TypeAssertion} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTypeAssertion (node: Node, matchNode: TypeAssertion): boolean {
		// If the node is not a TypeAssertion, return false
		if (!isTypeAssertion(node)) return false;

		return this.allIsMatched(
			this.matchUnaryExpression(node, matchNode),
			this.matchNodeWithTypeNode(node.type, matchNode.type),
			this.matchNodeWithUnaryExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided NonNullExpression
	 * @param {Node} node
	 * @param {NonNullExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithNonNullExpression (node: Node, matchNode: NonNullExpression): boolean {
		// If the node is not a NonNullExpression, return false
		if (!isNonNullExpression(node)) return false;

		return this.allIsMatched(
			this.matchLeftHandSideExpression(node, matchNode),
			this.matchNodeWithExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided MetaProperty
	 * @param {Node} node
	 * @param {MetaProperty} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithMetaProperty (node: Node, matchNode: MetaProperty): boolean {
		// If the node is not a MetaProperty, return false
		if (!isMetaProperty(node)) return false;

		return this.allIsMatched(
			this.matchPrimaryExpression(node, matchNode),
			this.matchKindWithKind(node.keywordToken, matchNode.keywordToken),
			this.matchNodeWithIdentifier(node.name, matchNode.name)
		);
	}

	/**
	 * Matches the provided node with the provided JsxElement
	 * @param {Node} node
	 * @param {JsxElement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJsxElement (node: Node, matchNode: JsxElement): boolean {
		// If the node is not a JsxElement, return false
		if (!isJsxElement(node)) return false;

		return this.allIsMatched(
			this.matchPrimaryExpression(node, matchNode),
			this.matchNodeWithJsxOpeningElement(node.openingElement, matchNode.openingElement),
			this.matchAllNodes(node.children, matchNode.children, this.matchNodeWithJsxChild),
			this.matchNodeWithJsxClosingElement(node.closingElement, matchNode.closingElement)
		);
	}

	/**
	 * Matches a Node with a JsxChild
	 * @param {Node} node
	 * @param {JsxChild} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJsxChild (node: Node, matchNode: JsxChild): boolean {
		return this.matchNodeWithNode(node, matchNode);
	}

	/**
	 * Matches the provided node with the provided JsxOpeningElement
	 * @param {Node} node
	 * @param {JsxOpeningElement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJsxOpeningElement (node: Node, matchNode: JsxOpeningElement): boolean {
		// If the node is not a JsxOpeningElement, return false
		if (!isJsxOpeningElement(node)) return false;

		return this.allIsMatched(
			this.matchExpression(node, matchNode),
			this.matchNodeWithJsxTagNameExpression(node.tagName, matchNode.tagName),
			this.matchNodeWithJsxAttributes(node.attributes, matchNode.attributes)
		);
	}

	/**
	 * Matches the provided node with the provided JsxExpression
	 * @param {Node} node
	 * @param {JsxExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJsxExpression (node: Node, matchNode: JsxExpression): boolean {
		// If the node is not a JsxExpression, return false
		if (!isJsxExpression(node)) return false;

		return this.allIsMatched(
			this.matchExpression(node, matchNode),
			this.matchNodeIfGiven(node.dotDotDotToken, matchNode.dotDotDotToken, this.matchNodeWithToken),
			this.matchNodeIfGiven(node.expression, matchNode.expression, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches the provided node with the provided JsxText
	 * @param {Node} node
	 * @param {JsxText} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJsxText (node: Node, matchNode: JsxText): boolean {
		// If the node is not a JsxText, return false
		if (!isJsxText(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			node.containsOnlyWhiteSpaces === matchNode.containsOnlyWhiteSpaces
		);
	}

	/**
	 * Matches the provided node with the provided JsxClosingElement
	 * @param {Node} node
	 * @param {JsxClosingElement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJsxClosingElement (node: Node, matchNode: JsxClosingElement): boolean {
		// If the node is not a JsxClosingElement, return false
		if (!isJsxClosingElement(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchNodeWithJsxTagNameExpression(node.tagName, matchNode.tagName)
		);
	}

	/**
	 * Matches the provided node with the provided JsxSelfClosingElement
	 * @param {Node} node
	 * @param {JsxSelfClosingElement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJsxSelfClosingElement (node: Node, matchNode: JsxSelfClosingElement): boolean {
		// If the node is not a JsxSelfClosingElement, return false
		if (!isJsxSelfClosingElement(node)) return false;

		return this.allIsMatched(
			this.matchPrimaryExpression(node, matchNode),
			this.matchNodeWithJsxAttributes(node.attributes, matchNode.attributes)
		);
	}

	/**
	 * Matches the provided node with the provided JsxAttributes
	 * @param {Node} node
	 * @param {JsxAttributes} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJsxAttributes (node: Node, matchNode: JsxAttributes): boolean {
		// If the node is not a JsxAttributes, return false
		if (!isJsxAttributes(node)) return false;

		return this.allIsMatched(
			this.matchObjectLiteralExpressionBase(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided JsxAttribute
	 * @param {Node} node
	 * @param {JsxAttribute} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJsxAttribute (node: Node, matchNode: JsxAttribute): boolean {
		// If the node is not a JsxAttribute, return false
		if (!isJsxAttribute(node)) return false;

		return this.allIsMatched(
			this.matchObjectLiteralElement(node, matchNode),
			this.matchNodeWithIdentifier(node.name, matchNode.name),
			this.matchNodeIfGiven(node.initializer, matchNode.initializer, this.matchNodeWithNode)
		);
	}

	/**
	 * Matches the provided node with the provided ImportSpecifier
	 * @param {Node} node
	 * @param {ImportSpecifier} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithImportSpecifier (node: Node, matchNode: ImportSpecifier): boolean {
		// If the node is not a ImportSpecifier, return false
		if (!isImportSpecifier(node)) return false;

		return this.allIsMatched(
			this.matchNamedDeclaration(node, matchNode),
			this.matchNodeIfGiven(node.propertyName, matchNode.propertyName, this.matchNodeWithIdentifier),
			this.matchNodeWithIdentifier(node.name, matchNode.name)
		);
	}

	/**
	 * Matches the provided node with the provided ExportSpecifier
	 * @param {Node} node
	 * @param {ExportSpecifier} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithExportSpecifier (node: Node, matchNode: ExportSpecifier): boolean {
		// If the node is not a ImportSpecifier, return false
		if (!isExportSpecifier(node)) return false;

		return this.allIsMatched(
			this.matchNamedDeclaration(node, matchNode),
			this.matchNodeIfGiven(node.propertyName, matchNode.propertyName, this.matchNodeWithIdentifier),
			this.matchNodeWithIdentifier(node.name, matchNode.name)
		);
	}

	/**
	 * Matches the provided node with the provided JsxSpreadAttribute
	 * @param {Node} node
	 * @param {JsxSpreadAttribute} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJsxSpreadAttribute (node: Node, matchNode: JsxSpreadAttribute): boolean {
		// If the node is not a JsxSpreadAttribute, return false
		if (!isJsxSpreadAttribute(node)) return false;

		return this.allIsMatched(
			this.matchObjectLiteralElement(node, matchNode),
			this.matchNodeWithExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided ExpressionWithTypeArguments
	 * @param {Node} node
	 * @param {ExpressionWithTypeArguments} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithExpressionWithTypeArguments (node: Node, matchNode: ExpressionWithTypeArguments): boolean {
		// If the node is not a ExpressionWithTypeArguments, return false
		if (!isExpressionWithTypeArguments(node)) return false;

		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchNodeWithLeftHandSideExpression(node.expression, matchNode.expression),
			this.matchAllNodesIfGiven(node.typeArguments, matchNode.typeArguments, this.matchNodeWithTypeNode)
		);
	}

	/**
	 * Matches the provided node with the provided ShorthandPropertyAssignment
	 * @param {Node} node
	 * @param {ShorthandPropertyAssignment} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithShorthandPropertyAssignment (node: Node, matchNode: ShorthandPropertyAssignment): boolean {
		// If the node is not a ShorthandPropertyAssignment, return false
		if (!isShorthandPropertyAssignment(node)) return false;

		return this.allIsMatched(
			this.matchObjectLiteralElement(node, matchNode),
			this.matchNodeWithIdentifier(node.name, matchNode.name),
			this.matchNodeIfGiven(node.questionToken, matchNode.questionToken, this.matchNodeWithQuestionToken),
			this.matchNodeIfGiven(node.equalsToken, matchNode.equalsToken, this.matchNodeWithToken),
			this.matchNodeIfGiven(node.objectAssignmentInitializer, matchNode.objectAssignmentInitializer, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches the provided node with the provided SpreadAssignment
	 * @param {Node} node
	 * @param {SpreadAssignment} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithSpreadAssignment (node: Node, matchNode: SpreadAssignment): boolean {
		// If the node is not a SpreadAssignment, return false
		if (!isSpreadAssignment(node)) return false;

		return this.allIsMatched(
			this.matchObjectLiteralElement(node, matchNode),
			this.matchNodeWithExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided ParameterDeclaration
	 * @param {Node} node
	 * @param {ParameterDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithParameterDeclaration (node: Node, matchNode: ParameterDeclaration): boolean {
		// If the node is not a ParameterDeclaration, return false
		if (!isParameter(node)) return false;

		return this.allIsMatched(
			this.matchNamedDeclaration(node, matchNode),
			this.matchNodeIfGiven(node.dotDotDotToken, matchNode.dotDotDotToken, this.matchNodeWithDotDotDotToken),
			this.matchNodeWithBindingName(node.name, matchNode.name),
			this.matchNodeIfGiven(node.questionToken, matchNode.questionToken, this.matchNodeWithQuestionToken),
			this.matchNodeIfGiven(node.type, matchNode.type, this.matchNodeWithTypeNode),
			this.matchNodeIfGiven(node.initializer, matchNode.initializer, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches the provided node with the provided PropertySignature
	 * @param {Node} node
	 * @param {PropertySignature} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithPropertySignature (node: Node, matchNode: PropertySignature): boolean {
		// If the node is not a PropertySignature, return false
		if (!isPropertySignature(node)) return false;

		return this.allIsMatched(
			this.matchTypeElement(node, matchNode),
			this.matchNodeWithPropertyName(node.name, matchNode.name),
			this.matchNodeIfGiven(node.questionToken, matchNode.questionToken, this.matchNodeWithQuestionToken),
			this.matchNodeIfGiven(node.type, matchNode.type, this.matchNodeWithTypeNode),
			this.matchNodeIfGiven(node.initializer, matchNode.initializer, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches the provided node with the provided ImportEqualsDeclaration
	 * @param {Node} node
	 * @param {ImportEqualsDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithImportEqualsDeclaration (node: Node, matchNode: ImportEqualsDeclaration): boolean {
		// If the node is not a ImportEqualsDeclaration, return false
		if (!isImportEqualsDeclaration(node)) return false;

		return this.allIsMatched(
			this.matchDeclarationStatement(node, matchNode),
			this.matchNodeWithIdentifier(node.name, matchNode.name),
			this.matchNodeWithModuleReference(node.moduleReference, matchNode.moduleReference)
		);
	}

	/**
	 * Matches the provided node with the provided ImportDeclaration
	 * @param {Node} node
	 * @param {ImportDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithImportDeclaration (node: Node, matchNode: ImportDeclaration): boolean {
		// If the node is not a ImportDeclaration, return false
		if (!isImportDeclaration(node)) return false;

		return this.allIsMatched(
			this.matchStatement(node, matchNode),
			this.matchNodeIfGiven(node.importClause, matchNode.importClause, this.matchNodeWithImportClause),
			this.matchNodeWithExpression(node.moduleSpecifier, matchNode.moduleSpecifier)
		);
	}

	/**
	 * Matches the provided node with the provided ImportClause
	 * @param {Node} node
	 * @param {ImportClause} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithImportClause (node: Node, matchNode: ImportClause): boolean {
		// If the node is not a ImportClause, return false
		if (!isImportClause(node)) return false;

		return this.allIsMatched(
			this.matchNamedDeclaration(node, matchNode),
			this.matchNodeIfGiven(node.name, matchNode.name, this.matchNodeWithIdentifier),
			this.matchNodeIfGiven(node.namedBindings, matchNode.namedBindings, this.matchNodeWithNamedImportBindings)
		);
	}

	/**
	 * Matches the provided node with the provided NamespaceExportDeclaration
	 * @param {Node} node
	 * @param {NamespaceExportDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithNamespaceExportDeclaration (node: Node, matchNode: NamespaceExportDeclaration): boolean {
		// If the node is not a NamespaceExportDeclaration, return false
		if (!isNamespaceExportDeclaration(node)) return false;

		return this.allIsMatched(
			this.matchDeclarationStatement(node, matchNode),
			this.matchNodeWithIdentifier(node.name, matchNode.name)
		);
	}

	/**
	 * Matches the provided node with the provided ExportDeclaration
	 * @param {Node} node
	 * @param {ExportDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithExportDeclaration (node: Node, matchNode: ExportDeclaration): boolean {
		// If the node is not a ExportDeclaration, return false
		if (!isExportDeclaration(node)) return false;

		return this.allIsMatched(
			this.matchDeclarationStatement(node, matchNode),
			this.matchNodeIfGiven(node.exportClause, matchNode.exportClause, this.matchNodeWithNamedExports),
			this.matchNodeIfGiven(node.moduleSpecifier, matchNode.moduleSpecifier, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches the provided node with the provided ExportAssignment
	 * @param {Node} node
	 * @param {ExportAssignment} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithExportAssignment (node: Node, matchNode: ExportAssignment): boolean {
		// If the node is not a ExportAssignment, return false
		if (!isExportAssignment(node)) return false;

		return this.allIsMatched(
			this.matchDeclarationStatement(node, matchNode),
			node.isExportEquals === matchNode.isExportEquals,
			this.matchNodeWithExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided NamedExports
	 * @param {Node} node
	 * @param {NamedExports} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithNamedExports (node: Node, matchNode: NamedExports): boolean {
		// If the node is not a NamedExports, return false
		if (!isNamedExports(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchAllNodes(node.elements, matchNode.elements, this.matchNodeWithExportSpecifier)
		);
	}

	/**
	 * Matches the provided node with the provided NamespaceImport
	 * @param {Node} node
	 * @param {NamespaceImport} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithNamespaceImport (node: Node, matchNode: NamespaceImport): boolean {
		// If the node is not a NamespaceImport, return false
		if (!isNamespaceImport(node)) return false;

		return this.allIsMatched(
			this.matchNamedDeclaration(node, matchNode),
			this.matchNodeWithIdentifier(node.name, matchNode.name)
		);
	}

	/**
	 * Matches the provided node with the provided NamedImports
	 * @param {Node} node
	 * @param {NamedImports} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithNamedImports (node: Node, matchNode: NamedImports): boolean {
		// If the node is not a NamedImports, return false
		if (!isNamedImports(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchAllNodes(node.elements, matchNode.elements, this.matchNodeWithImportSpecifier)
		);
	}

	/**
	 * Matches the provided node with the provided Token
	 * @template TKind
	 * @param {Node} node
	 * @param {Token<TKind>} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithToken<TKind extends SyntaxKind> (node: Node, matchNode: Token<TKind>): boolean {
		// If the provided Node is not a token, return false
		if (!isToken(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchKindWithKind(node.kind, matchNode.kind)
		);
	}

	/**
	 * Matches a Node with a QuestionToken
	 * @param {Node} node
	 * @param {QuestionToken} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithQuestionToken (node: Node, matchNode: QuestionToken): boolean {
		return this.matchNodeWithToken(node, matchNode);
	}

	/**
	 * Matches a Node with an AtToken
	 * @param {Node} node
	 * @param {AtToken} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithAtToken (node: Node, matchNode: AtToken): boolean {
		return this.matchNodeWithToken(node, matchNode);
	}

	/**
	 * Matches a Node with a DotDotDotToken
	 * @param {Node} node
	 * @param {DotDotDotToken} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithDotDotDotToken (node: Node, matchNode: DotDotDotToken): boolean {
		return this.matchNodeWithToken(node, matchNode);
	}

	/**
	 * Matches a Node with an AwaitKeywordToken
	 * @param {Node} node
	 * @param {AwaitKeywordToken} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithAwaitKeywordToken (node: Node, matchNode: AwaitKeywordToken): boolean {
		return this.matchNodeWithToken(node, matchNode);
	}

	/**
	 * Matches a Node with an EqualsGreaterThanToken
	 * @param {Node} node
	 * @param {EqualsGreaterThanToken} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithEqualsGreaterThanToken (node: Node, matchNode: EqualsGreaterThanToken): boolean {
		return this.matchNodeWithToken(node, matchNode);
	}

	/**
	 * Matches a Node with a ColonToken
	 * @param {Node} node
	 * @param {ColonToken} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithColonToken (node: Node, matchNode: ColonToken): boolean {
		return this.matchNodeWithToken(node, matchNode);
	}

	/**
	 * Matches a Node with a BinaryOperatorToken
	 * @param {Node} node
	 * @param {BinaryOperatorToken} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithBinaryOperatorToken (node: Node, matchNode: BinaryOperatorToken): boolean {
		return this.matchNodeWithToken(node, matchNode);
	}

	/**
	 * Matches a Node with an AsteriskToken
	 * @param {Node} node
	 * @param {AsteriskToken} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithAsteriskToken (node: Node, matchNode: AsteriskToken): boolean {
		return this.matchNodeWithToken(node, matchNode);
	}

	/**
	 * Matches a Node with a ReadonlyToken
	 * @param {Node} node
	 * @param {ReadonlyToken} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithReadonlyToken (node: Node, matchNode: ReadonlyToken): boolean {
		return this.matchNodeWithToken(node, matchNode);
	}

	/**
	 * Matches the provided node with the provided Modifier
	 * @param {Node} node
	 * @param {Modifier} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithModifier (node: Node, matchNode: Modifier): boolean {
		return this.matchNodeWithToken(node, matchNode);
	}

	/**
	 * Matches the provided node with the provided OmittedExpression
	 * @param {Node} node
	 * @param {OmittedExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithOmittedExpression (node: Node, matchNode: OmittedExpression): boolean {
		// If the node is no an OmittedExpression, return false
		if (!isOmittedExpression(node)) return false;

		return this.allIsMatched(
			this.matchExpression(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided BindingElement
	 * @param {Node} node
	 * @param {BindingElement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithBindingElement (node: Node, matchNode: BindingElement): boolean {
		// If the node is not a BindingElement, return false
		if (!isBindingElement(node)) return false;

		return this.allIsMatched(
			this.matchNamedDeclaration(node, matchNode),
			this.matchNodeIfGiven(node.propertyName, matchNode.propertyName, this.matchNodeWithPropertyName),
			this.matchNodeIfGiven(node.dotDotDotToken, matchNode.dotDotDotToken, this.matchNodeWithDotDotDotToken),
			this.matchNodeWithBindingName(node.name, matchNode.name),
			this.matchNodeIfGiven(node.initializer, matchNode.initializer, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches the provided node with the provided VariableDeclaration
	 * @param {Node} node
	 * @param {VariableDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithVariableDeclaration (node: Node, matchNode: VariableDeclaration): boolean {
		// If the node is not a VariableDeclaration, return false
		if (!isVariableDeclaration(node)) return false;

		return this.allIsMatched(
			this.matchNamedDeclaration(node, matchNode),
			this.matchNodeWithBindingName(node.name, matchNode.name),
			this.matchNodeIfGiven(node.type, matchNode.type, this.matchNodeWithTypeNode),
			this.matchNodeIfGiven(node.initializer, matchNode.initializer, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches the provided node with the provided VariableDeclarationList
	 * @param {Node} node
	 * @param {VariableDeclarationList} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithVariableDeclarationList (node: Node, matchNode: VariableDeclarationList): boolean {
		// If the node is not a VariableDeclarationList, return false
		if (!isVariableDeclarationList(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchAllNodes(node.declarations, matchNode.declarations, this.matchNodeWithVariableDeclaration)
		);
	}

	/**
	 * Matches the provided node with the provided BindingName
	 * @param {Node} node
	 * @param {BindingName} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithBindingName (node: Node, matchNode: BindingName): boolean {
		// If the node is not a BindingName, return false
		if (!isBindingName(node)) return false;

		if (isIdentifier(matchNode)) return this.matchNodeWithIdentifier(node, matchNode);
		else if (isBindingPattern(matchNode)) return this.matchNodeWithBindingPattern(node, matchNode);

		// The two nodes are different kinds of nodes. Return false
		return false;
	}

	/**
	 * Matches the provided node with the provided DeclarationName
	 * @param {Node} node
	 * @param {DeclarationName} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithDeclarationName (node: Node, matchNode: DeclarationName): boolean {
		// If the node is not a DeclarationName, return false
		if (!isDeclarationName(node)) return false;

		// If both nodes are identifiers, call matchNodeWithIdentifier
		if (isIdentifier(matchNode)) return this.matchNodeWithIdentifier(node, matchNode);

		// If both nodes are StringLiterals, call matchNodeWithStringLiteral
		else if (isStringLiteral(matchNode)) return this.matchNodeWithStringLiteral(node, matchNode);

		// If both nodes are NumericLiterals, call matchNodeWithNumericLiteral
		else if (isNumericLiteral(matchNode)) return this.matchNodeWithNumericLiteral(node, matchNode);

		// If both nodes are ComputedPropertyNames, call matchNodeWithComputedPropertyName
		else if (isComputedPropertyName(matchNode)) return this.matchNodeWithComputedPropertyName(node, matchNode);

		// If both nodes are BindingPatterns, call matchNodeWithBindingPattern
		else if (isBindingPattern(matchNode)) return this.matchNodeWithBindingPattern(node, matchNode);

		// The two nodes are different kinds of nodes. Return false
		return false;
	}

	/**
	 * Matches the provided node with the provided EntityName
	 * @param {Node} node
	 * @param {EntityName} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithPropertyName (node: Node, matchNode: PropertyName): boolean {
		// If the node is not a PropertyName, return false
		if (!isPropertyName(node)) return false;

		// If both nodes are identifiers, call matchNodeWithIdentifier
		if (isIdentifier(matchNode)) return this.matchNodeWithIdentifier(node, matchNode);

		// If both nodes are StringLiterals, call matchNodeWithStringLiteral
		else if (isStringLiteral(matchNode)) return this.matchNodeWithStringLiteral(node, matchNode);

		// If both nodes are NumericLiterals, call matchNodeWithNumericLiteral
		else if (isNumericLiteral(matchNode)) return this.matchNodeWithNumericLiteral(node, matchNode);

		// If both nodes are ComputedPropertyNames, call matchNodeWithComputedPropertyName
		else if (isComputedPropertyName(matchNode)) return this.matchNodeWithComputedPropertyName(node, matchNode);

		// The two nodes are different kinds of nodes. Return false
		return false;
	}

	/**
	 * Matches the provided node with the provided StringLiteral
	 * @param {Node} node
	 * @param {StringLiteral} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithStringLiteral (node: Node, matchNode: StringLiteral): boolean {
		// If the node is not a StringLiteral, return false
		if (!isStringLiteral(node)) return false;

		return this.allIsMatched(
			this.matchLiteralExpression(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided RegularExpressionLiteral
	 * @param {Node} node
	 * @param {RegularExpressionLiteral} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithRegularExpressionLiteral (node: Node, matchNode: RegularExpressionLiteral): boolean {
		// If the node is not a RegularExpressionLiteral, return false
		if (!isRegularExpressionLiteral(node)) return false;

		return this.allIsMatched(
			this.matchLiteralExpression(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided NoSubstitutionTemplateLiteral
	 * @param {Node} node
	 * @param {NoSubstitutionTemplateLiteral} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithNoSubstitutionTemplateLiteral (node: Node, matchNode: NoSubstitutionTemplateLiteral): boolean {
		// If the node is not a NoSubstitutionTemplateLiteral, return false
		if (!isNoSubstitutionTemplateLiteral(node)) return false;

		return this.allIsMatched(
			this.matchLiteralExpression(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided TemplateHead
	 * @param {Node} node
	 * @param {TemplateHead} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTemplateHead (node: Node, matchNode: TemplateHead): boolean {
		// If the node is not a TemplateHead, return false
		if (!isTemplateHead(node)) return false;

		return this.allIsMatched(
			this.matchLiteralLikeNode(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided TemplateMiddle
	 * @param {Node} node
	 * @param {TemplateMiddle} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTemplateMiddle (node: Node, matchNode: TemplateMiddle): boolean {
		// If the node is not a TemplateMiddle, return false
		if (!isTemplateMiddle(node)) return false;

		return this.allIsMatched(
			this.matchLiteralLikeNode(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided TemplateTail
	 * @param {Node} node
	 * @param {TemplateTail} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTemplateTail (node: Node, matchNode: TemplateTail): boolean {
		// If the node is not a TemplateTail, return false
		if (!isTemplateTail(node)) return false;

		return this.allIsMatched(
			this.matchLiteralLikeNode(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided StringLiteral
	 * @param {Node} node
	 * @param {StringLiteral} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithNumericLiteral (node: Node, matchNode: NumericLiteral): boolean {
		// If the node is not a NumericLiteral, return false
		if (!isNumericLiteral(node)) return false;

		return this.allIsMatched(
			this.matchLiteralExpression(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided TemplateExpression
	 * @param {Node} node
	 * @param {TemplateExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithTemplateExpression (node: Node, matchNode: TemplateExpression): boolean {
		// If the node is not a TemplateExpression, return false
		if (!isTemplateExpression(node)) return false;

		return this.allIsMatched(
			this.matchPrimaryExpression(node, matchNode),
			this.matchNodeWithTemplateHead(node.head, matchNode.head),
			this.matchAllNodes(node.templateSpans, matchNode.templateSpans, this.matchNodeWithTemplateSpan)
		);
	}

	/**
	 * Matches the provided node with the provided ParenthesizedExpression
	 * @param {Node} node
	 * @param {ParenthesizedExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithParenthesizedExpression (node: Node, matchNode: ParenthesizedExpression): boolean {
		// If the node is not a ParenthesizedExpression, return false
		if (!isParenthesizedExpression(node)) return false;

		return this.allIsMatched(
			this.matchPrimaryExpression(node, matchNode),
			this.matchNodeWithExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided EmptyStatement
	 * @param {Node} node
	 * @param {EmptyStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithEmptyStatement (node: Node, matchNode: EmptyStatement): boolean {
		// If the node is not an EmptyStatement, return false
		if (!isEmptyStatement(node)) return false;

		return this.allIsMatched(
			this.matchStatement(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided DebuggerStatement
	 * @param {Node} node
	 * @param {DebuggerStatement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithDebuggerStatement (node: Node, matchNode: DebuggerStatement): boolean {
		// If the Node is not a DebuggerStatement, return false
		if (!isDebuggerStatement(node)) return false;

		return this.allIsMatched(
			this.matchStatement(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided ArrayLiteralExpression
	 * @param {Node} node
	 * @param {ArrayLiteralExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithArrayLiteralExpression (node: Node, matchNode: ArrayLiteralExpression): boolean {
		// If the node is not a ArrayLiteralExpression, return false
		if (!isArrayLiteralExpression(node)) return false;

		return this.allIsMatched(
			this.matchPrimaryExpression(node, matchNode),
			this.matchAllNodes(node.elements, matchNode.elements, this.matchNodeWithExpression)
		);
	}

	/**
	 * Matches the provided node with the provided SpreadElement
	 * @param {Node} node
	 * @param {SpreadElement} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithSpreadElement (node: Node, matchNode: SpreadElement): boolean {
		// If the node is not a SpreadElement, return false
		if (!isSpreadElement(node)) return false;

		return this.allIsMatched(
			this.matchExpression(node, matchNode),
			this.matchNodeWithExpression(node.expression, matchNode.expression)
		);
	}

	/**
	 * Matches the provided node with the provided ObjectLiteralExpression
	 * @param {Node} node
	 * @param {ObjectLiteralExpression} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithObjectLiteralExpression (node: Node, matchNode: ObjectLiteralExpression): boolean {
		// If the node is not a ObjectLiteralExpression, return false
		if (!isObjectLiteralExpression(node)) return false;

		return this.allIsMatched(
			this.matchObjectLiteralExpressionBase(node, matchNode)
		);
	}

	/**
	 * Matches the provided node with the provided ObjectLiteralElementLike
	 * @param {Node} node
	 * @param {ObjectLiteralElementLike} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithObjectLiteralElementLike (node: Node, matchNode: ObjectLiteralElementLike): boolean {
		// If the node is not a ObjectLiteralElementLike, return false
		if (!isObjectLiteralElementLike(node)) return false;

		if (isPropertyAssignment(matchNode)) {
			return this.matchNodeWithPropertyAssignment(node, matchNode);
		}

		else if (isShorthandPropertyAssignment(matchNode)) {
			return this.matchNodeWithShorthandPropertyAssignment(node, matchNode);
		}

		else if (isSpreadAssignment(matchNode)) {
			return this.matchNodeWithSpreadAssignment(node, matchNode);
		}

		else if (isMethodDeclaration(matchNode)) {
			return this.matchNodeWithMethodDeclaration(node, matchNode);
		}

		else if (isAccessor(matchNode)) {
			return this.matchNodeWithAccessorDeclaration(node, matchNode);
		}

		return false;
	}

	/**
	 * Matches the provided node with the provided identifier
	 * @param {Node} node
	 * @param {Identifier} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithIdentifier (node: Node, matchNode: Identifier): boolean {
		// If the node is not an identifier, return false
		if (!isIdentifier(node)) return false;

		return this.allIsMatched(
			this.matchPrimaryExpression(node, matchNode),
			node.text === matchNode.text
		);
	}

	/**
	 * Matches the provided node with the provided QualifiedName
	 * @param {Node} node
	 * @param {QualifiedName} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithQualifiedName (node: Node, matchNode: QualifiedName): boolean {
		// If the node is not a QualifiedName, return false
		if (!isQualifiedName(node)) return false;

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchNodeWithEntityName(node.left, matchNode.left),
			this.matchNodeWithIdentifier(node.right, matchNode.right)
		);
	}

	/**
	 * Matches the provided node with the provided EntityName
	 * @param {Node} node
	 * @param {EntityName} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithEntityName (node: Node, matchNode: EntityName): boolean {
		// If the node is not a PropertyName, return false
		if (!isEntityName(node)) return false;

		// If both nodes are identifiers, call matchNodeWithIdentifier
		if (isIdentifier(matchNode)) return this.matchNodeWithIdentifier(node, matchNode);

		// If both nodes are qualified names, call matchNodeWithQualifiedName
		else if (isQualifiedName(matchNode)) return this.matchNodeWithQualifiedName(node, matchNode);

		// The two nodes are different kinds of nodes. Return false
		return false;
	}

	/**
	 * Matches the provided node with the provided ForInitializer
	 * @param {Node} node
	 * @param {ForInitializer} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithForInitializer (node: Node, matchNode: ForInitializer): boolean {

		if (isVariableDeclarationList(matchNode)) {
			return this.matchNodeWithVariableDeclarationList(node, matchNode);
		}

		return this.matchNodeWithNode(node, matchNode);
	}

	/**
	 * Matches the provided node with the provided CaseOrDefaultClause
	 * @param {Node} node
	 * @param {CaseOrDefaultClause} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithCaseOrDefaultClause (node: Node, matchNode: CaseOrDefaultClause): boolean {
		// If the node is not a CaseOrDefaultClause, return false
		if (!isCaseOrDefaultClause(node)) return false;

		if (isCaseClause(matchNode)) return this.matchNodeWithCaseClause(node, matchNode);
		else if (isDefaultClause(matchNode)) return this.matchNodeWithDefaultClause(node, matchNode);

		// The two nodes are different kinds of nodes. Return false
		return false;
	}

	/**
	 * Matches the provided node with the provided AccessorDeclaration
	 * @param {Node} node
	 * @param {AccessorDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithAccessorDeclaration (node: Node, matchNode: AccessorDeclaration): boolean {
		// If the node is not a AccessorDeclaration, return false
		if (!isAccessor(node)) return false;

		if (isGetAccessorDeclaration(matchNode)) return this.matchNodeWithGetAccessorDeclaration(node, matchNode);
		else if (isSetAccessorDeclaration(matchNode)) return this.matchNodeWithSetAccessorDeclaration(node, matchNode);

		// The two nodes are different kinds of nodes. Return false
		return false;
	}

	/**
	 * Matches the provided node with the provided ModuleName
	 * @param {Node} node
	 * @param {ModuleName} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithModuleName (node: Node, matchNode: ModuleName): boolean {
		// If the node is not a ModuleName, return false
		if (!isIdentifier(node) && !isStringLiteral(node)) return false;

		if (isIdentifier(matchNode)) return this.matchNodeWithIdentifier(node, matchNode);
		else if (isStringLiteral(matchNode)) return this.matchNodeWithStringLiteral(node, matchNode);

		// The two nodes are different kinds of nodes. Return false
		return false;
	}

	/**
	 * Matches the provided node with the provided NamespaceBody
	 * @param {Node} node
	 * @param {NamespaceBody} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithNamespaceBody (node: Node, matchNode: NamespaceBody): boolean {
		// If the node is not a ModuleName, return false
		if (!isNamespaceBody(node)) return false;

		if (isModuleBlock(matchNode)) return this.matchNodeWithModuleBlock(node, matchNode);
		else if (isNamespaceDeclaration(node) && isNamespaceDeclaration(matchNode)) return this.matchNamespaceDeclaration(node, matchNode);

		// The two nodes are different kinds of nodes. Return false
		return false;
	}

	/**
	 * Matches the provided node with the provided JSDocNamespaceBody
	 * @param {Node} node
	 * @param {JSDocNamespaceBody} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJSDocNamespaceBody (node: Node, matchNode: JSDocNamespaceBody): boolean {
		// If the node is not a ModuleName, return false
		if (!isJSDocNamespaceBody(node)) return false;

		if (isIdentifier(matchNode)) return this.matchNodeWithIdentifier(node, matchNode);
		else if (isJSDocNamespaceDeclaration(node) && isJSDocNamespaceDeclaration(matchNode)) return this.matchJSDocNamespaceDeclaration(node, matchNode);

		// The two nodes are different kinds of nodes. Return false
		return false;
	}

	/**
	 * Matches the provided node with the provided ModuleReference
	 * @param {Node} node
	 * @param {ModuleReference} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithModuleReference (node: Node, matchNode: ModuleReference): boolean {
		// If the node is not a ModuleReference, return false
		if (!isEntityName(node) && !isExternalModuleReference(node)) return false;

		if (isEntityName(matchNode)) return this.matchNodeWithEntityName(node, matchNode);
		else if (isExternalModuleReference(matchNode)) return this.matchNodeWithExternalModuleReference(node, matchNode);

		// The two nodes are different kinds of nodes. Return false
		return false;
	}

	/**
	 * Matches the provided node with the provided NamedImportBindings
	 * @param {Node} node
	 * @param {NamedImportBindings} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithNamedImportBindings (node: Node, matchNode: NamedImportBindings): boolean {
		// If the node is not a NamedImportBindings, return false
		if (!isNamespaceImport(node) && !isNamedImports(node)) return false;

		if (isNamespaceImport(matchNode)) return this.matchNodeWithNamespaceImport(node, matchNode);
		else if (isNamedImports(matchNode)) return this.matchNodeWithNamedImports(node, matchNode);

		// The two nodes are different kinds of nodes. Return false
		return false;
	}

	/**
	 * Matches the provided node with the provided Identifier|ThisTypeNode
	 * @param {Node} node
	 * @param {Identifier|ThisTypeNode} matchNode
	 * @returns {boolean}
	 */
	private matchNodeWithJsxTagNameExpression (node: Node, matchNode: JsxTagNameExpression): boolean {

		if (isPropertyAccessExpression(matchNode)) {
			return this.matchNodeWithPropertyAccessExpression(node, matchNode);
		}

		return this.matchNodeWithNode(node, matchNode);
	}

	/**
	 * Matches all the given nodes, if the are given
	 * @param {NodeArray<Node> | ReadonlyArray<Node>} node
	 * @param {NodeArray<Node> | ReadonlyArray<Node>} matchNode
	 * @param {Function} handler
	 * @returns {boolean}
	 */
	private matchAllNodesIfGiven<T extends Node> (node: NodeArray<T>|ReadonlyArray<T>|undefined, matchNode: NodeArray<T>|ReadonlyArray<T>|undefined, handler: (node: T, matchNode: T) => boolean): boolean {
		const boundHandler: (node: T, matchNode: T) => boolean = handler.bind(this);

		// If the matchNode is null, return true if the node is null or has a length of 0
		if (matchNode == null) {
			return node == null || node.length === 0;
		}

		// If the node is null, return true if the matchNode is null or has a length of 0
		if (node == null) {
			return matchNode == null || matchNode.length === 0;
		}

		// If neither is undefined and all of the elements match, return true
		return node != null && matchNode != null && matchNode.every(element => node.some(nodeElement => boundHandler(nodeElement, element)));
	}

	/**
	 * Matches all of the given nodes
	 * @param {NodeArray<Node> | ReadonlyArray<Node>} node
	 * @param {NodeArray<Node>| ReadonlyArray<Node>} matchNode
	 * @param {Function} handler
	 * @returns {boolean}
	 */
	private matchAllNodes<T extends Node> (node: NodeArray<T>|ReadonlyArray<T>, matchNode: NodeArray<T>|ReadonlyArray<T>, handler: (node: T, matchNode: T) => boolean): boolean {
		const boundHandler: (node: T, matchNode: T) => boolean = handler.bind(this);
		// If neither the new node or the existing one are provided, there is a match
		if (node == null && matchNode == null) return true;

		// If neither is undefined and all of the elements match, return true
		return matchNode.every(element => node.some(nodeElement => boundHandler(nodeElement, element)));
	}

	/**
	 * Matches the given nodes, if they are given
	 * @param {T} node
	 * @param {T} matchNode
	 * @param {(node: T, matchNode: T) => boolean} handler
	 * @returns {boolean}
	 */
	private matchNodeIfGiven<T extends Node> (node: T|undefined, matchNode: T|undefined, handler: (node: T, matchNode: T) => boolean): boolean {
		const boundHandler = handler.bind(this);
		// If neither the new node or the existing one are defined, there is a match
		if (node == null && matchNode == null) return true;

		// If neither is undefined and all of the elements match, return true
		return node != null && matchNode != null && boundHandler(node, matchNode);
	}

	/**
	 * Returns true if all of the provided expressions are equal to true
	 * @param {boolean} expressions
	 * @returns {boolean}
	 */
	private allIsMatched (...expressions: boolean[]): boolean {
		return expressions.every(expression => expression === true);
	}

	/**
	 * Returns true if the two provided kinds are identical
	 * @param {SyntaxKind} node
	 * @param {SyntaxKind} matchNode
	 * @returns {boolean}
	 */
	private matchKindWithKind (node: SyntaxKind, matchNode: SyntaxKind): boolean {
		return node === matchNode;
	}


	/**
	 * Matches a Node with a Node
	 * @param {Node} node
	 * @param {Node} matchNode
	 * @returns {boolean}
	 */
	private matchNode (node: Node, matchNode: Node): boolean {
		return this.allIsMatched(
			this.matchTextRange(node, matchNode),
			this.matchAllNodesIfGiven(node.decorators, matchNode.decorators, this.matchNodeWithDecorator),
			this.matchAllNodesIfGiven(node.modifiers, matchNode.modifiers, this.matchNodeWithModifier)
		);
	}

	/**
	 * Matches a LiteralExpression with a LiteralExpression
	 * @param {LiteralExpression} node
	 * @param {LiteralExpression} matchNode
	 * @returns {boolean}
	 */
	private matchLiteralExpression (node: LiteralExpression, matchNode: LiteralExpression): boolean {
		return this.allIsMatched(
			this.matchLiteralLikeNode(node, matchNode),
			this.matchPrimaryExpression(node, matchNode)
		);
	}

	/**
	 * Matches the provided NamespaceDeclaration with the provided NamespaceDeclaration
	 * @param {NamespaceDeclaration} node
	 * @param {NamespaceDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNamespaceDeclaration (node: NamespaceDeclaration, matchNode: NamespaceDeclaration): boolean {
		return this.allIsMatched(
			this.matchNodeWithModuleDeclaration(node, matchNode),
			this.matchNodeWithIdentifier(node.name, matchNode.name),
			this.matchNodeWithNamespaceBody(node.body, matchNode.body)
		);
	}

	/**
	 * Matches a LiteralLikeNode with a LiteralLikeNode
	 * @param {LiteralLikeNode} node
	 * @param {LiteralLikeNode} matchNode
	 * @returns {boolean}
	 */
	private matchLiteralLikeNode (node: LiteralLikeNode, matchNode: LiteralLikeNode): boolean {
		return this.allIsMatched(
			this.matchNode(node, matchNode),
			node.text === matchNode.text
		);
	}

	/**
	 * Matches a TypeNode
	 * @param {Node} node
	 * @param {TypeNode} matchNode
	 * @returns {boolean}
	 */
	private matchTypeNode (node: TypeNode, matchNode: TypeNode): boolean {
		return this.allIsMatched(
			this.matchNode(node, matchNode)
		);
	}

	/**
	 * Matches a JSDocType
	 * @param {TypeNode} node
	 * @param {JSDocType} matchNode
	 * @returns {boolean}
	 */
	private matchJSDocType (node: TypeNode, matchNode: JSDocType): boolean {
		return this.allIsMatched(
			this.matchTypeNode(node, matchNode)
		);
	}

	/**
	 * Matches a SignatureDeclaration
	 * @param {SignatureDeclaration} node
	 * @param {SignatureDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchSignatureDeclaration (node: SignatureDeclaration, matchNode: SignatureDeclaration): boolean {
		return this.allIsMatched(
			this.matchNamedDeclaration(node, matchNode),
			this.matchAllNodesIfGiven(node.typeParameters, matchNode.typeParameters, this.matchNodeWithTypeParameterDeclaration),
			this.matchAllNodes(node.parameters, matchNode.parameters, this.matchNodeWithParameterDeclaration),
			this.matchNodeIfGiven(node.type, matchNode.type, this.matchNodeWithTypeNode)
		);
	}

	/**
	 * Matches the provided JSDocNamespaceDeclaration with the provided JSDocNamespaceDeclaration
	 * @param {JSDocNamespaceDeclaration} node
	 * @param {JSDocNamespaceDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchJSDocNamespaceDeclaration (node: JSDocNamespaceDeclaration, matchNode: JSDocNamespaceDeclaration): boolean {

		return this.allIsMatched(
			this.matchNodeWithModuleDeclaration(node, matchNode),
			this.matchNodeWithIdentifier(node.name, matchNode.name),
			this.matchNodeWithJSDocNamespaceBody(node.body, matchNode.body)
		);
	}

	/**
	 * Matches a TypeElement with a TypeElement
	 * @param {TypeElement} node
	 * @param {TypeElement} matchNode
	 * @returns {boolean}
	 */
	private matchTypeElement (node: TypeElement, matchNode: TypeElement): boolean {
		return this.allIsMatched(
			this.matchNamedDeclaration(node, matchNode),
			this.matchNodeIfGiven(node.name, matchNode.name, this.matchNodeWithPropertyName),
			this.matchNodeIfGiven(node.questionToken, matchNode.questionToken, this.matchNodeWithQuestionToken)
		);
	}

	/**
	 * Matches a NamedDeclaration with a NamedDeclaration
	 * @param {NamedDeclaration} node
	 * @param {NamedDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchNamedDeclaration (node: NamedDeclaration, matchNode: NamedDeclaration): boolean {
		return this.allIsMatched(
			this.matchDeclaration(node, matchNode),
			this.matchNodeIfGiven(node.name, matchNode.name, this.matchNodeWithDeclarationName)
		);
	}

	/**
	 * Matches a Declaration with a Declaration
	 * @param {Declaration} node
	 * @param {Declaration} matchNode
	 * @returns {boolean}
	 */
	private matchDeclaration (node: Declaration, matchNode: Declaration): boolean {
		return this.allIsMatched(
			this.matchNode(node, matchNode)
		);
	}

	/**
	 * Matches a ClassLikeDeclaration with a ClassLikeDeclaration
	 * @param {ClassLikeDeclaration} node
	 * @param {ClassLikeDeclaration} matchNode
	 * @returns {boolean}
	 */
	private matchClassLikeDeclaration (node: ClassLikeDeclaration, matchNode: ClassLikeDeclaration): boolean {
		return this.allIsMatched(
			this.matchNamedDeclaration(node, matchNode),
			this.matchNodeIfGiven(node.name, matchNode.name, this.matchNodeWithIdentifier),
			this.matchAllNodesIfGiven(node.typeParameters, matchNode.typeParameters, this.matchNodeWithTypeParameterDeclaration),
			this.matchAllNodes(node.members, matchNode.members, this.matchNodeWithClassElement)
		);
	}

	/**
	 * Matches a ClassElement with a ClassElement
	 * @param {ClassElement} node
	 * @param {ClassElement} matchNode
	 * @returns {boolean}
	 */
	private matchClassElement (node: ClassElement, matchNode: ClassElement): boolean {
		return this.allIsMatched(
			this.matchNamedDeclaration(node, matchNode),
			this.matchNodeIfGiven(node.name, matchNode.name, this.matchNodeWithPropertyName)
		);
	}

	/**
	 * Matches an ObjectLiteralElement with an ObjectLiteralElement
	 * @param {ObjectLiteralElement} node
	 * @param {ObjectLiteralElement} matchNode
	 * @returns {boolean}
	 */
	private matchObjectLiteralElement (node: ObjectLiteralElement, matchNode: ObjectLiteralElement): boolean {
		return this.allIsMatched(
			this.matchNamedDeclaration(node, matchNode),
			this.matchNodeIfGiven(node.name, matchNode.name, this.matchNodeWithPropertyName)
		);
	}

	/**
	 * Matches an ObjectLiteralExpressionBase with an ObjectLiteralExpressionBase
	 * @param {ObjectLiteralExpressionBase<ObjectLiteralElement>} node
	 * @param {ObjectLiteralExpressionBase<ObjectLiteralElement>} matchNode
	 * @returns {boolean}
	 */
	private matchObjectLiteralExpressionBase<T extends ObjectLiteralElement> (node: ObjectLiteralExpressionBase<T>, matchNode: ObjectLiteralExpressionBase<T>): boolean {
		return this.allIsMatched(
			this.matchPrimaryExpression(node, matchNode),
			this.matchDeclaration(node, matchNode),
			this.matchAllNodes(node.properties, matchNode.properties, this.matchNodeWithNode)
		);
	}

	/**
	 * Matches a DeclarationStatement with a DeclarationStatement
	 * @param {DeclarationStatement} node
	 * @param {DeclarationStatement} matchNode
	 * @returns {boolean}
	 */
	private matchDeclarationStatement (node: DeclarationStatement, matchNode: DeclarationStatement): boolean {
		return this.allIsMatched(
			this.matchNamedDeclaration(node, matchNode),
			this.matchStatement(node, matchNode),
			this.matchNodeIfGiven(node.name, matchNode.name, this.matchNodeWithNode)
		);
	}

	/**
	 * Matches a FunctionLikeDeclarationBase with a FunctionLikeDeclarationBase
	 * @param {FunctionLikeDeclarationBase} node
	 * @param {FunctionLikeDeclarationBase} matchNode
	 * @returns {boolean}
	 */
	private matchFunctionLikeDeclarationBase (node: FunctionLikeDeclarationBase, matchNode: FunctionLikeDeclarationBase): boolean {
		return this.allIsMatched(
			this.matchSignatureDeclaration(node, matchNode),
			this.matchNodeIfGiven(node.asteriskToken, matchNode.asteriskToken, this.matchNodeWithAsteriskToken),
			this.matchNodeIfGiven(node.questionToken, matchNode.questionToken, this.matchNodeWithQuestionToken),
			this.matchNodeIfGiven(node.body, matchNode.body, this.matchNodeWithNode)
		);
	}

	/**
	 * Matches a Statement with a Statement
	 * @param {Statement} node
	 * @param {Statement} matchNode
	 * @returns {boolean}
	 */
	private matchStatement (node: Statement, matchNode: Statement): boolean {
		return this.allIsMatched(
			this.matchNode(node, matchNode)
		);
	}

	/**
	 * Matches an IterationStatement with an IterationStatement
	 * @param {IterationStatement} node
	 * @param {IterationStatement} matchNode
	 * @returns {boolean}
	 */
	private matchIterationStatement (node: IterationStatement, matchNode: IterationStatement): boolean {
		return this.allIsMatched(
			this.matchStatement(node, matchNode),
			this.matchNodeWithStatement(node.statement, matchNode.statement)
		);
	}

	/**
	 * Matches a PrimaryExpression with a PrimaryExpression
	 * @param {PrimaryExpression} node
	 * @param {PrimaryExpression} matchNode
	 * @returns {boolean}
	 */
	private matchPrimaryExpression (node: PrimaryExpression, matchNode: PrimaryExpression): boolean {
		return this.allIsMatched(
			this.matchMemberExpression(node, matchNode)
		);
	}

	/**
	 * Matches a KeywordTypeNode with a KeywordTypeNode
	 * @param {KeywordTypeNode} node
	 * @param {KeywordTypeNode} matchNode
	 * @returns {boolean}
	 */
	private matchKeywordTypeNode (node: KeywordTypeNode, matchNode: KeywordTypeNode): boolean {
		return this.allIsMatched(
			this.matchTypeNode(node, matchNode),
			this.matchKindWithKind(node.kind, matchNode.kind)
		);
	}

	/**
	 * Matches a MemberExpression with a MemberExpression
	 * @param {MemberExpression} node
	 * @param {MemberExpression} matchNode
	 * @returns {boolean}
	 */
	private matchMemberExpression (node: MemberExpression, matchNode: MemberExpression): boolean {
		return this.allIsMatched(
			this.matchLeftHandSideExpression(node, matchNode)
		);
	}

	/**
	 * Matches a LeftHandSideExpression with a LeftHandSideExpression
	 * @param {LeftHandSideExpression} node
	 * @param {LeftHandSideExpression} matchNode
	 * @returns {boolean}
	 */
	private matchLeftHandSideExpression (node: LeftHandSideExpression, matchNode: LeftHandSideExpression): boolean {
		return this.allIsMatched(
			this.matchUpdateExpression(node, matchNode)
		);
	}

	/**
	 * Matches an UpdateExpression with an UpdateExpression
	 * @param {UpdateExpression} node
	 * @param {UpdateExpression} matchNode
	 * @returns {boolean}
	 */
	private matchUpdateExpression (node: UpdateExpression, matchNode: UpdateExpression): boolean {
		return this.allIsMatched(
			this.matchUnaryExpression(node, matchNode)
		);
	}

	/**
	 * Matches a UnaryExpression with a UnaryExpression
	 * @param {UnaryExpression} node
	 * @param {UnaryExpression} matchNode
	 * @returns {boolean}
	 */
	private matchUnaryExpression (node: UnaryExpression, matchNode: UnaryExpression): boolean {
		return this.allIsMatched(
			this.matchExpression(node, matchNode)
		);
	}

	/**
	 * Matches an Expression with an Expression
	 * @param {Expression} node
	 * @param {Expression} matchNode
	 * @returns {boolean}
	 */
	private matchExpression (node: Expression, matchNode: Expression): boolean {
		return this.allIsMatched(
			this.matchNode(node, matchNode)
		);
	}

	/**
	 * Matches the provided JSDocTag with the provided JSDocTag
	 * @param {JSDocTag} node
	 * @param {JSDocTag} matchNode
	 * @returns {boolean}
	 */
	private matchJSDocTag (node: JSDocTag, matchNode: JSDocTag): boolean {

		return this.allIsMatched(
			this.matchNode(node, matchNode),
			this.matchNodeWithAtToken(node.atToken, matchNode.atToken),
			this.matchNodeWithIdentifier(node.tagName, matchNode.tagName),
			node.comment === matchNode.comment
		);
	}

	/**
	 * Matches a JSDocPropertyLikeTag with a JSDocPropertyLikeTag
	 * @param {JSDocPropertyLikeTag} node
	 * @param {JSDocPropertyLikeTag} matchNode
	 * @returns {boolean}
	 */
	private matchJSDocPropertyLikeTag (node: JSDocPropertyLikeTag, matchNode: JSDocPropertyLikeTag): boolean {

		return this.allIsMatched(
			this.matchJSDocTag(node, matchNode),
			this.matchDeclaration(node, matchNode),
			this.matchNodeWithEntityName(node.name, matchNode.name),
			this.matchNodeWithJSDocTypeExpression(node.typeExpression, matchNode.typeExpression),
			node.isNameFirst === matchNode.isNameFirst,
			node.isBracketed === matchNode.isBracketed
		);
	}
}