import { useState } from 'react'

/**
 * Guardpot Sistem Ayarları Modalı
 */
export default function SettingsModal({ isOpen, onClose }) {
  if (!isOpen) return null

  // TODO: Sunucu URL'si ve Tema ayarlarını değiştiren state ve onSubmit fonksiyonu eklenecek.

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>⚙️ Guardpot Sistem Ayarları</h3>
          <button className="modal-close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <p className="placeholder-text">
            Sistem Ayarları penceresi Sunucu URL yapılandırması ve API anahtarı ayarlarını içerir.
          </p>

          <div className="placeholder-features">
            <div className="placeholder-feature">
              <span>Guardpot Sunucu URL Yapılandırması</span>
            </div>
            <div className="placeholder-feature">
              <span>API Anahtarı ve Güvenlik Sertifikaları</span>
            </div>
            <div className="placeholder-feature">
              <span>Kullanıcı Tercihleri ve Tema Seçenekleri</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
