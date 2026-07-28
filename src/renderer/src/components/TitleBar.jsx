import { useState, useEffect } from 'react'
import GuardpotLogo from './GuardpotLogo'

function TitleBar() {
  const [isMaximized, setIsMaximized] = useState(false)

  useEffect(() => {
    window.guardpot?.isMaximized().then(setIsMaximized)
    const cleanup = window.guardpot?.onMaximizeChange(setIsMaximized)
    return () => {
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <div className="title-bar">
      <div className="title-bar-drag">
        <div className="title-bar-logo">
          <GuardpotLogo size={20} />
          <span className="title-bar-text">Guardpot</span>
        </div>
      </div>
      <div className="title-bar-controls">
        <button
          className="title-btn minimize"
          onClick={() => window.guardpot?.minimizeWindow()}
          aria-label="Küçült"
        >
          <svg width="12" height="12" viewBox="0 0 12 12">
            <rect x="1" y="5.5" width="10" height="1" fill="currentColor" />
          </svg>
        </button>
        <button
          className="title-btn maximize"
          onClick={() => window.guardpot?.maximizeWindow()}
          aria-label={isMaximized ? 'Önceki boyut' : 'Büyüt'}
        >
          {isMaximized ? (
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="2.5" y="0.5" width="8" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />
              <rect x="1" y="3" width="8" height="8" rx="1" fill="var(--color-bg-primary)" stroke="currentColor" strokeWidth="1" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="1" y="1" width="10" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          )}
        </button>
        <button
          className="title-btn close"
          onClick={() => window.guardpot?.closeWindow()}
          aria-label="Kapat"
        >
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TitleBar
