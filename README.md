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

### storybook
* install storybook `yarn install global storybook`
* `yarn run storybook`

### odd issues I've encountered:
* when debugging in vscode, make sure exponent gui app isn't running on development machine
* if you start seeing the blue screen in expo about the packager not running, check dhcp lease on ip didn't expire.
* if working correctly, you should see this line in the debug console if vscode attached: Debugger worker loaded runtime on port x
* if db is running locally, specify machine ip
* if you start seeing error messages about not being able to find files, reinstall react-native tools

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
* haven't been able to get the vscode debugger attaching
* [fix for annoying issue with /tmp running out of space in android studio](https://stackoverflow.com/questions/38057884/tmp-directory-in-linux-android-sdk) look at the symlink fix

### Issues
__outdated javascript-core for android__
* react-native doesn't support proxies in android, and rewire-core uses them. 
There is a polyfill available `proxy-polyfill`. When debugging remotely you don't see this issue because the code is executed in development machine's Chrome V8, but when not debugging it executes in JavaScriptCore on the device itself [more info](https://stackoverflow.com/questions/41874676/react-native-code-doesnt-work-without-remote-debugger-enabled)
* have tried implementing the proxy polyfill in my fork of rewire-core, but no luck.
* there is also [this](https://github.com/react-community/jsc-android-buildscripts), which is silently failing on my linux machine. It is setup to run in OSX, but running `npm run start` isn't yielding anything in /build. I've tried running the scripts individually from the /scripts folder. Maybe if I get an OSX machine I could get this running the latest JSC for Android, which would enable usage of rewire-core.

__navigation__
* react-navigation: doesn't support [dynamic routing](https://reactnavigation.org/docs/en/limitations.html).
   * unable to get get header titles displaying 
* debounce?

### component list...
* input with autocomplete
* touchable list
* form
* date picker (RN has platform specific components for this)
* table (ex balances for holiday types etc)
* timecard???
