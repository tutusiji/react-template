import React, { useRef, useEffect, useState, useCallback } from 'react'
import { Button, Slider, Switch, Badge, Card, Progress, Space, Tooltip } from 'antd'
import { 
  PlayCircleOutlined, 
  PauseOutlined, 
  StopOutlined,
  ReloadOutlined,
  SettingOutlined,
  ExpandOutlined,
  ShrinkOutlined,
  EyeOutlined,
  CameraOutlined
} from '@ant-design/icons'
import './index.scss'

interface OperationPanelProps {}

const OperationPanel: React.FC<OperationPanelProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentFrame, setCurrentFrame] = useState(0)
  const [totalFrames] = useState(120) // 假设有120帧
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [volume, setVolume] = useState(80)
  const [brightness, setBrightness] = useState(100)
  const [isRecording, setIsRecording] = useState(false)
  const [objectInfo] = useState({
    width: 4.50,
    height: 6.50,
    depth: 2.80,
    volume: 82.25
  })

  // 模拟图片序列帧
  const frameImages = useRef<HTMLImageElement[]>([])
  const animationRef = useRef<number>()

  // 初始化Canvas和图片序列
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 设置Canvas尺寸
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // 模拟加载图片序列（实际项目中这里应该加载真实的图片序列）
    const loadFrames = async () => {
      for (let i = 0; i < totalFrames; i++) {
        const img = new Image()
        // 这里使用占位图片，实际项目中应该是真实的序列帧图片
        img.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23f0f0f0"/><text x="400" y="300" text-anchor="middle" font-size="24" fill="%23666">Frame ${i + 1}</text><rect x="350" y="250" width="100" height="100" fill="%234CAF50" opacity="${0.5 + (i / totalFrames) * 0.5}"/></svg>`
        frameImages.current[i] = img
      }
    }

    loadFrames()
    
    // 绘制初始帧
    drawFrame(0)
  }, [totalFrames])

  // 绘制帧
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    const img = frameImages.current[frameIndex]
    if (img && img.complete) {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    } else {
      // 绘制占位背景
      ctx.fillStyle = '#1a1a1a'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // 绘制网格
      ctx.strokeStyle = '#333'
      ctx.lineWidth = 1
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
      
      // 绘制中心标记
      ctx.fillStyle = '#4CAF50'
      ctx.fillRect(canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100)
      
      ctx.fillStyle = '#fff'
      ctx.font = '16px Arial'
      ctx.textAlign = 'center'
      ctx.fillText(`Frame ${frameIndex + 1}`, canvas.width / 2, canvas.height / 2)
    }
  }, [])

  // 播放动画
  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        setCurrentFrame(prev => {
          const nextFrame = (prev + 1) % totalFrames
          drawFrame(nextFrame)
          return nextFrame
        })
        animationRef.current = requestAnimationFrame(animate)
      }
      animationRef.current = requestAnimationFrame(animate)
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, drawFrame, totalFrames])

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleStop = () => {
    setIsPlaying(false)
    setCurrentFrame(0)
    drawFrame(0)
  }

  const handleFrameChange = (value: number) => {
    setCurrentFrame(value)
    drawFrame(value)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
  }

  return (
    <div className={`operation-panel ${isFullscreen ? 'fullscreen' : ''}`}>
      {/* Canvas背景视频 */}
      <canvas
        ref={canvasRef}
        className="background-canvas"
      />
      
      {/* 顶部工具栏 */}
      <div className="top-toolbar">
        <div className="toolbar-left">
          <Badge count={isRecording ? '●' : 0} color="red">
            <Button
              type={isRecording ? 'primary' : 'default'}
              icon={<CameraOutlined />}
              onClick={toggleRecording}
              danger={isRecording}
            >
              {isRecording ? '录制中' : '录制'}
            </Button>
          </Badge>
          <Button icon={<EyeOutlined />}>
            视觉
          </Button>
          <Switch
            checkedChildren="AR"
            unCheckedChildren="2D"
            defaultChecked
          />
        </div>
        
        <div className="toolbar-center">
          <span className="frame-info">
            Frame {currentFrame + 1} / {totalFrames}
          </span>
        </div>
        
        <div className="toolbar-right">
          <Button
            icon={isFullscreen ? <ShrinkOutlined /> : <ExpandOutlined />}
            onClick={toggleFullscreen}
          />
          <Button icon={<SettingOutlined />} />
        </div>
      </div>

      {/* 左侧信息面板 */}
      <div className="left-panel">
        <Card title="对象信息" size="small" className="info-card">
          <div className="object-info">
            <div className="info-item">
              <span className="label">宽度:</span>
              <span className="value">{objectInfo.width}</span>
            </div>
            <div className="info-item">
              <span className="label">高度:</span>
              <span className="value">{objectInfo.height}</span>
            </div>
            <div className="info-item">
              <span className="label">深度:</span>
              <span className="value">{objectInfo.depth}</span>
            </div>
            <div className="info-item">
              <span className="label">体积:</span>
              <span className="value">{objectInfo.volume}</span>
            </div>
          </div>
        </Card>

        <Card title="状态监控" size="small" className="info-card">
          <div className="status-info">
            <div className="status-item">
              <span className="status-label">连接状态</span>
              <Badge status="success" text="正常" />
            </div>
            <div className="status-item">
              <span className="status-label">处理进度</span>
              <Progress percent={75} size="small" />
            </div>
          </div>
        </Card>
      </div>

      {/* 右侧控制面板 */}
      <div className="right-panel">
        <Card title="操作控制" size="small" className="control-card">
          <Space direction="vertical" style={{ width: '100%' }}>
            <div className="control-group">
              <span className="control-label">亮度</span>
              <Slider
                value={brightness}
                onChange={setBrightness}
                min={0}
                max={200}
                tooltip={{ formatter: (value) => `${value}%` }}
              />
            </div>
            <div className="control-group">
              <span className="control-label">音量</span>
              <Slider
                value={volume}
                onChange={setVolume}
                min={0}
                max={100}
                tooltip={{ formatter: (value) => `${value}%` }}
              />
            </div>
          </Space>
        </Card>

        <div className="action-buttons">
          <Tooltip title="重置">
            <Button icon={<ReloadOutlined />} />
          </Tooltip>
          <Tooltip title="暂停">
            <Button icon={<PauseOutlined />} />
          </Tooltip>
          <Tooltip title="旋转">
            <Button icon={<ReloadOutlined />} />
          </Tooltip>
        </div>
      </div>

      {/* 底部控制栏 */}
      <div className="bottom-controls">
        <div className="playback-controls">
          <Button
            type="primary"
            icon={isPlaying ? <PauseOutlined /> : <PlayCircleOutlined />}
            onClick={handlePlay}
            size="large"
          >
            {isPlaying ? '暂停' : '播放'}
          </Button>
          <Button
            icon={<StopOutlined />}
            onClick={handleStop}
            size="large"
          >
            停止
          </Button>
        </div>

        <div className="timeline-container">
          <Slider
            min={0}
            max={totalFrames - 1}
            value={currentFrame}
            onChange={handleFrameChange}
            tooltip={{ formatter: (value) => `帧 ${(value || 0) + 1}` }}
            className="timeline-slider"
          />
        </div>

        <div className="frame-info-bottom">
          <span>{Math.floor(currentFrame / 30)}:{(currentFrame % 30).toString().padStart(2, '0')}</span>
        </div>
      </div>

      {/* 悬浮操作按钮 */}
      <div className="floating-controls">
        <div className="floating-btn-group top-left">
          <Button shape="circle" icon={<EyeOutlined />} />
          <Button shape="circle" icon={<CameraOutlined />} />
        </div>
        
        <div className="floating-btn-group top-right">
          <Button type="primary" shape="circle">IO</Button>
        </div>
        
        <div className="floating-btn-group bottom-right">
          <Button type="primary" size="large">确定</Button>
          <Button size="large">取消</Button>
        </div>
      </div>
    </div>
  )
}

export default OperationPanel
