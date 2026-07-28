import { useApp } from '../context/AppContext'

// VGN Shield Vector SVG Icon
export function VgnIcon({ size = 28, color = '#00e5a3' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L3 6V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V6L12 2Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7V12L15 15"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Recorder Video Stream Vector SVG Icon
export function RecorderIcon({ size = 28, color = '#6c5ce7' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="14" height="16" rx="3" stroke={color} strokeWidth="1.8" />
      <path d="M16 10L22 7V17L16 14" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="12" r="2.5" fill={color} />
    </svg>
  )
}

export default function ProductCard({
  product,
  title,
  description,
  status = 'Aktif',
  icon,
  onClick,
  onNavigate,
  color
}) {
  const { navigateToProduct } = useApp()

  const cardTitle = title || product?.name || 'Guardpot Ürün'
  const cardDesc = description || product?.description || ''
  const cardStatus = status || product?.status || 'Aktif'
  const cardColor = color || product?.color || '#00e5a3'

  const handleSelect = () => {
    if (onNavigate) {
      onNavigate(product)
    } else if (onClick) {
      onClick(product)
    } else {
      navigateToProduct(product)
    }
  }

  const renderIcon = () => {
    if (icon) {
      if (typeof icon === 'string' && icon.startsWith('<svg')) {
        return <span dangerouslySetInnerHTML={{ __html: icon }} />
      }
      return typeof icon === 'string' ? <span className="product-icon">{icon}</span> : icon
    }
    if (product?.id === 'vgn') {
      return <VgnIcon color={cardColor} />
    }
    if (product?.id === 'recorder') {
      return <RecorderIcon color={cardColor} />
    }
    return <span className="product-icon">{product?.icon || '🛡️'}</span>
  }

  return (
    <div
      className="product-card"
      onClick={handleSelect}
      style={{ '--card-accent': cardColor }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleSelect()}
    >
      <div className="product-card-glow" />
      <div className="product-card-header">
        <div className="product-icon-wrapper">{renderIcon()}</div>
        <div className="product-status">
          <span className="status-dot" style={{ background: cardColor }} />
          <span className="status-text" style={{ color: cardColor }}>
            ● {cardStatus}
          </span>
        </div>
      </div>

      <div className="product-card-body">
        <h3 className="product-name">{cardTitle}</h3>
        <p className="product-description">{cardDesc}</p>
      </div>

      <div className="product-card-footer">
        <button className="product-open-btn" tabIndex={-1}>
          Yönetim Paneli
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
