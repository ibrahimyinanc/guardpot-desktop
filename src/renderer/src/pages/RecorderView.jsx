import { useState } from 'react'

/**
 * Guardpot Recorder Modül Görünümü
 * Görüntü, Oturum ve Ses Kayıt Yönetim Paneli
 */
export default function RecorderView() {
  const [activeTab, setActiveTab] = useState('streams')

  // TODO: Kamera ve Oturum akış durumlarını tutan useState tanımlanacak.
  // TODO: Kaydı durdurma ve başlatma fonksiyonu eklenecek.

  return (
    <div className="recorder-module-view">
      {/* MODÜL BAŞLIĞI */}
      <div className="module-view-header">
        <div className="module-title-box">
          <div className="module-icon-badge recorder">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="14" height="16" rx="3" stroke="#6C5CE7" strokeWidth="2" />
              <path d="M16 10L22 7V17L16 14" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h1 className="module-page-title">Guardpot Recorder</h1>
            <p className="module-page-desc">Görüntü, Oturum ve Ses Kayıt Yönetim Paneli</p>
          </div>
        </div>
        <div className="module-status-badge purple">
          <span className="dot" />
          <span>Servis Hazır</span>
        </div>
      </div>

      {/* SEKMELER */}
      <div className="module-tabs-bar">
        <button
          className={`tab-btn ${activeTab === 'streams' ? 'active' : ''}`}
          onClick={() => setActiveTab('streams')}
        >
          🎥 Canlı Kayıt Akışları
        </button>
        <button
          className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          📁 Geçmiş Kayıtlar
        </button>
      </div>

      {/* MODÜL İÇERİK ALANI */}
      <div className="module-tab-content">
        <div className="product-placeholder" style={{ border: '1px stroke var(--color-border)' }}>
          <div className="placeholder-icon-wrapper" style={{ '--accent': '#6C5CE7' }}>
            <span className="placeholder-icon">🎥</span>
          </div>
          <h3 className="placeholder-title">Guardpot Recorder Modülü</h3>
          <p className="placeholder-text">
            Guardpot Recorder canlı kamera akışları ve oturum kayıt yönetim bileşenleri entegrasyon aşamasındadır.
          </p>
          <div className="placeholder-features">
            <div className="placeholder-feature">
              <div className="feature-dot" style={{ background: '#6C5CE7' }} />
              <span>Canlı Akış Grid Kartları</span>
            </div>
            <div className="placeholder-feature">
              <div className="feature-dot" style={{ background: '#6C5CE7' }} />
              <span>Kayıt Başlat / Durdur Kontrolleri</span>
            </div>
            <div className="placeholder-feature">
              <div className="feature-dot" style={{ background: '#6C5CE7' }} />
              <span>Depolama Alanı ve Log İndirme Yönetimi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
