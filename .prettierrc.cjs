module.exports = {
  semi: true,
  endOfLine: 'auto',
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  vueIndentScriptAndStyle: false,
  jsxBracketSameLine: true,
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html'
      }
    }
  ]
};
