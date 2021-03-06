module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
		'commonjs': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'no-unused-vars': 'off',
		'react/prop-types': 'off',
		'react/jsx-no-undef': 'off',
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	},
	'settings': {
		'react': {
			'version': 'detect'
		}
	}
}
