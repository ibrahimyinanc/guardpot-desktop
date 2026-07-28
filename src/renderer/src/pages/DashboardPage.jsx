import { useState } from 'react'
import { useApp } from '../context/AppContext'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import ProductPage from './ProductPage'

function DashboardPage({ onDisconnect }) {
  const { products, activeProduct, setActiveProduct } = useApp()
  const [scanning, setScanning] = useState(false)
  const [notification, setNotification] = useState('')

  const handleScan = () => {
    setScanning(true)
    setNotification('System health scan initiated...')
    setTimeout(() => {
      setScanning(false)
      setNotification('Scan completed: All Honeypot and VGN nodes are secure!')
      setTimeout(() => setNotification(''), 4000)
    }, 2000)
  }

  const handleExportLogs = () => {
    setNotification('Exporting all security and recorder logs (JSON)...')
    setTimeout(() => setNotification(''), 3500)
  }

  return (
    <div className="dashboard-layout">
      <Sidebar onDisconnect={onDisconnect} />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          {activeProduct ? (
            <ProductPage product={activeProduct} onBack={() => setActiveProduct(null)} />
          ) : (
            <>
              {/* HERO & WELCOME */}
              <div className="dashboard-welcome">
                <h1 className="dashboard-title">Guardpot Product Management & SOC Center</h1>
                <p className="dashboard-subtitle">
                  Manage your Deception, Honeypot and Monitoring systems from a single desktop control center
                </p>
              </div>

              {/* SOC LIVE THREAT & STATUS WIDGETS */}
              <div className="soc-widgets-container">
                <div className="threat-badges-row">
                  {/* BADGE 1: Attacks (Last 24h) */}
                  <div className="threat-badge-card">
                    <span className="threat-indicator-dot red" />
                    <div className="threat-info">
                      <span className="threat-title">Attacks (Last 24h)</span>
                      <span className="threat-value">128 Blocked</span>
                    </div>
                  </div>

                  {/* BADGE 2: Active Honeypot Nodes */}
                  <div className="threat-badge-card">
                    <span className="threat-indicator-dot green" />
                    <div className="threat-info">
                      <span className="threat-title">Active Honeypot Nodes</span>
                      <span className="threat-value">12 Active Nodes</span>
                    </div>
                  </div>

                  {/* BADGE 3: Recorder Log Stream */}
                  <div className="threat-badge-card">
                    <span className="threat-indicator-dot purple" />
                    <div className="threat-info">
                      <span className="threat-title">Recorder Log Stream</span>
                      <span className="threat-value">Live Stream Active</span>
                    </div>
                  </div>
                </div>

                {/* QUICK ACTIONS BAR */}
                <div className="quick-actions-bar">
                  <button className="quick-action-btn" onClick={handleScan} disabled={scanning}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M9.5 9.5L12.5 12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <span>{scanning ? 'Scanning...' : 'System Health Scan'}</span>
                  </button>

                  <button className="quick-action-btn" onClick={handleExportLogs}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1.5V9.5M7 9.5L4 6.5M7 9.5L10 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1.5 11.5H12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <span>Export All Logs</span>
                  </button>

                  <button className="quick-action-btn danger" onClick={onDisconnect}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1.5V7M2.5 4.5A5.5 5.5 0 1 0 11.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <span>Emergency Disconnect</span>
                  </button>

                  {notification && (
                    <span className="system-notification-pill">{notification}</span>
                  )}
                </div>
              </div>

              {/* PRODUCTS GRID */}
              <div className="products-grid">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => setActiveProduct(product)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
