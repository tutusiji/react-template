# 快速参考指南

## 代码格式化和检查

### 自动修复引号问题

```bash
# 修复整个项目的代码格式
npm run lint:fix

# 只检查不修复
npm run lint

# 格式化特定文件
npx eslint src/components/MyComponent.tsx --fix
```

### VSCode 快捷键

- **格式化文档**: `Shift + Alt + F`
- **格式化选中代码**: `Ctrl + K, Ctrl + F`
- **修复 ESLint 问题**: `Ctrl + Shift + P` → "ESLint: Fix all auto-fixable Problems"

## 引号规则

### ✅ 正确用法 (单引号)

```typescript
// 字符串
const message = 'Hello World'

// JSX 属性
<div className='container' id='main'>

// 导入语句
import React from 'react'
import { Button } from 'antd'

// 对象属性 (当需要时)
const obj = { 'special-key': 'value' }
```

### ❌ 错误用法 (双引号)

```typescript
// 这些会被自动修复为单引号
const message = "Hello World"
<div className="container" id="main">
import React from "react"
```

### 例外情况

```typescript
// 当字符串包含单引号时，可以使用双引号
const message = "It's a beautiful day"

// 或者使用转义
const message = "It's a beautiful day"

// 模板字符串始终使用反引号
const message = `Hello ${name}`
```

## 图标使用

### 本地 SVG 图标

```tsx
// 基本用法
<i className="i-svg-search"></i>

// 修改颜色
<i className="i-svg-search text-[#f00]"></i>
<i className="i-svg-search text-blue-500"></i>

// 修改大小
<i className="i-svg-search text-2xl"></i>

// 组合使用
<i className="i-svg-search text-2xl text-blue-500"></i>
```

### 可用图标

- `i-svg-search` - 搜索
- `i-svg-location` - 位置
- `i-svg-lock` - 锁定
- `i-svg-mobile` - 移动设备
- `i-svg-monitor` - 显示器
- `i-svg-picture` - 图片
- `i-svg-power-off` - 关闭

## 常用命令

```bash
# 开发服务器
npm run dev

# 构建项目
npm run build

# 代码检查
npm run lint

# 自动修复代码问题
npm run lint:fix

# 预览构建结果
npm run preview
```

## 推荐的 VSCode 扩展

确保安装以下扩展以获得最佳开发体验：

1. **Prettier - Code formatter** (esbenp.prettier-vscode)
2. **ESLint** (dbaeumer.vscode-eslint)
3. **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)
4. **TypeScript Importer** (pmneo.tsimporter)
5. **Auto Rename Tag** (formulahendry.auto-rename-tag)
6. **Path Intellisense** (christian-kohler.path-intellisense)

## 故障排除

### 引号没有自动转换

1. 检查是否安装了 Prettier 和 ESLint 扩展
2. 重启 VSCode
3. 手动运行 `npm run lint:fix`

### 保存时没有格式化

1. 检查 VSCode 设置中的 `editor.formatOnSave` 是否为 `true`
2. 确认默认格式化程序设置为 Prettier
3. 检查文件是否在 `.eslintignore` 中被忽略

### ESLint 和 Prettier 冲突

项目已配置避免冲突，如果仍有问题：

1. 确保 `.eslintrc.cjs` 中包含 `'prettier'` 配置
2. 检查 Prettier 配置是否与 ESLint 规则一致
