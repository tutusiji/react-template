import React from 'react'

const TailwindTest: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
        <div className='md:flex'>
          <div className='md:shrink-0'>
            <div className='h-48 w-full object-cover md:h-full md:w-48 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'></div>
          </div>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
              Tailwind CSS 兼容性测试
            </div>
            <h2 className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
              UnoCSS + Tailwind CSS 写法
            </h2>
            <p className='mt-2 text-slate-500'>
              这个组件使用了标准的 Tailwind CSS 类名，包括：
            </p>
            <ul className='mt-4 space-y-2 text-sm text-gray-600'>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>
                响应式设计 (sm:, md:, lg:)
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
                伪类状态 (hover:, focus:)
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-purple-500 rounded-full mr-2'></span>
                渐变背景 (bg-gradient-to-r)
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-yellow-500 rounded-full mr-2'></span>
                间距和布局 (p-8, mt-2, space-y-2)
              </li>
            </ul>
            <div className='mt-6'>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200'>
                测试按钮
              </button>
              <button className='ml-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                边框按钮
              </button>
            </div>
            {/* 测试任意值语法 */}
            <div className='mt-4 w-[200px] h-[50px] bg-[#ff6b6b] text-[14px] flex items-center justify-center text-white rounded'>
              任意值测试: w-[200px] h-[50px] bg-[#ff6b6b]
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TailwindTest
