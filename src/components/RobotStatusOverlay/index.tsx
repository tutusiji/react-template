import React, { useState, useEffect } from 'react'
import { Card, Progress } from 'antd'
import {
  WifiOutlined,
  ThunderboltOutlined,
  HeartOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'

interface RobotStatusProps {
  className?: string
}

const RobotStatusOverlay: React.FC<RobotStatusProps> = ({ className = '' }) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  // 模拟实时数据更新
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // 模拟机器人状态数据
  const statusData = {
    name: 'WHEELER-W01',
    model: 'RobotController-W01',
    serialNumber: '6494238',
    status: '运行中',
    battery: 85,
    signal: 95,
    power: 78,
    heartRate: 42,
    temperature: 36.5,
    workHours: 1247,
    location: 'A区-1号位',
    mode: '自动模式',
  }

  return (
    <div className={`robot-status-overlay ${className}`}>
      {/* 主设备信息卡片 */}
      <Card
        size='small'
        style={{
          backgroundColor: 'rgba(40, 44, 52, 0.8)',
          border: '1px solid #61dafb',
          borderRadius: '8px',
          color: 'white',
          width: '300px',
          pointerEvents: 'auto',
        }}
      >
        {/* 头部状态 */}
        <div className='flex justify-between items-center mb-2'>
          <span className='font-bold'>头部状态</span>
          <span>Pan: -23.52°, Tilt: 7.20°</span>
        </div>

        {/* 电池 */}
        <div className='flex items-center mb-2'>
          <i className='i-svg-battery text-lg text-green-400 mr-2'></i>
          <Progress
            percent={statusData.battery}
            size='small'
            strokeColor={statusData.battery > 20 ? '#52c41a' : '#ff4d4f'}
            trailColor='rgba(255,255,255,0.1)'
            className='flex-1'
          />
          <span className='ml-2'>{statusData.battery}%</span>
        </div>

        {/* 躯干状态 */}
        <div className='status-section'>
          <p className='font-bold'>躯干状态</p>
          <ul>
            <li>J1 2.018°|19mA|23V|44℃|正常</li>
            <li>J1 2.018°|19mA|23V|44℃|正常</li>
            <li>J1 2.018°|19mA|23V|44℃|正常</li>
            <li>J1 2.018°|19mA|23V|44℃|正常</li>
            <li>J1 2.018°|19mA|23V|44℃|正常</li>
          </ul>
        </div>

        {/* 底盘状态 */}
        <div className='status-section'>
          <p className='font-bold'>底盘状态</p>
          <p>24.2V | 12.5A | 32℃</p>
          <p>SPD: 0.7m/s</p>
        </div>

        {/* 机械臂状态 */}
        <div className='status-section'>
          <p className='font-bold'>机械臂状态</p>
          <ul>
            <li>R1 2.018°|19mA|23V|44℃|正常</li>
            <li>R2 2.018°|14mA|18V|24℃|正常</li>
            <li>R3 2.018°|15mA|23V|44℃|正常</li>
            <li>R4 2.018°|17mA|27V|44℃|正常</li>
            <li>R5 -17.018°|20mA|19V|44℃|正常</li>
            <li>R6 22.025°|19mA|23V|44℃|正常</li>
          </ul>
        </div>

        {/* Lidar Status */}
        <div className='status-section'>
          <p className='font-bold'>Lidar状态</p>
          <ul>
            <li>L1 2.018°|12mA|23V|49℃|正常</li>
            <li>L2 10.230°|12mA|23V|29℃|正常</li>
            <li>L3 21.018°|15mA|23V|34℃|正常</li>
            <li>L4 -30.010°|18mA|28V|34℃|正常</li>
            <li>L5 0.06°|20mA|22V|44℃|正常</li>
            <li>L6 2.018°|19mA|29V|44℃|正常</li>
          </ul>
        </div>
      </Card>
    </div>
  )
}

export default RobotStatusOverlay
