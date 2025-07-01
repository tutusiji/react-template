import React from 'react'
import {
  Card,
  Row,
  Col,
  Statistic,
  Progress,
  Badge,
  Table,
  List,
  Timeline,
} from 'antd'
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  RobotOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'
import Simple3DViewer from '@/components/Simple3DViewer'
import RobotStatusOverlay from '@/components/RobotStatusOverlay'
import './index.scss'

const Dashboard: React.FC = () => {
  // 模拟数据
  const systemStats = {
    totalDevices: 24,
    onlineDevices: 18,
    alerts: 3,
    efficiency: 94.2,
  }

  const deviceTableData = [
    {
      key: '1',
      id: 'WHL-001',
      name: '左前轮装载机',
      status: 'online',
      battery: 85,
      location: 'A区-1号位',
    },
    {
      key: '2',
      id: 'WHL-002',
      name: '右前轮装载机',
      status: 'online',
      battery: 72,
      location: 'A区-2号位',
    },
    {
      key: '3',
      id: 'WHL-003',
      name: '后轮装载机',
      status: 'offline',
      battery: 45,
      location: 'B区-1号位',
    },
    {
      key: '4',
      id: 'WHL-004',
      name: '备用装载机',
      status: 'maintenance',
      battery: 92,
      location: '维修区',
    },
  ]

  const alertsData = [
    { id: 1, level: 'warning', message: 'WHL-003设备离线', time: '2分钟前' },
    { id: 2, level: 'info', message: '系统例行检查完成', time: '15分钟前' },
    { id: 3, level: 'error', message: 'WHL-002电池电量低', time: '1小时前' },
  ]

  const timelineData = [
    {
      color: 'green',
      children: '系统启动完成 - 09:00',
    },
    {
      color: 'blue',
      children: '设备同步更新 - 10:30',
    },
    {
      color: 'red',
      children: '检测到异常告警 - 11:45',
    },
    {
      color: 'gray',
      children: '例行维护检查 - 14:00',
    },
  ]

  const tableColumns = [
    {
      title: '设备ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: '设备名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const statusMap = {
          online: { color: 'green', text: '在线' },
          offline: { color: 'red', text: '离线' },
          maintenance: { color: 'orange', text: '维护中' },
        }
        const config = statusMap[status as keyof typeof statusMap]
        return <Badge status={config.color as any} text={config.text} />
      },
    },
    {
      title: '电池',
      dataIndex: 'battery',
      key: 'battery',
      render: (battery: number) => (
        <Progress
          percent={battery}
          size='small'
          strokeColor={battery > 30 ? '#52c41a' : '#ff4d4f'}
          style={{ width: 60 }}
        />
      ),
    },
    {
      title: '位置',
      dataIndex: 'location',
      key: 'location',
    },
  ]

  return (
    <div className='dashboard-container'>
      {/* 顶部状态栏 */}
      <div className='status-bar'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center space-x-4'>
            <span className='text-cyan-400 font-bold text-lg'>
              BYD HRT 控制系统
            </span>
            <Badge status='processing' text='系统运行中' />
          </div>
          <div className='flex items-center space-x-6 text-sm'>
            <span>时间: {new Date().toLocaleString()}</span>
            <span>用户: Admin</span>
            <span>版本: v2.1.0</span>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className='dashboard-main'>
        <Row gutter={16} style={{ height: '100%' }}>
          {/* 左侧控制面板 */}
          <Col span={16} style={{ height: '100%' }}>
            <div className='flex flex-col h-full space-y-4'>
              {/* 系统概览卡片 */}
              <Row gutter={16}>
                <Col span={6}>
                  <Card className='stat-card'>
                    <Statistic
                      title='设备总数'
                      value={systemStats.totalDevices}
                      prefix={<RobotOutlined />}
                      valueStyle={{ color: '#3f8600' }}
                    />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card className='stat-card'>
                    <Statistic
                      title='在线设备'
                      value={systemStats.onlineDevices}
                      prefix={<CheckCircleOutlined />}
                      valueStyle={{ color: '#1890ff' }}
                    />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card className='stat-card'>
                    <Statistic
                      title='告警数量'
                      value={systemStats.alerts}
                      prefix={<ExclamationCircleOutlined />}
                      valueStyle={{ color: '#cf1322' }}
                    />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card className='stat-card'>
                    <Statistic
                      title='运行效率'
                      value={systemStats.efficiency}
                      precision={1}
                      suffix='%'
                      prefix={<ArrowUpOutlined />}
                      valueStyle={{ color: '#3f8600' }}
                    />
                  </Card>
                </Col>
              </Row>

              {/* 设备列表表格 */}
              <Card title='设备状态监控' className='flex-1'>
                <Table
                  columns={tableColumns}
                  dataSource={deviceTableData}
                  pagination={false}
                  size='small'
                  scroll={{ y: 200 }}
                />
              </Card>

              {/* 底部信息面板 */}
              <Row gutter={16} style={{ height: '200px' }}>
                <Col span={12}>
                  <Card title='系统告警' className='h-full'>
                    <List
                      size='small'
                      dataSource={alertsData}
                      renderItem={item => (
                        <List.Item>
                          <div className='flex justify-between w-full'>
                            <span
                              className={`text-${item.level === 'error' ? 'red' : item.level === 'warning' ? 'orange' : 'blue'}-500`}
                            >
                              {item.message}
                            </span>
                            <span className='text-gray-400 text-xs'>
                              {item.time}
                            </span>
                          </div>
                        </List.Item>
                      )}
                    />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title='操作日志' className='h-full'>
                    <Timeline items={timelineData} />
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>

          {/* 右侧3D模型展示区 */}
          <Col span={8} style={{ height: '100%' }}>
            <Card title='设备状态展示' className='h-full model-display-card'>
              <div className='model-container'>
                {/* 3D模型查看器 */}
                <Simple3DViewer
                  className='w-full h-full'
                  modelPath='/models/IronMan.obj'
                  showControls={true}
                />

                {/* 机器人状态悬浮信息 */}
                <RobotStatusOverlay />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard
