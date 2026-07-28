import { useState } from 'react'

export default function VgnView() {
  const [activeTab, setActiveTab] = useState('traffic')
  const [threatLogs] = useState([
    { id: 'LOG-8942', time: '11:18:42', ip: '192.168.1.104', type: 'SSH Brute Force', severity: 'Yuksek', status: 'Engellendi' },
    { id: 'LOG-8941', time: '11:17:15', ip: '45.142.120.9', type: 'Port Scanning (Nmap)', severity: 'Orta', status: 'Izleniyor' },
    { id: 'LOG-8940', time: '11:15:02', ip: '185.220.101.5', type: 'HTTP Vulnerability Probe', severity: 'Kritik', status: 'Engellendi' },
    { id: 'LOG-8939', time: '11:12:30', ip: '10.0.4.52', type: 'SQL Injection Traversal', severity: 'Yuksek', status: 'Engellendi' },
    { id: 'LOG-8938', time: '11:08:19', ip: '192.168.1.210', type: 'DNS Tunneling Attempt', severity: 'Dusuk', status: 'Izleniyor' }
  ])

  return (
    <div className="vgn-module-view">
      {/* MODULE HEADER */}
      <div className="module-view-header">
        <div className="module-title-box">
          <div className="module-icon-badge vgn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 6V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V6L12 2Z" stroke="#DC2626" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <h1 className="module-page-title">Guardpot VGN (Virtual Gate Network)</h1>
            <p className="module-page-desc">Sanal Ağ Güvenliği, Honeypot Düğümleri ve Trafik İzleme Paneli</p>
          </div>
        </div>
        <div className="module-status-badge green">
          <span className="dot" />
          <span>VGN Servisi Aktif (14 Düğüm)</span>
        </div>
      </div>

      {/* STAT METRICS ROW */}
      <div className="module-stats-row">
        <div className="module-stat-card">
          <span className="label">ANLIK BANT GENİŞLİĞİ</span>
          <span className="value">450.4 Mbps</span>
          <span className="sub green">↑ %12 stabil akış</span>
        </div>
        <div className="module-stat-card">
          <span className="label">DÜĞÜM DURUMU</span>
          <span className="value">14 / 14 Aktif</span>
          <span className="sub green">● 0 Kesinti</span>
        </div>
        <div className="module-stat-card">
          <span className="label">TOPLAM TEHDİT (24S)</span>
          <span className="value">342 Olay</span>
          <span className="sub red">🔴 128 Engellendi</span>
        </div>
        <div className="module-stat-card">
          <span className="label">ANOMALİ SKORU</span>
          <span className="value">0.02 / 1.00</span>
          <span className="sub green">✓ Güvenli Seviye</span>
        </div>
      </div>

      {/* TAB NAVIGATION */}
      <div className="module-tabs-bar">
        <button className={`tab-btn ${activeTab === 'traffic' ? 'active' : ''}`} onClick={() => setActiveTab('traffic')}>
          📈 Canlı Trafik & Grafikler
        </button>
        <button className={`tab-btn ${activeTab === 'logs' ? 'active' : ''}`} onClick={() => setActiveTab('logs')}>
          🛡️ Tehdit & Saldırı Logları
        </button>
        <button className={`tab-btn ${activeTab === 'nodes' ? 'active' : ''}`} onClick={() => setActiveTab('nodes')}>
          🌐 Honeypot Düğümleri (14)
        </button>
      </div>

      {/* TAB CONTENT: TRAFFIC GRAPH */}
      {activeTab === 'traffic' && (
        <div className="module-tab-content">
          <div className="vgn-chart-card">
            <div className="chart-header">
              <h3>Sanal Ağ Trafik Analizi (Mbps)</h3>
              <span className="live-pill red">● Canlı Akış (1sn)</span>
            </div>
            <div className="vgn-graph-container">
              <svg className="vgn-svg-chart" viewBox="0 0 700 180" fill="none">
                <defs>
                  <linearGradient id="vgnAreaGradRed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DC2626" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#DC2626" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 10 130 C 70 140, 110 60, 180 90 C 250 120, 290 40, 360 70 C 430 100, 480 30, 550 80 C 610 120, 650 40, 690 30 L 690 180 L 10 180 Z"
                  fill="url(#vgnAreaGradRed)"
                />
                <path
                  d="M 10 130 C 70 140, 110 60, 180 90 C 250 120, 290 40, 360 70 C 430 100, 480 30, 550 80 C 610 120, 650 40, 690 30"
                  stroke="#EF4444"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <circle cx="690" cy="30" r="5" fill="#EF4444" />
              </svg>
              <div className="graph-time-labels">
                <span>11:00</span>
                <span>11:05</span>
                <span>11:10</span>
                <span>11:15</span>
                <span>11:20 (Canlı)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: LOGS TABLE */}
      {activeTab === 'logs' && (
        <div className="module-tab-content">
          <div className="vgn-logs-card">
            <h3>Son Algılanan Güvenlik Olayları</h3>
            <table className="vgn-table">
              <thead>
                <tr>
                  <th>Olay ID</th>
                  <th>Zaman</th>
                  <th>Kaynak IP</th>
                  <th>Saldırı Türü</th>
                  <th>Önem Derecesi</th>
                  <th>Eylem</th>
                </tr>
              </thead>
              <tbody>
                {threatLogs.map((log) => (
                  <tr key={log.id}>
                    <td className="code-text">{log.id}</td>
                    <td className="time-text">{log.time}</td>
                    <td className="ip-text red">{log.ip}</td>
                    <td>{log.type}</td>
                    <td>
                      <span className={`severity-badge ${log.severity.toLowerCase()}`}>{log.severity}</span>
                    </td>
                    <td>
                      <span className={`action-badge ${log.status === 'Engellendi' ? 'blocked' : 'monitored'}`}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB CONTENT: NODES */}
      {activeTab === 'nodes' && (
        <div className="module-tab-content">
          <div className="vgn-nodes-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="node-card">
                <div className="node-card-top">
                  <span className="node-title">Honeypot Düğümü #{i + 1}</span>
                  <span className="node-status-dot active green" />
                </div>
                <span className="node-ip green">10.0.10.10{i + 1}</span>
                <div className="node-meta">
                  <span>Mod: Deception Active</span>
                  <span>Portlar: 22, 80, 443, 3306</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
