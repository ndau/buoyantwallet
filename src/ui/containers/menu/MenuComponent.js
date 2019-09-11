import React from 'react'
import { SafeAreaView } from '@src/core/navigation'
import { ThemeProvider, withStyles } from 'react-native-ui-kitten'
import { BottomNavigation, BottomNavigationTab } from 'react-native-ui-kitten'
import { themes } from '@src/core/themes'

class MenuComponent extends React.Component {
  onTabSelect = index => {
    this.props.onTabSelect(index)
  }

  render () {
    const { selectedIndex, themedStyle } = this.props

    return (
      <SafeAreaView style={themedStyle.safeAreaContainer}>
        <ThemeProvider theme={{ ...this.props.theme, ...themes['App Theme'] }}>
          <BottomNavigation
            appearance='noIndicator'
            selectedIndex={selectedIndex}
            onSelect={this.onTabSelect}
          >
            <BottomNavigationTab title='Overview' />
            <BottomNavigationTab title='Buy' />
          </BottomNavigation>
        </ThemeProvider>
      </SafeAreaView>
    )
  }
}

export const Menu = withStyles(MenuComponent, theme => ({
  safeAreaContainer: {
    backgroundColor: theme['background-basic-color-1']
  }
}))
