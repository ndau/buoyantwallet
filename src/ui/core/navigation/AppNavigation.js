import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { Text } from 'react-native'
import Overview from '@src/ui/screens/Overview'
import Buy from '@src/ui/screens/Buy'
import SendReceive from '@src/ui/screens/SendReceive'
import Todo from '@src/ui/screens/Todo'
import Authentication from '@src/ui/screens/Authentication'
import AuthLoading from './AuthLoading'
import I18n from '@src/i18n'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faHome,
  faRetweet,
  faUsdSquare,
  faEllipsisV,
  faCalendarCheck
} from '@fortawesome/pro-light-svg-icons'
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer'
import More from '@src/ui/screens/More'
import AppDrawer from './AppDrawer'

const getNavigationOptions = (title, icon, iconSize, fontSize) => {
  return {
    tabBarIcon: ({ focused }) => {
      return (
        <FontAwesomeIcon
          icon={icon}
          size={iconSize}
          style={{
            color: focused ? '#F99D1C' : 'black',
            fontColor: '#0A1724'
          }}
        />
      )
    },
    tabBarLabel: ({ focused }) => {
      return (
        <Text
          style={{
            color: '#0A1724',
            fontSize: fontSize,
            fontWeight: focused ? 'bold' : 'normal',
            fontFamily: focused ? 'opensans-bold' : 'opensans-regular',
            textAlign: 'center'
          }}
        >
          {title}
        </Text>
      )
    },
    title: 'WORKS'
  }
}

// Create a bottom tab with the application stacks
// the headers are invisible. If you want to use those
// for navigation back and forth you can enable these for
// that particular screen
const AppStack = createBottomTabNavigator(
  {
    Overview: createDrawerNavigator(
      {
        screen: createStackNavigator(
          {
            Overview
          },
          {
            headerMode: 'float'
          }
        )
      },
      {
        contentComponent: AppDrawer,
        drawerPosition: 'right',
        navigationOptions: getNavigationOptions(
          I18n.t('overview'),
          faHome,
          28,
          10
        )
      }
    ),
    Buy: createDrawerNavigator(
      {
        screen: createStackNavigator(
          {
            Buy
          },
          {
            headerMode: 'float'
          }
        )
      },
      {
        contentComponent: AppDrawer,
        drawerPosition: 'right',
        navigationOptions: getNavigationOptions(
          I18n.t('buy'),
          faUsdSquare,
          24,
          10
        )
      }
    ),
    SendReceive: createDrawerNavigator(
      {
        screen: createStackNavigator(
          {
            SendReceive
          },
          {
            headerMode: 'float'
          }
        )
      },
      {
        contentComponent: AppDrawer,
        drawerPosition: 'right',
        navigationOptions: getNavigationOptions(
          I18n.t('sendreceive'),
          faRetweet,
          32,
          10
        )
      }
    ),
    Todo: createDrawerNavigator(
      {
        screen: createStackNavigator(
          {
            Todo
          },
          {
            headerMode: 'float'
          }
        )
      },
      {
        contentComponent: AppDrawer,
        drawerPosition: 'right',
        navigationOptions: getNavigationOptions(
          I18n.t('todo'),
          faCalendarCheck,
          24,
          10
        )
      }
    ),
    More: createDrawerNavigator(
      {
        screen: createStackNavigator(
          {
            More
          },
          {
            headerMode: 'float'
          }
        )
      },
      {
        contentComponent: AppDrawer,
        drawerPosition: 'right',
        navigationOptions: ({ navigation }) => ({
          ...getNavigationOptions(I18n.t('more'), faEllipsisV, 36, 10),
          tabBarOnPress: () => {
            navigation.dispatch(DrawerActions.toggleDrawer())
          }
        })
      }
    )
  },
  {
    tabBarOptions: {
      activeTintColor: '#0A1724',
      labelStyle: {
        fontFamily: 'opensans-regular',
        fontSize: 10
      },
      style: {
        borderTopWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 1
      }
    }
  }
)

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
