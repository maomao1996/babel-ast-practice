const { parse } = require('@babel/parser')
const { default: traverse } = require('@babel/traverse')
const { default: generate } = require('@babel/generator')
const t = require('@babel/types')

/**
 * 修改变量
 *    var mm = 'mm'
 *    let maomao = 'mm'
 */

const code = `var mm = 'mm'`

// 解析 ast
const ast = parse(code)

// 修改 ast
traverse(ast, {
  // 传入 VariableDeclarator 函数: 只对 VariableDeclarator 类型的节点做修改
  VariableDeclarator(variablePath) {
    // 只修改变量标识符为 mm 的节点
    if (variablePath.get('id.name').node === 'mm') {
      variablePath.parentPath.replaceWith(
        // 生成 let 变量声明节点
        t.variableDeclaration('let', [
          t.variableDeclarator(
            // 生成标识符节点 参数为要修改的 maomao
            t.identifier('maomao'),
            // 用之前的值来初始化变量
            variablePath.get('init').node
          )
        ])
      )
    }
  }
})

// 根据 ast 生成代码
console.log(generate(ast).code)
