# UnoCSS Tailwind CSS 兼容性配置

## 概述

本项目已配置 UnoCSS 以完全兼容 Tailwind CSS 的写法，您可以直接使用 Tailwind CSS 的类名和语法。

## 配置更改

### 1. 预设配置

在 `uno.config.ts` 中添加了以下预设：

- **`presetWind()`**: 提供 Tailwind CSS 兼容性
- **`presetTypography()`**: 提供排版相关的样式
- **`presetUno()`**: 保留 UnoCSS 的额外实用工具
- **`presetAttributify()`**: 支持属性化写法
- **`presetIcons()`**: 图标支持

### 2. 主题配置

扩展了主题配置以支持 Tailwind CSS 标准：

```typescript
theme: {
  // Tailwind CSS 兼容的字体系列
  fontFamily: {
    sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    serif: ['ui-serif', 'Georgia', 'serif'],
    mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
  },
  // Tailwind CSS 兼容的间距系统
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    // ... 完整的 Tailwind 间距配置
  },
}
```

### 3. 变体支持

添加了常用的 Tailwind CSS 变体：

- `hover:` - 悬停状态
- `focus:` - 焦点状态
- `active:` - 活动状态
- `disabled:` - 禁用状态

### 4. 任意值支持

支持 Tailwind CSS 的任意值语法：

```html
<!-- 宽度和高度 -->
<div class="w-[100px] h-[50px]">

<!-- 颜色 -->
<div class="bg-[#ff6b6b] text-[#333]">

<!-- 间距 -->
<div class="m-[10px] p-[20px]">

<!-- 定位 -->
<div class="top-[10px] left-[20px] z-[999]">
```

## 使用示例

### 基础布局

```html
<div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <!-- 内容 -->
  </div>
</div>
```

### 响应式设计

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- 网格项目 -->
</div>
```

### 伪类状态

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200">
  按钮
</button>
```

### 渐变背景

```html
<div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
  渐变背景
</div>
```

## 测试页面

访问 `/tailwind-test` 路由可以查看完整的 Tailwind CSS 兼容性测试页面，包含：

- 响应式布局
- 伪类状态
- 渐变背景
- 间距和排版
- 任意值语法

## 注意事项

1. **CSS 重置**: 项目使用 `@unocss/reset/tailwind.css` 作为 CSS 重置，与 Tailwind CSS 保持一致

2. **导入顺序**: 在 `main.tsx` 中的导入顺序很重要：
   ```typescript
   import '@unocss/reset/tailwind.css'
   import 'virtual:uno.css'
   import 'antd/dist/reset.css'
   ```

3. **与 Ant Design 兼容**: 配置确保与 Ant Design 组件库的良好兼容性

4. **性能优化**: UnoCSS 只会生成实际使用的 CSS，确保最小的包体积

## 迁移指南

如果您有现有的 Tailwind CSS 项目，可以直接复制类名到本项目中，无需修改。所有标准的 Tailwind CSS 类名都应该正常工作。

## 自定义扩展

如需添加自定义样式，可以在 `uno.config.ts` 的以下部分进行配置：

- `shortcuts`: 自定义快捷类名
- `rules`: 自定义 CSS 规则
- `theme`: 扩展主题配置
- `variants`: 添加自定义变体
