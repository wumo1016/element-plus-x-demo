## md 插件

```ts
// 数学公式
markdown - it - katex
markdown - it - mathjax3
```

## 自定义代码围栏

```ts
// (md: MarkdownIt) => {
//   const sourceRender = md.renderer.rules.fence
//   md.renderer.rules.fence = (tokens, idx, options, env, self) => {
//     const token = tokens[idx]
//     if (token.info === 'custom' && token.content) {
//       const buttom = h(ElButton, {}, '测试按钮')
//       const div = document.createElement('div')
//       render(buttom, div)
//       return div.firstElementChild?.outerHTML || ''
//     }
//     return sourceRender?.(tokens, idx, options, env, self) as string
//   }
// }
```
