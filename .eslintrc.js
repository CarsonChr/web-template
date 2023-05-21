module.exports = {
  extends: [],
	env: {
		browser: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	overrides: [
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
    ecmaFeatures: {
      objectLiteralDuplicateProperties: false
    }
	},
	plugins: [
		"@typescript-eslint",
    'import',
	],
	rules: {
		//#region Style

		// enforce line breaks after opening and before closing array brackets
		// https://eslint.org/docs/rules/array-bracket-newline
		// TODO: enable? semver-major
		"array-bracket-newline": ["off", "consistent"], // object option alternative: { multiline: true, minItems: 3 }

    // enforce line breaks between array elements
    // https://eslint.org/docs/rules/array-element-newline
    // TODO: enable? semver-major
    "array-element-newline": ["off", { multiline: true, minItems: 3 }],

    // enforce spacing inside array brackets
    "array-bracket-spacing": ["error", "never"],

    // enforce spacing inside single-line blocks
    // https://eslint.org/docs/rules/block-spacing
    "block-spacing": ["error", "always"],

    // enforce one true brace style
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],

    // require camel case names
    camelcase: ["error", { properties: "never", ignoreDestructuring: false }],

    // enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    "capitalized-comments": ["off", "never", {
      line: {
        ignorePattern: ".*",
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: ".*",
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    }],

    // require trailing commas in multiline object literals
    "comma-dangle": ["error", {
      arrays: "allow-multiline",
      objects: "allow-multiline",
      imports: "allow-multiline",
      exports: "allow-multiline",
      functions: "allow-multiline",
    }],

    // enforce spacing before and after comma
    "comma-spacing": ["error", { before: false, after: true }],

    // enforce one true comma style
    "comma-style": ["error", "last", {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      }
    }],

    // disallow padding inside computed properties
    "computed-property-spacing": ["error", "never"],

    // enforces consistent naming when capturing the current execution context
    "consistent-this": "off",

    // enforce newline at the end of file, with no multiple empty lines
    "eol-last": ["error", "always"],

    // https://eslint.org/docs/rules/function-call-argument-newline
    "function-call-argument-newline": ["error", "consistent"],

    // enforce spacing between functions and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    "func-call-spacing": ["error", "never"],

    // requires function names to match the name of the variable or property to which they are
    // assigned
    // https://eslint.org/docs/rules/func-name-matching
    "func-name-matching": ["off", "always", {
      includeCommonJSModuleExports: false,
      considerPropertyDescriptor: true,
    }],

    // require function expressions to have a name
    // https://eslint.org/docs/rules/func-names
    "func-names": "warn",

    // enforces use of function declarations or expressions
    // https://eslint.org/docs/rules/func-style
    // TODO: enable
    "func-style": ["off", "expression"],

    // require line breaks inside function parentheses if there are line breaks between parameters
    // https://eslint.org/docs/rules/function-paren-newline
    "function-paren-newline": ["error", "multiline-arguments"],

    // disallow specified identifiers
    // https://eslint.org/docs/rules/id-denylist
    "id-denylist": "off",

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    "id-length": "off",

    // require identifiers to match the provided regular expression
    "id-match": "off",

    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    "implicit-arrow-linebreak": ["error", "beside"],

    // this option sets a specific tab width for your code
    // https://eslint.org/docs/rules/indent
    indent: ["error", 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ["JSXElement", "JSXElement > *", "JSXAttribute", "JSXIdentifier", "JSXNamespacedName", "JSXMemberExpression", "JSXSpreadAttribute", "JSXExpressionContainer", "JSXOpeningElement", "JSXClosingElement", "JSXFragment", "JSXOpeningFragment", "JSXClosingFragment", "JSXText", "JSXEmptyExpression", "JSXSpreadChild"],
      ignoreComments: false
    }],

    // specify whether double or single quotes should be used in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    "jsx-quotes": ["off", "prefer-double"],

    // enforces spacing between keys and values in object literal properties
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],

    // require a space before & after certain keywords
    "keyword-spacing": ["error", {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],

    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    // TODO: enable?
    "line-comment-position": ["off", {
      position: "above",
      ignorePattern: "",
      applyDefaultPatterns: true,
    }],

    // disallow mixed "LF" and "CRLF" as linebreaks
    // https://eslint.org/docs/rules/linebreak-style
    "linebreak-style": ["error", "unix"],

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: false }],

    // enforces empty lines around comments
    "lines-around-comment": "off",

    // require or disallow newlines around directives
    // https://eslint.org/docs/rules/lines-around-directive
    "lines-around-directive": ["error", {
      before: "always",
      after: "always",
    }],

    // Require or disallow logical assignment logical operator shorthand
    // https://eslint.org/docs/latest/rules/logical-assignment-operators
    // TODO, semver-major: enable
    "logical-assignment-operators": ["off", "always", {
      enforceForIfStatements: true,
    }],

    // specify the maximum depth that blocks can be nested
    "max-depth": ["off", 4],

    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    "max-len": ["error", 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // specify the max number of lines in a file
    // https://eslint.org/docs/rules/max-lines
    "max-lines": ["off", {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],

    // enforce a maximum function length
    // https://eslint.org/docs/rules/max-lines-per-function
    "max-lines-per-function": ["off", {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    }],

    // specify the maximum depth callbacks can be nested
    "max-nested-callbacks": "off",

    // limits the number of parameters that can be used in the function declaration.
    "max-params": ["off", 3],

    // specify the maximum number of statement allowed in a function
    "max-statements": ["off", 10],

    // restrict the number of statements per line
    // https://eslint.org/docs/rules/max-statements-per-line
    "max-statements-per-line": ["off", { max: 1 }],

    // enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    "multiline-comment-style": ["off", "starred-block"],

    // require multiline ternary
    // https://eslint.org/docs/rules/multiline-ternary
    // TODO: enable?
    "multiline-ternary": ["off", "never"],

    // require a capital letter for constructors
    "new-cap": ["error", {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"],
    }],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // https://eslint.org/docs/rules/new-parens
    "new-parens": "error",

    // allow/disallow an empty newline after var statement
    "newline-after-var": "off",

    // https://eslint.org/docs/rules/newline-before-return
    "newline-before-return": "off",

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // https://eslint.org/docs/rules/newline-per-chained-call
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],

    // disallow use of the Array constructor
    "no-array-constructor": "error",

    // disallow use of bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    "no-bitwise": "error",

    // disallow use of the continue statement
    // https://eslint.org/docs/rules/no-continue
    "no-continue": "error",

    // disallow comments inline after code
    "no-inline-comments": "off",

    // disallow if as the only statement in an else block
    // https://eslint.org/docs/rules/no-lonely-if
    "no-lonely-if": "error",

    // disallow un-paren"d mixes of different operators
    // https://eslint.org/docs/rules/no-mixed-operators
    "no-mixed-operators": ["error", {
      // the list of arithmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      groups: [
        ["%", "**"],
        ["%", "+"],
        ["%", "-"],
        ["%", "*"],
        ["%", "/"],
        ["/", "*"],
        ["&", "|", "<<", ">>", ">>>"],
        ["==", "!=", "===", "!=="],
        ["&&", "||"],
      ],
      allowSamePrecedence: false
    }],

    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": "error",

    // disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    "no-multi-assign": ["error"],

    // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],

    // disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    "no-negated-condition": "off",

    // disallow nested ternary expressions
    "no-nested-ternary": "error",

    // disallow use of the Object constructor
    "no-new-object": "error",

    // disallow use of unary operators, ++ and --
    // https://eslint.org/docs/rules/no-plusplus
    "no-plusplus": "error",

    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message: "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "ForOfStatement",
        message: "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
      },
      {
        selector: "LabeledStatement",
        message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],

    // disallow space between function identifier and application
    // deprecated in favor of func-call-spacing
    "no-spaced-func": "off",

    // disallow tab characters entirely
    "no-tabs": "off",

    // disallow the use of ternary operators
    "no-ternary": "off",

    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": ["error", {
      skipBlankLines: false,
      ignoreComments: false,
    }],

    // disallow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    "no-underscore-dangle": ["error", {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    }],

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // https://eslint.org/docs/rules/no-unneeded-ternary
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],

    // disallow whitespace before properties
    // https://eslint.org/docs/rules/no-whitespace-before-property
    "no-whitespace-before-property": "error",

    // enforce the location of single-line statements
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    "nonblock-statement-body-position": ["error", "beside", { overrides: {} }],

    // require padding inside curly braces
    "object-curly-spacing": ["error", "always"],

    // enforce line breaks between braces
    // https://eslint.org/docs/rules/object-curly-newline
    "object-curly-newline": ["error", {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],

    // enforce "same line" or "multiple line" on object properties.
    // https://eslint.org/docs/rules/object-property-newline
    "object-property-newline": ["error", {
      allowAllPropertiesOnSameLine: true,
    }],

    // allow just one var statement per function
    "one-var": ["error", "never"],

    // require a newline around variable declaration
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    "one-var-declaration-per-line": ["error", "always"],

    // require assignment operator shorthand where possible or prohibit it entirely
    // https://eslint.org/docs/rules/operator-assignment
    "operator-assignment": ["error", "always"],

    // Requires operator at the beginning of the line in multiline statements
    // https://eslint.org/docs/rules/operator-linebreak
    "operator-linebreak": ["error", "before", { overrides: { "=": "none" } }],

    // disallow padding within blocks
    "padded-blocks": ["error", {
      blocks: "never",
      classes: "never",
      switches: "never",
    }, {
      allowSingleLineBlocks: true,
    }],

    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    "padding-line-between-statements": "off",

    // Disallow the use of Math.pow in favor of the ** operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    "prefer-exponentiation-operator": "error",

    // Prefer use of an object spread over Object.assign
    // https://eslint.org/docs/rules/prefer-object-spread
    "prefer-object-spread": "error",

    // require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props.html
    "quote-props": ["error", "as-needed", { keywords: false, unnecessary: true, numbers: false }],

    // specify whether double or single quotes should be used
    quotes: ["error", "double", { avoidEscape: true }],

    // do not require jsdoc
    // https://eslint.org/docs/rules/require-jsdoc
    "require-jsdoc": "off",

    // require or disallow use of semicolons instead of ASI
    semi: ["error", "always"],

    // enforce spacing before and after semicolons
    "semi-spacing": ["error", { before: false, after: true }],

    // Enforce location of semicolons
    // https://eslint.org/docs/rules/semi-style
    "semi-style": ["error", "last"],

    // requires object keys to be sorted
    "sort-keys": ["off", "asc", { caseSensitive: false, natural: true }],

    // sort variables within the same declaration block
    "sort-vars": "off",

    // require or disallow space before blocks
    "space-before-blocks": "error",

    // require or disallow space before function opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    "space-before-function-paren": ["error", {
      anonymous: "always",
      named: "never",
      asyncArrow: "always"
    }],

    // require or disallow spaces inside parentheses
    "space-in-parens": ["error", "never"],

    // require spaces around operators
    "space-infix-ops": "error",

    // Require or disallow spaces before/after unary operators
    // https://eslint.org/docs/rules/space-unary-ops
    "space-unary-ops": ["error", {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],

    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    "spaced-comment": ["error", "always", {
      line: {
        exceptions: ["-", "+"],
        markers: ["=", "!", "/"], // space here to support sprockets directives, slash for TS /// comments
      },
      block: {
        exceptions: ["-", "+"],
        markers: ["=", "!", ":", "::"], // space here to support sprockets directives and flow comment types
        balanced: true,
      }
    }],

    // Enforce spacing around colons of switch statements
    // https://eslint.org/docs/rules/switch-colon-spacing
    "switch-colon-spacing": ["error", { after: true, before: false }],

    // Require or disallow spacing between template tags and their literals
    // https://eslint.org/docs/rules/template-tag-spacing
    "template-tag-spacing": ["error", "never"],

    // require or disallow the Unicode Byte Order Mark
    // https://eslint.org/docs/rules/unicode-bom
    "unicode-bom": ["error", "never"],

    // require regex literals to be wrapped in parentheses
    "wrap-regex": "off",

		//#endregion
	
    //#region Imports
    
    // ensure imports point to files/modules that can be resolved
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', { caseSensitive: true }],

    // ensure named imports coupled with named exports
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
    'import/named': 'error',

    // ensure default import coupled with default export
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
    'import/default': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/namespace.md
    'import/namespace': 'off',

    // Helpful warnings:

    // disallow invalid exports, e.g. multiple defaults
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': 'error',

    // do not allow a default import name to match a named export
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'error',

    // warn on accessing default export property names that are also named exports
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'error',

    // disallow use of jsdoc-marked-deprecated imports
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    'import/no-deprecated': 'off',

    // Forbid the use of extraneous packages
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // paths are treated both as absolute paths, and relative to process.cwd()
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'test/**', // tape, common npm pattern
        'tests/**', // also common npm pattern
        'spec/**', // mocha, rspec-like pattern
        '**/__tests__/**', // jest pattern
        '**/__mocks__/**', // jest pattern
        'test.{js,jsx}', // repos with a single test file
        'test-*.{js,jsx}', // repos with multiple top-level test files
        '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
        '**/jest.config.js', // jest config
        '**/jest.setup.js', // jest setup
        '**/vue.config.js', // vue-cli config
        '**/webpack.config.js', // webpack config
        '**/webpack.config.*.js', // webpack config
        '**/rollup.config.js', // rollup config
        '**/rollup.config.*.js', // rollup config
        '**/gulpfile.js', // gulp config
        '**/gulpfile.*.js', // gulp config
        '**/Gruntfile{,.js}', // grunt config
        '**/protractor.conf.js', // protractor config
        '**/protractor.conf.*.js', // protractor config
        '**/karma.conf.js', // karma config
        '**/.eslintrc.js' // eslint config
      ],
      optionalDependencies: false,
    }],

    // Forbid mutable exports
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

    // Module systems:

    // disallow require()
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    'import/no-commonjs': 'off',

    // disallow AMD require/define
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    'import/no-amd': 'error',

    // No Node.js builtin modules
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    // TODO: enable?
    'import/no-nodejs-modules': 'off',

    // Style guide:

    // disallow non-import statements appearing before import statements
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': 'error',

    // disallow non-import statements appearing before import statements
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/imports-first.md
    // deprecated: use `import/first`
    'import/imports-first': 'off',

    // disallow duplicate imports
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',

    // disallow namespace imports
    // TODO: enable?
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    'import/no-namespace': 'off',

    // Ensure consistent use of file extension within the import path
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
    }],

    // ensure absolute imports are above relative imports and that unassigned imports are ignored
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/order.md
    // TODO: enforce a stricter convention in module import order?
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],

    // Require a newline after the last import/require in a group
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',

    // Require modules with a single export to use a default export
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'error',

    // Restrict which files can be imported in a given folder
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
    'import/no-restricted-paths': 'off',

    // Forbid modules to have too many dependencies
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
    'import/max-dependencies': ['off', { max: 10 }],

    // Forbid import of modules using absolute paths
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'error',

    // Forbid require() calls with expressions
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'error',

    // prevent importing the submodules of other modules
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
    'import/no-internal-modules': ['off', {
      allow: [],
    }],

    // Warn if a module could be mistakenly parsed as a script by a consumer
    // leveraging Unambiguous JavaScript Grammar
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
    // this should not be enabled until this proposal has at least been *presented* to TC39.
    // At the moment, it's not a thing.
    'import/unambiguous': 'off',

    // Forbid Webpack loader syntax in imports
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'error',

    // Prevent unassigned imports
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
    // importing for side effects is perfectly acceptable, if you need side effects.
    'import/no-unassigned-import': 'off',

    // Prevent importing the default as if it were named
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    'import/no-named-default': 'error',

    // Reports if a module's default export is unnamed
    // https://github.com/import-js/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': ['off', {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    }],

    // This rule enforces that all exports are declared at the bottom of the file.
    // https://github.com/import-js/eslint-plugin-import/blob/98acd6afd04dcb6920b81330114e146dc8532ea4/docs/rules/exports-last.md
    // TODO: enable?
    'import/exports-last': 'off',

    // Reports when named exports are not grouped together in a single export declaration
    // or when multiple assignments to CommonJS module.exports or exports object are present
    // in a single file.
    // https://github.com/import-js/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/group-exports.md
    'import/group-exports': 'off',

    // forbid default exports. this is a terrible rule, do not use it.
    // https://github.com/import-js/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-default-export.md
    'import/no-default-export': 'off',

    // Prohibit named exports. this is a terrible rule, do not use it.
    // https://github.com/import-js/eslint-plugin-import/blob/1ec80fa35fa1819e2d35a70e68fb6a149fb57c5e/docs/rules/no-named-export.md
    'import/no-named-export': 'off',

    // Forbid a module from importing itself
    // https://github.com/import-js/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-self-import.md
    'import/no-self-import': 'error',

    // Forbid cyclical dependencies between modules
    // https://github.com/import-js/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
    'import/no-cycle': ['error', { maxDepth: '∞' }],

    // Ensures that there are no useless path segments
    // https://github.com/import-js/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['error', { commonjs: true }],

    // dynamic imports require a leading comment with a webpackChunkName
    // https://github.com/import-js/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/dynamic-import-chunkname.md
    'import/dynamic-import-chunkname': ['off', {
      importFunctions: [],
      webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
    }],

    // Use this rule to prevent imports to folders in relative parent paths.
    // https://github.com/import-js/eslint-plugin-import/blob/c34f14f67f077acd5a61b3da9c0b0de298d20059/docs/rules/no-relative-parent-imports.md
    'import/no-relative-parent-imports': 'off',

    // Reports modules without any exports, or with unused exports
    // https://github.com/import-js/eslint-plugin-import/blob/f63dd261809de6883b13b6b5b960e6d7f42a7813/docs/rules/no-unused-modules.md
    // TODO: enable once it supports CJS
    'import/no-unused-modules': ['off', {
      ignoreExports: [],
      missingExports: true,
      unusedExports: true,
    }],

    // Reports the use of import declarations with CommonJS exports in any module except for the main module.
    // https://github.com/import-js/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-import-module-exports.md
    'import/no-import-module-exports': ['error', {
      exceptions: [],
    }],

    // Use this rule to prevent importing packages through relative paths.
    // https://github.com/import-js/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-relative-packages.md
    'import/no-relative-packages': 'error',

    // enforce a consistent style for type specifiers (inline or top-level)
    // https://github.com/import-js/eslint-plugin-import/blob/d5fc8b670dc8e6903dbb7b0894452f60c03089f5/docs/rules/consistent-type-specifier-style.md
    // TODO, semver-major: enable (just in case)
    'import/consistent-type-specifier-style': ['off', 'prefer-inline'],

    // Reports the use of empty named import blocks.
    // https://github.com/import-js/eslint-plugin-import/blob/d5fc8b670dc8e6903dbb7b0894452f60c03089f5/docs/rules/no-empty-named-blocks.md
    // TODO, semver-minor: enable
    'import/no-empty-named-blocks': 'off',

    //#endregion
  
    //#region ES6

    // enforces no braces where they can be omitted
    // https://eslint.org/docs/rules/arrow-body-style
    // TODO: enable requireReturnForObjectLiteral?
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],

    // require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed'],

    // require space before/after arrow function's arrow
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['error', { before: true, after: true }],

    // verify super() callings in constructors
    'constructor-super': 'error',

    // enforce the spacing around the * in generator functions
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': ['error', { before: false, after: true }],

    // disallow modifying variables of class declarations
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // disallow arrow functions where they could be confused with comparisons
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],

    // disallow modifying variables that are declared using const
    'no-const-assign': 'error',

    // disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // disallow importing from the same path more than once
    // https://eslint.org/docs/rules/no-duplicate-imports
    // replaced by https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'no-duplicate-imports': 'off',

    // disallow symbol constructor
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // Disallow specified names in exports
    // https://eslint.org/docs/rules/no-restricted-exports
    'no-restricted-exports': ['error', {
      restrictedNamedExports: [
        'default', // use `export default` to provide a default export
        'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
      ],
    }],

    // disallow specific imports
    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': ['off', {
      paths: [],
      patterns: []
    }],

    // disallow to use this/super before super() calling in constructors.
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // disallow useless computed property keys
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // disallow unnecessary constructor
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],

    // require let or const instead of var
    'no-var': 'error',

    // require method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],

    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],

    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],

    // Prefer destructuring from arrays and objects
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }],

    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // suggest using Reflect methods where applicable
    // https://eslint.org/docs/rules/prefer-reflect
    'prefer-reflect': 'off',

    // use rest parameters instead of arguments
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // suggest using the spread syntax instead of .apply()
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // suggest using template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // disallow generator functions that do not have yield
    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'error',

    // enforce spacing between object rest-spread
    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],

    // import sorting
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': ['off', {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],

    // require a Symbol description
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // enforce usage of spacing in template strings
    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'error',

    // enforce spacing around the * in yield* expressions
    // https://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': ['error', 'after'],

    //#endregion

    //#region Variables

    // enforce or disallow variable initializations at definition
    'init-declarations': 'off',

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 'off',

    // disallow deletion of variables
    'no-delete-var': 'error',

    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // disallow specific globals
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message:
          'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
      },
      {
        name: 'isNaN',
        message:
          'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
      },
      {
        name: 'addEventListener',
        message: "Use window.addEventListener instead"
      },
      {
        name: 'blur',
        message: "Use window.blur instead"
      },
      {
        name: 'close',
        message: "Use window.close instead"
      },
      {
        name: 'closed',
        message: "Use window.closed instead"
      },
      {
        name: 'confirm',
        message: "Use window.confirm instead"
      },
      {
        name: 'defaultStatus',
        message: "Use window.defaultStatus instead"
      },
      {
        name: 'defaultstatus',
        message: "Use window.defaultstatus instead"
      },
      {
        name: 'event',
        message: "Use window.event instead"
      },
      {
        name: 'external',
        message: "Use window.external instead"
      },
      {
        name: 'find',
        message: "Use window.find instead"
      },
      {
        name: 'focus',
        message: "Use window.focus instead"
      },
      {
        name: 'frameElement',
        message: "Use window.frameElement instead"
      },
      {
        name: 'frames',
        message: "Use window.frames instead"
      },
      {
        name: 'history',
        message: "Use window.history instead"
      },
      {
        name: 'innerHeight',
        message: "Use window.innerHeight instead"
      },
      {
        name: 'innerWidth',
        message: "Use window.innerWidth instead"
      },
      {
        name: 'length',
        message: "Use window.length instead"
      },
      {
        name: 'location',
        message: "Use window.location instead"
      },
      {
        name: 'locationbar',
        message: "Use window.locationbar instead"
      },
      {
        name: 'menubar',
        message: "Use window.menubar instead"
      },
      {
        name: 'moveBy',
        message: "Use window.moveBy instead"
      },
      {
        name: 'moveTo',
        message: "Use window.moveTo instead"
      },
      {
        name: 'name',
        message: "Use window.name instead"
      },
      {
        name: 'onblur',
        message: "Use window.onblur instead"
      },
      {
        name: 'onerror',
        message: "Use window.onerror instead"
      },
      {
        name: 'onfocus',
        message: "Use window.onfocus instead"
      },
      {
        name: 'onload',
        message: "Use window.onload instead"
      },
      {
        name: 'onresize',
        message: "Use window.onresize instead"
      },
      {
        name: 'onunload',
        message: "Use window.onunload instead"
      },
      {
        name: 'open',
        message: "Use window.open instead"
      },
      {
        name: 'opener',
        message: "Use window.opener instead"
      },
      {
        name: 'opera',
        message: "Use window.opera instead"
      },
      {
        name: 'outerHeight',
        message: "Use window.outerHeight instead"
      },
      {
        name: 'outerWidth',
        message: "Use window.outerWidth instead"
      },
      {
        name: 'pageXOffset',
        message: "Use window.pageXOffset instead"
      },
      {
        name: 'pageYOffset',
        message: "Use window.pageYOffset instead"
      },
      {
        name: 'parent',
        message: "Use window.parent instead"
      },
      {
        name: 'print',
        message: "Use window.print instead"
      },
      {
        name: 'removeEventListener',
        message: "Use window.removeEventListener instead"
      },
      {
        name: 'resizeBy',
        message: "Use window.resizeBy instead"
      },
      {
        name: 'resizeTo',
        message: "Use window.resizeTo instead"
      },
      {
        name: 'screen',
        message: "Use window.screen instead"
      },
      {
        name: 'screenLeft',
        message: "Use window.screenLeft instead"
      },
      {
        name: 'screenTop',
        message: "Use window.screenTop instead"
      },
      {
        name: 'screenX',
        message: "Use window.screenX instead"
      },
      {
        name: 'screenY',
        message: "Use window.screenY instead"
      },
      {
        name: 'scroll',
        message: "Use window.scroll instead"
      },
      {
        name: 'scrollbars',
        message: "Use window.scrollbars instead"
      },
      {
        name: 'scrollBy',
        message: "Use window.scrollBy instead"
      },
      {
        name: 'scrollTo',
        message: "Use window.scrollTo instead"
      },
      {
        name: 'scrollX',
        message: "Use window.scrollX instead"
      },
      {
        name: 'scrollY',
        message: "Use window.scrollY instead"
      },
      {
        name: 'self',
        message: "Use window.self instead"
      },
      {
        name: 'status',
        message: "Use window.status instead"
      },
      {
        name: 'statusbar',
        message: "Use window.statusbar instead"
      },
      {
        name: 'stop',
        message: "Use window.stop instead"
      },
      {
        name: 'toolbar',
        message: "Use window.toolbar instead"
      },
      {
        name: 'top',
        message: "Use window.top instead"
      }
    ],

    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',

    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',

    // disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // disallow use of undefined variable
    // https://eslint.org/docs/rules/no-undefined
    // TODO: enable?
    'no-undefined': 'off',

    // disallow declaration of variables that are not used in the code
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // disallow use of variables before they are defined
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],

    //#endregion

    //#region Best Practices

    // Enforce “for” loop update clause moving the counter in the right direction
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'warn',

    // Enforces that a return statement is present in property getters
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],

    // disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',

    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',

    // Disallow comparisons to negative zero
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // disallow assignment in conditional expressions
    'no-cond-assign': ['error', 'always'],

    // disallow use of console
    'no-console': 'warn',

    // Disallows expressions where the operation doesn't affect the value
    // https://eslint.org/docs/rules/no-constant-binary-expression
    // TODO: semver-major, enable
    'no-constant-binary-expression': 'off',

    // disallow use of constant expressions in conditions
    'no-constant-condition': 'warn',

    // disallow control characters in regular expressions
    'no-control-regex': 'error',

    // disallow use of debugger
    'no-debugger': 'error',

    // disallow duplicate arguments in functions
    'no-dupe-args': 'error',

    // Disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-else-if': 'error',

    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 'error',

    // disallow a duplicate case label.
    'no-duplicate-case': 'error',

    // disallow empty statements
    'no-empty': 'error',

    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 'error',

    // disallow assigning to the exception in a catch block
    'no-ex-assign': 'error',

    // disallow double-negation boolean casts in a boolean context
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    }],

    // disallow unnecessary semicolons
    'no-extra-semi': 'error',

    // disallow overwriting functions written as function declarations
    'no-func-assign': 'error',

    // https://eslint.org/docs/rules/no-import-assign
    'no-import-assign': 'error',

    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 'error',

    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 'error',

    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 'error',

    // Disallow Number Literals That Lose Precision
    // https://eslint.org/docs/rules/no-loss-of-precision
    'no-loss-of-precision': 'error',

    // Disallow characters which are made with multiple code points in character class syntax
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',

    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 'error',

    // Disallow new operators with global non-constructor functions
    // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
    // TODO: semver-major, enable
    'no-new-native-nonconstructor': 'off',

    // Disallow returning values from Promise executor functions
    // https://eslint.org/docs/rules/no-promise-executor-return
    'no-promise-executor-return': 'error',

    // disallow use of Object.prototypes builtins directly
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 'error',

    // Disallow returning values from setters
    // https://eslint.org/docs/rules/no-setter-return
    'no-setter-return': 'error',

    // disallow sparse arrays
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // Avoid code that looks like two expressions but is actually one
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 'error',

    // Disallow loops with a body that allows only one iteration
    // https://eslint.org/docs/rules/no-unreachable-loop
    'no-unreachable-loop': ['error', {
      ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    }],

    // disallow return/throw/break/continue inside finally blocks
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // disallow use of optional chaining in contexts where the undefined value is not allowed
    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

    // Disallow Unused Private Class Members
    // https://eslint.org/docs/rules/no-unused-private-class-members
    // TODO: enable once eslint 7 is dropped (which is semver-major)
    'no-unused-private-class-members': 'off',

    // Disallow useless backreferences in regular expressions
    // https://eslint.org/docs/rules/no-useless-backreference
    'no-useless-backreference': 'error',

    // disallow negation of the left operand of an in expression
    // deprecated in favor of no-unsafe-negation
    'no-negated-in-lhs': 'off',

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // https://eslint.org/docs/rules/require-atomic-updates
    // note: not enabled because it is very buggy
    'require-atomic-updates': 'off',

    // disallow comparisons with the value NaN
    'use-isnan': 'error',

    // ensure JSDoc comments are valid
    // https://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'off',

    // ensure that the results of typeof are compared against a valid string
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error', { requireStringLiterals: true }],

    //#endregion
  
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json']
      }
    },
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx',
    ],
    'import/core-modules': [
    ],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  }
};
