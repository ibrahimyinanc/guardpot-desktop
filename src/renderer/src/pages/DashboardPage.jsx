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
    setNotification('Sistem sağlık taraması başlatıldı...')
    setTimeout(() => {
      setScanning(false)
      setNotification('Tarama tamamlandı: Tüm Honeypot ve VGN düğümleri güvenli!')
      setTimeout(() => setNotification(''), 4000)
    }, 2000)
  }

  const handleExportLogs = () => {
    setNotification('Tüm güvenlik ve recorder logları dışa aktarılıyor (JSON)...')
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
                <h1 className="dashboard-title">Guardpot Ürün Yönetimi & SOC Merkezi</h1>
                <p className="dashboard-subtitle">
                  Deception, Honeypot ve İzleme sistemlerinizi tek bir masaüstü kontrol merkezinden yönetin
                </p>
              </div>

              {/* SOC CANLI TEHDİT & DURUM WİDGETLARI */}
              <div className="soc-widgets-container">
                <div className="threat-badges-row">
                  {/* BADGE 1: 🔴 Son 24 Saat Saldırı */}
                  <div className="threat-badge-card">
                    <span className="threat-indicator-dot red" />
                    <div className="threat-info">
                      <span className="threat-title">Son 24 Saat Saldırı</span>
                      <span className="threat-value">128 Engellendi</span>
                    </div>
                  </div>

                  {/* BADGE 2: 🟢 Aktif Honeypot Sayısı */}
                  <div className="threat-badge-card">
                    <span className="threat-indicator-dot green" />
                    <div className="threat-info">
                      <span className="threat-title">Aktif Honeypot Sayısı</span>
                      <span className="threat-value">12 Düğüm Aktif</span>
                    </div>
                  </div>

                  {/* BADGE 3: 🟣 Recorder Log Akışı */}
                  <div className="threat-badge-card">
                    <span className="threat-indicator-dot purple" />
                    <div className="threat-info">
                      <span className="threat-title">Recorder Log Akışı</span>
                      <span className="threat-value">Canlı Akış Aktif</span>
                    </div>
                  </div>
                </div>

                {/* HIZLI AKSİYON BAR (QUICK ACTIONS) */}
                <div className="quick-actions-bar">
                  <button className="quick-action-btn" onClick={handleScan} disabled={scanning}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M9.5 9.5L12.5 12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <span>{scanning ? 'Taranıyor...' : 'Sistem Sağlık Taraması'}</span>
                  </button>

                  <button className="quick-action-btn" onClick={handleExportLogs}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1.5V9.5M7 9.5L4 6.5M7 9.5L10 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1.5 11.5H12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <span>Tüm Logları Dışa Aktır</span>
                  </button>

                  <button className="quick-action-btn danger" onClick={onDisconnect}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1.5V7M2.5 4.5A5.5 5.5 0 1 0 11.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <span>Acil Bağlantı Kes</span>
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
