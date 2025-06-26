const About = () => {
  return (
    <div className='max-w-3xl mx-auto'>
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>关于项目</h1>
        <p className='text-lg text-gray-600'>
          了解这个 React 模板项目的详细信息
        </p>
      </div>

      <div className='space-y-8'>
        <div className='card'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900'>
            项目介绍
          </h2>
          <p className='text-gray-600 leading-relaxed'>
            这是一个现代化的 React
            项目模板，集成了最新的前端开发工具和最佳实践。
            旨在为开发者提供一个开箱即用的开发环境，快速启动新项目。
          </p>
        </div>

        <div className='card'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900'>
            项目结构
          </h2>
          <div className='bg-gray-100 p-4 rounded-lg font-mono text-sm'>
            <div>src/</div>
            <div>├── components/ # 组件目录</div>
            <div>├── pages/ # 页面目录</div>
            <div>├── hooks/ # 自定义 Hooks</div>
            <div>├── utils/ # 工具函数</div>
            <div>├── types/ # TypeScript 类型</div>
            <div>├── api/ # API 接口</div>
            <div>├── store/ # 状态管理</div>
            <div>├── assets/ # 静态资源</div>
            <div>└── styles/ # 样式文件</div>
          </div>
        </div>

        <div className='card'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900'>
            开发命令
          </h2>
          <div className='space-y-2'>
            <div className='flex items-center space-x-4'>
              <code className='bg-gray-100 px-2 py-1 rounded'>npm run dev</code>
              <span className='text-gray-600'>启动开发服务器</span>
            </div>
            <div className='flex items-center space-x-4'>
              <code className='bg-gray-100 px-2 py-1 rounded'>
                npm run build
              </code>
              <span className='text-gray-600'>构建生产版本</span>
            </div>
            <div className='flex items-center space-x-4'>
              <code className='bg-gray-100 px-2 py-1 rounded'>
                npm run lint
              </code>
              <span className='text-gray-600'>代码检查</span>
            </div>
            <div className='flex items-center space-x-4'>
              <code className='bg-gray-100 px-2 py-1 rounded'>
                npm run preview
              </code>
              <span className='text-gray-600'>预览构建结果</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
