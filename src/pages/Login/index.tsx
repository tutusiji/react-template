import React, { useState, useEffect } from 'react'
import { Form, Input, Button, message, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import logoImage from '@/assets/images/logo.png'
import './index.scss'

interface LoginForm {
  username: string
  password: string
  remember: boolean
}

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()

  useEffect(() => {
    // 页面加载时自动填充测试账号
    form.setFieldsValue({ username: 'admin', password: '123456' })
  }, [form])

  const onFinish = async (values: LoginForm) => {
    setLoading(true)

    try {
      // 简单的登录验证
      if (values.username === 'admin' && values.password === '123456') {
        // 创建用户信息
        const userInfo = {
          username: values.username,
          loginTime: new Date().toISOString(),
        }

        // 使用 AuthContext 的 login 方法
        login(userInfo)

        message.success('登录成功！')

        // 获取重定向路径，如果没有则默认跳转到 dashboard
        const from = (location.state as any)?.from?.pathname || '/dashboard'
        navigate(from, { replace: true })
      } else {
        message.error('用户名或密码错误！')
      }
    } catch (error) {
      message.error('登录失败，请重试！')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='login-container'>
      <div className='login-left'>
        <div className='logo-section'>
          <div className='logo'>
            <img src={logoImage} alt='Logo' />
          </div>
        </div>
      </div>

      <div className='login-right'>
        <div className='login-form-container'>
          <div className='login-header'>
            <h2>欢迎回来</h2>
            <p>请输入您的账号信息登录</p>
          </div>

          <Form
            form={form}
            name='login'
            className='login-form'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            size='large'
          >
            <Form.Item
              name='username'
              rules={[
                { required: true, message: '请输入用户名!' },
                { min: 3, message: '用户名至少3个字符!' },
              ]}
            >
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='用户名'
              />
            </Form.Item>

            <Form.Item
              name='password'
              rules={[
                { required: true, message: '请输入密码!' },
                { min: 6, message: '密码至少6个字符!' },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className='site-form-item-icon' />}
                placeholder='密码'
              />
            </Form.Item>

            <Form.Item>
              <Form.Item name='remember' valuePropName='checked' noStyle>
                <Checkbox>记住我</Checkbox>
              </Form.Item>
              <a className='login-form-forgot' href=''>
                忘记密码?
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
                loading={loading}
                block
              >
                登录
              </Button>
            </Form.Item>
          </Form>

          {/* <div className='login-tips'>
            <p>测试账号：admin / 123456</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Login
