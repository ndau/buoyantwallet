import React from 'react'
import { View, StatusBar, Platform } from 'react-native'
import { ThemeType, withStyles } from 'react-native-ui-kitten/theme'

class DynamicStatusBarComponent extends React.Component {
  getStatusBarContent = () => {
    if (this.props.currentTheme === 'Eva Light') {
      return 'dark-content'
    } else {
      return 'light-content'
    }
  }

  render () {
    const { themedStyle } = this.props

    const androidStatusBarBgColor = themedStyle.container.backgroundColor
    const barStyle = this.getStatusBarContent()

    return (
      <View style={themedStyle.container}>
        <StatusBar
          backgroundColor={androidStatusBarBgColor}
          barStyle={barStyle}
        />
      </View>
    )
  }
}

export const DynamicStatusBar = withStyles(
  DynamicStatusBarComponent,
  theme => ({
    container: {
      backgroundColor: theme['background-basic-color-1'],
      height: Platform.select({
        ios: 20,
        android: 0
      })
    }
  })
)
