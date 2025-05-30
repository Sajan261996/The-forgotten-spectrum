// src/components/InstallButton.tsx
import { useEffect, useState } from 'react'

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setIsVisible(true)
    })
  }, [])

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted install')
        } else {
          console.log('User dismissed install')
        }
        setDeferredPrompt(null)
        setIsVisible(false)
      })
    }
  }

  if (!isVisible) return null

  return (
    <button
      onClick={handleInstallClick}
      style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        background: '#444',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}
    >
      Install Game
    </button>
  )
}
