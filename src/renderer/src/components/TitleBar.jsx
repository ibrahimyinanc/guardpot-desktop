import GuardpotLogo from './GuardpotLogo'

function TitleBar() {
  const handleMinimize = () => {
    window.guardpot?.minimizeWindow()
  }

  const handleMaximize = () => {
    window.guardpot?.maximizeWindow()
  }

  const handleClose = () => {
    window.guardpot?.closeWindow()
  }

  return (
    <div className="title-bar">
      <div className="title-bar-drag-area">
        <div className="title-bar-brand">
          <GuardpotLogo size={18} />
          <span className="title-bar-title">Guardpot</span>
        </div>
      </div>
      <div className="title-bar-controls">
        <button
          className="title-bar-btn minimize"
          onClick={handleMinimize}
          aria-label="Minimize"
          title="Minimize"
        >
          <svg width="10" height="1" viewBox="0 0 10 1">
            <rect width="10" height="1" fill="currentColor" />
          </svg>
        </button>
        <button
          className="title-bar-btn maximize"
          onClick={handleMaximize}
          aria-label="Maximize"
          title="Maximize"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <rect
              x="0.5"
              y="0.5"
              width="9"
              height="9"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </button>
        <button
          className="title-bar-btn close"
          onClick={handleClose}
          aria-label="Close"
          title="Close"
        >
          <svg width="10" height="10" viewBox="0 0 10 10">
            <path
              d="M1 1L9 9M9 1L1 9"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TitleBar
