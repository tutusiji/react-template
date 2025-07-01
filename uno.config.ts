import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  presetWind,
  presetTypography,
} from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  presets: [
    // 使用 presetWind 来兼容 Tailwind CSS 写法
    presetWind(),
    // 保留 presetUno 以获得额外的实用工具
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        // 本地 SVG 图标集合
        svg: FileSystemIconLoader('./src/assets/svgs', svg =>
          svg.replace(/^<svg\s/, '<svg width="1em" height="1em" ')
        ),
      },
    }),
    // 添加排版预设，提供更好的文本样式
    presetTypography(),
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
    // 添加 Tailwind CSS 兼容的字体系列
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      serif: ['ui-serif', 'Georgia', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
    },
    // 添加 Tailwind CSS 兼容的间距
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
  },
  // 添加 Tailwind CSS 兼容的变体
  variants: [
    // 悬停状态
    matcher => {
      if (!matcher.startsWith('hover:')) return matcher
      return {
        matcher: matcher.slice(6),
        selector: s => `${s}:hover`,
      }
    },
    // 焦点状态
    matcher => {
      if (!matcher.startsWith('focus:')) return matcher
      return {
        matcher: matcher.slice(6),
        selector: s => `${s}:focus`,
      }
    },
    // 活动状态
    matcher => {
      if (!matcher.startsWith('active:')) return matcher
      return {
        matcher: matcher.slice(7),
        selector: s => `${s}:active`,
      }
    },
    // 禁用状态
    matcher => {
      if (!matcher.startsWith('disabled:')) return matcher
      return {
        matcher: matcher.slice(9),
        selector: s => `${s}:disabled`,
      }
    },
  ],
  // 添加自定义规则以增强 Tailwind CSS 兼容性
  rules: [
    // 支持任意值语法，如 w-[100px]
    [/^w-\[(.+)\]$/, ([, d]) => ({ width: d })],
    [/^h-\[(.+)\]$/, ([, d]) => ({ height: d })],
    [/^m-\[(.+)\]$/, ([, d]) => ({ margin: d })],
    [/^p-\[(.+)\]$/, ([, d]) => ({ padding: d })],
    [/^text-size-\[(.+)\]$/, ([, d]) => ({ 'font-size': d })],
    [/^bg-\[(.+)\]$/, ([, d]) => ({ 'background-color': d })],
    [/^text-\[(.+)\]$/, ([, d]) => ({ color: d })],
    // 支持更多任意值
    [/^top-\[(.+)\]$/, ([, d]) => ({ top: d })],
    [/^right-\[(.+)\]$/, ([, d]) => ({ right: d })],
    [/^bottom-\[(.+)\]$/, ([, d]) => ({ bottom: d })],
    [/^left-\[(.+)\]$/, ([, d]) => ({ left: d })],
    [/^z-\[(.+)\]$/, ([, d]) => ({ 'z-index': d })],
  ],
})
