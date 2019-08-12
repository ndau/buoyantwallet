import React from 'react'
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation'
import { MenuContainer } from '@src/containers/menu'
import Dashboard from '@src/ui/screens/Dashboard'
import Settings from '@src/ui/screens/Settings'
import { MenuNavigationOptions } from './Options'
import AuthLoading from './AuthLoading'
import Authentication from '@src/ui/screens/Authentication'

const DashboardNavigator = createStackNavigator(
  {
    Dashboard
  },
  {
    defaultNavigationOptions: MenuNavigationOptions
  }
)

const SettingsNavigator = createStackNavigator(
  {
    Settings
  },
  {
    defaultNavigationOptions: MenuNavigationOptions
  }
)

const MenuNavigator = createBottomTabNavigator(
  {
    Dashboard: DashboardNavigator,
    Settings: SettingsNavigator
  },
  {
    tabBarComponent: MenuContainer
  }
)

const AppNavigator = createStackNavigator(
  {
    Home: MenuNavigator
  },
  {
    headerMode: 'screen',
    defaultNavigationOptions: {
      header: null
    }
  }
)

const AuthStack = createStackNavigator(
  {
    Authentication
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      header: null
    }
  }
)

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
)

const createAppRouter = container => {
  return createAppContainer(container)
}

export const Router = createAppRouter(SwitchNavigator)
