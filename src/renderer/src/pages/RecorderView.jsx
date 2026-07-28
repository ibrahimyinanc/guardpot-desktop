import { useState } from 'react'

export default function RecorderView() {
  const [activeTab, setActiveTab] = useState('streams')
  const [streams, setStreams] = useState([
    { id: 'REC-01', name: 'Ana Sunucu Odası Cam-01', status: 'recording', fps: 30, resolution: '1080p', bitRate: '4.2 Mbps' },
    { id: 'REC-02', name: 'Ağ Geçidi Oturumu-02', status: 'recording', fps: 60, resolution: '1080p', bitRate: '8.1 Mbps' },
    { id: 'REC-03', name: 'Honeypot Oturum Kaydı-03', status: 'idle', fps: 0, resolution: '720p', bitRate: '0 Mbps' },
    { id: 'REC-04', name: 'SSH Oturum Kaydedici-04', status: 'recording', fps: 30, resolution: '1080p', bitRate: '2.5 Mbps' }
  ])

  const toggleRecording = (id) => {
    setStreams((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: s.status === 'recording' ? 'idle' : 'recording' } : s
      )
    )
  }

  return (
    <div className="recorder-module-view">
      {/* MODULE HEADER */}
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
          <span>3 Akış Kayıtta</span>
        </div>
      </div>

      {/* STORAGE & METRIC BAR */}
      <div className="module-stats-row">
        <div className="module-stat-card">
          <span className="label">DEPOLAMA ALANI</span>
          <span className="value">412.8 / 1024 GB</span>
          <div className="storage-progress-bar">
            <div className="progress-fill" style={{ width: '40%' }} />
          </div>
        </div>
        <div className="module-stat-card">
          <span className="label">KAYIT SÜRESİ</span>
          <span className="value">148 Oturum</span>
          <span className="sub purple">Son 30 Gün Saklama</span>
        </div>
        <div className="module-stat-card">
          <span className="label">TOPLAM VERİ HIZI</span>
          <span className="value">14.8 Mbps</span>
          <span className="sub purple">Senkronize Akış</span>
        </div>
      </div>

      {/* TAB NAVIGATION */}
      <div className="module-tabs-bar">
        <button className={`tab-btn ${activeTab === 'streams' ? 'active' : ''}`} onClick={() => setActiveTab('streams')}>
          🎥 Canlı Kayıt Akışları (4)
        </button>
        <button className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`} onClick={() => setActiveTab('history')}>
          📁 Geçmiş Kayıt Dosyaları
        </button>
      </div>

      {/* STREAMS GRID */}
      {activeTab === 'streams' && (
        <div className="module-tab-content">
          <div className="recorder-streams-grid">
            {streams.map((stream) => (
              <div key={stream.id} className="stream-card">
                <div className="stream-preview-box">
                  <div className="preview-overlay">
                    <span className={`rec-dot ${stream.status === 'recording' ? 'active' : ''}`} />
                    <span className="rec-text">{stream.status === 'recording' ? 'KAYITTA' : 'BEKLEMEDE'}</span>
                  </div>
                  <div className="stream-center-icon">🎥</div>
                  <span className="stream-resolution-badge">{stream.resolution}</span>
                </div>
                <div className="stream-card-body">
                  <h4 className="stream-name">{stream.name}</h4>
                  <div className="stream-meta-row">
                    <span>{stream.fps} FPS</span>
                    <span>•</span>
                    <span>{stream.bitRate}</span>
                  </div>
                  <button
                    className={`stream-control-btn ${stream.status === 'recording' ? 'stop' : 'start'}`}
                    onClick={() => toggleRecording(stream.id)}
                  >
                    {stream.status === 'recording' ? 'Kaydı Durdur ⏹' : 'Kaydı Başlat ▶'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* HISTORY TABLE */}
      {activeTab === 'history' && (
        <div className="module-tab-content">
          <div className="vgn-logs-card">
            <h3>Tamamlanan Kayıt Oturumları</h3>
            <table className="vgn-table">
              <thead>
                <tr>
                  <th>Kayıt ID</th>
                  <th>Akış Adı</th>
                  <th>Başlangıç Tarihi</th>
                  <th>Süre</th>
                  <th>Boyut</th>
                  <th>İşlem</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="code-text">REC-FILE-084</td>
                  <td>Ana Sunucu Odası Cam-01</td>
                  <td className="time-text">2026-07-28 09:30</td>
                  <td>02:14:50</td>
                  <td>3.4 GB</td>
                  <td><button className="table-action-btn">İndir 📥</button></td>
                </tr>
                <tr>
                  <td className="code-text">REC-FILE-083</td>
                  <td>SSH Oturum Kaydedici-04</td>
                  <td className="time-text">2026-07-28 08:10</td>
                  <td>01:05:12</td>
                  <td>840 MB</td>
                  <td><button className="table-action-btn">İndir 📥</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
