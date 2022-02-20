// .prettierrc.js
module.exports = {
  // 单行代码超出 100 个字符自动换行
  printWidth: 100,
  // 一个 tab 键缩进相当于 2 个空格
  tabWidth: 2,
  // 行缩进使用 tab 键代替空格
  useTabs: false,
  // 每一条语句后面添加分号
  semi: true,
  // 使用单引号
  singleQuote: false,
  // 仅仅当必须的时候才会加上双引号
  quoteProps: "as-needed",
  // JSX 中使用单引号
  jsxSingleQuote: false,
  // 多行用逗号分隔的句法，未尾添加逗号（符合es5规范）
  trailingComma: "es5",
  // 在括号和对象的文字之间加上一个空格
  bracketSpacing: true,
  // 多行的 JSX 对象结尾的 > 放在结尾同一行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: "always",
  // 格式化文档的某一部分，默认为全部
  rangeStart: 0,
  rangeEnd: Infinity,
  // 对于 .vue 文件，缩进 <script> 和 <style> 里的内容
  vueIndentScriptAndStyle: true,
  // 不需要写文件开头的 @prettier
  insertPragma: false,
  // 不需要在文件开头插入 @prettier
  requirePragma: false,
  // 使用默认折行标准
  proseWrap: "preserve",
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: "css",
  // 换行符使用 lf
  endOfLine: "lf",
};
