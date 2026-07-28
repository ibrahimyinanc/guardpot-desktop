import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const guardpotAPI = {
  // Window controls
  minimizeWindow: () => ipcRenderer.send('window-minimize'),
  maximizeWindow: () => ipcRenderer.send('window-maximize'),
  closeWindow: () => ipcRenderer.send('window-close'),
  isMaximized: () => ipcRenderer.invoke('window-is-maximized'),

  // URL validation
  validateUrl: (url) => ipcRenderer.invoke('validate-url', url),

  // Window state change listeners
  onMaximizeChange: (callback) => {
    const onMax = () => callback(true)
    const onUnmax = () => callback(false)
    ipcRenderer.on('window-maximized', onMax)
    ipcRenderer.on('window-unmaximized', onUnmax)
    return () => {
      ipcRenderer.removeListener('window-maximized', onMax)
      ipcRenderer.removeListener('window-unmaximized', onUnmax)
    }
  }
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('guardpot', guardpotAPI)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.guardpot = guardpotAPI
}
