/**
 * Guardpot Recorder Service Skeleton
 * Recorder modülü için kayıt yönetimi, akış izleme ve depolama API servisleri.
 */

import { apiClient } from './apiClient'

export const recorderService = {
  /**
   * Aktif kayıt akışlarını ve durumlarını getirir.
   */
  async getStreams() {
    const data = await apiClient.get('/api/recorder/streams')
    if (data) return data

    // Mock Fallback Data
    return [
      { id: 'stream-1', name: 'Ana Sunucu Odası Cam-01', status: 'recording', fps: 30, resolution: '1080p' },
      { id: 'stream-2', name: 'Ağ Geçidi Oturumu-02', status: 'recording', fps: 60, resolution: '1080p' },
      { id: 'stream-3', name: 'Honeypot Oturum Kaydı-03', status: 'idle', fps: 0, resolution: '720p' }
    ]
  },

  /**
   * Depolama alanı ve disk kullanım metriklerini getirir.
   */
  async getStorageInfo() {
    const data = await apiClient.get('/api/recorder/storage')
    if (data) return data

    return {
      usedGb: 412.8,
      totalGb: 1024,
      retentionDays: 30,
      recordingCount: 148
    }
  },

  /**
   * Belirtilen akış için kaydı başlatır.
   */
  async startRecording(streamId) {
    return apiClient.post('/api/recorder/start', { streamId })
  },

  /**
   * Belirtilen akış için kaydı durdurur.
   */
  async stopRecording(streamId) {
    return apiClient.post('/api/recorder/stop', { streamId })
  },

  /**
   * Geçmiş kayıt oturumlarının listesini getirir.
   */
  async getRecordingsList(filters = {}) {
    return apiClient.get('/api/recorder/list', filters)
  }
}
