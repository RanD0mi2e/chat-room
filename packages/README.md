# 开发遇到的坑

## 1.设置类型别名"@"后，其他模块引用时提示eslint错误：unable to resolve path to module

原因：eslint 默认是不会读取 tsconfig.json 内容下的baseUrl和path，也就无法识别类型别名'@'对应的路径。

解决思路：引入 eslint-plugin-import eslint-import-resolver-typescript，并且根据https://www.npmjs.com/package/eslint-import-resolver-typescript修改.eslintrc.json配置，使得eslint使用tsconfig下的配置从而解决导入问题。