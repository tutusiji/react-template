/**
 * 应用常量
 */

// HTTP 状态码
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
} as const

// 业务状态码
export const BUSINESS_CODE = {
  SUCCESS: 0,
  FAIL: -1,
  TOKEN_EXPIRED: 401,
  NO_PERMISSION: 403,
} as const

// 应用信息
export const APP_NAME = 'React Template'
export const APP_VERSION = '1.0.0'
export const APP_DESCRIPTION = '一个功能完整的 React 项目模板'

// API 配置
export const API_TIMEOUT = 10000
export const API_RETRY_COUNT = 3

// 用户角色
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
} as const

// 页面路由
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  NOT_FOUND: '/404',
} as const

// 本地存储键名
export const STORAGE_KEYS = {
  USER_INFO: 'userInfo',
  THEME: 'theme',
  LANGUAGE: 'language',
  SETTINGS: 'settings',
  TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
} as const

// 表单验证规则
export const VALIDATION_RULES = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^1[3-9]\d{9}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
  USERNAME: /^[a-zA-Z0-9_]{3,20}$/,
} as const

// 分页配置
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100],
  MAX_PAGE_SIZE: 1000,
} as const

// 文件上传配置
export const UPLOAD = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  ALLOWED_DOCUMENT_TYPES: [
    'application/pdf',
    'text/plain',
    'application/msword',
  ],
} as const

// 正则表达式
export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^1[3-9]\d{9}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
  URL: /^https?:\/\/(?:[-\w.]+)(?::[0-9]+)?(?:\/[\w/_-]*)?(?:\?[\w&=%.]*)?(?:#[\w.]*)?$/,
} as const

// 错误消息
export const ERROR_MESSAGES = {
  NETWORK_ERROR: '网络连接失败，请检查网络设置',
  SERVER_ERROR: '服务器错误，请稍后再试',
  UNAUTHORIZED: '未授权访问，请重新登录',
  FORBIDDEN: '没有权限访问该资源',
  NOT_FOUND: '请求的资源不存在',
  VALIDATION_ERROR: '数据验证失败',
  UPLOAD_ERROR: '文件上传失败',
} as const

// 成功消息
export const SUCCESS_MESSAGES = {
  SAVE_SUCCESS: '保存成功',
  UPDATE_SUCCESS: '更新成功',
  DELETE_SUCCESS: '删除成功',
  UPLOAD_SUCCESS: '上传成功',
  LOGIN_SUCCESS: '登录成功',
  LOGOUT_SUCCESS: '退出成功',
} as const
