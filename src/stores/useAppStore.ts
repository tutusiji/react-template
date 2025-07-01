import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// 定义用户资料接口
interface UserProfile {
  id: string
  username: string
  email: string
  avatar?: string
  role: string
  createdAt: string
}

// 定义通知接口
interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  createdAt: string
}

// 定义应用设置接口
interface AppSettings {
  theme: 'light' | 'dark' | 'auto'
  language: 'zh-CN' | 'en-US'
  notifications: {
    email: boolean
    push: boolean
    desktop: boolean
  }
}

// 默认设置
const defaultSettings: AppSettings = {
  theme: 'light',
  language: 'zh-CN',
  notifications: {
    email: true,
    push: true,
    desktop: false,
  },
}

// 定义状态接口
interface AppState {
  // 用户资料
  userProfile: UserProfile | null

  // 通知列表
  notifications: Notification[]

  // 应用设置
  settings: AppSettings

  // 加载状态
  isLoading: boolean

  // 操作方法
  setUserProfile: (profile: UserProfile | null) => void

  // 通知相关
  addNotification: (
    notification: Omit<Notification, 'id' | 'createdAt'>
  ) => void
  markNotificationAsRead: (id: string) => void
  clearNotifications: () => void

  // 设置相关
  updateSettings: (settings: Partial<AppSettings>) => void

  // 加载状态
  setLoading: (loading: boolean) => void

  // 重置状态
  reset: () => void
}

// 创建 Zustand store
export const useAppStore = create<AppState>()(
  persist(
    (set, _get) => ({
      // 初始状态
      userProfile: null,
      notifications: [],
      settings: defaultSettings,
      isLoading: false,

      // 设置用户资料
      setUserProfile: profile => {
        set({ userProfile: profile })
      },

      // 添加通知
      addNotification: notification => {
        const newNotification: Notification = {
          ...notification,
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
        }
        set(state => ({
          notifications: [newNotification, ...state.notifications],
        }))
      },

      // 标记通知为已读
      markNotificationAsRead: id => {
        set(state => ({
          notifications: state.notifications.map(notification =>
            notification.id === id
              ? { ...notification, read: true }
              : notification
          ),
        }))
      },

      // 清空通知
      clearNotifications: () => {
        set({ notifications: [] })
      },

      // 更新设置
      updateSettings: newSettings => {
        set(state => ({
          settings: { ...state.settings, ...newSettings },
        }))
      },

      // 设置加载状态
      setLoading: loading => {
        set({ isLoading: loading })
      },

      // 重置所有状态
      reset: () => {
        set({
          userProfile: null,
          notifications: [],
          settings: defaultSettings,
          isLoading: false,
        })
      },
    }),
    {
      name: 'app-storage', // localStorage 中的键名
      storage: createJSONStorage(() => localStorage),
      // 选择需要持久化的字段
      partialize: state => ({
        userProfile: state.userProfile,
        settings: state.settings,
        // notifications 不持久化，每次重新获取
      }),
    }
  )
)

// 导出类型，供其他文件使用
export type { UserProfile, Notification, AppSettings }
