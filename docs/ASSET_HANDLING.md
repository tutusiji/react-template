# Vite 静态资源处理指南

## 概述

在 Vite 项目中，静态资源（如图片、字体、视频等）的处理方式与传统的 webpack 项目有所不同。本文档介绍了正确的资源引用方法。

## 问题说明

### ❌ 错误用法

```tsx
// 这样写图片无法加载
<img src="@/assets/images/logo.png" alt="Logo" />
```

**原因**: Vite 中的路径别名（如 `@/`）只在 JavaScript/TypeScript 代码中有效，不能直接在 HTML 属性中使用。

## 正确的解决方案

### 方法 1: ES6 Import 导入（推荐）

```tsx
// 1. 在文件顶部导入图片
import logoImage from '@/assets/images/logo.png'
import avatarImage from '@/assets/images/avatar.jpg'

// 2. 在组件中使用
const MyComponent = () => {
  return (
    <div>
      <img src={logoImage} alt="Logo" />
      <img src={avatarImage} alt="Avatar" />
    </div>
  )
}
```

**优点**:
- TypeScript 类型检查
- 构建时优化（压缩、hash 命名）
- 如果文件不存在会在编译时报错
- 支持路径别名

### 方法 2: 相对路径

```tsx
// 从 src 目录开始的绝对路径
<img src="/src/assets/images/logo.png" alt="Logo" />

// 相对路径（根据当前文件位置）
<img src="../../assets/images/logo.png" alt="Logo" />
```

**注意**: 这种方法在开发环境可能工作，但在生产构建时可能出现问题。

### 方法 3: Public 目录

```tsx
// 将图片放在 public 目录下
// public/images/logo.png

<img src="/images/logo.png" alt="Logo" />
```

**适用场景**:
- 图片不需要构建时处理
- 动态引用的图片
- 第三方库需要的静态资源

## 动态图片引用

### 使用 import() 动态导入

```tsx
const [imageSrc, setImageSrc] = useState('')

useEffect(() => {
  const loadImage = async () => {
    const imageModule = await import('@/assets/images/dynamic.png')
    setImageSrc(imageModule.default)
  }
  loadImage()
}, [])

return <img src={imageSrc} alt="Dynamic" />
```

### 使用 new URL() 构造器

```tsx
const getImageUrl = (name: string) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

// 使用
<img src={getImageUrl('logo.png')} alt="Logo" />
```

## 不同资源类型的处理

### 图片资源

```tsx
// 支持的格式: .png, .jpg, .jpeg, .gif, .svg, .webp
import logo from '@/assets/images/logo.png'
import icon from '@/assets/icons/icon.svg'

<img src={logo} alt="Logo" />
<img src={icon} alt="Icon" />
```

### SVG 作为组件

```tsx
// 安装 @vitejs/plugin-react 支持 SVG 组件
import { ReactComponent as LogoIcon } from '@/assets/icons/logo.svg'

<LogoIcon className="w-8 h-8" />
```

### 字体文件

```css
/* 在 CSS 中引用字体 */
@font-face {
  font-family: 'CustomFont';
  src: url('@/assets/fonts/custom.woff2') format('woff2');
}
```

### 视频和音频

```tsx
import videoFile from '@/assets/videos/demo.mp4'
import audioFile from '@/assets/audio/sound.mp3'

<video src={videoFile} controls />
<audio src={audioFile} controls />
```

## 构建优化

### 小文件内联

Vite 会自动将小于 4KB 的资源内联为 base64：

```tsx
import smallIcon from '@/assets/icons/small.png' // 可能被内联为 data:image/png;base64,...
```

### 文件名 Hash

构建时，Vite 会为资源文件添加 hash：

```
logo.png → logo.a1b2c3d4.png
```

### 手动控制

```tsx
// 强制内联
import inlineIcon from '@/assets/icons/icon.png?inline'

// 强制作为 URL
import iconUrl from '@/assets/icons/icon.png?url'

// 获取原始内容
import iconRaw from '@/assets/icons/icon.svg?raw'
```

## 最佳实践

### 1. 组织资源结构

```
src/assets/
├── images/
│   ├── logos/
│   ├── avatars/
│   └── backgrounds/
├── icons/
├── fonts/
├── videos/
└── audio/
```

### 2. 创建资源索引文件

```tsx
// src/assets/images/index.ts
export { default as logo } from './logo.png'
export { default as avatar } from './avatar.jpg'
export { default as background } from './background.jpg'

// 使用
import { logo, avatar } from '@/assets/images'
```

### 3. 类型声明

```typescript
// src/types/assets.d.ts
declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}
```

### 4. 环境变量控制

```tsx
// 根据环境使用不同的图片
const logoSrc = import.meta.env.DEV 
  ? '/src/assets/images/logo-dev.png'
  : '/assets/images/logo-prod.png'
```

## 常见问题

### Q: 为什么 `@/assets/images/logo.png` 不能直接在 src 属性中使用？

A: 路径别名只在 JavaScript/TypeScript 模块系统中有效，HTML 属性需要实际的 URL。

### Q: 图片在开发环境正常，生产环境 404？

A: 使用 ES6 import 导入图片，确保构建时正确处理。

### Q: 如何处理大量图片的动态加载？

A: 使用动态 import 或将图片放在 public 目录下。

### Q: SVG 图片显示不正常？

A: 检查 SVG 文件格式，考虑使用 SVG 组件或内联方式。

## 总结

- **推荐**: 使用 ES6 import 导入静态资源
- **避免**: 在 HTML 属性中直接使用路径别名
- **优化**: 合理组织资源结构，使用构建时优化
- **类型安全**: 添加适当的 TypeScript 类型声明
