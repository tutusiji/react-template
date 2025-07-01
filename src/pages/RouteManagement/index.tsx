import React from 'react'
import { Card, Table, Tag, Space, Typography } from 'antd'
import { allRoutes, navigationRoutes } from '@/router/routes'
import type { RouteConfig } from '@/router/routes'
import type { ColumnsType } from 'antd/es/table'

const { Title, Paragraph } = Typography

interface RouteDisplayInfo extends RouteConfig {
  key: string
}

const RouteManagement: React.FC = () => {
  // 转换路由数据为表格数据
  const tableData: RouteDisplayInfo[] = allRoutes.map(route => ({
    ...route,
    key: route.path,
  }))

  const columns: ColumnsType<RouteDisplayInfo> = [
    {
      title: '路径',
      dataIndex: 'path',
      key: 'path',
      render: (path: string) => (
        <code className='bg-gray-100 px-2 py-1 rounded text-sm'>{path}</code>
      ),
    },
    {
      title: '页面标题',
      dataIndex: 'title',
      key: 'title',
      render: (title: string) => <span className='font-medium'>{title}</span>,
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
      render: (description?: string) => (
        <span className='text-gray-600'>{description || '-'}</span>
      ),
    },
    {
      title: '状态',
      key: 'status',
      render: (_, record) => (
        <Space>
          {record.protected && <Tag color='blue'>需要登录</Tag>}
          {!record.protected && <Tag color='green'>公开</Tag>}
          {record.layout && <Tag color='purple'>带布局</Tag>}
          {record.showInNav && <Tag color='orange'>显示在导航</Tag>}
        </Space>
      ),
    },
    {
      title: '图标',
      dataIndex: 'meta',
      key: 'icon',
      render: (meta?: RouteConfig['meta']) => (
        <code className='text-xs text-gray-500'>{meta?.icon || '-'}</code>
      ),
    },
  ]

  return (
    <div className='p-6'>
      <Title level={2}>路由配置管理</Title>
      <Paragraph>
        这里展示了项目中所有路由的配置信息。路由配置被拆分为三个部分：公开路由、受保护路由和特殊路由。
      </Paragraph>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
        <Card title='总路由数' className='text-center'>
          <div className='text-3xl font-bold text-blue-600'>
            {allRoutes.length}
          </div>
          <div className='text-gray-500 mt-2'>个路由配置</div>
        </Card>

        <Card title='导航菜单项' className='text-center'>
          <div className='text-3xl font-bold text-green-600'>
            {navigationRoutes.length}
          </div>
          <div className='text-gray-500 mt-2'>个导航项</div>
        </Card>

        <Card title='受保护路由' className='text-center'>
          <div className='text-3xl font-bold text-purple-600'>
            {allRoutes.filter(route => route.protected).length}
          </div>
          <div className='text-gray-500 mt-2'>需要登录</div>
        </Card>
      </div>

      <Card title='路由配置详情'>
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `显示 ${range[0]}-${range[1]} 共 ${total} 条记录`,
          }}
          scroll={{ x: 800 }}
        />
      </Card>

      <Card title='导航菜单预览' className='mt-6'>
        <div className='bg-gray-50 p-4 rounded-lg'>
          <div className='flex flex-wrap gap-3'>
            {navigationRoutes.map(route => (
              <div
                key={route.path}
                className='bg-white px-3 py-2 rounded-md border shadow-sm'
              >
                <div className='font-medium text-gray-800'>{route.title}</div>
                <div className='text-xs text-gray-500 mt-1'>{route.path}</div>
                {route.meta?.icon && (
                  <div className='text-xs text-blue-600 mt-1'>
                    {route.meta.icon}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}

export default RouteManagement
