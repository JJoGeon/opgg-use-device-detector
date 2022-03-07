import { useCallback, useMemo, useState } from 'react'

import DeviceDetector from 'device-detector-js'
import initialize from './initialize'

const deviceDetector = new DeviceDetector()
const MOBILE = 'smartphone'
const DESKTOP = 'desktop'

const useDeviceDetector = (
  initialValue = false,
  {
    storageKey = 'logicalDeviceData',
    storageProvider = localStorage,
    global = navigator
  } = {}
) => {
  const {
    getInitialData
  } = useMemo(
    () => initialize(deviceDetector, storageKey, storageProvider, global), 
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
      storageProvider.setItem(storageKey, toggleDevice)
    }, [storageKey, storageProvider, setIsMobile, logicalDevice])
  }
}

export default useDeviceDetector