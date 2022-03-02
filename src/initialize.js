
const initialize = (deviceDetector, storageKey, storageProvider, global) => {
  const getInitialData = () => {
    return deviceDetector.parse(global.userAgent).device
  }

  return {
    getInitialData
  }
}

export default initialize