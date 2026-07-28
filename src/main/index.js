import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    show: false,
    frame: false,
    backgroundColor: '#0D1B2A',
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  // Maximize/unmaximize events for title bar icon update
  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('window-maximized')
  })
  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('window-unmaximized')
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// ─── IPC: Window Controls ───────────────────────────────────────
ipcMain.on('window-minimize', () => {
  mainWindow?.minimize()
})

ipcMain.on('window-maximize', () => {
  if (mainWindow?.isMaximized()) {
    mainWindow.unmaximize()
  } else {
    mainWindow?.maximize()
  }
})

ipcMain.on('window-close', () => {
  mainWindow?.close()
})

ipcMain.handle('window-is-maximized', () => {
  return mainWindow?.isMaximized() ?? false
})

// ─── IPC: URL Validation ────────────────────────────────────────
ipcMain.handle('validate-url', async (_event, url) => {
  try {
    const urlObj = new URL(url)
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return { success: false, error: 'Geçersiz protokol. HTTP veya HTTPS kullanın.' }
    }
    // Simulate connection check — replace with actual API call later
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return { success: true, url: urlObj.href }
  } catch {
    return { success: false, error: 'Geçersiz URL formatı.' }
  }
})

// ─── App Lifecycle ──────────────────────────────────────────────
app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.guardpot.desktop')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
