import { useState } from 'react'
import { Button, Card, Typography } from 'antd'

const { Title, Paragraph } = Typography

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <Title level={1}>🚀 React Template</Title>
        <Paragraph style={{ fontSize: '18px' }}>
          一个功能完整的 React + Vite + TypeScript + Ant Design 项目模板
        </Paragraph>
      </div>

      <Card title='计数器示例' style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '16px' }}>
          <span
            style={{ fontSize: '32px', fontWeight: 'bold', color: '#1890ff' }}
          >
            {count}
          </span>
        </div>
        <div>
          <Button
            style={{ marginRight: '8px' }}
            onClick={() => setCount(count - 1)}
          >
            -1
          </Button>
          <Button
            type='primary'
            style={{ marginRight: '8px' }}
            onClick={() => setCount(0)}
          >
            重置
          </Button>
          <Button onClick={() => setCount(count + 1)}>+1</Button>
        </div>
      </Card>
    </div>
  )
}

export default Home
