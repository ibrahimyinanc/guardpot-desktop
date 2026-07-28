/**
 * Guardpot Central API Client
 * Tüm Guardpot servisleri için HTTP isteklerini yöneten merkezi API istemcisi.
 */

import { DEFAULT_GUARDPOT_URL } from '../context/AppContext'

class ApiClient {
  constructor() {
    this.baseUrl = this.getStoredUrl() || DEFAULT_GUARDPOT_URL
  }

  getStoredUrl() {
    try {
      return localStorage.getItem('guardpot_url') || ''
    } catch {
      return ''
    }
  }

  setBaseUrl(url) {
    this.baseUrl = url
  }

  getBaseUrl() {
    return this.baseUrl || this.getStoredUrl() || DEFAULT_GUARDPOT_URL
  }

  async request(endpoint, options = {}) {
    const url = `${this.getBaseUrl()}${endpoint}`
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...options.headers
    }

    try {
      const response = await fetch(url, { ...options, headers })
      if (!response.ok) {
        throw new Error(`HTTP Hata: ${response.status} - ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      console.warn(`[ApiClient] API çağrısı simülasyon moduna düşüyor (${endpoint}):`, error.message)
      // Sunucu henüz hazır olmadığı durumlarda fallback mock veri dönebilmesi için:
      return null
    }
  }

  async get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString()
    const url = queryString ? `${endpoint}?${queryString}` : endpoint
    return this.request(url, { method: 'GET' })
  }

  async post(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  async put(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' })
  }
}

export const apiClient = new ApiClient()
