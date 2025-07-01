# VSCode 配置指南

## 概述

本项目已配置 VSCode 工作区设置，确保代码格式化和 ESLint 规则的一致性，特别是针对引号使用的统一配置。

## 配置文件

### 1. `.vscode/settings.json`

工作区设置文件，包含以下关键配置：

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "prettier.singleQuote": true,
  "prettier.jsxSingleQuote": true,
  "typescript.preferences.quoteStyle": "single",
  "javascript.preferences.quoteStyle": "single"
}
```

### 2. `.vscode/extensions.json`

推荐的 VSCode 扩展列表：

- **Prettier - Code formatter**: 代码格式化
- **ESLint**: 代码检查
- **Tailwind CSS IntelliSense**: Tailwind CSS 智能提示
- **TypeScript Importer**: TypeScript 导入支持
- **Auto Rename Tag**: 自动重命名标签
- **Path Intellisense**: 路径智能提示

## 引号配置

### 统一使用单引号

项目配置为统一使用单引号，包括：

1. **JavaScript/TypeScript 字符串**: 使用单引号
   ```javascript
   const message = 'Hello World'
   ```

2. **JSX 属性**: 使用单引号
   ```jsx
   <div className='container' id='main'>
   ```

3. **导入语句**: 使用单引号
   ```javascript
   import React from 'react'
   import { Button } from 'antd'
   ```

### ESLint 规则

在 `.eslintrc.cjs` 中配置了以下引号规则：

```javascript
rules: {
  // 强制使用单引号
  'quotes': ['error', 'single', { 
    'avoidEscape': true, 
    'allowTemplateLiterals': true 
  }],
  // JSX 属性使用单引号
  'jsx-quotes': ['error', 'prefer-single'],
}
```

### Prettier 配置

在 `.prettierrc` 和 ESLint 中都配置了：

```json
{
  "singleQuote": true,
  "jsxSingleQuote": true
}
```

## 自动修复

### 保存时自动格式化

配置了保存时自动运行：
1. Prettier 格式化
2. ESLint 自动修复

### 手动修复命令

如果需要手动修复整个项目的引号问题：

```bash
# 修复所有 ESLint 错误
npm run lint:fix

# 或者直接运行 ESLint
npx eslint . --ext .js,.jsx,.ts,.tsx --fix
```

## 常见问题解决

### 1. 引号不一致报错

**问题**: VSCode 显示引号相关的 ESLint 错误

**解决方案**:
1. 确保安装了推荐的扩展
2. 重启 VSCode
3. 运行 `npm run lint:fix` 自动修复

### 2. 格式化不生效

**问题**: 保存时没有自动格式化

**解决方案**:
1. 检查是否安装了 Prettier 扩展
2. 确认 `.vscode/settings.json` 配置正确
3. 在 VSCode 中按 `Ctrl+Shift+P`，搜索 "Format Document"

### 3. ESLint 和 Prettier 冲突

**问题**: ESLint 和 Prettier 规则冲突

**解决方案**:
项目已配置 `eslint-config-prettier` 来避免冲突，如果仍有问题：
1. 检查 `.eslintrc.cjs` 中是否包含 `'prettier'` 配置
2. 确保 Prettier 配置与 ESLint 中的 `prettier/prettier` 规则一致

## 团队协作

### 统一开发环境

1. **安装推荐扩展**: VSCode 会自动提示安装 `.vscode/extensions.json` 中的扩展

2. **共享设置**: `.vscode/settings.json` 确保团队成员使用相同的格式化设置

3. **代码检查**: 提交前运行 `npm run lint` 检查代码规范

### Git Hooks (可选)

可以配置 Git hooks 在提交前自动运行代码检查：

```bash
# 安装 husky 和 lint-staged
npm install --save-dev husky lint-staged

# 配置 pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"
```

在 `package.json` 中添加：

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

## 验证配置

创建一个测试文件验证配置是否正确：

```typescript
// test.ts
const message = "Hello World" // 应该自动转换为单引号
const element = <div className="test"></div> // 应该自动转换为单引号
```

保存文件后，引号应该自动转换为单引号。
