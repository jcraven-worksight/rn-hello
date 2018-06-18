This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## notes about react-native

### setup
* install Expo on mobile device via play store
* install Expo-cli on development machine `npm i -g expo`
* install vs code extension react-native tools

### how to debug
* _make sure remote debugger is enabled_ `ctrl+m` or shake screen if using device
* `exp whoami` make sure you're logged in before starting debugger. _not sure if this is necessary?_
* test running and typescript compiling: run `yarn run watch` and `yarn run test` in separate console windows.
* add debug configuration for react-native in vscode
* start debugging in vscode. 
   * `npm run bs` an alternative way to start without vs code debugging, not currently working with native-tools debugger in vscode

### storybook - used for testing components
* install storybook `yarn install global storybook`
* `yarn run storybook`

### odd issues I've encountered:
* sometimes you need to spam save to trigger hot reload.
* if the phone screen turns off, usually need to reconnect in expo
* when debugging in vscode, make sure exponent gui app isn't running on development machine
* if you start seeing the blue screen in expo about the packager not running...check the ips are matching or scan a new qr code. 
* you should see this line in the debug console if vscode attached: Debugger worker loaded runtime on port XXXXX

### android emulator
* install android studio
* setup an emulator in tools->AVD
   * issues I've encountered setting this up in linux:
     * android studio downloads system images in /tmp, which isn't large enough on most linux machines.
     * permissions issues with AD account to /dev/kdm.
* `adb start-server`, make sure it can see your emulator with `adb devices`.
* `npm run android-watch`
* console logging to terminal, run `react-native log-android | grep ReactNativeJS`.
* can right click in emulator with `ctrl+m` and launch external debugger.
* haven't been able to get the vscode debugger attaching :(

### _Issues/Considerations_
* __react-native__ doesn't support proxies in android, and rewire-core uses them. 
There is a polyfill available `proxy-polyfill`, but how can I get a dependency to use that... When debugging remotely you don't see this issue because the code is executed in development machine's Chrome V8, but when not debugging it executes in JavaScriptCore on the device itself [more info](https://stackoverflow.com/questions/41874676/react-native-code-doesnt-work-without-remote-debugger-enabled)
* __react-navigation:__ doesn't support [dynamic routing](https://reactnavigation.org/docs/en/limitations.html).
   * unable to get get header titles displaying 
* debounce?

### I'm really smrt
* if db is running locally expo can't find it on localhost.xxxx, need to specify machine ip 