import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios'
import { message } from 'antd'

/**
 * 请求配置
 */
const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
}

/**
 * 创建 axios 实例
 */
const service: AxiosInstance = axios.create(config)

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  config => {
    // 可以在这里添加 token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers!['Authorization'] = `Bearer ${token}`
    }

    // 显示加载提示（可选）
    // message.loading('请求中...', 0)

    return config
  },
  (error: AxiosError) => {
    console.error('Request error:', error)
    return Promise.reject(error)
  }
)

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 隐藏加载提示
    // message.destroy()

    const { data } = response

    // 根据后端返回的状态码进行不同处理
    if (data.code === 200 || data.success) {
      return data
    } else {
      // 业务错误
      message.error(data.message || '请求失败')
      return Promise.reject(new Error(data.message || '请求失败'))
    }
  },
  (error: AxiosError) => {
    // 隐藏加载提示
    // message.destroy()

    console.error('Response error:', error)

    // HTTP 错误处理
    if (error.response) {
      const { status, data } = error.response

      switch (status) {
        case 401:
          message.error('未授权，请重新登录')
          // 清除 token 并跳转到登录页
          localStorage.removeItem('token')
          // window.location.href = '/login'
          break
        case 403:
          message.error('拒绝访问')
          break
        case 404:
          message.error('请求地址不存在')
          break
        case 500:
          message.error('服务器内部错误')
          break
        default:
          message.error((data as any)?.message || `请求失败 (${status})`)
      }
    } else if (error.request) {
      message.error('网络错误，请检查网络连接')
    } else {
      message.error('请求配置错误')
    }

    return Promise.reject(error)
  }
)

/**
 * 通用请求方法
 */
export const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  return service.request<T>(config).then(res => res.data)
}

/**
 * GET 请求
 */
export const get = <T = any>(
  url: string,
  params?: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> => {
  return service.get<T>(url, { params, ...config }).then(res => res.data)
}

/**
 * POST 请求
 */
export const post = <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  return service.post<T>(url, data, config).then(res => res.data)
}

/**
 * PUT 请求
 */
export const put = <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  return service.put<T>(url, data, config).then(res => res.data)
}

/**
 * DELETE 请求
 */
export const del = <T = any>(
  url: string,
  params?: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> => {
  return service.delete<T>(url, { params, ...config }).then(res => res.data)
}

/**
 * PATCH 请求
 */
export const patch = <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  return service.patch<T>(url, data, config).then(res => res.data)
}

export default service
