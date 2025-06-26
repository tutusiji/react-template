import { Link, useNavigate } from 'react-router-dom'
import { Dropdown, Avatar, Space } from 'antd'
import { UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons'
import { useAuth } from '@/contexts/AuthContext'
import type { MenuProps } from 'antd'

const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人资料',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '设置',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      onClick: handleLogout,
    },
  ]

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary-600">
              React Template
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                首页
              </Link>
              <Link 
                to="/dashboard" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                控制台
              </Link>
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                关于
              </Link>
              <Link 
                to="/api-demo" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                API 演示
              </Link>
              <Link 
                to="/operation-panel" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                操作台
              </Link>
            </nav>
            {user && (
              <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
                <Space className="cursor-pointer">
                  <Avatar icon={<UserOutlined />} />
                  <span>{user.username}</span>
                </Space>
              </Dropdown>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
