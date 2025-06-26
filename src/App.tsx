import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Spin } from 'antd'
import Layout from '@/components/Layout'
import ProtectedRoute from '@/components/ProtectedRoute'
import { useAuth } from '@/contexts/AuthContext'

// 懒加载页面组件
const Login = React.lazy(() => import('@/pages/Login'))
const Home = React.lazy(() => import('@/pages/Home'))
const Dashboard = React.lazy(() => import('@/pages/Dashboard'))
const About = React.lazy(() => import('@/pages/About'))
const ApiDemo = React.lazy(() => import('@/components/ApiDemo'))
const OperationPanel = React.lazy(() => import('@/pages/OperationPanel'))

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
  const { isAuthenticated } = useAuth()

  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route
          path='/login'
          element={
            isAuthenticated ? <Navigate to='/dashboard' replace /> : <Login />
          }
        />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path='/about'
          element={
            <ProtectedRoute>
              <Layout>
                <About />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path='/api-demo'
          element={
            <ProtectedRoute>
              <Layout>
                <ApiDemo />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path='/operation-panel'
          element={
            <ProtectedRoute>
              <Layout>
                <OperationPanel />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  )
}

export default App
