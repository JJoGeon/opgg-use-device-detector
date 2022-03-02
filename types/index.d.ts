declare module 'opgg-use-device-detector' {

  export interface DeviceDetectorConfig {
    storageKey?: string;
    storageProvider?: WindowLocalStorage;
    global?: Navigator; // The global object. Default = `navigator`.
  }

  export interface DeviceDetector {
    readonly physicalDevice: object;
    readonly logicalDevice: object;
    readonly isMobile: boolean;
    toggle: () => void;
  }

  export default function useDeviceDetector(
    initialState?: boolean,
    config?: DeviceDetectorConfig
  ): DeviceDetector
}