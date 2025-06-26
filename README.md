# React Template

一个功能完整的 React 项目模板，集成了现代前端开发的最佳实践。

## 🚀 技术栈

- **React 18** - 最新的 React 版本
- **TypeScript** - 类型安全的 JavaScript
- **Vite** - 快速的构建工具
- **Ant Design** - 企业级 UI 设计语言和组件库
- **React Router** - 客户端路由
- **UnoCSS** - 原子化 CSS 框架
- **Sass** - CSS 预处理器
- **Axios** - HTTP 客户端
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化

## ✨ 功能特性

- 📦 **开箱即用** - 完整的项目配置，无需额外设置
- 🎯 **TypeScript 严格模式** - 确保代码类型安全
- 🎨 **Ant Design** - 现代化的 UI 组件库
- 📱 **移动端适配** - px2rem 自动转换，支持响应式设计
- 🔥 **热更新** - 极速的开发体验
-  **完善的开发工具** - ESLint、Prettier、TypeScript 配置
- 📁 **清晰的项目结构** - 易于维护和扩展
- 🔧 **路径别名** - 便捷的模块导入
- 🌐 **代理服务器** - 本地开发 API 代理

## 📁 项目结构

\`\`\`
src/
├── api/            # API 接口定义
├── assets/         # 静态资源
├── components/     # 可复用组件
│   ├── Layout/     # 布局组件
│   └── ...
├── config/         # 项目配置
├── constants/      # 常量定义
├── hooks/          # 自定义 Hooks
├── pages/          # 页面组件
│   ├── Home/
│   └── About/
├── services/       # 服务层 (Axios 配置)
├── styles/         # 样式文件
│   ├── global.css
│   └── variables.scss
├── types/          # TypeScript 类型定义
├── utils/          # 工具函数
│   └── mobile.ts   # 移动端适配工具
└── main.tsx        # 应用入口
\`\`\`

## 🛠 开发

### 环境要求

- Node.js >= 16
- npm >= 7

### 安装依赖

\`\`\`bash
npm install
\`\`\`

### 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

访问 http://localhost:3000

### 构建生产版本

\`\`\`bash
npm run build
\`\`\`

### 预览构建结果

\`\`\`bash
npm run preview
\`\`\`

### 代码检查

\`\`\`bash
npm run lint
\`\`\`

### 代码格式化

\`\`\`bash
npm run format
\`\`\`

### TypeScript 类型检查

\`\`\`bash
npm run type-check
\`\`\`

## ⚙️ 配置说明

### 路径别名

项目配置了以下路径别名，在导入模块时更加便捷：

- \`@/\` → \`src/\`
- \`@/components\` → \`src/components\`
- \`@/pages\` → \`src/pages\`
- \`@/hooks\` → \`src/hooks\`
- \`@/utils\` → \`src/utils\`
- \`@/types\` → \`src/types\`
- \`@/api\` → \`src/api\`
- \`@/services\` → \`src/services\`
- \`@/store\` → \`src/store\`
- \`@/styles\` → \`src/styles\`
- \`@/constants\` → \`src/constants\`
- \`@/config\` → \`src/config\`

### 开发代理

开发环境下，所有 \`/api\` 请求会被代理到 \`http://localhost:8000\`。

### 环境变量

- \`.env.development\` - 开发环境变量
- \`.env.production\` - 生产环境变量

### 移动端适配

项目集成了 px2rem 自动转换功能：

- 设计稿宽度：375px
- rem 基准值：37.5
- 自动转换最小值：2px

## 📝 使用指南

### 创建新页面

1. 在 \`src/pages\` 目录下创建新的页面组件
2. 在 \`src/App.tsx\` 中添加路由配置

### 添加全局样式

在 \`src/styles/global.css\` 中添加全局样式。

### 使用 Ant Design

项目已集成 Ant Design，可以直接使用：

\`\`\`jsx
import { Button, Card, Space } from 'antd'

const MyComponent = () => {
  return (
    <Card title="示例">
      <Space>
        <Button type="primary">主按钮</Button>
        <Button>默认按钮</Button>
      </Space>
    </Card>
  )
}
\`\`\`

### 使用 UnoCSS

项目集成了 UnoCSS，可以使用原子化 CSS 类名：

\`\`\`jsx
<div className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-lg">
  Hello World
</div>
\`\`\`

### API 请求

使用封装好的 Axios 实例：

\`\`\`typescript
import { get, post } from '@/services/request'

// GET 请求
const fetchUsers = async () => {
  const response = await get('/users')
  return response
}

// POST 请求
const createUser = async (userData: any) => {
  const response = await post('/users', userData)
  return response
}
\`\`\`

### 自定义 Hooks

项目提供了一些常用的自定义 Hooks：

\`\`\`typescript
import { useLocalStorage, useDebounce, useWindowSize } from '@/hooks'

const MyComponent = () => {
  const [value, setValue] = useLocalStorage('key', 'defaultValue')
  const debouncedValue = useDebounce(inputValue, 300)
  const { width, height } = useWindowSize()
  
  // ...
}
\`\`\`

## 🔧 自定义配置

### 修改主题色

在 \`src/config/index.ts\` 中修改主题配置：

\`\`\`typescript
export const THEME_CONFIG = {
  primaryColor: '#1890ff', // 修改主色调
  // ...
}
\`\`\`

### 添加新的路径别名

在 \`vite.config.ts\` 和 \`tsconfig.json\` 中添加新的别名配置。

### 修改代理配置

在 \`vite.config.ts\` 中修改 server.proxy 配置。

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
react基础模板
