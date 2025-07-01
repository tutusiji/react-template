import React from 'react'
import logoImage from '@/assets/images/logo.png'
import robotImage from '@/assets/images/robot.png'

const ImageTest: React.FC = () => {
  return (
    <div className='p-8 bg-gray-50 min-h-screen'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold mb-8 text-center'>图片加载测试</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* 方法 1: ES6 Import 导入 */}
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-xl font-semibold mb-4'>
              方法 1: ES6 Import 导入 ✅
            </h2>
            <div className='space-y-4'>
              <div>
                <p className='text-sm text-gray-600 mb-2'>Logo 图片:</p>
                <img
                  src={logoImage}
                  alt='Logo'
                  className='w-32 h-32 object-contain border border-gray-200 rounded'
                />
              </div>
              <div>
                <p className='text-sm text-gray-600 mb-2'>Robot 图片:</p>
                <img
                  src={robotImage}
                  alt='Robot'
                  className='w-32 h-32 object-contain border border-gray-200 rounded'
                />
              </div>
            </div>
          </div>

          {/* 方法 2: 相对路径 */}
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-xl font-semibold mb-4'>方法 2: 相对路径 ⚠️</h2>
            <div className='space-y-4'>
              <div>
                <p className='text-sm text-gray-600 mb-2'>
                  Logo 图片 (绝对路径):
                </p>
                <img
                  src='/src/assets/images/logo.png'
                  alt='Logo'
                  className='w-32 h-32 object-contain border border-gray-200 rounded'
                />
              </div>
              <div>
                <p className='text-sm text-gray-600 mb-2'>
                  Robot 图片 (绝对路径):
                </p>
                <img
                  src='/src/assets/images/robot.png'
                  alt='Robot'
                  className='w-32 h-32 object-contain border border-gray-200 rounded'
                />
              </div>
            </div>
          </div>

          {/* 方法 3: 错误示例 */}
          <div className='bg-white p-6 rounded-lg shadow-md border-2 border-red-200'>
            <h2 className='text-xl font-semibold mb-4 text-red-600'>
              错误示例: 路径别名 ❌
            </h2>
            <div className='space-y-4'>
              <div>
                <p className='text-sm text-gray-600 mb-2'>
                  这样写会导致图片无法加载:
                </p>
                <img
                  src='@/assets/images/logo.png'
                  alt='Logo'
                  className='w-32 h-32 object-contain border border-red-200 rounded'
                />
                <p className='text-xs text-red-500 mt-1'>
                  路径别名不能直接在 HTML 属性中使用
                </p>
              </div>
            </div>
          </div>

          {/* 方法 4: Public 目录 */}
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-xl font-semibold mb-4'>
              方法 4: Public 目录 ✅
            </h2>
            <div className='space-y-4'>
              <div>
                <p className='text-sm text-gray-600 mb-2'>
                  Public 目录中的 SVG:
                </p>
                <img
                  src='/logo.svg'
                  alt='Public Logo'
                  className='w-32 h-32 object-contain border border-gray-200 rounded'
                />
                <p className='text-xs text-gray-500 mt-1'>
                  来自 public/logo.svg
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 代码示例 */}
        <div className='mt-8 bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>代码示例</h2>
          <div className='space-y-4'>
            <div>
              <h3 className='font-medium text-green-600'>✅ 正确用法:</h3>
              <pre className='bg-gray-100 p-3 rounded text-sm overflow-x-auto'>
                {`// 1. 导入图片
import logoImage from '@/assets/images/logo.png'

// 2. 使用变量
<img src={logoImage} alt="Logo" />`}
              </pre>
            </div>
            <div>
              <h3 className='font-medium text-red-600'>❌ 错误用法:</h3>
              <pre className='bg-red-50 p-3 rounded text-sm overflow-x-auto'>
                {`// 直接使用路径别名（不会工作）
<img src="@/assets/images/logo.png" alt="Logo" />`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageTest
