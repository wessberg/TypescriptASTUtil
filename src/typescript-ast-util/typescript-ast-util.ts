import {createNodeArray, Declaration, Expression, isArrayLiteralExpression, isArrowFunction, isAwaitExpression, isBinaryExpression, isBlock, isBreakStatement, isCallExpression, isCaseBlock, isCaseClause, isClassDeclaration, isClassExpression, isClassLike, isComputedPropertyName, isConditionalExpression, isConstructorDeclaration, isContinueStatement, isDecorator, isDefaultClause, isDoStatement, isElementAccessExpression, isEnumDeclaration, isExportAssignment, isExportDeclaration, isExportSpecifier, isExpressionStatement, isExpressionWithTypeArguments, isExternalModuleReference, isForInStatement, isForOfStatement, isForStatement, isFunctionDeclaration, isFunctionExpression, isGetAccessorDeclaration, isIdentifier, isIfStatement, isImportClause, isImportEqualsDeclaration, isImportSpecifier, isInterfaceDeclaration, isJSDocParameterTag, isJSDocPropertyTag, isJSDocTypedefTag, isJsxAttribute, isLabeledStatement, isMetaProperty, isMethodDeclaration, isMissingDeclaration, isNamespaceExportDeclaration, isNamespaceImport, isNewExpression, isNonNullExpression, isNumericLiteral, isObjectLiteralExpression, isParameter, isParenthesizedExpression, isParenthesizedTypeNode, isPostfixUnaryExpression, isPrefixUnaryExpression, isPropertyAccessExpression, isPropertyAssignment, isPropertyDeclaration, isPropertySignature, isQualifiedName, isReturnStatement, isSetAccessorDeclaration, isShorthandPropertyAssignment, isSpreadAssignment, isSpreadElement, isStringLiteral, isSwitchStatement, isTemplateExpression, isThisTypeNode, isTryStatement, isTypeAliasDeclaration, isTypeAssertion, isTypeOfExpression, isTypeParameterDeclaration, isTypePredicateNode, isTypeReferenceNode, isVariableDeclaration, isVariableDeclarationList, isVariableStatement, isWhileStatement, Node, NodeArray, NodeFlags, Statement, SyntaxKind} from "typescript";
import {ITypescriptASTUtil} from "./i-typescript-ast-util";
import {isFirstNode} from "../predicate/is-first-node";

/**
 * A helper class for working with Typescript's AST
 */
export class TypescriptASTUtil implements ITypescriptASTUtil {
	/**
	 * All of these keys will be excluded when a compact representation of an AST node is requested.
	 * @type {Set<string>}
	 */
	private static readonly EXCLUDED_COMPACT_KEYS: Set<string> = new Set([
		"parent", "modifierFlagsCache", "symbol", "localSymbol", "nextContainer", "flowNode", "transformFlags", "flags",
		"bindDiagnostics", "languageVersion", "languageVariant", "parseDiagnostics", "scriptSnapshot", "classifiableNames"
	]);

	/**
	 * Returns the raw contents of the given identifier
	 * @param {Statement | Node | Expression} identifier
	 * @returns {string}
	 */
	public getRawText (identifier: Statement|Node|Expression): string {
		const {text} = identifier.getSourceFile();
		return text.slice(identifier.pos, identifier.end);
	}

	/**
	 * Stringifies the provided Statement, Node or Expression. If 'compact' is true, a compact representation
	 * of the node will be returned.
	 * @param {Statement | Node | Expression} identifier
	 * @param {boolean} [compact=false]
	 * @returns {string}
	 */
	public stringify (identifier: Statement|Node|Expression, compact: boolean = false): string {
		return JSON.stringify(compact ? this.compact(identifier) : identifier, (key, value) => {
			// Print the string name of the kind
			if (key === "kind") return SyntaxKind[value];
			return value;
		}, "\t");
	}

	/**
	 * Takes the name of the provided identifier, if possible.
	 * @throws {TypeError} If the name could not be detected.
	 * @param {Statement | Expression | Node} identifier
	 * @returns {string}
	 */
	public takeName (identifier: Statement|Expression|Node|undefined): string {
		if (identifier == null) return "";

		if (
			isTypeParameterDeclaration(identifier) ||
			isShorthandPropertyAssignment(identifier) ||
			isJsxAttribute(identifier) ||
			isMetaProperty(identifier) ||
			isPropertySignature(identifier) ||
			isPropertyDeclaration(identifier) ||
			isPropertyAssignment(identifier) ||
			isClassLike(identifier) ||
			isClassDeclaration(identifier) ||
			isInterfaceDeclaration(identifier) ||
			isTypeAliasDeclaration(identifier) ||
			isEnumDeclaration(identifier) ||
			isImportEqualsDeclaration(identifier) ||
			isImportClause(identifier) ||
			isNamespaceImport(identifier) ||
			isNamespaceExportDeclaration(identifier) ||
			isImportSpecifier(identifier) ||
			isExportSpecifier(identifier) ||
			isJSDocTypedefTag(identifier) ||
			isJSDocPropertyTag(identifier) ||
			isJSDocParameterTag(identifier) ||
			isExportAssignment(identifier)
		) {
			return this.takeName(identifier.name);
		}

		if (
			isBreakStatement(identifier) ||
			isContinueStatement(identifier) ||
			isLabeledStatement(identifier)
		) {
			return this.takeName(identifier.label);
		}

		if (isTypePredicateNode(identifier)) {
			return this.takeName(identifier.parameterName);
		}

		if (isPropertyAccessExpression(identifier)) {
			return `${this.takeName(identifier.expression)}.${this.takeName(identifier.name)}`;
		}

		if (isElementAccessExpression(identifier)) {
			return `${this.takeName(identifier.expression)}[${this.takeName(identifier.argumentExpression)}]`;
		}

		if (isStringLiteral(identifier)) {
			return `"${identifier.text}"`;
		}

		if (
			isComputedPropertyName(identifier) ||
			isNewExpression(identifier) ||
			isExpressionWithTypeArguments(identifier) ||
			isCallExpression(identifier) ||
			isDecorator(identifier) ||
			isExternalModuleReference(identifier) ||
			isParenthesizedExpression(identifier) ||
			isTypeAssertion(identifier)
		) {
			return this.takeName(identifier.expression);
		}

		if (isParenthesizedTypeNode(identifier)) {
			return this.takeName(identifier.type);
		}

		if (
			isNumericLiteral(identifier) ||
			isIdentifier(identifier)
		) {
			return identifier.text;
		}

		if (isQualifiedName(identifier)) {
			return `${this.takeName(identifier.left)}.${this.takeName(identifier.right)}`;
		}

		if (
			isFunctionDeclaration(identifier) ||
			isFunctionExpression(identifier) ||
			isMissingDeclaration(identifier)
		) {
			return this.takeName(identifier.name);
		}

		if (identifier.kind === SyntaxKind.SuperKeyword) {
			return "super";
		}

		if (isConstructorDeclaration(identifier)) {
			return "constructor";
		}

		if (isThisTypeNode(identifier)) {
			return "this";
		}

		if (isTypeReferenceNode(identifier)) {
			return this.takeName(identifier.typeName);
		}

		if (isArrowFunction(identifier)) {
			return "";
		}

		throw new TypeError(`${this.constructor.name} could not detect the name of a property of kind ${SyntaxKind[identifier.kind]} around here:\n${this.stringify(identifier)}.`);
	}

	/**
	 * Serializes the given flag and returns the textual representation of it.
	 * @param {NodeFlags} flag
	 * @returns {string}
	 */
	public serializeFlag (flag: NodeFlags): string {
		switch (flag) {
			case NodeFlags.Const:
				return "const";
			case NodeFlags.Let:
				return "let";
			default:
				throw new TypeError(`${this.constructor.name} could not serialize a flag of kind: ${NodeFlags[flag]}`);
		}
	}

	/**
	 * Serializes the given token (operand) and returns the textual representation of it.
	 * @param {SyntaxKind} token
	 * @returns {string}
	 */
	public serializeToken (token: SyntaxKind): string {
		switch (token) {
			case SyntaxKind.BreakStatement:
				return "break";
			case SyntaxKind.ThrowStatement:
				return "throw";
			case SyntaxKind.DoStatement:
				return "do";
			case SyntaxKind.ContinueStatement:
				return "continue";
			case SyntaxKind.ObjectKeyword:
				return "object";
			case SyntaxKind.NumberKeyword:
				return "number";
			case SyntaxKind.NeverKeyword:
				return "never";
			case SyntaxKind.BooleanKeyword:
				return "boolean";
			case SyntaxKind.AnyKeyword:
				return "any";
			case SyntaxKind.VoidKeyword:
				return "void";
			case SyntaxKind.SymbolKeyword:
				return "symbol";
			case SyntaxKind.NullKeyword:
				return "null";
			case SyntaxKind.UndefinedKeyword:
				return "undefined";
			case SyntaxKind.StringKeyword:
				return "string";
			case SyntaxKind.TrueKeyword:
				return "true";
			case SyntaxKind.FalseKeyword:
				return "false";
			case SyntaxKind.BreakKeyword:
				return "break";
			case SyntaxKind.CatchKeyword:
				return "catch";
			case SyntaxKind.CaseKeyword:
				return "case";
			case SyntaxKind.ClassKeyword:
				return "class";
			case SyntaxKind.ConstKeyword:
				return "const";
			case SyntaxKind.ContinueKeyword:
				return "continue";
			case SyntaxKind.DebuggerKeyword:
				return "debugger";
			case SyntaxKind.DefaultKeyword:
				return "default";
			case SyntaxKind.DeleteKeyword:
				return "delete";
			case SyntaxKind.DeleteExpression:
				return "delete";
			case SyntaxKind.DoKeyword:
				return "do";
			case SyntaxKind.ElseKeyword:
				return "else";
			case SyntaxKind.EnumKeyword:
				return "enum";
			case SyntaxKind.ExportKeyword:
				return "export";
			case SyntaxKind.ExtendsKeyword:
				return "extends";
			case SyntaxKind.FinallyKeyword:
				return "finally";
			case SyntaxKind.ForKeyword:
				return "for";
			case SyntaxKind.FunctionKeyword:
				return "function";
			case SyntaxKind.IfKeyword:
				return "if";
			case SyntaxKind.ImportKeyword:
				return "import";
			case SyntaxKind.InKeyword:
				return "in";
			case SyntaxKind.InstanceOfKeyword:
				return "instanceof";
			case SyntaxKind.NewKeyword:
				return "new";
			case SyntaxKind.ReturnKeyword:
			case SyntaxKind.ReturnStatement:
				return "return";
			case SyntaxKind.SuperKeyword:
				return "super";
			case SyntaxKind.ThisKeyword:
				return "this";
			case SyntaxKind.ThrowKeyword:
				return "throw";
			case SyntaxKind.TryKeyword:
				return "try";
			case SyntaxKind.TypeOfKeyword:
				return "typeof";
			case SyntaxKind.VarKeyword:
				return "var";
			case SyntaxKind.WithKeyword:
				return "with";
			case SyntaxKind.ImplementsKeyword:
				return "implements";
			case SyntaxKind.InterfaceKeyword:
				return "interface";
			case SyntaxKind.LetKeyword:
				return "let";
			case SyntaxKind.PackageKeyword:
				return "package";
			case SyntaxKind.PrivateKeyword:
				return "private";
			case SyntaxKind.ProtectedKeyword:
				return "protected";
			case SyntaxKind.PublicKeyword:
				return "public";
			case SyntaxKind.StaticKeyword:
				return "static";
			case SyntaxKind.YieldKeyword:
				return "yield";
			case SyntaxKind.AbstractKeyword:
				return "abstract";
			case SyntaxKind.AsKeyword:
				return "as";
			case SyntaxKind.AsyncKeyword:
				return "async";
			case SyntaxKind.AwaitKeyword:
				return "await";
			case SyntaxKind.ConstructorKeyword:
				return "constructor";
			case SyntaxKind.DeclareKeyword:
				return "declare";
			case SyntaxKind.GetKeyword:
				return "get";
			case SyntaxKind.IsKeyword:
				return "is";
			case SyntaxKind.KeyOfKeyword:
				return "keyof";
			case SyntaxKind.ModuleKeyword:
				return "module";
			case SyntaxKind.NamespaceKeyword:
				return "namespace";
			case SyntaxKind.ReadonlyKeyword:
				return "readonly";
			case SyntaxKind.RequireKeyword:
				return "require";
			case SyntaxKind.SetKeyword:
				return "set";
			case SyntaxKind.TypeKeyword:
				return "type";
			case SyntaxKind.FromKeyword:
				return "from";
			case SyntaxKind.GlobalKeyword:
				return "global";
			case SyntaxKind.OfKeyword:
				return "of";
			case SyntaxKind.MinusToken:
				return "-";
			case SyntaxKind.PlusToken:
				return "+";
			case SyntaxKind.PlusPlusToken:
				return "++";
			case SyntaxKind.MinusMinusToken:
				return "--";
			case SyntaxKind.PlusEqualsToken:
				return "+=";
			case SyntaxKind.MinusEqualsToken:
				return "-=";
			case SyntaxKind.AsteriskToken:
				return "*";
			case SyntaxKind.AtToken:
				return "@";
			case SyntaxKind.EqualsEqualsEqualsToken:
				return "===";
			case SyntaxKind.EqualsEqualsToken:
				return "==";
			case SyntaxKind.EqualsGreaterThanToken:
				return "=>";
			case SyntaxKind.EqualsToken:
				return "=";
			case SyntaxKind.AsteriskEqualsToken:
				return "*=";
			case SyntaxKind.AsteriskAsteriskEqualsToken:
				return "**=";
			case SyntaxKind.ExclamationEqualsEqualsToken:
				return "!==";
			case SyntaxKind.ExclamationEqualsToken:
				return "!=";
			case SyntaxKind.ExclamationToken:
				return "!";
			case SyntaxKind.BarBarToken:
				return "||";
			case SyntaxKind.BarToken:
				return "|";
			case SyntaxKind.BarEqualsToken:
				return "|=";
			case SyntaxKind.AmpersandAmpersandToken:
				return "&&";
			case SyntaxKind.AmpersandEqualsToken:
				return "&=";
			case SyntaxKind.AmpersandToken:
				return "&";
			case SyntaxKind.SlashEqualsToken:
				return "/=";
			case SyntaxKind.SlashToken:
				return "/";
			case SyntaxKind.LessThanSlashToken:
				return "</";
			case SyntaxKind.PercentToken:
				return "%";
			case SyntaxKind.PercentEqualsToken:
				return "%=";
			case SyntaxKind.ColonToken:
				return ":";
			case SyntaxKind.SemicolonToken:
				return ";";
			case SyntaxKind.LessThanEqualsToken:
				return "<=";
			case SyntaxKind.LessThanToken:
				return "<";
			case SyntaxKind.LessThanLessThanEqualsToken:
				return "<<=";
			case SyntaxKind.LessThanLessThanToken:
				return "<<";
			case SyntaxKind.GreaterThanEqualsToken:
				return ">=";
			case SyntaxKind.GreaterThanGreaterThanEqualsToken:
				return ">>=";
			case SyntaxKind.GreaterThanGreaterThanGreaterThanToken:
				return ">>>";
			case SyntaxKind.GreaterThanGreaterThanToken:
				return ">>";
			case SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken:
				return ">>>=";
			case SyntaxKind.GreaterThanToken:
				return ">";
			case SyntaxKind.QuestionToken:
				return "?";
			case SyntaxKind.TildeToken:
				return "~";
			case SyntaxKind.CaretToken:
				return "^";
			case SyntaxKind.CaretEqualsToken:
				return "^=";
			case SyntaxKind.AsteriskAsteriskToken:
				return "**";
			case SyntaxKind.CommaToken:
				return ",";
			case SyntaxKind.OpenBraceToken:
				return "{";
			case SyntaxKind.CloseBraceToken:
				return "}";
			case SyntaxKind.OpenParenToken:
				return "(";
			case SyntaxKind.CloseParenToken:
				return ")";
			case SyntaxKind.OpenBracketToken:
				return "[";
			case SyntaxKind.CloseBracketToken:
				return "]";
			case SyntaxKind.DotToken:
				return ".";
			case SyntaxKind.DotDotDotToken:
				return "...";
			default:
				throw new TypeError(`${this.constructor.name} could not serialize a token of kind ${SyntaxKind[token]}`);
		}
	}

	/**
	 * Filters the provided Statements and only returns the requested kinds of Statements
	 * @param {NodeArray<Statement | Expression | Node>} statements
	 * @param {SyntaxKind | ReadonlyArray<SyntaxKind>} kinds
	 * @param {boolean} recursive
	 * @returns {NodeArray<T extends Statement | Expression | Node>}
	 */
	public filterStatements<T extends (Statement|Expression|Node)> (statements: NodeArray<Statement|Expression|Node>, kinds: SyntaxKind|Iterable<SyntaxKind>, recursive: boolean = false): NodeArray<T> {
		const filteredStatements: (Statement|Expression|Node)[] = [];
		const normalizedKinds = typeof kinds === "number" || typeof kinds === "string" ? [kinds] : [...kinds];
		statements.forEach(statement => {
			// Add it if the node has one of the requested kinds.
			if (normalizedKinds.some(kind => statement.kind === kind)) filteredStatements.push(<T>statement);
			if (recursive) {
				filteredStatements.push(...this.filterStatements(this.findChildStatements(statement), kinds, recursive));
			}
		});
		return createNodeArray(<T[]>filteredStatements);
	}

	/**
	 * Returns all child statements of the provided statement. This is useful for recursive traversal of an AST
	 * @param {Statement | Expression | Node} statement
	 * @returns {NodeArray<Statement | Expression | Node>}
	 */
	public findChildStatements (statement: Statement|Expression|Node): NodeArray<Statement|Expression|Node> {

		if (isIfStatement(statement)) {

			const thenChildren = statement.thenStatement == null ? [] : [statement.thenStatement];
			const elseChildren = statement.elseStatement == null ? [] : [statement.elseStatement];
			return createNodeArray([statement.expression, ...thenChildren, ...elseChildren]);
		}

		if (isShorthandPropertyAssignment(statement)) {
			return createNodeArray(statement.objectAssignmentInitializer == null ? [] : [statement.objectAssignmentInitializer]);
		}

		if (isDefaultClause(statement) || isCaseClause(statement)) {
			const statements: (Statement|Declaration|Expression|Node)[] = isCaseClause(statement) ? [statement.expression] : [];
			statements.push(...statement.statements);
			return createNodeArray(statements);
		}

		if (isWhileStatement(statement)) {
			return createNodeArray([statement.expression, statement.statement]);
		}

		if (isLabeledStatement(statement)) {
			return createNodeArray([statement.statement]);
		}

		if (isExportAssignment(statement)) {
			return createNodeArray([statement.expression]);
		}

		if (isExportDeclaration(statement)) {
			return createNodeArray(statement.moduleSpecifier == null ? [] : [statement.moduleSpecifier]);
		}

		if (isParenthesizedExpression(statement)) {
			return createNodeArray([statement.expression]);
		}

		if (isCaseBlock(statement)) {
			const statements: (Statement|Declaration|Expression|Node)[] = [];
			statement.clauses.forEach(clause => statements.push(clause));
			return createNodeArray(statement.clauses);
		}

		if (isAwaitExpression(statement)) {
			return createNodeArray([statement.expression]);
		}

		if (isSwitchStatement(statement)) {
			return createNodeArray([statement.expression, statement.caseBlock]);
		}

		if (isBlock(statement)) {
			return statement.statements;
		}

		if (isReturnStatement(statement)) {
			return createNodeArray(statement.expression == null ? [] : [statement.expression]);
		}

		if (isArrowFunction(statement)) {
			return createNodeArray([...statement.parameters, ...(statement.body == null ? [] : [statement.body])]);
		}

		if (isLabeledStatement(statement)) {
			return createNodeArray([statement.statement]);
		}

		if (isConditionalExpression(statement)) {
			const whenTrue = statement.whenTrue == null ? [] : [statement.whenTrue];
			const whenFalse = statement.whenFalse == null ? [] : [statement.whenFalse];
			return createNodeArray([statement.condition, ...whenTrue, ...whenFalse]);
		}

		if (isBinaryExpression(statement) || isFirstNode(statement)) {
			return createNodeArray([statement.left, statement.right]);
		}

		if (isFunctionDeclaration(statement)) {
			return createNodeArray([...statement.parameters, ...(statement.body == null ? [] : [statement.body])]);
		}

		if (isExpressionStatement(statement)) {
			return createNodeArray([statement.expression]);
		}

		if (isTryStatement(statement)) {

			const catchClause = statement.catchClause == null ? [] : [statement.catchClause.block];
			const finallyBlock = statement.finallyBlock == null ? [] : [statement.finallyBlock];

			return createNodeArray([statement.tryBlock, ...catchClause, ...finallyBlock]);
		}

		if (isSpreadAssignment(statement) || isSpreadElement(statement)) {
			return createNodeArray([statement.expression]);
		}

		if (isVariableStatement(statement)) {
			return statement.declarationList.declarations;
		}

		if (isVariableDeclarationList(statement)) {
			return statement.declarations;
		}

		if (isVariableDeclaration(statement)) {
			return createNodeArray(statement.initializer == null ? [] : [statement.initializer]);
		}

		if (isElementAccessExpression(statement) || isPropertyAccessExpression(statement)) {
			return createNodeArray([statement.expression]);
		}

		if (isPrefixUnaryExpression(statement)) {
			return createNodeArray([statement.operand]);
		}

		if (isPostfixUnaryExpression(statement)) {
			return createNodeArray([statement.operand]);
		}

		if (isFunctionExpression(statement)) {
			return createNodeArray([...statement.parameters, ...(statement.body == null ? [] : [statement.body])]);
		}

		if (isTypeOfExpression(statement)) {
			return createNodeArray([statement.expression]);
		}

		if (isMethodDeclaration(statement)) {
			return createNodeArray([...statement.parameters, ...(statement.body == null ? [] : [statement.body])]);
		}

		if (isGetAccessorDeclaration(statement)) {
			return createNodeArray([...statement.parameters, ...(statement.body == null ? [] : [statement.body])]);
		}

		if (isSetAccessorDeclaration(statement)) {
			return createNodeArray([...statement.parameters, ...(statement.body == null ? [] : [statement.body])]);
		}

		if (isTemplateExpression(statement)) {
			const statements: Expression[] = [];
			if (statement.templateSpans == null) return createNodeArray();
			statement.templateSpans.forEach(span => statements.push(span.expression));
			return createNodeArray(statements);
		}

		if (isObjectLiteralExpression(statement)) {
			return statement.properties;
		}

		if (isPropertyAssignment(statement)) {
			return createNodeArray([statement.initializer]);
		}

		if (isConstructorDeclaration(statement)) {
			return createNodeArray([...statement.parameters, ...(statement.body == null ? [] : [statement.body])]);
		}

		if (isArrayLiteralExpression(statement)) {
			return statement.elements;
		}

		if (isPropertyDeclaration(statement)) {
			return createNodeArray(statement.initializer == null ? [] : [statement.initializer]);
		}

		if (isClassExpression(statement) || isClassDeclaration(statement)) {
			return statement.members;
		}

		if (isForStatement(statement)) {
			const condition = statement.condition == null ? [] : [statement.condition];
			const incrementor = statement.incrementor == null ? [] : [statement.incrementor];
			const initializer = statement.initializer == null ? [] : [statement.initializer];
			const body = statement.statement == null ? [] : [statement.statement];
			return createNodeArray([...condition, ...incrementor, ...initializer, ...body]);
		}

		if (isForInStatement(statement)) {
			const initializer = statement.initializer == null ? [] : [statement.initializer];
			const expression = statement.expression == null ? [] : [statement.expression];
			const body = statement.statement == null ? [] : [statement.statement];
			return createNodeArray([...expression, ...initializer, ...body]);
		}

		if (isForOfStatement(statement)) {
			const initializer = statement.initializer == null ? [] : [statement.initializer];
			const expression = statement.expression == null ? [] : [statement.expression];
			const body = statement.statement == null ? [] : [statement.statement];
			return createNodeArray([...expression, ...initializer, ...body]);
		}

		if (isParameter(statement)) {
			const initializer = statement.initializer == null ? [] : [statement.initializer];
			return createNodeArray(initializer);
		}

		if (isTypeAssertion(statement)) {
			return createNodeArray([statement.expression]);
		}

		if (isDoStatement(statement)) {
			return createNodeArray([statement.expression]);
		}

		if (isCallExpression(statement)) {
			return createNodeArray([...statement.arguments, statement.expression]);
		}

		if (isNonNullExpression(statement)) {
			return createNodeArray([statement.expression]);
		}

		// Otherwise, return an empty NodeArray.
		return createNodeArray();
	}

	/**
	 * Returns a compact representation of any node in the AST
	 * @param {T} identifier
	 * @returns {U}
	 */
	private compact<T, U> (identifier: T): U {
		/*tslint:disable:no-any*/
		const copy: any = {};
		/*tslint:enable:no-any*/

		// Traverse the identifier recursively through all nested properties and filter out all excluded keys
		for (const key in identifier) {
			// Skip the key if it is excluded
			// noinspection JSUnfilteredForInLoop
			if (TypescriptASTUtil.EXCLUDED_COMPACT_KEYS.has(key)) continue;
			// noinspection JSUnfilteredForInLoop
			const value = identifier[key];
			// noinspection JSUnfilteredForInLoop
			copy[key] = value != null && value.constructor === {}.constructor ? this.compact(value) : value;
		}

		return copy;
	}
}