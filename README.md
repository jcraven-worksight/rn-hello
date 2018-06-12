This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## my notes about react-native

### setup
* install Expo on mobile device
* install vs code extension react-native tools
* `npm i -g expo`

### how to debug (so far)
* _make sure `ctrl+m` remote debugger is turned on!_
* `exp whoami` make sure you're logged in before starting debugger. _not sure if this is necessary?_
* test running and typescript compiling: run `tsc --watch` and `yarn run test` in separate console windows.
* start debugging in vscode. 

### storybook
* `yarn run storybook`

### odd issues I've encountered:
* sometimes you need to spam save to trigger hot reload.
* if the phone screen turns off, need to reconnect in expo
* when debugging in vscode, make sure exponent gui app isn't running on development machine

### alternative debug setup, no vscode but can use browser:
* `npm run bs` start without vs code debugging, not sure how to get this running from vscode debug

### android emulator
* install android studio
* setup an emulator in tools->AVD
   * issues I've encountered setting this up in linux:
     * android studio downloads system images in /tmp, which on my dev machine isn't large enough.
     * permissions issue with AD account to /dev/kdm
* start adb-server.
* `npm run android-watch`
* console logging to terminal, run `react-native log-android | grep ReactNativeJS`
* can right click in emulator with `ctrl+m`
* from there, `ctrl +m` in expo to launch external debugger in browser
* haven't gotten the vscode debugger working with emulator yet 

### ISSUES
* react-native doesn't support proxies in android, and rewire-core uses them. 
There is a polyfill available `proxy-polyfill`, but how can I get a dependency to use that... When debugging remotely you don't see this issue because the code is executed in development machine's Chrome V8, but when not debugging it executes in JavaScriptCore on the device itself [more info](https://stackoverflow.com/questions/41874676/react-native-code-doesnt-work-without-remote-debugger-enabled)
