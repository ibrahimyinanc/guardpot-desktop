import { useState } from 'react'
import { useApp } from '../context/AppContext'

function RightSidebar() {
  const { currentUser, domains, guardpotUrl } = useApp()
  const [copiedKey, setCopiedKey] = useState(null)

  const publicUrl = guardpotUrl || domains.publicDomain
  const manageUrl = `manage.${publicUrl.replace(/^https?:\/\//, '')}`

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  return (
    <aside className="right-sidebar">
      {/* ROLÜNÜZ */}
      <div className="right-card">
        <div className="right-card-header">
          <span className="right-card-label">ROLÜNÜZ</span>
        </div>
        <div className="user-profile-box">
          <div className="user-avatar">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 9C10.6569 9 12 7.65685 12 6C12 4.34315 10.6569 3 9 3C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M3 15C3 12.3333 5.66667 11 9 11C12.3333 11 15 12.3333 15 15"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <span className="user-online-dot" />
          </div>
          <div className="user-info">
            <span className="user-role">{currentUser.name}</span>
            <span className="user-email">{currentUser.email}</span>
          </div>
        </div>
      </div>

      {/* HERKESE AÇIK SİTE ALAN ADI */}
      <div className="right-card">
        <div className="right-card-header">
          <span className="right-card-label">HERKESE AÇIK SİTE ALAN ADI</span>
        </div>
        <div className="domain-box">
          <span className="domain-url">{publicUrl}</span>
          <div className="domain-actions">
            <button
              className="domain-btn"
              onClick={() => copyToClipboard(publicUrl, 'public')}
              title={copiedKey === 'public' ? 'Kopyalandı!' : 'Adresi Kopyala'}
            >
              {copiedKey === 'public' ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7L5.5 10L11.5 4" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M3 8.5H2.5C1.94772 8.5 1.5 8.05228 1.5 7.5V2.5C1.5 1.94772 1.94772 1.5 2.5 1.5H7.5C8.05228 1.5 8.5 1.94772 8.5 2.5V3" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              )}
            </button>
            <a
              href={publicUrl.startsWith('http') ? publicUrl : `https://${publicUrl}`}
              target="_blank"
              rel="noreferrer"
              className="domain-btn"
              title="Yeni Sekmede Aç"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M6 2.5H2.5C1.94772 2.5 1.5 2.94772 1.5 3.5V11.5C1.5 12.0523 1.94772 12.5 2.5 12.5H10.5C11.0523 12.5 11.5 12.0523 11.5 11.5V8" stroke="currentColor" strokeWidth="1.2" />
                <path d="M8.5 1.5H12.5V5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M6 8L12.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* YÖNETİM PANELİ ALAN ADI */}
      <div className="right-card">
        <div className="right-card-header">
          <span className="right-card-label">YÖNETİM PANELİ ALAN ADI</span>
        </div>
        <div className="domain-box">
          <span className="domain-url">{manageUrl}</span>
          <div className="domain-actions">
            <button
              className="domain-btn"
              onClick={() => copyToClipboard(manageUrl, 'manage')}
              title={copiedKey === 'manage' ? 'Kopyalandı!' : 'Adresi Kopyala'}
            >
              {copiedKey === 'manage' ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7L5.5 10L11.5 4" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M3 8.5H2.5C1.94772 8.5 1.5 8.05228 1.5 7.5V2.5C1.5 1.94772 1.94772 1.5 2.5 1.5H7.5C8.05228 1.5 8.5 1.94772 8.5 2.5V3" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              )}
            </button>
            <a
              href={manageUrl.startsWith('http') ? manageUrl : `https://${manageUrl}`}
              target="_blank"
              rel="noreferrer"
              className="domain-btn"
              title="Yeni Sekmede Aç"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M6 2.5H2.5C1.94772 2.5 1.5 2.94772 1.5 3.5V11.5C1.5 12.0523 1.94772 12.5 2.5 12.5H10.5C11.0523 12.5 11.5 12.0523 11.5 11.5V8" stroke="currentColor" strokeWidth="1.2" />
                <path d="M8.5 1.5H12.5V5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M6 8L12.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default RightSidebar
