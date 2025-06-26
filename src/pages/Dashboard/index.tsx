import React from 'react'
import { Card, Row, Col, Button, Badge } from 'antd'
import {
  DesktopOutlined,
  SettingOutlined,
  UserOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import './index.scss'

const Dashboard: React.FC = () => {
  return (
    <div className='dashboard-container'>
      {/* 顶部状态栏 */}
      <div className='status-bar'>
        <div className='device-info'>
          <span className='device-name'>WHEELEDR-W01</span>
          <span className='admin-info'>
            Administrator cheng.ruiyang (84842238)
          </span>
        </div>
        <div className='connection-status'>
          <Badge status='success' text='连接正常' />
          <span className='signal-strength'>信号强度: 85%</span>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className='main-content'>
        <Row gutter={[24, 24]}>
          {/* 左侧控制面板 */}
          <Col span={12}>
            <div className='control-panel'>
              {/* 视觉展示区 */}
              <Card
                title='日志展示区'
                className='display-card'
                style={{ marginBottom: 16 }}
              >
                <div className='display-area'>
                  <div className='display-content'>
                    <div className='display-placeholder'>实时监控画面</div>
                  </div>
                </div>
              </Card>

              {/* 系统模块 */}
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Card className='module-card'>
                    <div className='module-content'>
                      <DesktopOutlined className='module-icon' />
                      <div className='module-title'>导航系统模块</div>
                    </div>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card className='module-card'>
                    <div className='module-content'>
                      <ExclamationCircleOutlined className='module-icon' />
                      <div className='module-title'>任务队列展示</div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>

          {/* 右侧设备控制区 */}
          <Col span={12}>
            <Card title='设备控制展示区' className='device-control-card'>
              <div className='device-display'>
                <div className='robot-image'>
                  <div className='robot-placeholder'>
                    <div className='robot-body'>
                      <div className='robot-head'></div>
                      <div className='robot-wheels'>
                        <div className='wheel'></div>
                        <div className='wheel'></div>
                        <div className='wheel'></div>
                        <div className='wheel'></div>
                      </div>
                      <div className='robot-arm'></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* 底部功能模块 */}
        <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
          <Col span={8}>
            <Card className='function-card'>
              <div className='function-content'>
                <SettingOutlined className='function-icon' />
                <div className='function-title'>设置</div>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card className='function-card'>
              <div className='function-content'>
                <UserOutlined className='function-icon' />
                <div className='function-title'>我的</div>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card className='function-card task-execution'>
              <div className='function-content'>
                <PlayCircleOutlined className='function-icon' />
                <div className='function-title'>任务执行模块</div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* AR 操作模块 */}
        <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
          <Col span={24}>
            <Card title='AR 操作模块' className='ar-module-card'>
              <div className='ar-controls'>
                <Button.Group size='large'>
                  <Button icon={<PlayCircleOutlined />}>开始 AR</Button>
                  <Button icon={<PauseCircleOutlined />}>暂停</Button>
                  <Button icon={<SettingOutlined />}>设置</Button>
                </Button.Group>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard
