import LoadingSpinner from '../components/LoadingSpinner'

function ConnectingPage() {
  return (
    <div className="page connecting-page">
      <div className="connecting-background">
        <div className="pulse-ring pulse-ring-1" />
        <div className="pulse-ring pulse-ring-2" />
        <div className="pulse-ring pulse-ring-3" />
      </div>

      <div className="connecting-content">
        <LoadingSpinner size="large" />
        <h2 className="connecting-title">Sunucuya Bağlanılıyor</h2>
        <p className="connecting-subtitle">Guardpot sunucusu doğrulanıyor...</p>
        <div className="connecting-dots">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>
    </div>
  )
}

export default ConnectingPage
