import { get, post, put, del } from '@/services/request'
import type { User, PaginationParams, PaginationResponse } from '@/types'

/**
 * 用户相关 API
 */
export const userApi = {
  // 获取用户列表
  getUserList: (params: PaginationParams) =>
    get<PaginationResponse<User>>('/users', params),

  // 获取用户详情
  getUserDetail: (id: number) => get<User>(`/users/${id}`),

  // 创建用户
  createUser: (data: Partial<User>) => post<User>('/users', data),

  // 更新用户
  updateUser: (id: number, data: Partial<User>) =>
    put<User>(`/users/${id}`, data),

  // 删除用户
  deleteUser: (id: number) => del<void>(`/users/${id}`),

  // 获取当前用户信息
  getCurrentUser: () => get<User>('/user/profile'),

  // 更新当前用户信息
  updateCurrentUser: (data: Partial<User>) => put<User>('/user/profile', data),
}

/**
 * 认证相关 API
 */
export const authApi = {
  // 登录
  login: (data: { email: string; password: string }) =>
    post<{ token: string; user: User }>('/auth/login', data),

  // 注册
  register: (data: { name: string; email: string; password: string }) =>
    post<{ token: string; user: User }>('/auth/register', data),

  // 退出登录
  logout: () => post<void>('/auth/logout'),

  // 刷新 token
  refreshToken: () => post<{ token: string }>('/auth/refresh'),

  // 忘记密码
  forgotPassword: (email: string) =>
    post<void>('/auth/forgot-password', { email }),

  // 重置密码
  resetPassword: (data: { token: string; password: string }) =>
    post<void>('/auth/reset-password', data),
}
