import React from 'react'
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation'
import { MenuContainer } from '@src/containers/menu'
import Overview from '@src/ui/screens/Overview'
import Buy from '@src/ui/screens/Buy'
import { MenuNavigationOptions } from './Options'
import AuthLoading from './AuthLoading'
import Authentication from '@src/ui/screens/Authentication'

const OverviewNavigator = createStackNavigator(
  {
    Overview
  },
  {
    defaultNavigationOptions: MenuNavigationOptions
  }
)

const BuyNavigator = createStackNavigator(
  {
    Buy
  },
  {
    defaultNavigationOptions: MenuNavigationOptions
  }
)

const MenuNavigator = createBottomTabNavigator(
  {
    Overview: OverviewNavigator,
    Buy: BuyNavigator
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
