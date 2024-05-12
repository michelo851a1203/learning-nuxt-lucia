// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import simpleSort from "eslint-plugin-simple-import-sort";
import prettier from "eslint-plugin-prettier";

export default withNuxt({
  files: ["**/*.ts", "**/*.vue"],
  plugins: {
    simpleSort,
    prettier,
  },
  rules: {
    "no-var": "error",
    "prefer-const": "error",
    "no-empty-function": "error",
    "no-empty": "error",
    "no-unreachable": "error",
    "no-template-curly-in-string": "error",
    complexity: ["error", 5],
    "no-duplicate-imports": "error",
    "no-dupe-keys": "error",
    camelcase: "error",
    quotes: ["error", "single"],

    // simple sort
    "simpleSort/imports": "error",
    "simpleSort/exports": "error",

    // prettier
    "prettier/prettier": ["error", { 
      // 指定最大换行长度
      printWidth: 130,
      // 缩进制表符宽度 | 空格数
      tabWidth: 2,
      // 使用制表符而不是空格缩进行 (true：制表符，false：空格)
      useTabs: false,
      // 结尾不用分号 (true：有，false：没有)
      semi: true,
      singleQuote: true,
      // 在对象字面量中决定是否将属性名用引号括起来 可选值 "<as-needed|consistent|preserve>"
      quoteProps: "as-needed",
      // 在JSX中使用单引号而不是双引号 (true：单引号，false：双引号)
      jsxSingleQuote: false,
      // 多行时尽可能打印尾随逗号 可选值"<none|es5|all>"
      trailingComma: "none",
      // 在对象，数组括号与文字之间加空格 "{ foo: bar }" (true：有，false：没有)
      bracketSpacing: true,
      // 将 > 多行元素放在最后一行的末尾，而不是单独放在下一行 (true：放末尾，false：单独一行)
      bracketSameLine: false,
      // (x) => {} 箭头函数参数只有一个时是否要有小括号 (avoid：省略括号，always：不省略括号)
      arrowParens: "avoid",
      // 指定要使用的解析器，不需要写文件开头的 @prettier
      requirePragma: false,
      // 可以在文件顶部插入一个特殊标记，指定该文件已使用 Prettier 格式化
      insertPragma: false,
      // 用于控制文本是否应该被换行以及如何进行换行
      proseWrap: "preserve",
      // 在html中空格是否是敏感的 "css" - 遵守 CSS 显示属性的默认值， "strict" - 空格被认为是敏感的 ，"ignore" - 空格被认为是不敏感的
      htmlWhitespaceSensitivity: "css",
      // 控制在 Vue 单文件组件中 <script> 和 <style> 标签内的代码缩进方式
      vueIndentScriptAndStyle: false,
      // 换行符使用 lf 结尾是 可选值 "<auto|lf|crlf|cr>"
      endOfLine: "auto",
      // 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码 (rangeStart：开始，rangeEnd：结束)
      rangeStart: 0,
      rangeEnd: Infinity,
    }],

    //vue
    "vue/v-slot-style": "error",
    "vue/no-deprecated-data-object-declaration": "error",
    "vue/no-deprecated-destroyed-lifecycle": "error",
    "vue/no-async-in-computed-properties": "error",
    "vue/no-mutating-props": "error",
    "vue/custom-event-name-casing": "error",
    "vue/attribute-hyphenation": "error",
    "vue/attributes-order": "error",
    "vue/valid-attribute-name": "error",
    "vue/no-deprecated-v-is": "error",
    "vue/require-default-prop": "error",
    "vue/no-unused-refs": "error",
    "vue/no-v-html": "error",
    "vue/v-bind-style": "error",
    "vue/prop-name-casing": "error",
    "vue/no-template-shadow": "error",
    "vue/no-spaces-around-equal-signs-in-attribute": "error",
    "vue/no-multi-spaces": "error",
    "vue/mustache-interpolation-spacing": "error",
    "vue/html-self-closing": "error",
    "vue/html-quotes": "error",
    "vue/html-end-tags": "error",
    "vue/html-closing-bracket-spacing": "error",
    "vue/order-in-components": "error",
    "vue/this-in-template": "error",
    "vue/no-v-text": "error",

    // typescript
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
  },
  ignores: [
    "*.sh",
    "node_modules",
    "*.md",
    "*.woff",
    "*.ttf",
    ".vscode",
    ".idea",
    "dist",
    "/public",
    "/docs",
    ".husky",
    ".local",
    "/bin",
    "/src/mock/*",
    "stats.html",
  ],
});
