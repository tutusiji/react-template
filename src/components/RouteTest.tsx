import React from 'react'
import { useLocation } from 'react-router-dom'

const RouteTest: React.FC = () => {
  const location = useLocation()

  return (
    <div className='p-8 bg-gray-50 min-h-screen'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold mb-8 text-center'>路由保持测试</h1>

        <div className='bg-white p-6 rounded-lg shadow-md mb-8'>
          <h2 className='text-2xl font-semibold mb-6'>当前路由信息</h2>

          <div className='space-y-4'>
            <div className='p-4 bg-blue-50 rounded-lg'>
              <h3 className='font-semibold text-blue-800 mb-2'>当前路径</h3>
              <code className='text-blue-600 text-lg'>{location.pathname}</code>
            </div>

            <div className='p-4 bg-green-50 rounded-lg'>
              <h3 className='font-semibold text-green-800 mb-2'>完整 URL</h3>
              <code className='text-green-600'>{window.location.href}</code>
            </div>

            <div className='p-4 bg-purple-50 rounded-lg'>
              <h3 className='font-semibold text-purple-800 mb-2'>查询参数</h3>
              <code className='text-purple-600'>{location.search || '无'}</code>
            </div>

            <div className='p-4 bg-orange-50 rounded-lg'>
              <h3 className='font-semibold text-orange-800 mb-2'>Hash</h3>
              <code className='text-orange-600'>{location.hash || '无'}</code>
            </div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-md mb-8'>
          <h2 className='text-2xl font-semibold mb-6'>测试说明</h2>

          <div className='space-y-4 text-gray-700'>
            <div className='p-4 border-l-4 border-blue-500 bg-blue-50'>
              <h3 className='font-semibold text-blue-800 mb-2'>
                ✅ 修复前的问题
              </h3>
              <p>
                在任何页面刷新浏览器，都会自动跳转到{' '}
                <code className='bg-blue-100 px-2 py-1 rounded'>
                  /dashboard
                </code>{' '}
                页面
              </p>
            </div>

            <div className='p-4 border-l-4 border-green-500 bg-green-50'>
              <h3 className='font-semibold text-green-800 mb-2'>
                🎯 修复后的效果
              </h3>
              <p>在任何页面刷新浏览器，都会保持在当前页面，不会发生跳转</p>
            </div>

            <div className='p-4 border-l-4 border-yellow-500 bg-yellow-50'>
              <h3 className='font-semibold text-yellow-800 mb-2'>
                🧪 测试步骤
              </h3>
              <ol className='list-decimal list-inside space-y-2'>
                <li>访问任意页面（如当前页面）</li>
                <li>
                  按 <kbd className='bg-gray-200 px-2 py-1 rounded'>F5</kbd> 或{' '}
                  <kbd className='bg-gray-200 px-2 py-1 rounded'>Ctrl+R</kbd>{' '}
                  刷新页面
                </li>
                <li>观察页面是否保持在当前路径</li>
                <li>检查地址栏 URL 是否没有变化</li>
              </ol>
            </div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-6'>技术实现</h2>

          <div className='space-y-4'>
            <div className='p-4 bg-gray-50 rounded-lg'>
              <h3 className='font-semibold mb-2'>1. AuthContext 加载状态</h3>
              <p className='text-gray-700 mb-2'>
                添加了{' '}
                <code className='bg-gray-200 px-2 py-1 rounded'>isLoading</code>{' '}
                状态来跟踪认证状态的初始化过程
              </p>
              <pre className='bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto'>
                {`const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  // 检查本地存储中的登录状态
  // ...认证逻辑...
  
  // 认证状态检查完成
  setIsLoading(false)
}, [])`}
              </pre>
            </div>

            <div className='p-4 bg-gray-50 rounded-lg'>
              <h3 className='font-semibold mb-2'>2. App 组件等待认证</h3>
              <p className='text-gray-700 mb-2'>
                在认证状态确定之前显示加载页面，避免路由跳转
              </p>
              <pre className='bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto'>
                {`const { isAuthenticated, isLoading } = useAuth()

// 在认证状态加载期间显示加载页面
if (isLoading) {
  return <PageLoading />
}`}
              </pre>
            </div>

            <div className='p-4 bg-gray-50 rounded-lg'>
              <h3 className='font-semibold mb-2'>3. 禁用自动打开浏览器</h3>
              <p className='text-gray-700 mb-2'>
                修改 vite.config.ts 避免开发服务器启动时自动打开到根路径
              </p>
              <pre className='bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto'>
                {`server: {
  port: 3000,
  open: false, // 禁用自动打开浏览器
  // ...
}`}
              </pre>
            </div>
          </div>
        </div>

        <div className='mt-8 text-center'>
          <p className='text-gray-600'>
            现在您可以在任何页面刷新浏览器，页面都会保持在当前路径！
          </p>
        </div>
      </div>
    </div>
  )
}

export default RouteTest
