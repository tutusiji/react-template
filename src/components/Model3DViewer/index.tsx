import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Text,
} from '@react-three/drei'
import * as THREE from 'three'

// 备用的工业机器人模型（更精美的版本）
const RobotModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3
      // 添加轻微的上下浮动效果
      groupRef.current.position.y = Math.sin(_state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 机器人主体底座 */}
      <mesh position={[0, -1.8, 0]} castShadow>
        <cylinderGeometry args={[1.2, 1.2, 0.4, 16]} />
        <meshStandardMaterial
          color='#2a2a2a'
          metalness={0.9}
          roughness={0.1}
          emissive='#000033'
        />
      </mesh>

      {/* 机器人躯干 - 更复杂的形状 */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1.5, 2.5, 0.8]} />
        <meshStandardMaterial
          color={hovered ? '#00d4ff' : '#ff6b35'}
          metalness={0.8}
          roughness={0.2}
          emissive={hovered ? '#001122' : '#110000'}
        />
      </mesh>

      {/* 胸部装甲 */}
      <mesh position={[0, 0.3, 0.45]} castShadow>
        <boxGeometry args={[1.2, 1.5, 0.1]} />
        <meshStandardMaterial
          color='#ffaa00'
          metalness={0.9}
          roughness={0.1}
          emissive='#221100'
        />
      </mesh>

      {/* 机器人头部 - 改进版 */}
      <mesh position={[0, 1.8, 0]} castShadow>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial
          color='#4a90e2'
          metalness={0.9}
          roughness={0.1}
          emissive='#001133'
        />
      </mesh>

      {/* 头盔/面罩 */}
      <mesh position={[0, 1.8, 0.3]} castShadow>
        <boxGeometry args={[0.6, 0.4, 0.2]} />
        <meshStandardMaterial
          color='#001122'
          metalness={1.0}
          roughness={0.0}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* 机器人眼部 - 发光效果 */}
      <mesh position={[-0.15, 1.85, 0.5]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial color='#00ff88' />
      </mesh>
      <mesh position={[0.15, 1.85, 0.5]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial color='#00ff88' />
      </mesh>

      {/* 左肩关节 */}
      <mesh position={[-0.9, 0.8, 0]} castShadow>
        <sphereGeometry args={[0.3, 12, 12]} />
        <meshStandardMaterial color='#555555' metalness={0.8} roughness={0.2} />
      </mesh>

      {/* 右肩关节 */}
      <mesh position={[0.9, 0.8, 0]} castShadow>
        <sphereGeometry args={[0.3, 12, 12]} />
        <meshStandardMaterial color='#555555' metalness={0.8} roughness={0.2} />
      </mesh>

      {/* 左臂 */}
      <mesh position={[-1.3, 0.2, 0]} rotation={[0, 0, Math.PI / 8]} castShadow>
        <cylinderGeometry args={[0.15, 0.2, 1.2, 8]} />
        <meshStandardMaterial color='#666666' metalness={0.7} roughness={0.3} />
      </mesh>

      {/* 右臂 */}
      <mesh position={[1.3, 0.2, 0]} rotation={[0, 0, -Math.PI / 8]} castShadow>
        <cylinderGeometry args={[0.15, 0.2, 1.2, 8]} />
        <meshStandardMaterial color='#666666' metalness={0.7} roughness={0.3} />
      </mesh>

      {/* 左手 */}
      <mesh position={[-1.6, -0.4, 0]} castShadow>
        <boxGeometry args={[0.3, 0.4, 0.2]} />
        <meshStandardMaterial color='#444444' metalness={0.6} roughness={0.4} />
      </mesh>

      {/* 右手 */}
      <mesh position={[1.6, -0.4, 0]} castShadow>
        <boxGeometry args={[0.3, 0.4, 0.2]} />
        <meshStandardMaterial color='#444444' metalness={0.6} roughness={0.4} />
      </mesh>

      {/* 腰部关节 */}
      <mesh position={[0, -1.4, 0]} castShadow>
        <cylinderGeometry args={[0.6, 0.8, 0.3, 8]} />
        <meshStandardMaterial color='#333333' metalness={0.8} roughness={0.2} />
      </mesh>

      {/* 左腿 */}
      <mesh position={[-0.4, -2.2, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.25, 1.2, 8]} />
        <meshStandardMaterial color='#555555' metalness={0.6} roughness={0.4} />
      </mesh>

      {/* 右腿 */}
      <mesh position={[0.4, -2.2, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.25, 1.2, 8]} />
        <meshStandardMaterial color='#555555' metalness={0.6} roughness={0.4} />
      </mesh>

      {/* 左脚 */}
      <mesh position={[-0.4, -2.9, 0.2]} castShadow>
        <boxGeometry args={[0.3, 0.2, 0.6]} />
        <meshStandardMaterial color='#222222' metalness={0.5} roughness={0.5} />
      </mesh>

      {/* 右脚 */}
      <mesh position={[0.4, -2.9, 0.2]} castShadow>
        <boxGeometry args={[0.3, 0.2, 0.6]} />
        <meshStandardMaterial color='#222222' metalness={0.5} roughness={0.5} />
      </mesh>

      {/* 工业设备标识 */}
      <Text
        position={[0, 0.1, 0.6]}
        fontSize={0.15}
        color='#00d4ff'
        anchorX='center'
        anchorY='middle'
        rotation={[0, 0, 0]}
      >
        BYD-HRT
      </Text>

      {/* 型号标识 */}
      <Text
        position={[0, -0.2, 0.6]}
        fontSize={0.1}
        color='#ffffff'
        anchorX='center'
        anchorY='middle'
        rotation={[0, 0, 0]}
      >
        WHEELER-W01
      </Text>

      {/* 状态指示灯 */}
      <mesh position={[0, 1.4, 0.6]}>
        <sphereGeometry args={[0.05, 6, 6]} />
        <meshBasicMaterial color={hovered ? '#ff0000' : '#00ff00'} />
      </mesh>

      {/* 添加鼠标交互区域 */}
      <mesh
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        visible={false}
      >
        <boxGeometry args={[4, 6, 3]} />
      </mesh>
    </group>
  )
}

// 加载指示器
const Loader: React.FC = () => (
  <group>
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color='#333333' wireframe />
    </mesh>
    <Text
      position={[0, -1.5, 0]}
      fontSize={0.3}
      color='#00d4ff'
      anchorX='center'
      anchorY='middle'
    >
      Loading Model...
    </Text>
  </group>
)

// 删除未使用的组件和简化导入

interface Model3DViewerProps {
  className?: string
  modelPath?: string
  materialPath?: string
  showControls?: boolean
}

const Model3DViewer: React.FC<Model3DViewerProps> = ({
  className = '',
  modelPath,
  showControls = true,
}) => {
  // 检查模型文件是否存在
  useEffect(() => {
    if (modelPath) {
      // 尝试检查模型文件
      fetch(modelPath)
        .then(response => {
          if (response.ok) {
            console.log('模型文件存在，但当前使用备用模型')
            // 可以在这里设置 setShowFallback(false) 来启用外部模型加载
          } else {
            console.log('模型文件不存在，使用备用模型')
          }
        })
        .catch(() => {
          console.log('无法访问模型文件，使用备用模型')
        })
    }
  }, [modelPath])

  return (
    <div
      className={`w-full h-full ${className}`}
      style={{ position: 'relative' }}
    >
      <Canvas
        camera={{ position: [6, 4, 6], fov: 45 }}
        style={{ background: 'transparent' }}
        shadows
      >
        {/* 环境光 */}
        <ambientLight intensity={0.3} />

        {/* 主光源 */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        {/* 补光 */}
        <pointLight position={[-8, 5, -8]} intensity={0.4} color='#00d4ff' />
        <pointLight position={[8, 3, 8]} intensity={0.3} color='#ff6b35' />

        {/* 背景环形光 */}
        <pointLight position={[0, 8, 0]} intensity={0.2} color='#ffffff' />

        <Suspense fallback={<Loader />}>
          {/* 始终使用精美的机器人模型 */}
          <RobotModel />

          {/* 环境贴图 */}
          <Environment preset='city' background={false} />

          {/* 阴影平面 */}
          <ContactShadows
            position={[0, -3.2, 0]}
            opacity={0.8}
            scale={20}
            blur={2.5}
            far={4}
            color='#000000'
          />

          {/* 地面网格 */}
          <mesh
            position={[0, -3.2, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            receiveShadow
          >
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial
              color='#1a1a1a'
              transparent
              opacity={0.2}
              wireframe
            />
          </mesh>

          {/* 圆形光环装饰 */}
          <mesh position={[0, -3.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[2, 2.2, 32]} />
            <meshBasicMaterial color='#00d4ff' transparent opacity={0.6} />
          </mesh>

          <mesh position={[0, -3.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[3, 3.1, 32]} />
            <meshBasicMaterial color='#ff6b35' transparent opacity={0.4} />
          </mesh>
        </Suspense>

        {/* 轨道控制器 */}
        {showControls && (
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxPolarAngle={Math.PI * 0.8}
            minPolarAngle={Math.PI * 0.1}
            minDistance={4}
            maxDistance={20}
            enableDamping={true}
            dampingFactor={0.05}
            autoRotate={false}
            autoRotateSpeed={0.5}
          />
        )}
      </Canvas>

      {/* 模型信息提示 */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          background: 'rgba(26, 26, 26, 0.9)',
          color: '#00d4ff',
          padding: '8px 12px',
          borderRadius: '6px',
          fontSize: '12px',
          pointerEvents: 'none',
          border: '1px solid #00d4ff',
          backdropFilter: 'blur(4px)',
        }}
      >
        <div className='flex items-center space-x-2'>
          <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
          <span>3D机器人模型 - 交互模式</span>
        </div>
        {modelPath && (
          <div className='text-xs text-gray-400 mt-1'>
            目标模型: {modelPath.split('/').pop()}
          </div>
        )}
      </div>

      {/* 控制提示 */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: 'rgba(26, 26, 26, 0.8)',
          color: '#ffffff',
          padding: '6px 10px',
          borderRadius: '4px',
          fontSize: '11px',
          pointerEvents: 'none',
          border: '1px solid #333333',
        }}
      >
        <div>🖱️ 拖动旋转 | 🔍 滚轮缩放</div>
      </div>
    </div>
  )
}

export default Model3DViewer
