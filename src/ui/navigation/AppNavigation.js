import React from 'react'
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'
import Dashboard from '../screens/Dashboard'
import Settings from '../screens/Settings'
import AuthLoading from './AuthLoading'

const AppStack = createBottomTabNavigator({ Dashboard, Settings })

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
)

export default createAppContainer(SwitchNavigator)
