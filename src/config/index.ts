/**
 * 应用配置
 */

// 应用信息
export const APP_CONFIG = {
  name: import.meta.env.VITE_APP_TITLE || 'React Template',
  version: import.meta.env.VITE_APP_VERSION || '1.0.0',
  description: '基于 React + Vite + TypeScript + Ant Design 的现代化前端模板',
}

// API 配置
export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  withCredentials: false,
}

// 存储配置
export const STORAGE_CONFIG = {
  tokenKey: 'ACCESS_TOKEN',
  userKey: 'USER_INFO',
  themeKey: 'THEME_MODE',
  languageKey: 'LANGUAGE',
}

// 分页配置
export const PAGINATION_CONFIG = {
  defaultPageSize: 10,
  pageSizeOptions: ['10', '20', '50', '100'],
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: (total: number, range: [number, number]) =>
    `显示 ${range[0]}-${range[1]} 条，共 ${total} 条`,
}

// 上传配置
export const UPLOAD_CONFIG = {
  maxSize: 5 * 1024 * 1024, // 5MB
  acceptTypes: ['image/jpeg', 'image/png', 'image/gif'],
  uploadUrl: '/api/upload',
}

// 主题配置
export const THEME_CONFIG = {
  primaryColor: '#1890ff',
  successColor: '#52c41a',
  warningColor: '#faad14',
  errorColor: '#f5222d',
  borderRadius: '6px',
}

// 移动端适配配置
export const MOBILE_CONFIG = {
  designWidth: 375, // 设计稿宽度
  remUnit: 37.5, // rem 基准值
  maxWidth: 540, // 最大宽度
}

// 开发环境配置
export const DEV_CONFIG = {
  enableMock: false,
  enableVConsole: false,
  enableDebug: import.meta.env.DEV,
}
