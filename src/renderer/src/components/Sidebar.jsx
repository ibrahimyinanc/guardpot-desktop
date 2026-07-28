import { useApp } from '../context/AppContext'
import GuardpotLogo from './GuardpotLogo'

function Sidebar({ onDisconnect }) {
  const { products, activeProduct, setActiveProduct, disconnect } = useApp()

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <GuardpotLogo size={32} />
          <div className="sidebar-logo-text">
            <span className="sidebar-brand">Guardpot</span>
            <span className="sidebar-subtitle">Çekirdek Platform</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-section-title">Ürünler</div>
        {products.map((product) => (
          <button
            key={product.id}
            className={`sidebar-item ${activeProduct?.id === product.id ? 'active' : ''}`}
            onClick={() => setActiveProduct(activeProduct?.id === product.id ? null : product)}
          >
            <span className="sidebar-item-icon">{product.icon}</span>
            <span className="sidebar-item-text">{product.name}</span>
            <span className="sidebar-item-badge" style={{ background: product.color }} />
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-connection">
          <span className="connection-dot" />
          <span className="connection-text">Bağlı</span>
        </div>
        <button
          className="sidebar-disconnect-btn"
          onClick={() => {
            if (confirm('Guardpot sunucu bağlantısını sıfırlamak ve yeni URL girmek istiyor musunuz?')) {
              disconnect()
              if (onDisconnect) onDisconnect()
            }
          }}
          title="Bağlantıyı değiştir"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2H2V12H5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M9 4L12 7L9 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 7H5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span>URL Değiştir</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
