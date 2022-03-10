# opgg-use-device-detector

Check your device when you have anything to change on your PC or mobile.

❤️ it? ⭐️ it on [GitHub](https://github.com/JJoGeon/opgg-use-device-detector)

`opgg-use-device-detector` basically provides physical device data and logical device data.

- `Physical device`: Device information that was accessed when the site was first accessed.
- `Logical device`: Device information that changes internally when changing the current state to an arbitrary device.

## Requirement

To use `opgg-use-device-detector`, you must use `react@16.8.0` or greater which includes Hooks.

## Installation

```sh
$ npm i opgg-use-device-detector
```

## Usage

```js
import useDeviceDetector from 'opgg-use-device-detector'

const deviceDetector = useDeviceDetector(initialState, deviceDetectorConfig)
```

### Parameters

You pass `useDeviceDetector` an `initialState` and an optional `deviceDetectorConfig` object. The configuration object may contain the following keys.

| Key | Description
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `onChange`        | [Comming Soon!] |
| `storageKey`      | A string that will be used by the `storageProvider` to persist the `logical device data`. If you specify a value of `null`, nothing will be persisted. Default=`logicalDeviceData`. 
| `storageProvider` | A storage provider. Default = `localStorage`. You will generally never need to change this value.

This version does not provide local storage usage and onChange functions.

[Update - 2022.03.07] - Add function version.1 (use local storage)  
[Update - 2022.03.07] - remove device model and brand (Fixing the bug.)  

[Ongoing - 2022.03.10] - add `window.navigator.userAgent` parser.

### Return object

A `deviceDetector` object is returned with the following properties.

| Key         | Description                                                             |
| :--------------- | :----------------------------------------------------------------- |
| `physicalDevice` | Device information on the first visit.                             |
| `logicalDevice`  | Logically changed device information.                              |
| `isMobile`       | Check current state. (`true` = 'smartphone' / `false` = 'desktop') |
| `toggle()`       | A function that allows you to toggle 'smartphone' or 'desktop'.    |

## License

**[MIT](LICENSE)** Licensed

## Contributors
<table>
  <tr>
    <td align="center"><a href="https://github.com/JJoGeon"><img src="https://avatars.githubusercontent.com/u/62378918?s=400&u=058f38cbfa89133f5a84ec3a8d5885a83372cb6c&v=4" width="100px;" alt=""/><br/><sub><b>JJoGeon</b></sub></a>
  </tr>
</table>
