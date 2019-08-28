import React from 'react'
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import Dashboard from '@src/ui/screens/Dashboard'
import Settings from '@src/ui/screens/Settings'
import Authentication from '@src/ui/screens/Authentication'
import AuthLoading from './AuthLoading'

// Create a bottom tab with the application stacks
// the headers are invisible. If you want to use those
// for navigation back and forth you can enable these for
// that particular screen
const AppStack = createBottomTabNavigator({
  Dashboard: createStackNavigator(
    {
      Dashboard
    },
    { headerMode: 'none' }
  ),
  Settings: createStackNavigator(
    {
      Settings
    },
    { headerMode: 'none' }
  )
})

// Auth is a separate stack with the header invisible
const AuthStack = createStackNavigator(
  {
    Authentication
  },
  { headerMode: 'none' }
)

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
)

export default createAppContainer(SwitchNavigator)
