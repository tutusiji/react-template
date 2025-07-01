# React Template 现代前端项目模板

本项目是基于 Vite + React + TypeScript 的现代化前端工程模板，集成 Ant Design、UnoCSS、Sass、Axios、ESLint、Prettier 等主流技术，适合中大型企业级应用开发。

---

## 🏗️ 架构设计

- **Vite**：极速开发与构建，支持 HMR、代码分包、代理等。
- **React 18 + TypeScript**：函数组件、Hooks、类型安全。
- **Ant Design**：企业级 UI 组件库，统一设计风格。
- **UnoCSS**：原子化 CSS，极致灵活的样式方案。
- **Sass**：CSS 预处理，支持变量、嵌套、全局样式。
- **Axios**：统一封装请求，支持拦截器、全局错误处理。
- **ESLint + Prettier**：代码规范与自动格式化，保障团队协作。
- **路由保护/认证上下文**：支持登录校验、页面跳转、权限控制。
- **代码分包优化**：Vite + Rollup 手动分包，提升首屏加载。

---

## 📁 目录结构

```
src/
├── api/                # API 接口定义与请求封装
├── assets/             # 静态资源
├── components/         # 通用组件（如 Layout、Button、ProtectedRoute 等）
├── config/             # 全局配置（如主题、环境变量）
├── constants/          # 常量、正则、消息等
├── contexts/           # React Context（如 AuthContext）
├── hooks/              # 自定义 Hooks（如 useLocalStorage/useDebounce）
├── pages/              # 页面组件（Home、Dashboard、OperationPanel 等）
├── services/           # 业务服务层（如 axios 实例、统一请求）
├── styles/             # 全局样式、Sass 变量
├── types/              # TypeScript 类型定义
├── utils/              # 工具函数（如格式化、深拷贝、移动端适配）
├── main.tsx            # 应用入口
└── App.tsx             # 路由与全局布局
```

---

## ⚙️ 基础配置

### 路径别名

- 见 `vite.config.ts` 和 `tsconfig.json`，如 `@/components` → `src/components`，支持 VSCode 智能跳转。

### 代理与环境变量

- `vite.config.ts` 配置 `/api` 代理到后端，支持本地开发跨域。
- `.env.development`、`.env.production` 支持多环境变量注入。

### 样式体系

- 全局样式入口：`src/styles/global.css`
- 变量/主题：`src/styles/variables.scss`，可全局引入
- UnoCSS 原子类、Sass 混用，灵活高效

### 代码规范

- ESLint + Prettier 统一风格，支持一键修复（`npm run lint:fix`、`npm run format`）
- TypeScript 严格模式，类型安全

---

## 🔌 关键插件与用法

### 1. Ant Design

- 直接引入组件即可使用，支持主题定制
- 例：

```tsx
import { Button, Card } from 'antd'
;<Card title='示例'>
  <Button type='primary'>主按钮</Button>
</Card>
```

### 2. UnoCSS

- 支持 Tailwind 风格原子类，极致灵活
- 例：

```tsx
<div className='flex items-center p-4 bg-blue-500 text-white'>Hello</div>
```

### 3. Axios 封装

- 统一拦截器、错误处理，支持 get/post/put/delete/patch
- 例：

```ts
import { get, post } from '@/services/request'
const data = await get('/api/user')
```

### 4. 路由与认证

- `src/contexts/AuthContext.tsx` 提供全局登录状态
- `ProtectedRoute` 组件实现路由保护，未登录自动跳转

### 5. 代码分包

- `vite.config.ts` 配置 `manualChunks`，实现依赖分组，优化首屏加载

---

## 🚀 常用命令

- `npm install` 安装依赖
- `npm run dev` 启动开发服务器
- `npm run build` 构建生产包
- `npm run preview` 本地预览构建产物
- `npm run lint` 代码检查
- `npm run lint:fix` 自动修复格式/规范
- `npm run format` 代码格式化
- `npm run type-check` TypeScript 类型检查

---

## 📝 开发建议

- 推荐使用 VSCode + Volar/ESLint/Prettier 插件，获得最佳开发体验
- 业务页面建议按模块拆分，组件复用优先放入 `components/`
- 全局状态建议用 React Context 或 Redux（可按需集成）
- 移动端适配建议用 rem + UnoCSS 原子类

---

## 📄 License

MIT
