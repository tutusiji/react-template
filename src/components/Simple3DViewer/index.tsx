import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Text,
} from '@react-three/drei'
import * as THREE from 'three'

// 简化的工业机器人模型 - 避免兼容性问题
const SimpleRobotModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 机器人主体 */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1.5, 2.5, 0.8]} />
        <meshStandardMaterial
          color={hovered ? '#00d4ff' : '#ff6b35'}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* 机器人头部 */}
      <mesh position={[0, 1.8, 0]} castShadow>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color='#4a90e2' metalness={0.9} roughness={0.1} />
      </mesh>

      {/* 眼部发光 */}
      <mesh position={[-0.15, 1.85, 0.5]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial color='#00ff88' />
      </mesh>
      <mesh position={[0.15, 1.85, 0.5]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial color='#00ff88' />
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

      {/* 工业标识 */}
      <Text
        position={[0, 0.1, 0.6]}
        fontSize={0.15}
        color='#00d4ff'
        anchorX='center'
        anchorY='middle'
      >
        BYD-HRT
      </Text>

      {/* 交互区域 */}
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
const LoadingIndicator: React.FC = () => (
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
      Loading...
    </Text>
  </group>
)

interface Simple3DViewerProps {
  className?: string
  modelPath?: string
  showControls?: boolean
}

const Simple3DViewer: React.FC<Simple3DViewerProps> = ({
  className = '',
  modelPath,
  showControls = true,
}) => {
  return (
    <div
      className={`w-full h-full ${className}`}
      style={{
        position: 'relative',
        minHeight: '400px',
        background:
          'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f1f3f4 100%)',
      }}
    >
      <Canvas
        camera={{ position: [6, 4, 6], fov: 45 }}
        style={{
          background: 'transparent',
          display: 'block',
          width: '100%',
          height: '100%',
        }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        {/* 灯光设置 */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-8, 5, -8]} intensity={0.4} color='#00d4ff' />
        <pointLight position={[8, 3, 8]} intensity={0.3} color='#ff6b35' />

        <Suspense fallback={<LoadingIndicator />}>
          <SimpleRobotModel />

          {/* 环境贴图 */}
          <Environment preset='city' background={false} />

          {/* 阴影 */}
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

          {/* 装饰光环 */}
          <mesh position={[0, -3.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[2, 2.2, 32]} />
            <meshBasicMaterial color='#00d4ff' transparent opacity={0.6} />
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
          />
        )}
      </Canvas>

      {/* 状态提示 */}
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

export default Simple3DViewer
