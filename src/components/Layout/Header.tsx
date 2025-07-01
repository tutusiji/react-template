import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Dropdown, Avatar, Space } from 'antd'
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  FileTextOutlined,
  DownOutlined,
  DashboardOutlined,
  HomeOutlined,
  ControlOutlined,
  InfoCircleOutlined,
  ApiOutlined,
  DatabaseOutlined,
  BgColorsOutlined,
  PictureOutlined,
  SmileOutlined,
  LinkOutlined,
} from '@ant-design/icons'
import { useAuth } from '@/contexts/AuthContext'
import { navigationGroups } from '@/router/routes'
import type { MenuProps } from 'antd'

const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // 图标映射函数
  const getIcon = (iconName?: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      DashboardOutlined: <DashboardOutlined />,
      HomeOutlined: <HomeOutlined />,
      ControlOutlined: <ControlOutlined />,
      InfoCircleOutlined: <InfoCircleOutlined />,
      ApiOutlined: <ApiOutlined />,
      DatabaseOutlined: <DatabaseOutlined />,
      SettingOutlined: <SettingOutlined />,
      BgColorsOutlined: <BgColorsOutlined />,
      PictureOutlined: <PictureOutlined />,
      SmileOutlined: <SmileOutlined />,
      LinkOutlined: <LinkOutlined />,
    }
    return iconName ? iconMap[iconName] : null
  }

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

  // 判断当前路径是否为活跃状态
  const isActive = (path: string) => {
    if (path === '/home' && location.pathname === '/') {
      return true
    }
    return location.pathname === path
  }

  // 判断分组是否包含当前活跃路径
  const isGroupActive = (groupItems: any[]) => {
    return groupItems.some(item => isActive(item.path))
  }

  // 获取链接样式
  const getLinkClassName = (path: string) => {
    const baseClass =
      'px-3 py-2 rounded-md transition-all duration-200 border-b-2 border-transparent'
    const activeClass =
      'text-primary-600 font-medium border-b-primary-600 bg-primary-50'
    const inactiveClass =
      'text-gray-600 hover:text-primary-600 hover:bg-gray-50 hover:border-b-primary-300'

    return `${baseClass} ${isActive(path) ? activeClass : inactiveClass}`
  }

  // 获取下拉菜单样式
  const getDropdownClassName = (groupItems: any[]) => {
    const baseClass =
      'px-3 py-2 rounded-md transition-all duration-200 border-b-2 border-transparent flex items-center space-x-1'
    const activeClass =
      'text-primary-600 font-medium border-b-primary-600 bg-primary-50'
    const inactiveClass =
      'text-gray-600 hover:text-primary-600 hover:bg-gray-50 hover:border-b-primary-300'

    return `${baseClass} ${isGroupActive(groupItems) ? activeClass : inactiveClass}`
  }

  // 创建文档下拉菜单项
  const docsMenuItems: MenuProps['items'] = navigationGroups.docs.items.map(
    route => ({
      key: route.path,
      icon: getIcon(route.meta?.icon),
      label: (
        <Link
          to={route.path}
          className='flex items-center space-x-2'
          title={route.description}
        >
          <span>{route.title}</span>
        </Link>
      ),
    })
  )

  return (
    <header className='bg-white shadow-sm border-b'>
      <div className='container mx-auto px-4'>
        <div className='flex-between h-16'>
          <div className='flex items-center'>
            <Link to='/' className='text-xl font-bold text-primary-600'>
              React Template
            </Link>
          </div>
          <div className='flex items-center space-x-8'>
            <nav className='flex items-center space-x-6'>
              {/* 主要导航项 */}
              {navigationGroups.main.items.map(route => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={getLinkClassName(route.path)}
                  title={route.description}
                >
                  <div className='flex items-center space-x-2'>
                    {getIcon(route.meta?.icon)}
                    <span>{route.title}</span>
                  </div>
                </Link>
              ))}

              {/* 文档下拉菜单 */}
              <Dropdown
                menu={{ items: docsMenuItems }}
                placement='bottomLeft'
                trigger={['hover']}
              >
                <div
                  className={getDropdownClassName(navigationGroups.docs.items)}
                >
                  <FileTextOutlined className='text-sm' />
                  <span>文档</span>
                  <DownOutlined className='text-xs' />
                </div>
              </Dropdown>
            </nav>
            {user && (
              <Dropdown menu={{ items: userMenuItems }} placement='bottomRight'>
                <Space className='cursor-pointer'>
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
