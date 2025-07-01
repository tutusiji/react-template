import React from 'react'

const IconTest: React.FC = () => {
  // 本地 SVG 图标列表
  const localIcons = [
    'location',
    'lock',
    'mobile',
    'monitor',
    'pause',
    'picture',
    'power-off',
    'sad',
    'search',
  ]

  return (
    <div className='p-8 bg-gray-50 min-h-screen'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold mb-8 text-center'>UnoCSS 图标测试</h1>

        {/* 本地 SVG 图标 */}
        <div className='bg-white p-6 rounded-lg shadow-md mb-8'>
          <h2 className='text-2xl font-semibold mb-6'>本地 SVG 图标</h2>
          <p className='text-gray-600 mb-4'>
            使用{' '}
            <code className='bg-gray-100 px-2 py-1 rounded'>
              i-svg-[图标名]
            </code>{' '}
            格式调用本地 SVG 图标
          </p>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
            {localIcons.map(icon => (
              <div
                key={icon}
                className='flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow'
              >
                <i className={`i-svg-${icon} text-2xl mb-2`}></i>
                <span className='text-sm text-gray-600 text-center'>
                  {icon}
                </span>
                <code className='text-xs text-blue-600 mt-1'>i-svg-{icon}</code>
              </div>
            ))}
          </div>
        </div>

        {/* 颜色变化示例 */}
        <div className='bg-white p-6 rounded-lg shadow-md mb-8'>
          <h2 className='text-2xl font-semibold mb-6'>图标颜色变化</h2>
          <p className='text-gray-600 mb-4'>
            使用{' '}
            <code className='bg-gray-100 px-2 py-1 rounded'>text-[颜色]</code>{' '}
            来修改图标颜色
          </p>

          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
            <div className='flex flex-col items-center p-4 border border-gray-200 rounded-lg'>
              <i className='i-svg-search text-3xl text-[#f00] mb-2'></i>
              <span className='text-sm'>红色</span>
              <code className='text-xs text-blue-600'>text-[#f00]</code>
            </div>

            <div className='flex flex-col items-center p-4 border border-gray-200 rounded-lg'>
              <i className='i-svg-search text-3xl text-blue-500 mb-2'></i>
              <span className='text-sm'>蓝色</span>
              <code className='text-xs text-blue-600'>text-blue-500</code>
            </div>

            <div className='flex flex-col items-center p-4 border border-gray-200 rounded-lg'>
              <i className='i-svg-search text-3xl text-green-600 mb-2'></i>
              <span className='text-sm'>绿色</span>
              <code className='text-xs text-blue-600'>text-green-600</code>
            </div>

            <div className='flex flex-col items-center p-4 border border-gray-200 rounded-lg'>
              <i className='i-svg-search text-3xl text-purple-500 mb-2'></i>
              <span className='text-sm'>紫色</span>
              <code className='text-xs text-blue-600'>text-purple-500</code>
            </div>

            <div className='flex flex-col items-center p-4 border border-gray-200 rounded-lg'>
              <i className='i-svg-search text-3xl text-orange-500 mb-2'></i>
              <span className='text-sm'>橙色</span>
              <code className='text-xs text-blue-600'>text-orange-500</code>
            </div>

            <div className='flex flex-col items-center p-4 border border-gray-200 rounded-lg'>
              <i className='i-svg-search text-3xl text-gray-400 mb-2'></i>
              <span className='text-sm'>灰色</span>
              <code className='text-xs text-blue-600'>text-gray-400</code>
            </div>
          </div>
        </div>

        {/* 尺寸变化示例 */}
        <div className='bg-white p-6 rounded-lg shadow-md mb-8'>
          <h2 className='text-2xl font-semibold mb-6'>图标尺寸变化</h2>
          <p className='text-gray-600 mb-4'>
            使用{' '}
            <code className='bg-gray-100 px-2 py-1 rounded'>text-[尺寸]</code>{' '}
            来修改图标大小
          </p>

          <div className='flex items-center space-x-8 flex-wrap gap-4'>
            <div className='flex flex-col items-center'>
              <i className='i-svg-location text-sm text-blue-500 mb-2'></i>
              <span className='text-xs'>text-sm</span>
            </div>

            <div className='flex flex-col items-center'>
              <i className='i-svg-location text-base text-blue-500 mb-2'></i>
              <span className='text-xs'>text-base</span>
            </div>

            <div className='flex flex-col items-center'>
              <i className='i-svg-location text-lg text-blue-500 mb-2'></i>
              <span className='text-xs'>text-lg</span>
            </div>

            <div className='flex flex-col items-center'>
              <i className='i-svg-location text-xl text-blue-500 mb-2'></i>
              <span className='text-xs'>text-xl</span>
            </div>

            <div className='flex flex-col items-center'>
              <i className='i-svg-location text-2xl text-blue-500 mb-2'></i>
              <span className='text-xs'>text-2xl</span>
            </div>

            <div className='flex flex-col items-center'>
              <i className='i-svg-location text-3xl text-blue-500 mb-2'></i>
              <span className='text-xs'>text-3xl</span>
            </div>

            <div className='flex flex-col items-center'>
              <i className='i-svg-location text-4xl text-blue-500 mb-2'></i>
              <span className='text-xs'>text-4xl</span>
            </div>
          </div>
        </div>

        {/* 实际应用示例 */}
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-6'>实际应用示例</h2>

          <div className='space-y-4'>
            {/* 搜索框 */}
            <div className='flex items-center space-x-2 p-3 border border-gray-300 rounded-lg'>
              <i className='i-svg-search text-gray-400'></i>
              <input
                type='text'
                placeholder='搜索...'
                className='flex-1 outline-none'
              />
            </div>

            {/* 按钮组 */}
            <div className='flex space-x-4'>
              <button className='flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'>
                <i className='i-svg-location'></i>
                <span>位置</span>
              </button>

              <button className='flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors'>
                <i className='i-svg-picture'></i>
                <span>图片</span>
              </button>

              <button className='flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors'>
                <i className='i-svg-power-off'></i>
                <span>关闭</span>
              </button>
            </div>

            {/* 信息卡片 */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='p-4 border border-gray-200 rounded-lg'>
                <div className='flex items-center space-x-3 mb-2'>
                  <i className='i-svg-mobile text-blue-500 text-xl'></i>
                  <h3 className='font-semibold'>移动设备</h3>
                </div>
                <p className='text-gray-600 text-sm'>移动端适配和响应式设计</p>
              </div>

              <div className='p-4 border border-gray-200 rounded-lg'>
                <div className='flex items-center space-x-3 mb-2'>
                  <i className='i-svg-monitor text-green-500 text-xl'></i>
                  <h3 className='font-semibold'>桌面显示</h3>
                </div>
                <p className='text-gray-600 text-sm'>桌面端界面和交互设计</p>
              </div>

              <div className='p-4 border border-gray-200 rounded-lg'>
                <div className='flex items-center space-x-3 mb-2'>
                  <i className='i-svg-lock text-orange-500 text-xl'></i>
                  <h3 className='font-semibold'>安全保护</h3>
                </div>
                <p className='text-gray-600 text-sm'>数据安全和隐私保护</p>
              </div>
            </div>
          </div>
        </div>

        {/* 使用说明 */}
        <div className='mt-8 bg-blue-50 p-6 rounded-lg'>
          <h3 className='text-lg font-semibold mb-4 text-blue-800'>使用说明</h3>
          <div className='space-y-2 text-sm text-blue-700'>
            <p>
              • 基本用法：
              <code className='bg-blue-100 px-2 py-1 rounded'>
                {'<i className="i-svg-search"></i>'}
              </code>
            </p>
            <p>
              • 修改颜色：
              <code className='bg-blue-100 px-2 py-1 rounded'>
                {'<i className="i-svg-search text-[#f00]"></i>'}
              </code>
            </p>
            <p>
              • 修改大小：
              <code className='bg-blue-100 px-2 py-1 rounded'>
                {'<i className="i-svg-search text-2xl"></i>'}
              </code>
            </p>
            <p>
              • 组合使用：
              <code className='bg-blue-100 px-2 py-1 rounded'>
                {'<i className="i-svg-search text-2xl text-blue-500"></i>'}
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IconTest
