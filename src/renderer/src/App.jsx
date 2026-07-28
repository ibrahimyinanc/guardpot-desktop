import { useState } from 'react'
import TitleBar from './components/TitleBar'
import WelcomePage from './pages/WelcomePage'
import UrlEntryPage from './pages/UrlEntryPage'
import ConnectingPage from './pages/ConnectingPage'
import DashboardPage from './pages/DashboardPage'
import { useApp } from './context/AppContext'

function App() {
  const { guardpotUrl, setGuardpotUrl, isConnected, setIsConnected } = useApp()
  const [currentStep, setCurrentStep] = useState('dashboard')
  const [transitionClass, setTransitionClass] = useState('page-enter-active')

  const navigateTo = (step) => {
    setTransitionClass('page-exit-active')
    setTimeout(() => {
      setCurrentStep(step)
      setTransitionClass('page-enter-active')
    }, 350)
  }

  const handleUrlSubmit = async (url) => {
    setGuardpotUrl(url)
    navigateTo('connecting')

    try {
      const result = await window.guardpot?.validateUrl(url)
      if (result?.success) {
        setTimeout(() => {
          setIsConnected(true)
          navigateTo('dashboard')
        }, 1000)
      } else {
        setTimeout(() => navigateTo('urlEntry'), 500)
      }
    } catch {
      // Dev mode or no Electron: simulate success
      setTimeout(() => {
        setIsConnected(true)
        navigateTo('dashboard')
      }, 2800)
    }
  }

  const renderPage = () => {
    switch (currentStep) {
      case 'welcome':
        return <WelcomePage onStart={() => navigateTo('urlEntry')} />
      case 'urlEntry':
        return <UrlEntryPage onSubmit={handleUrlSubmit} />
      case 'connecting':
        return <ConnectingPage />
      case 'dashboard':
        return <DashboardPage onDisconnect={() => navigateTo('urlEntry')} />
      default:
        return <WelcomePage onStart={() => navigateTo('urlEntry')} />
    }
  }

  return (
    <div className="app-container">
      <TitleBar />
      <div className="app-content">
        <div className={`page-wrapper ${transitionClass}`}>{renderPage()}</div>
      </div>
    </div>
  )
}

export default App
