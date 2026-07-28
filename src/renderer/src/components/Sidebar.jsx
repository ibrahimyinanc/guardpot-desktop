import { useApp } from '../context/AppContext'
import GuardpotLogo from './GuardpotLogo'

function Sidebar({ onDisconnect }) {
  const { products, activeProduct, setActiveProduct, disconnect } = useApp()

  const handleDisconnect = () => {
    if (onDisconnect) {
      onDisconnect()
    } else {
      disconnect()
    }
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <GuardpotLogo size={28} />
          <div className="sidebar-logo-text">
            <span className="sidebar-brand">Guardpot</span>
            <span className="sidebar-subtitle">Core Platform</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-section-title">PRODUCTS</div>

        <button
          className={`sidebar-item ${!activeProduct ? 'active' : ''}`}
          onClick={() => setActiveProduct(null)}
        >
          <span className="sidebar-item-icon">📊</span>
          <span>Overview</span>
        </button>

        {products.map((product) => (
          <button
            key={product.id}
            className={`sidebar-item ${activeProduct?.id === product.id ? 'active' : ''}`}
            onClick={() => setActiveProduct(product)}
          >
            <span className="sidebar-item-icon">{product.icon}</span>
            <span>{product.name}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-connection">
          <span className="connection-dot" />
          <span className="connection-text">Connected</span>
        </div>
        <button
          className="sidebar-disconnect-btn"
          onClick={handleDisconnect}
          title="Change Guardpot URL"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Change URL
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
