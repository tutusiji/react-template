import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  shortcuts: [
    // 布局相关
    ['flex-center', 'flex items-center justify-center'],
    ['flex-between', 'flex items-center justify-between'],
    ['flex-around', 'flex items-center justify-around'],
    ['flex-col-center', 'flex flex-col items-center justify-center'],

    // 文本相关
    ['text-ellipsis', 'truncate'],
    ['text-primary', 'text-blue-600'],
    ['text-secondary', 'text-gray-600'],
    ['text-danger', 'text-red-600'],
    ['text-success', 'text-green-600'],

    // 按钮相关
    ['btn', 'px-4 py-2 rounded cursor-pointer border-none outline-none'],
    ['btn-primary', 'btn bg-blue-600 text-white hover:bg-blue-700'],
    ['btn-secondary', 'btn bg-gray-600 text-white hover:bg-gray-700'],
    ['btn-danger', 'btn bg-red-600 text-white hover:bg-red-700'],

    // 卡片相关
    ['card', 'bg-white rounded-lg shadow-md p-4'],
    ['card-hover', 'card hover:shadow-lg transition-shadow duration-300'],
  ],
  theme: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
    },
    breakpoints: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  rules: [
    // 自定义规则
    [/^text-(.*)$/, ([, c]) => ({ color: c })],
    [/^bg-(.*)$/, ([, c]) => ({ 'background-color': c })],
  ],
})
