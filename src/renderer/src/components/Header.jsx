import { useState } from 'react'
import { useApp } from '../context/AppContext'
import SettingsModal from './SettingsModal'

function Header() {
  const { guardpotUrl, activeProduct, navigateToDashboard } = useApp()
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  return (
    <>
      <header className="top-bar">
        <div className="top-bar-left">
          {activeProduct ? (
            <div className="header-breadcrumb">
              <button className="breadcrumb-item link" onClick={navigateToDashboard}>
                Dashboard
              </button>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-item active">{activeProduct.name}</span>
            </div>
          ) : (
            <h2 className="top-bar-title">Dashboard</h2>
          )}
        </div>

        <div className="top-bar-right">
          <div className="top-bar-url" title="Bağlı Guardpot URL'si">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
              <path
                d="M1.5 7H12.5M7 1.5C8.5 3 9 5 9 7C9 9 8.5 11 7 12.5M7 1.5C5.5 3 5 5 5 7C5 9 5.5 11 7 12.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
            <span>{guardpotUrl || 'Bağlantı yok'}</span>
          </div>
          <button
            className="top-bar-settings"
            aria-label="Ayarlar"
            title="Sistem Ayarları"
            onClick={() => setIsSettingsOpen(true)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M9 1V3M9 15V17M1 9H3M15 9H17M3.3 3.3L4.7 4.7M13.3 13.3L14.7 14.7M3.3 14.7L4.7 13.3M13.3 4.7L14.7 3.3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* SİSTEM AYARLARI MODALI */}
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  )
}

export default Header
