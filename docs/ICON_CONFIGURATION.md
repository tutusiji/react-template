# UnoCSS 图标配置指南

## 概述

本项目已配置 UnoCSS 的图标功能，支持使用本地 SVG 图标。您可以通过简单的类名来使用图标，并且支持颜色和大小的自定义。

## 配置说明

### 1. 依赖安装

```bash
npm install -D @iconify/utils
```

### 2. UnoCSS 配置

在 `uno.config.ts` 中添加了以下配置：

```typescript
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        // 本地 SVG 图标集合
        svg: FileSystemIconLoader('./src/assets/svgs', svg =>
          svg.replace(/^<svg\s/, '<svg width="1em" height="1em" ')
        ),
      },
    }),
  ],
})
```

### 3. 图标文件结构

```
src/assets/svgs/
├── location.svg
├── lock.svg
├── mobile.svg
├── monitor.svg
├── pause.svg
├── picture.svg
├── power-off.svg
├── sad.svg
└── search.svg
```

## 使用方法

### 基本用法

```tsx
// 基本图标
<i className="i-svg-search"></i>

// 带颜色的图标
<i className="i-svg-search text-[#f00]"></i>

// 带大小的图标
<i className="i-svg-search text-2xl"></i>

// 组合使用
<i className="i-svg-search text-2xl text-blue-500"></i>
```

### 命名规则

- **前缀**: `i-svg-`
- **图标名**: 对应 `src/assets/svgs/` 目录下的文件名（不含 `.svg` 扩展名）
- **完整格式**: `i-svg-[图标名]`

### 可用图标列表

| 图标名 | 类名 | 描述 |
|--------|------|------|
| location | `i-svg-location` | 位置图标 |
| lock | `i-svg-lock` | 锁定图标 |
| mobile | `i-svg-mobile` | 移动设备图标 |
| monitor | `i-svg-monitor` | 显示器图标 |
| pause | `i-svg-pause` | 暂停图标 |
| picture | `i-svg-picture` | 图片图标 |
| power-off | `i-svg-power-off` | 关闭图标 |
| sad | `i-svg-sad` | 悲伤图标 |
| search | `i-svg-search` | 搜索图标 |

## 样式自定义

### 颜色设置

```tsx
// 使用预定义颜色
<i className="i-svg-search text-blue-500"></i>
<i className="i-svg-search text-red-600"></i>
<i className="i-svg-search text-green-500"></i>

// 使用自定义颜色
<i className="i-svg-search text-[#ff6b6b]"></i>
<i className="i-svg-search text-[rgb(255,107,107)]"></i>
```

### 大小设置

```tsx
// 使用预定义大小
<i className="i-svg-search text-sm"></i>     // 小
<i className="i-svg-search text-base"></i>   // 默认
<i className="i-svg-search text-lg"></i>     // 大
<i className="i-svg-search text-xl"></i>     // 特大
<i className="i-svg-search text-2xl"></i>    // 超大
<i className="i-svg-search text-3xl"></i>    // 巨大

// 使用自定义大小
<i className="i-svg-search text-[24px]"></i>
<i className="i-svg-search text-[2rem]"></i>
```

### 其他样式

```tsx
// 透明度
<i className="i-svg-search opacity-50"></i>

// 旋转
<i className="i-svg-search rotate-45"></i>

// 悬停效果
<i className="i-svg-search hover:text-blue-500 transition-colors"></i>

// 动画
<i className="i-svg-search animate-spin"></i>
```

## 实际应用示例

### 1. 搜索框

```tsx
<div className="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg">
  <i className="i-svg-search text-gray-400"></i>
  <input 
    type="text" 
    placeholder="搜索..." 
    className="flex-1 outline-none"
  />
</div>
```

### 2. 按钮

```tsx
<button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
  <i className="i-svg-location"></i>
  <span>位置</span>
</button>
```

### 3. 导航菜单

```tsx
<nav className="space-y-2">
  <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
    <i className="i-svg-monitor text-gray-500"></i>
    <span>控制台</span>
  </a>
  <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded">
    <i className="i-svg-picture text-gray-500"></i>
    <span>图片管理</span>
  </a>
</nav>
```

### 4. 状态指示器

```tsx
<div className="flex items-center space-x-2">
  <i className="i-svg-lock text-green-500"></i>
  <span className="text-green-600">安全</span>
</div>
```

## 添加新图标

### 1. 添加 SVG 文件

将新的 SVG 文件放入 `src/assets/svgs/` 目录：

```
src/assets/svgs/
└── new-icon.svg  // 新图标
```

### 2. 确保 SVG 格式正确

SVG 文件应该包含适当的 viewBox 和路径：

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
</svg>
```

### 3. 使用新图标

```tsx
<i className="i-svg-new-icon"></i>
```

### 4. 重启开发服务器

添加新图标后需要重启开发服务器以使配置生效。

## 性能优化

### 1. 按需加载

UnoCSS 会自动检测使用的图标类名，只加载实际使用的图标。

### 2. SVG 优化

建议使用工具优化 SVG 文件：

```bash
# 使用 SVGO 优化 SVG
npm install -g svgo
svgo src/assets/svgs/*.svg
```

### 3. 图标缓存

构建时，图标会被内联到 CSS 中，提供最佳的加载性能。

## 故障排除

### 图标不显示

1. **检查文件路径**: 确保 SVG 文件在 `src/assets/svgs/` 目录中
2. **检查文件名**: 类名中的图标名应与文件名一致（不含扩展名）
3. **重启服务器**: 添加新图标后需要重启开发服务器
4. **检查 SVG 格式**: 确保 SVG 文件格式正确

### 图标颜色无法修改

1. **检查 SVG 内容**: 确保 SVG 中没有硬编码的 `fill` 属性
2. **使用 currentColor**: SVG 中的填充色应使用 `currentColor` 或不设置

### 图标大小异常

1. **检查 SVG viewBox**: 确保 SVG 有正确的 viewBox 属性
2. **使用相对单位**: 避免在 SVG 中使用固定的宽高值

## 最佳实践

1. **统一命名**: 使用一致的命名规范，如 `kebab-case`
2. **语义化命名**: 图标名应该反映其用途而非外观
3. **适当大小**: 为不同用途准备合适大小的图标
4. **颜色中性**: SVG 图标应该是单色的，便于动态修改颜色
5. **文档维护**: 及时更新图标列表和使用说明

## 扩展功能

### 支持多个图标集

```typescript
presetIcons({
  collections: {
    svg: FileSystemIconLoader('./src/assets/svgs'),
    custom: FileSystemIconLoader('./src/assets/icons'),
  },
})
```

### 图标别名

```typescript
presetIcons({
  collections: {
    svg: FileSystemIconLoader('./src/assets/svgs'),
  },
  aliases: {
    'search': 'svg:search',
    'find': 'svg:search', // 别名
  },
})
```

这样就可以使用 `i-find` 来调用搜索图标了。
