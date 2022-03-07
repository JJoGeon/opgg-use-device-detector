
const initialize = (deviceDetector, storageKey, storageProvider, global) => {
  const getInitialData = () => {
    const device = storageProvider && storageProvider.getItem(storageKey)
      ? storageProvider.getItem(storageKey)
      : deviceDetector.parse(global.userAgent).device

    storageProvider.setItem(storageKey, device)

    return device
  }

  return {
    getInitialData
  }
}

export default initialize