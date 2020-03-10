Below you will find instructions on how to get buoyant wallet running in both Android and iOS. Please make sure to follow the [Getting Started](#getting-started) link first as there are quite a few things that need to be installed before you can start. Please also if you find something missing feel free to update! :)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
- [Mandatory Scripts](#mandatory-scripts)
- [Writing and Running Tests](#writing-and-running-tests)
- [Building](#building)
- [Deployment](#deployment)
    - [iOS Deployment](#ios-deployment)
    - [Android Deployment](#android-deployment)
- [Troubleshooting](#troubleshooting)
    - [iOS Simulator won't open](#ios-simulator-wont-open)

## Getting Started

The best place to start is the [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) guide within the React Native documentation. Click on the Build Projects with Native Code link and go through both the iOS and Android sections. Here is an overall list you will need to install, the link gives more detail on each:

- `node` via `brew`
- `watchman` via `brew`
  - `brew install watchman`
- [`react-native-cli` via `npm`](https://www.npmjs.com/package/react-native-cli) - be sure to install it globally.
  - `npm install -g react-native-cli`
- [Java SE Development Kit (JDK) 8 or newer](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
- [Android Studio](https://developer.android.com/studio/)
- [CocoaPods](https://cocoapods.org)
- `brew install yarn`
- Execute `sudo xcode-select --switch /Applications/Xcode.app`. This allows pod installation of the a google library

## Mandatory Scripts

You must run the following scripts before you can begin using this application.

We installed node...but that gets the latest we want verison 10. First navigate to the [nvm](https://github.com/creationix/nvm) site to install nvm. Then execuite the commands below after a successful installation.

```
nvm install v10
nvm use v10
```

Before we can run `npm install` you must make sure you have a `.npmrc` file in the `ndau-wallet-rn` folder. In that file make sure
to include the following:

```
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=YOUR_TOKEN_HERE
```

Replace `YOUR_TOKEN_HERE` with the FontAwesomePro token. Please see
KP for this. There is an examples file of you can use in `examples/npmrc`, this is the file CircleCI uses. Make sure you call the file
`.npmrc` and not `npmrc`. See the `.circleci/config.yml` for what it does.

Next you must copy the file `debug.keystore` from 1Password to your `buoyantwallet/android/app` folder. 

NOW we npm/yarn install:

`npm install`

or

`yarn install`

Finally, in another terminal use the following for launching iOS:

`yarn ios`

...or the following for Android:

`yarn android`

## Building

### Circle CI

This repo contains CircleCI configuration in `./.circle/config.yml` for building `.ipa` Apple iOS application files and `.apk` Android application files. Upon successful builds the files will be available as build artifacts.

As of 2019-Sep-09, the Android build is not functioning. This is due to the issues documented in https://github.com/facebook/react-native/issues/25601 and addressed in the following commit in a rc for 0.61 of react native.

#### Github Tags

The tests will run for every commit on any branch. In order to trigger a build, the commit must be tagged with any tag terminating in `-build`.

## Deployment
CircleCI builds this project and will also build both the iOS and Android archives to be sent up. Each OS we support is outlined below.

To have the ability to deploy you must be invited to the Oneiro group for Apple and basically the same for Google. Please see the admin's for each of these. At the time of writing this it is either Ed or Dhesi.

### iOS Deployment

Deployment of iOS is super simple. Navigate to the CircleCI [build](https://app.circleci.com/github/ndau/buoyantwallet/pipelines). Simply click the build you want to see and then click to see the `build` item. Once there you will see an `Artifacts` tab, click on that. Simply click the `buoyantwallet.ipa` and it will download locally.

Once finished, open a bash shell in your home directory and execute the following command:

```
xcrun altool --upload-app --type ios -f ./Downloads/buoyantwallet.ipa -u "YourAppleID" -p "YourPassword"
```
Please note that the password you use is NOT the actual password for your Apple ID. You must navigate [here](https://appleid.apple.com/account/manage) and generate an app specificy password from the `APP-SPECIFIC-PASSWORDS` section on this page. THAT is the password you use.

If all is well, you will be told there were no errors. If there are errors, it will be thrown into the console.

Next thing to do is to find this build that was uploaded to TestFlight and release it. Navigate to [App Store Connect](https://appstoreconnect.apple.com). Click on Apps and then click buoyant wallet app. Click on the TestFlight tab and then click on the build you just uploaded. You will need to go through the `Export compliance information` section by click on the app version you want and then the `Export compliance information`. Follow the set of screens and once finished it will then be seen by all the Testers that have been allocated.

### Android Deployment

Navigate to the CircleCI [build](https://app.circleci.com/github/ndau/buoyantwallet/pipelines). Simply click the build you want to see and then click to see the `build-android` item. Once there you will see an `Artifacts` tab, click on that. Simply click the `android/app-release.apk` and it will download locally.

Once you have this you can use [Google Play Console](https://play.google.com/apps/publish/). Login and go to the Oneiro group. Click on All applications and you should then see `buoyant wallet` and `ndau wallet`. Click on `buoyant wallet` and then click on `Release management` in the left hand menu. Click on `App releases` and then scroll to the track you are installing to. At the time of writing this buoyant wallet is still using Alpha. 

Once you `CREATE RELEASE` you will be guided through what you need to add. You must navigate to the `app-release.apk` you downloaded above and add this. The version will be extrapolated and will be automatically populated. Once finished you Save, Review and then release. 

## Troubleshooting

### iOS Simulator won't open

If you're on a Mac, there are a few errors that users sometimes see when attempting to `npm run ios`:

* "non-zero exit code: 107"
* "You may need to install Xcode" but it is already installed
* and others

There are a few steps you may want to take to troubleshoot these kinds of errors:

1. Make sure Xcode is installed and open it to accept the license agreement if it prompts you. You can install it from the Mac App Store.
2. Open Xcode's Preferences, the Locations tab, and make sure that the `Command Line Tools` menu option is set to something. Sometimes when the CLI tools are first installed by Homebrew this option is left blank, which can prevent Apple utilities from finding the simulator. Make sure to re-run `npm/yarn run ios` after doing so.
3. If that doesn't work, open the Simulator, and under the app menu select `Reset Contents and Settings...`. After that has finished, quit the Simulator, and re-run `npm/yarn run ios`.

