import { useState } from 'react'
import StepIndicator from '../components/StepIndicator'

function UrlEntryPage({ onSubmit }) {
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')

  const steps = [
    { id: 'welcome', label: 'Hoş Geldiniz', completed: true },
    { id: 'url', label: 'Sunucu Bağlantısı', completed: false },
    { id: 'products', label: 'Ürünler', completed: false }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!url.trim()) {
      setError('Lütfen bir URL girin.')
      return
    }

    try {
      const urlObj = new URL(url)
      if (!['http:', 'https:'].includes(urlObj.protocol)) {
        setError('URL http:// veya https:// ile başlamalıdır.')
        return
      }
      onSubmit(url)
    } catch {
      setError('Geçersiz URL formatı. Örnek: https://guardpot.example.com')
    }
  }

  return (
    <div className="page url-entry-page">
      <div className="url-background">
        <div className="bg-grid" />
      </div>

      <StepIndicator steps={steps} currentStep="url" />

      <div className="url-card">
        <div className="url-card-header">
          <div className="url-icon-wrapper">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
              <path
                d="M4 16H28M16 4C19 7 20 11.5 20 16C20 20.5 19 25 16 28M16 4C13 7 12 11.5 12 16C12 20.5 13 25 16 28"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M6 10H26M6 22H26" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <h2 className="url-title">Guardpot URL Girin</h2>
          <p className="url-subtitle">Guardpot sunucunuzun adresini girerek bağlantı kurun</p>
        </div>

        <form onSubmit={handleSubmit} className="url-form">
          <div className={`input-group ${error ? 'has-error' : ''}`}>
            <div className="input-wrapper">
              <svg className="input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M7.5 10.5L10.5 7.5M6.75 7.5L5.25 9C3.75 10.5 3.75 12.75 5.25 14.25V14.25C6.75 15.75 9 15.75 10.5 14.25L12 12.75M12.75 10.5L14.25 9C15.75 7.5 15.75 5.25 14.25 3.75V3.75C12.75 2.25 10.5 2.25 9 3.75L7.5 5.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="text"
                className="url-input"
                placeholder="https://guardpot.example.com"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value)
                  setError('')
                }}
                autoFocus
              />
            </div>
            {error && <span className="input-error">{error}</span>}
          </div>

          <button type="submit" className="btn-primary btn-connect">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M7.5 10.5L10.5 7.5M6.75 7.5L5.25 9C3.75 10.5 3.75 12.75 5.25 14.25V14.25C6.75 15.75 9 15.75 10.5 14.25L12 12.75M12.75 10.5L14.25 9C15.75 7.5 15.75 5.25 14.25 3.75V3.75C12.75 2.25 10.5 2.25 9 3.75L7.5 5.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span>Bağlan</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default UrlEntryPage
