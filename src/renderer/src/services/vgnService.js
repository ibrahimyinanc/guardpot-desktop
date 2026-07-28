/**
 * Guardpot VGN (Virtual Gate Network) Service Skeleton
 * VGN modülü için veri çekme, durum sorgulama ve yapılandırma API servisleri.
 */

import { apiClient } from './apiClient'

export const vgnService = {
  /**
   * VGN servisinin genel durumunu ve düğüm bilgilerini getirir.
   */
  async getStatus() {
    const data = await apiClient.get('/api/vgn/status')
    if (data) return data

    // Mock Fallback Data (Entegrasyon öncesi arayüz geliştirme için)
    return {
      status: 'active',
      activeNodes: 14,
      totalTrafficGb: 128.4,
      threatsBlocked: 342,
      lastSync: new Date().toISOString()
    }
  },

  /**
   * Canlı trafik ve ağ güvenlik metriklerini getirir.
   */
  async getMetrics(timeRange = '24h') {
    const data = await apiClient.get('/api/vgn/metrics', { range: timeRange })
    if (data) return data

    return {
      bandwidthMbps: 450,
      packetsPerSec: 12400,
      activeConnections: 1280,
      anomalyScore: 0.02
    }
  },

  /**
   * VGN güvenlik parametrelerini günceller.
   */
  async updateConfig(configData) {
    return apiClient.post('/api/vgn/config', configData)
  },

  /**
   * Sanal ağ izlemeyi başlatır veya durdurur.
   */
  async toggleMonitoring(enabled) {
    return apiClient.post('/api/vgn/toggle', { enabled })
  }
}
