import React from 'react'
import { Button, Space, Tag } from 'antd'
import {
  SettingOutlined,
  ToolOutlined,
  UserOutlined,
  PlaySquareOutlined,
  CameraOutlined,
} from '@ant-design/icons'
import Simple3DViewer from '@/components/Simple3DViewer'
import RobotStatusOverlay from '@/components/RobotStatusOverlay'
import './index.scss'

const Dashboard: React.FC = () => {
  return (
    <div className='new-dashboard'>
      {/* Top Info Bar */}
      <div className='top-bar'>
        <div className='logo-title'>BYD HRT</div>
        <div className='robot-info'>
          <span>WHEELER-WO1</span>
        </div>
        <div className='user-info'>
          <span>Administrator cheng.ruiyang (8494238)</span>
        </div>
        <div className='status-info'>
          <Tag color='processing'>自动作业中</Tag>
        </div>
      </div>

      {/* Main Content */}
      <div className='main-content-area'>
        {/* Left Panel */}
        <div className='left-panel'>
          <div className='panel-item log-display'>日志展示区</div>
          <div className='panel-item nav-system'>导航系统模块</div>
          <div className='panel-item task-queue'>任务队列展示</div>
        </div>

        {/* Right Panel (3D Viewer) */}
        <div className='right-panel'>
          <Simple3DViewer />
          <RobotStatusOverlay />
          <div className='viewer-title'>设备状态展示区</div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className='bottom-bar'>
        <Space size='large'>
          <Button type='text' icon={<SettingOutlined />}>
            设置
          </Button>
          <Button type='text' icon={<ToolOutlined />}>
            支持
          </Button>
          <Button type='text' icon={<UserOutlined />}>
            我的
          </Button>
        </Space>
        <Space size='large'>
          <Button type='text' icon={<PlaySquareOutlined />}>
            任务执行模块
          </Button>
          <Button type='text' icon={<CameraOutlined />}>
            AR 操控模块
          </Button>
        </Space>
      </div>
    </div>
  )
}

export default Dashboard
