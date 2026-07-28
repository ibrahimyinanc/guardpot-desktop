function LoadingSpinner({ size = 'medium', text }) {
  return (
    <div className={`loading-spinner ${size}`}>
      <div className="spinner-rings">
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <div className="ring ring-3" />
        <div className="spinner-core" />
      </div>
      {text && <p className="spinner-text">{text}</p>}
    </div>
  )
}

export default LoadingSpinner
