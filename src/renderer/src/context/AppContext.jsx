import { createContext, useContext, useState, useCallback } from 'react'

const AppContext = createContext(null)

export const DEFAULT_GUARDPOT_URL = 'https://guardpot.com'

const STORAGE_KEY = 'guardpot_url'

function getSavedUrl() {
  try {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_GUARDPOT_URL
  } catch {
    return DEFAULT_GUARDPOT_URL
  }
}

function saveUrl(url) {
  try {
    if (url) {
      localStorage.setItem(STORAGE_KEY, url)
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  } catch {
    // ignore
  }
}

export function AppProvider({ children }) {
  const savedUrl = getSavedUrl()
  const [guardpotUrl, _setGuardpotUrl] = useState(savedUrl)
  const [isConnected, setIsConnected] = useState(true)
  const [activeProduct, setActiveProduct] = useState(null)
  const [products] = useState([
    {
      id: 'vgn',
      name: 'Guardpot VGN',
      description: 'Virtual Gate Network security and traffic monitoring solution',
      icon: '🛡️',
      status: 'Active',
      color: '#DC2626'
    },
    {
      id: 'recorder',
      name: 'Guardpot Recorder',
      description: 'Session, video and audio recording management system',
      icon: '🎥',
      status: 'Active',
      color: '#DC2626'
    }
  ])

  const [activeNavItem, setActiveNavItem] = useState('overview')
  const [currentUser] = useState({
    name: 'owner',
    email: 'admin@guardpot.com'
  })

  const setGuardpotUrl = useCallback((url) => {
    _setGuardpotUrl(url)
    saveUrl(url)
  }, [])

  const disconnect = useCallback(() => {
    _setGuardpotUrl('')
    setIsConnected(false)
    saveUrl('')
  }, [])

  const navigateToProduct = useCallback(
    (productOrId) => {
      if (typeof productOrId === 'string') {
        const found = products.find((p) => p.id === productOrId)
        setActiveProduct(found || null)
      } else {
        setActiveProduct(productOrId)
      }
    },
    [products]
  )

  const navigateToDashboard = useCallback(() => {
    setActiveProduct(null)
  }, [])

  return (
    <AppContext.Provider
      value={{
        guardpotUrl,
        setGuardpotUrl,
        isConnected,
        setIsConnected,
        activeProduct,
        setActiveProduct,
        activeNavItem,
        setActiveNavItem,
        currentUser,
        navigateToProduct,
        navigateToDashboard,
        products,
        disconnect
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
