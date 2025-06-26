/**
 * 移动端适配工具
 */

/**
 * 设置 rem 基准值
 * 基于设计稿宽度动态计算 html font-size
 */
export const setRemUnit = () => {
  const docEl = document.documentElement
  const clientWidth = docEl.clientWidth

  if (!clientWidth) return

  // 设计稿宽度，可根据实际项目调整
  const designWidth = 375

  // 计算 rem 基准值
  const remUnit = (clientWidth / designWidth) * 37.5

  docEl.style.fontSize = remUnit + 'px'
}

/**
 * 防抖函数，用于窗口大小改变时的处理
 */
// 将 Function 类型替换为具体函数类型
const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
) => {
  let timeout: NodeJS.Timeout
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * 初始化移动端适配
 */
export const initMobileAdaptation = () => {
  // 设置初始 rem 值
  setRemUnit()

  // 监听窗口大小变化
  const debouncedSetRemUnit = debounce(setRemUnit, 300)
  window.addEventListener('resize', debouncedSetRemUnit)
  window.addEventListener('orientationchange', debouncedSetRemUnit)

  // 页面加载完成后再次设置
  document.addEventListener('DOMContentLoaded', setRemUnit)

  return () => {
    window.removeEventListener('resize', debouncedSetRemUnit)
    window.removeEventListener('orientationchange', debouncedSetRemUnit)
    document.removeEventListener('DOMContentLoaded', setRemUnit)
  }
}

/**
 * px 转 rem
 */
export const pxToRem = (px: number): string => {
  const rootValue = 37.5 // 与 postcss-pxtorem 配置保持一致
  return `${px / rootValue}rem`
}

/**
 * 获取设备信息
 */
export const getDeviceInfo = () => {
  const ua = navigator.userAgent
  const isIOS = /iPad|iPhone|iPod/.test(ua)
  const isAndroid = /Android/.test(ua)
  const isMobile = isIOS || isAndroid
  const isWechat = /MicroMessenger/.test(ua)

  return {
    isIOS,
    isAndroid,
    isMobile,
    isWechat,
    userAgent: ua,
  }
}

/**
 * 获取视口尺寸
 */
export const getViewportSize = () => {
  return {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight,
  }
}

/**
 * 判断是否为移动端
 */
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

/**
 * 获取屏幕方向
 */
export const getOrientation = (): 'portrait' | 'landscape' => {
  const { width, height } = getViewportSize()
  return width > height ? 'landscape' : 'portrait'
}
