import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Spin } from 'antd'
import { useAuth } from '@/contexts/AuthContext'
import { allRoutes, createRouteElement } from '@/router/routes'

// 加载中组件
const PageLoading: React.FC = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
    }}
  >
    <Spin size='large' />
  </div>
)

function App() {
  const { isAuthenticated, isLoading } = useAuth()

  // 在认证状态加载期间显示加载页面
  if (isLoading) {
    return <PageLoading />
  }

  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        {/* 根路径重定向 */}
        <Route
          path='/'
          element={
            isAuthenticated ? (
              <Navigate to='/home' replace />
            ) : (
              <Navigate to='/login' replace />
            )
          }
        />

        {/* 登录路由特殊处理 */}
        <Route
          path='/login'
          element={
            isAuthenticated ? (
              <Navigate to='/home' replace />
            ) : (
              createRouteElement(
                allRoutes.find(route => route.path === '/login')!
              )
            )
          }
        />

        {/* 动态生成其他路由 */}
        {allRoutes
          .filter(route => route.path !== '/login' && route.path !== '/')
          .map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={createRouteElement(route)}
            />
          ))}
      </Routes>
    </Suspense>
  )
}

export default App
