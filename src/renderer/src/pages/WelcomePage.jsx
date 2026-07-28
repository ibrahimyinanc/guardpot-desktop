import GuardpotLogo from '../components/GuardpotLogo'

function WelcomePage({ onStart }) {
  return (
    <div className="page welcome-page">
      <div className="welcome-background">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      <div className="welcome-content">
        <div className="welcome-logo">
          <div className="logo-outer-ring" />
          <div className="logo-inner-ring" />
          <GuardpotLogo size={64} />
        </div>

        <h1 className="welcome-title">
          <span className="title-guard">Guard</span>
          <span className="title-pot">pot</span>
        </h1>

        <p className="welcome-subtitle">Çekirdek Platform</p>

        <p className="welcome-description">
          Güvenlik çözümlerinizi merkezi olarak kontrol edin,
          <br />
          izleyin ve yapılandırın.
        </p>

        <button className="btn-primary btn-glow" onClick={onStart}>
          <span>Kuruluma Başla</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7 4L13 10L7 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default WelcomePage
