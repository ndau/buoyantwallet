import React from 'react'
import { Alert, ScrollView, Platform, View, SafeAreaView } from 'react-native'
import VersionNumber from 'react-native-version-number'
import {
  DrawerEntryItem,
  DrawerExit,
  DrawerContainer,
  DrawerEntryVersionItem,
  DrawerBorder
} from './components/drawer'
import I18n from '@src/i18n'
import SettingsStore from '@src/data/stores/SettingsStore'
import {
  faHome,
  faPlusSquare,
  faClock,
  faCommentAlt,
  faCog,
  faFlask,
  faLaptopCode,
  faUserCircle
} from '@fortawesome/pro-light-svg-icons'

class AppDrawer extends React.Component {
  constructor (props) {
    super(props)
  }

  closeDrawer = () => {
    this.props.navigation.closeDrawer()
  }

  dashboard = () => {
    this.closeDrawer()
    this.props.navigation.navigate('App')
  }

  recoverWallet = async () => {
    this.closeDrawer()
    this.props.navigation.navigate('SetupGetRecoveryPhrase', {
      fromHamburger: true
    })
  }

  addWallet = async () => {
    this.closeDrawer()
    this.props.navigation.navigate('SetupYourWallet', { fromHamburger: true })
  }

  showSettings = async () => {
    this.closeDrawer()
    this.props.navigation.navigate('Settings')
  }

  getVersion () {
    let version = `V${VersionNumber.appVersion}`
    if (Platform.OS === 'ios') {
      version += `.${VersionNumber.buildVersion}`
    }
    return version
  }

  logout = () => {
    this.closeDrawer()
    Alert.alert(
      'Logout Confirmation',
      'Are you sure you want to log out of ndau wallet?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('Authentication')
          }
        }
      ],
      { cancelable: false }
    )
  }

  logging = () => {
    this.closeDrawer()
    this.props.navigation.navigate('Logging')
  }

  render () {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0A1724' }}>
        <DrawerContainer logoutHandler={() => this.logout()}>
          <ScrollView>
            <DrawerExit onPress={() => this.closeDrawer()} />
            <DrawerEntryItem
              onPress={() => this.dashboard()}
              fontAwesomeIcon={faHome}
            >
              {I18n.t('sellndau')}
            </DrawerEntryItem>

            <DrawerEntryItem
              onPress={() => this.addWallet()}
              fontAwesomeIcon={faPlusSquare}
            >
              {I18n.t('marketanalysis')}
            </DrawerEntryItem>

            <DrawerEntryItem
              onPress={() => this.recoverWallet()}
              fontAwesomeIcon={faClock}
            >
              {I18n.t('yourreports')}
            </DrawerEntryItem>

            <DrawerEntryItem
              onPress={() => this.props.navigation.navigate('ContactSupport')}
              fontAwesomeIcon={faCog}
            >
              {I18n.t('settings')}
            </DrawerEntryItem>

            <DrawerEntryItem
              onPress={() => this.showSettings()}
              fontAwesomeIcon={faCommentAlt}
            >
              {I18n.t('contactsupport')}
            </DrawerEntryItem>

            {!SettingsStore.isMainNet() ? (
              <View>
                <DrawerBorder />
                <DrawerEntryItem
                  fontAwesomeIcon={
                    SettingsStore.getApplicationNetwork() === I18n.t('testnet')
                      ? { faFlask }
                      : { faLaptopCode }
                  }
                >
                  {SettingsStore.getApplicationNetwork()} environment
                </DrawerEntryItem>
                <DrawerBorder />
              </View>
            ) : null}

            <DrawerEntryVersionItem>{this.getVersion()}</DrawerEntryVersionItem>

            <DrawerEntryItem
              bottom
              onPress={() => this.logout()}
              fontAwesomeIcon={faUserCircle}
            >
              {I18n.t('logout')}
            </DrawerEntryItem>
          </ScrollView>
        </DrawerContainer>
      </SafeAreaView>
    )
  }
}

export default AppDrawer
