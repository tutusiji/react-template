import React from 'react'
import {
  Card,
  Button,
  Badge,
  Switch,
  Select,
  Space,
  List,
  Typography,
} from 'antd'
import { BellOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { useAppStore } from '@/stores/useAppStore'

const { Title, Text } = Typography
const { Option } = Select

const ZustandDemo: React.FC = () => {
  // 从 store 中获取状态和方法
  const {
    userProfile,
    notifications,
    settings,
    isLoading,
    setUserProfile,
    addNotification,
    markNotificationAsRead,
    clearNotifications,
    updateSettings,
    setLoading,
    reset,
  } = useAppStore()

  // 模拟设置用户资料
  const handleSetUserProfile = () => {
    const mockProfile = {
      id: '1',
      username: 'admin',
      email: 'admin@example.com',
      avatar: 'https://via.placeholder.com/40',
      role: 'administrator',
      createdAt: new Date().toISOString(),
    }
    setUserProfile(mockProfile)
  }

  // 模拟添加通知
  const handleAddNotification = () => {
    const types = ['info', 'success', 'warning', 'error'] as const
    const randomType = types[Math.floor(Math.random() * types.length)]

    addNotification({
      title: `通知 ${Date.now()}`,
      message: `这是一条 ${randomType} 类型的通知消息`,
      type: randomType,
      read: false,
    })
  }

  // 模拟加载状态
  const handleToggleLoading = () => {
    setLoading(!isLoading)
  }

  // 更新主题设置
  const handleThemeChange = (theme: 'light' | 'dark' | 'auto') => {
    updateSettings({ theme })
  }

  // 更新语言设置
  const handleLanguageChange = (language: 'zh-CN' | 'en-US') => {
    updateSettings({ language })
  }

  return (
    <div className='p-6 space-y-6'>
      <Title level={2}>Zustand 状态管理示例</Title>

      {/* 用户资料卡片 */}
      <Card
        title={
          <>
            <UserOutlined /> 用户资料
          </>
        }
        className='w-full'
      >
        {userProfile ? (
          <div className='space-y-2'>
            <Text>
              <strong>用户名:</strong> {userProfile.username}
            </Text>
            <br />
            <Text>
              <strong>邮箱:</strong> {userProfile.email}
            </Text>
            <br />
            <Text>
              <strong>角色:</strong> {userProfile.role}
            </Text>
            <br />
            <Text>
              <strong>创建时间:</strong>{' '}
              {new Date(userProfile.createdAt).toLocaleString()}
            </Text>
          </div>
        ) : (
          <Text type='secondary'>暂无用户资料</Text>
        )}
        <div className='mt-4'>
          <Button type='primary' onClick={handleSetUserProfile}>
            设置用户资料
          </Button>
        </div>
      </Card>

      {/* 通知管理卡片 */}
      <Card
        title={
          <Space>
            <BellOutlined />
            通知管理
            <Badge count={notifications.filter(n => !n.read).length} />
          </Space>
        }
      >
        <div className='mb-4'>
          <Space>
            <Button type='primary' onClick={handleAddNotification}>
              添加通知
            </Button>
            <Button onClick={clearNotifications}>清空通知</Button>
          </Space>
        </div>

        <List
          size='small'
          dataSource={notifications.slice(0, 5)} // 只显示前5条
          renderItem={notification => (
            <List.Item
              actions={[
                !notification.read && (
                  <Button
                    size='small'
                    onClick={() => markNotificationAsRead(notification.id)}
                  >
                    标记已读
                  </Button>
                ),
              ].filter(Boolean)}
            >
              <div
                className={`w-full ${notification.read ? 'opacity-50' : ''}`}
              >
                <div className='flex justify-between items-start'>
                  <div>
                    <Text strong>{notification.title}</Text>
                    <br />
                    <Text type='secondary'>{notification.message}</Text>
                  </div>
                  <Badge
                    status={
                      notification.type === 'error'
                        ? 'error'
                        : notification.type === 'warning'
                          ? 'warning'
                          : notification.type === 'success'
                            ? 'success'
                            : 'default'
                    }
                    text={notification.type}
                  />
                </div>
              </div>
            </List.Item>
          )}
          locale={{ emptyText: '暂无通知' }}
        />
      </Card>

      {/* 设置卡片 */}
      <Card
        title={
          <>
            <SettingOutlined /> 应用设置
          </>
        }
      >
        <div className='space-y-4'>
          <div className='flex justify-between items-center'>
            <Text>主题设置:</Text>
            <Select
              value={settings.theme}
              onChange={handleThemeChange}
              className='w-32'
            >
              <Option value='light'>浅色</Option>
              <Option value='dark'>深色</Option>
              <Option value='auto'>自动</Option>
            </Select>
          </div>

          <div className='flex justify-between items-center'>
            <Text>语言设置:</Text>
            <Select
              value={settings.language}
              onChange={handleLanguageChange}
              className='w-32'
            >
              <Option value='zh-CN'>中文</Option>
              <Option value='en-US'>English</Option>
            </Select>
          </div>

          <div className='flex justify-between items-center'>
            <Text>邮件通知:</Text>
            <Switch
              checked={settings.notifications.email}
              onChange={checked =>
                updateSettings({
                  notifications: { ...settings.notifications, email: checked },
                })
              }
            />
          </div>

          <div className='flex justify-between items-center'>
            <Text>推送通知:</Text>
            <Switch
              checked={settings.notifications.push}
              onChange={checked =>
                updateSettings({
                  notifications: { ...settings.notifications, push: checked },
                })
              }
            />
          </div>
        </div>
      </Card>

      {/* 其他操作 */}
      <Card title='其他操作'>
        <Space>
          <Button loading={isLoading} onClick={handleToggleLoading}>
            {isLoading ? '加载中...' : '模拟加载'}
          </Button>
          <Button danger onClick={reset}>
            重置所有状态
          </Button>
        </Space>
      </Card>

      {/* 状态调试信息 */}
      <Card title='状态调试信息'>
        <pre className='bg-gray-100 p-4 rounded text-xs overflow-auto'>
          {JSON.stringify(
            { userProfile, notifications, settings, isLoading },
            null,
            2
          )}
        </pre>
      </Card>
    </div>
  )
}

export default ZustandDemo
