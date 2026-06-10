import { createContext, useContext, useEffect, useState } from 'react'
import { useTheme } from './ThemeContext'

const EmergencyContext = createContext(null)

export function EmergencyProvider({ children }) {
  const [emergencyMode, setEmergencyMode] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('emergency', emergencyMode)
    if (emergencyMode) setTheme('dark')
  }, [emergencyMode, setTheme])

  return <EmergencyContext.Provider value={{ emergencyMode, setEmergencyMode }}>{children}</EmergencyContext.Provider>
}

export function useEmergency() {
  return useContext(EmergencyContext)
}
