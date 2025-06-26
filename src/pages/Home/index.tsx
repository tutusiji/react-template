import { useState } from 'react'
import { Button, Card, Typography, Row, Col, Space, Tag, Divider } from 'antd'
import {
  GithubOutlined,
  RocketOutlined,
  ThunderboltOutlined,
  HeartOutlined,
} from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography

const Home = () => {
  const [count, setCount] = useState(0)

  const features = [
    {
      icon: <RocketOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
      title: 'Vite + React',
      description: '基于 Vite 的快速热重载开发体验',
    },
    {
      icon: (
        <ThunderboltOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
      ),
      title: 'TypeScript',
      description: '完整的类型安全和开发者体验',
    },
    {
      icon: <HeartOutlined style={{ fontSize: '24px', color: '#ff4d4f' }} />,
      title: 'Ant Design',
      description: '企业级 UI 组件库',
    },
  ]

  const techStack = [
    { name: 'React 18', color: '#61dafb' },
    { name: 'Vite 5', color: '#646cff' },
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'Ant Design', color: '#1890ff' },
    { name: 'UnoCSS', color: '#858585' },
    { name: 'Sass', color: '#cc6699' },
    { name: 'Axios', color: '#5a29e4' },
    { name: 'px2rem', color: '#f7931e' },
  ]

  return (
    <div
      className='min-h-screen'
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <Title
          level={1}
          style={{ color: 'white', fontSize: '48px', marginBottom: '16px' }}
        >
          🚀 React Template
        </Title>
        <Paragraph
          style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: '20px',
            maxWidth: '600px',
            margin: '0 auto 32px',
          }}
        >
          一个功能完整、开箱即用的现代化 React 项目模板
        </Paragraph>
        <Space size='middle'>
          <Button type='primary' size='large' icon={<GithubOutlined />}>
            查看源码
          </Button>
          <Button
            size='large'
            style={{
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: 'none',
            }}
          >
            开始使用
          </Button>
        </Space>
      </div>

      {/* Content Section */}
      <div
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}
      >
        {/* Tech Stack */}
        <Card
          style={{
            marginBottom: '32px',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          }}
        >
          <Title
            level={2}
            style={{ textAlign: 'center', marginBottom: '24px' }}
          >
            🛠️ 技术栈
          </Title>
          <div style={{ textAlign: 'center' }}>
            {techStack.map((tech, index) => (
              <Tag
                key={index}
                color={tech.color}
                style={{
                  margin: '4px 8px',
                  padding: '6px 12px',
                  fontSize: '14px',
                  borderRadius: '20px',
                }}
              >
                {tech.name}
              </Tag>
            ))}
          </div>
        </Card>

        {/* Features */}
        <Card
          style={{
            marginBottom: '32px',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          }}
        >
          <Title
            level={2}
            style={{ textAlign: 'center', marginBottom: '32px' }}
          >
            ✨ 核心功能
          </Title>
          <Row gutter={[24, 24]}>
            {features.map((feature, index) => (
              <Col xs={24} md={8} key={index}>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ marginBottom: '16px' }}>{feature.icon}</div>
                  <Title level={4} style={{ marginBottom: '8px' }}>
                    {feature.title}
                  </Title>
                  <Text type='secondary'>{feature.description}</Text>
                </div>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Interactive Demo */}
        <Card
          title={<span style={{ fontSize: '18px' }}>🎮 交互式计数器</span>}
          style={{
            textAlign: 'center',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <div
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#1890ff',
                marginBottom: '16px',
              }}
            >
              {count}
            </div>
            <Text type='secondary' style={{ fontSize: '16px' }}>
              点击按钮测试 React 状态管理
            </Text>
          </div>

          <Space size='middle'>
            <Button
              size='large'
              onClick={() => setCount(count - 1)}
              style={{ minWidth: '80px' }}
            >
              -1
            </Button>
            <Button
              type='primary'
              size='large'
              onClick={() => setCount(0)}
              style={{ minWidth: '80px' }}
            >
              重置
            </Button>
            <Button
              size='large'
              onClick={() => setCount(count + 1)}
              style={{ minWidth: '80px' }}
            >
              +1
            </Button>
          </Space>

          <Divider />

          <Paragraph style={{ marginBottom: 0 }}>
            <Text type='secondary'>
              此模板包含完整的开发环境配置：路径别名、代理配置、移动端适配、代码规范等
            </Text>
          </Paragraph>
        </Card>
      </div>
    </div>
  )
}

export default Home
