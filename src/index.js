import { useCallback, useMemo, useState } from 'react'

import initialize from './initialize'

const MOBILE = 'smartphone'
const DESKTOP = 'desktop'

const getProvider = () => {
  if (typeof global !== 'undefined' && global.localStorage) {
    return global.localStorage
  }
  if (typeof globalThis !== 'undefined' && globalThis.localStorage) {
    return globalThis.localStorage
  }
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage
  }
  if (typeof localStorage !== 'undefined') {
    return localStorage
  }
  return null
}

const getGlobal = () => {
  if (typeof global !== 'undefined' && global.navigator) {
    return global.navigator
  }
  if (typeof globalThis !== 'undefined' && globalThis.navigator) {
    return globalThis.navigator
  }
  if (typeof window !== 'undefined' && window.navigator) {
    return window.navigator
  }
  if (typeof navigator !== 'undefined') {
    return navigator
  }
  return null
}

const useDeviceDetector = (
  initialValue = false,
  {
    storageKey = 'logicalDeviceData',
    storageProvider = getProvider(),
    global = getGlobal()
  } = {}
) => {
  const {
    getInitialData
  } = useMemo(
    () => initialize(storageKey, storageProvider, global), 
    [storageKey, storageProvider, global]
  )
  
  const [physicalDevice] = useState(getInitialData)
  const [logicalDevice, setLogicalDevice] = useState(getInitialData)
  const [isMobile, setIsMobile] = useState(logicalDevice.type === MOBILE)

  return {
    physicalDevice: physicalDevice,
    logicalDevice: logicalDevice,
    isMobile: isMobile,
    toggle: useCallback(() => {
      const toggleDevice = { 
        brand: logicalDevice.brand,
        model: logicalDevice.model,
        type: logicalDevice.type === DESKTOP ? MOBILE : DESKTOP
      }

      setIsMobile(current => !current)
      setLogicalDevice(toggleDevice)
      storageProvider.setItem(storageKey, JSON.stringify(toggleDevice))
    }, [storageKey, storageProvider, setIsMobile, logicalDevice])
  }
}

export default useDeviceDetector