import { Card, List, Tag, Typography, Space, Button } from 'antd'
import {
  ApiOutlined,
  DatabaseOutlined,
  SettingOutlined,
} from '@ant-design/icons'

const { Title, Paragraph } = Typography

const ApiDemo = () => {
  const apiList = [
    {
      title: '用户管理',
      description: '用户的增删改查操作',
      method: 'GET',
      url: '/api/users',
      icon: <DatabaseOutlined />,
    },
    {
      title: '用户登录',
      description: '用户登录认证接口',
      method: 'POST',
      url: '/api/auth/login',
      icon: <ApiOutlined />,
    },
    {
      title: '系统配置',
      description: '获取系统配置信息',
      method: 'GET',
      url: '/api/config',
      icon: <SettingOutlined />,
    },
  ]

  const getMethodColor = (method: string) => {
    const colors: Record<string, string> = {
      GET: 'blue',
      POST: 'green',
      PUT: 'orange',
      DELETE: 'red',
    }
    return colors[method] || 'default'
  }

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>API 接口示例</Title>
      <Paragraph>
        这里展示了一些常用的 API 接口示例，包括用户管理、认证、配置等。
      </Paragraph>

      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={apiList}
        renderItem={item => (
          <List.Item>
            <Card hoverable>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '12px',
                }}
              >
                <div
                  style={{
                    marginRight: '12px',
                    fontSize: '20px',
                    color: '#1890ff',
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <Title level={4} style={{ margin: 0 }}>
                    {item.title}
                  </Title>
                </div>
                <Tag color={getMethodColor(item.method)}>{item.method}</Tag>
              </div>
              <Paragraph style={{ margin: '0 0 12px 0', color: '#666' }}>
                {item.description}
              </Paragraph>
              <Space>
                <code
                  style={{
                    background: '#f5f5f5',
                    padding: '2px 6px',
                    borderRadius: '4px',
                  }}
                >
                  {item.url}
                </code>
                <Button size='small' type='primary'>
                  测试接口
                </Button>
              </Space>
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ApiDemo
