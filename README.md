# babel-ast-practice

记录 babel-ast 的练习代码

## 工具

[Babel AST explorer - 在线解析](https://astexplorer.net/)

## 学习资料

- 操作符文档
  - <https://www.babeljs.cn/docs/babel-types>
  - <https://github.com/babel/babel/blob/master/packages/babel-parser/ast/spec.md>

- [Babel 插件手册 - jamiebuilds/babel-handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)

## Babel 的处理步骤

1. parse: 将字符串形式代码解析成 `AST` (词法分析和语法分析) ———— [@babel/parser](https://www.babeljs.cn/docs/babel-parser)
   1. 词法分析: 将字符串形式的代码转换为**令牌流 (tokens)**(语法片段数组)
      1. 关键字: function if else return
      2. 运算符
      3. 括号
      4. 数字
      5. 字符串
   2. 语法分析: 将令牌流转换成 `AST`
2. transform: 遍历 `AST` 并对其节点做添加、修改和删除操作 ———— [@babel/traverse](https://www.babeljs.cn/docs/babel-traverse)
3. generate: 将修改后的 `AST` 转换成字符串形式的代码 ———— [@babel/generator](https://www.babeljs.cn/docs/babel-generator)
