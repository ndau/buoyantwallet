import React from 'react'
import { NavigationParams, NavigationScreenProps } from 'react-navigation'
import { MenuContainer } from '@src/containers/menu'
import { TopNavigationBar } from './components/TopNavigationBar'
import { getCurrentRouteState, getCurrentRouteIndex } from './Util'
import { KEY_NAVIGATION_BACK } from './Constants'

const MenuTopNavigationParams = {
  header: props => {
    // @ts-ignore (private API)
    const { routeName } = getCurrentRouteState(props.navigation)
    const index = getCurrentRouteIndex(props.navigation)

    return (
      <TopNavigationBar
        {...props}
        title={routeName}
        onBackPress={() => {
          props.navigation.goBack(KEY_NAVIGATION_BACK)
        }}
      />
    )
  }
}

const MenuBottomNavigationParams = {
  bottomNavigation: props => {
    return <MenuContainer {...props} />
  }
}

export const MenuNavigationOptions = {
  ...MenuTopNavigationParams,
  ...MenuBottomNavigationParams
}
