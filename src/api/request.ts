/**
 * API 请求配置
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

/**
 * HTTP 请求方法
 */
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

/**
 * 请求配置
 */
interface RequestConfig {
  url: string
  method?: HttpMethod
  data?: unknown
  params?: Record<string, string | number>
  headers?: Record<string, string>
}

/**
 * 响应数据格式
 */
interface ApiResponse<T = unknown> {
  code: number
  message: string
  data: T
}

/**
 * 构建 URL 参数
 */
const buildUrlParams = (params: Record<string, string | number>): string => {
  const urlParams = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    urlParams.append(key, String(value))
  })
  return urlParams.toString()
}

/**
 * HTTP 请求封装
 */
const request = async <T = unknown>(config: RequestConfig): Promise<ApiResponse<T>> => {
  const {
    url,
    method = 'GET',
    data,
    params,
    headers = {}
  } = config

  let requestUrl = `${API_BASE_URL}${url}`
  
  // 处理 URL 参数
  if (params && Object.keys(params).length > 0) {
    const queryString = buildUrlParams(params)
    requestUrl += `?${queryString}`
  }

  const requestOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  }

  // 处理请求体
  if (data && ['POST', 'PUT', 'PATCH'].includes(method)) {
    requestOptions.body = JSON.stringify(data)
  }

  try {
    const response = await fetch(requestUrl, requestOptions)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    return result as ApiResponse<T>
  } catch (error) {
    console.error('Request failed:', error)
    throw error
  }
}

/**
 * GET 请求
 */
export const get = <T = unknown>(
  url: string,
  params?: Record<string, string | number>,
  headers?: Record<string, string>
): Promise<ApiResponse<T>> => {
  return request<T>({ url, method: 'GET', params, headers })
}

/**
 * POST 请求
 */
export const post = <T = unknown>(
  url: string,
  data?: unknown,
  headers?: Record<string, string>
): Promise<ApiResponse<T>> => {
  return request<T>({ url, method: 'POST', data, headers })
}

/**
 * PUT 请求
 */
export const put = <T = unknown>(
  url: string,
  data?: unknown,
  headers?: Record<string, string>
): Promise<ApiResponse<T>> => {
  return request<T>({ url, method: 'PUT', data, headers })
}

/**
 * DELETE 请求
 */
export const del = <T = unknown>(
  url: string,
  params?: Record<string, string | number>,
  headers?: Record<string, string>
): Promise<ApiResponse<T>> => {
  return request<T>({ url, method: 'DELETE', params, headers })
}

/**
 * PATCH 请求
 */
export const patch = <T = unknown>(
  url: string,
  data?: unknown,
  headers?: Record<string, string>
): Promise<ApiResponse<T>> => {
  return request<T>({ url, method: 'PATCH', data, headers })
}
