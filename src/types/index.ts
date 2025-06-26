import { ReactNode } from 'react'

/**
 * TypeScript 类型定义
 */

/**
 * 用户类型
 */
export interface User {
  id: number
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'user'
  createdAt: string
  updatedAt: string
}

/**
 * 分页参数
 */
export interface PaginationParams {
  page: number
  pageSize: number
}

/**
 * 分页响应
 */
export interface PaginationResponse<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

/**
 * 通用响应格式
 */
export interface BaseResponse<T = unknown> {
  code: number
  message: string
  data: T
  success: boolean
}

/**
 * 菜单项类型
 */
export interface MenuItem {
  id: string
  title: string
  path: string
  icon?: string
  children?: MenuItem[]
}

/**
 * 表单字段类型
 */
export interface FormField {
  name: string
  label: string
  type: 'input' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'date'
  required?: boolean
  placeholder?: string
  options?: Array<{ label: string; value: string | number }>
  validation?: {
    min?: number
    max?: number
    pattern?: RegExp
    message?: string
  }
}

/**
 * 表格列类型
 */
export interface TableColumn<T = unknown> {
  key: keyof T
  title: string
  width?: number
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
  render?: (value: unknown, record: T, index: number) => ReactNode
}

/**
 * 状态类型
 */
export type Status = 'idle' | 'loading' | 'success' | 'error'

/**
 * 主题类型
 */
export type Theme = 'light' | 'dark' | 'auto'

/**
 * 语言类型
 */
export type Language = 'zh-CN' | 'en-US'
