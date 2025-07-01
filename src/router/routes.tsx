import React from 'react'
import Layout from '@/components/Layout'
import ProtectedRoute from '@/components/ProtectedRoute'

// 懒加载页面组件
const Login = React.lazy(() => import('@/pages/Login'))
const Home = React.lazy(() => import('@/pages/Home'))
const Dashboard = React.lazy(() => import('@/pages/Dashboard'))
const About = React.lazy(() => import('@/pages/About'))
const ApiDemo = React.lazy(() => import('@/components/ApiDemo'))
const OperationPanel = React.lazy(() => import('@/pages/OperationPanel'))
const TailwindTest = React.lazy(() => import('@/components/TailwindTest'))
const ImageTest = React.lazy(() => import('@/components/ImageTest'))
const IconTest = React.lazy(() => import('@/components/IconTest'))
const RouteTest = React.lazy(() => import('@/components/RouteTest'))
const ZustandDemo = React.lazy(() => import('@/pages/ZustandDemo'))
const RouteManagement = React.lazy(() => import('@/pages/RouteManagement'))
const NotFound = React.lazy(() => import('@/pages/NotFound'))

// 路由配置类型
export interface RouteConfig {
  path: string
  element:
    | React.LazyExoticComponent<React.ComponentType<any>>
    | React.ComponentType<any>
  title: string
  description?: string
  protected?: boolean
  layout?: boolean
  showInNav?: boolean // 是否在导航菜单中显示
  group?: string // 路由分组，用于下拉菜单
  meta?: {
    requiresAuth?: boolean
    roles?: string[]
    icon?: string
  }
}

// 公开路由配置（无需登录）
export const publicRoutes: RouteConfig[] = [
  {
    path: '/login',
    element: Login,
    title: '登录',
    description: '用户登录页面',
    protected: false,
    layout: false,
    showInNav: false,
  },
]

// 特殊路由配置（404、重定向等）
export const specialRoutes: RouteConfig[] = [
  {
    path: '*',
    element: NotFound,
    title: '页面未找到',
    description: '404页面',
    protected: false,
    layout: false,
    showInNav: false,
  },
]

// 受保护的路由配置（需要登录）
export const protectedRoutes: RouteConfig[] = [
  // 主要业务页面（显示在顶级导航）
  {
    path: '/home',
    element: Home,
    title: '首页',
    description: '应用首页',
    protected: true,
    layout: true,
    showInNav: true,
    group: 'main',
    meta: {
      requiresAuth: true,
      icon: 'HomeOutlined',
    },
  },
  {
    path: '/dashboard',
    element: Dashboard,
    title: '控制台',
    description: '主控制台页面',
    protected: true,
    layout: true,
    showInNav: true,
    group: 'main',
    meta: {
      requiresAuth: true,
      icon: 'DashboardOutlined',
    },
  },
  {
    path: '/operation-panel',
    element: OperationPanel,
    title: '操作台',
    description: 'AR/VR 操作台界面',
    protected: true,
    layout: true,
    showInNav: true,
    group: 'main',
    meta: {
      requiresAuth: true,
      icon: 'ControlOutlined',
    },
  },
  // 文档和示例页面（放在下拉菜单中）
  {
    path: '/about',
    element: About,
    title: '关于',
    description: '关于页面',
    protected: true,
    layout: true,
    showInNav: true,
    group: 'docs',
    meta: {
      requiresAuth: true,
      icon: 'InfoCircleOutlined',
    },
  },
  {
    path: '/api-demo',
    element: ApiDemo,
    title: 'API 演示',
    description: 'API 调用演示页面',
    protected: true,
    layout: true,
    showInNav: true,
    group: 'docs',
    meta: {
      requiresAuth: true,
      icon: 'ApiOutlined',
    },
  },
  {
    path: '/zustand-demo',
    element: ZustandDemo,
    title: 'Zustand 示例',
    description: '状态管理示例',
    protected: true,
    layout: true,
    showInNav: true,
    group: 'docs',
    meta: {
      requiresAuth: true,
      icon: 'DatabaseOutlined',
    },
  },
  {
    path: '/route-management',
    element: RouteManagement,
    title: '路由管理',
    description: '查看和管理应用路由配置',
    protected: true,
    layout: true,
    showInNav: true,
    group: 'docs',
    meta: {
      requiresAuth: true,
      icon: 'SettingOutlined',
    },
  },
  // 测试页面分组（显示在文档下拉菜单中）
  {
    path: '/tailwind-test',
    element: TailwindTest,
    title: 'Tailwind 测试',
    description: 'Tailwind CSS 样式测试',
    protected: true,
    layout: true,
    showInNav: true,
    group: 'docs',
    meta: {
      requiresAuth: true,
      icon: 'BgColorsOutlined',
    },
  },
  {
    path: '/image-test',
    element: ImageTest,
    title: '图片测试',
    description: '图片加载测试',
    protected: true,
    layout: true,
    showInNav: true,
    group: 'docs',
    meta: {
      requiresAuth: true,
      icon: 'PictureOutlined',
    },
  },
  {
    path: '/icon-test',
    element: IconTest,
    title: '图标测试',
    description: '图标显示测试',
    protected: true,
    layout: true,
    showInNav: true,
    group: 'docs',
    meta: {
      requiresAuth: true,
      icon: 'SmileOutlined',
    },
  },
  {
    path: '/route-test',
    element: RouteTest,
    title: '路由测试',
    description: '路由跳转测试',
    protected: true,
    layout: true,
    showInNav: true,
    group: 'docs',
    meta: {
      requiresAuth: true,
      icon: 'LinkOutlined',
    },
  },
]

// 合并所有路由
export const allRoutes = [...publicRoutes, ...protectedRoutes, ...specialRoutes]

// 生成路由元素的工具函数
export const createRouteElement = (route: RouteConfig) => {
  const Component = route.element

  if (!route.protected) {
    // 公开路由，直接返回组件
    return <Component />
  }

  if (route.layout) {
    // 需要布局的受保护路由
    return (
      <ProtectedRoute>
        <Layout>
          <Component />
        </Layout>
      </ProtectedRoute>
    )
  }

  // 不需要布局的受保护路由
  return (
    <ProtectedRoute>
      <Component />
    </ProtectedRoute>
  )
}

// 导航菜单配置（从路由中筛选出需要在导航中显示的页面）
export const navigationRoutes = allRoutes.filter(
  route => route.showInNav === true
)

// 分组的导航配置
export const groupedNavigationRoutes = {
  main: navigationRoutes.filter(route => route.group === 'main'),
  docs: navigationRoutes.filter(route => route.group === 'docs'),
}

// 导航菜单分组配置
export const navigationGroups = {
  main: {
    title: '主菜单',
    items: groupedNavigationRoutes.main,
  },
  docs: {
    title: '文档',
    items: groupedNavigationRoutes.docs,
    icon: 'FileTextOutlined',
  },
}

export default {
  publicRoutes,
  protectedRoutes,
  specialRoutes,
  allRoutes,
  createRouteElement,
  navigationRoutes,
  groupedNavigationRoutes,
  navigationGroups,
}
