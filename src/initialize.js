
const initialize = (deviceDetector, storageKey, storageProvider, global) => {
  const getInitialData = () => {
    if (storageProvider) {
      const device = storageProvider.getItem(storageKey)
        ? JSON.parse(storageProvider.getItem(storageKey))
        : deviceDetector.parse(global.userAgent).device

      storageProvider.setItem(storageKey, JSON.stringify(device))

      return device
    }

    if (!storageProvider) {
      return deviceDetector.parse(global.userAgent).device
    }
  }

  return {
    getInitialData
  }
}

export default initialize