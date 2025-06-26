import { useState } from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick
}: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    if (disabled || loading) return
    
    setIsClicked(true)
    onClick?.()
    
    setTimeout(() => {
      setIsClicked(false)
    }, 150)
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'btn-primary'
      case 'secondary':
        return 'btn-secondary'
      case 'danger':
        return 'btn-danger'
      default:
        return 'btn-primary'
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm'
      case 'md':
        return 'px-4 py-2'
      case 'lg':
        return 'px-6 py-3 text-lg'
      default:
        return 'px-4 py-2'
    }
  }

  return (
    <button
      className={`
        btn
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
        ${isClicked ? 'scale-95' : ''}
        transition-all duration-150
      `}
      disabled={disabled || loading}
      onClick={handleClick}
    >
      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>加载中...</span>
        </div>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
