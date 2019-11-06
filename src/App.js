import React from 'react'
import { YellowBox, NativeModules, View } from 'react-native'
import AppNavigation from '@src/core/navigation/AppNavigation'
import SettingsStore from '@src/data/stores/SettingsStore'
import { useScreens } from 'react-native-screens'
import AsyncStorage from '@react-native-community/async-storage'
import { GeneralStore, CryptoStore } from 'ndaujs'
import { generateSecureRandom } from 'react-native-securerandom'
import FlashMessage from 'react-native-flash-message'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faInfoCircle } from '@fortawesome/pro-light-svg-icons'

// Some libraries haven't removed componentWillMount yet
YellowBox.ignoreWarnings(['Warning: componentWillMount'])

useScreens()

global.Keyaddr = NativeModules.KeyAddressManager
GeneralStore.default.setStore(AsyncStorage)
CryptoStore.default.setStore(generateSecureRandom)

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount = async () => {
    await SettingsStore.initialize()
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigation />
        <FlashMessage
          position='top'
          duration={10000}
          icon='danger'
          style={{
            // marginTop: '14.5%',
            backgroundColor: '#FFE3DC'
          }}
          titleStyle={{
            color: '#F05123',
            fontSize: 14,
            fontFamily: 'opensans-regular',
            paddingLeft: '1%',
            paddingRight: '5%'
          }}
          renderFlashMessageIcon={() => {
            return (
              <View>
                <FontAwesomeIcon
                  style={{ padding: 0 }}
                  size={24}
                  icon={faInfoCircle}
                  color='#F05123'
                />
              </View>
            )
          }}
        />
      </View>
    )
  }
}
