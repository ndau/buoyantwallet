import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { Text } from 'react-native'
import AppAccountOverview from '@src/ui/screens/AppAccountOverview'
import AppWalletOverview from '@src/ui/screens/AppWalletOverview'
import AppSend from '@src/ui/screens/AppSend'
import AppReceive from '@src/ui/screens/AppReceive'
import AppAuthentication from '@src/ui/screens/AppAuthentication'
import AuthLoading from './AuthLoading'
import AppContactSupport from '@src/ui/screens/AppContactSupport'
import SetupGetRecovery from '@src/ui/screens/SetupGetRecovery'
import SetupConfirmRecovery from '@src/ui/screens/SetupConfirmRecovery'
import SetupPassword from '@src/ui/screens/SetupPassword'
import SetupWalletName from '@src/ui/screens/SetupWalletName'
import SetupTermsAndConditions from '@src/ui/screens/SetupTermsAndConditions'
import SetupWelcome from '@src/ui/screens/SetupWelcome'
import SetupOnboardingType from '@src/ui/screens/SetupOnboardingType'
import SetupPrepareCreateRecovery from '@src/ui/screens/SetupPrepareCreateRecovery'
import SetupCreateRecovery from '@src/ui/screens/SetupCreateRecovery'
import SetupVerifyRecovery from '@src/ui/screens/SetupVerifyRecovery'
import SetupVerifyConfirmRecovery from '@src/ui/screens/SetupVerifyConfirmRecovery'
import I18n from '@src/i18n'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faHome,
  faArrowAltSquareUp,
  faArrowAltSquareDown,
  faEllipsisV
} from '@fortawesome/pro-light-svg-icons'
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer'
import More from '@src/ui/screens/More'
import AppDrawer from './AppDrawer'

// Helper method to return navigation options that will be
// used for most screens.
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
    }
  }
}

// Create a bottom tab with the application stacks
// the headers are invisible. If you want to use those
// for navigation back and forth you can enable these for
// that particular screen
const HomeStack = createBottomTabNavigator(
  {
    Overview: createDrawerNavigator(
      {
        screen: createStackNavigator(
          {
            AppWalletOverview,
            AppAccountOverview
          },
          {
            headerMode: 'float',
            headerLayoutPreset: 'center'
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
    Send: createDrawerNavigator(
      {
        screen: createStackNavigator(
          {
            AppSend
          },
          {
            headerMode: 'float',
            headerLayoutPreset: 'center'
          }
        )
      },
      {
        contentComponent: AppDrawer,
        drawerPosition: 'right',
        navigationOptions: getNavigationOptions(
          I18n.t('send'),
          faArrowAltSquareUp,
          26,
          10
        )
      }
    ),
    Receive: createDrawerNavigator(
      {
        screen: createStackNavigator(
          {
            AppReceive
          },
          {
            headerMode: 'float',
            headerLayoutPreset: 'center'
          }
        )
      },
      {
        contentComponent: AppDrawer,
        drawerPosition: 'right',
        navigationOptions: getNavigationOptions(
          I18n.t('receive'),
          faArrowAltSquareDown,
          26,
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
            headerMode: 'float',
            headerLayoutPreset: 'center'
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
        elevation: 20
      }
    }
  }
)

// Auth is a separate stack with no header and no bottom menu
const AuthStack = createStackNavigator(
  {
    AppAuthentication
  },
  { headerMode: 'float', headerLayoutPreset: 'center' }
)

const SetupStack = createStackNavigator(
  {
    SetupOnboardingType,
    SetupGetRecovery,
    SetupConfirmRecovery,
    SetupPrepareCreateRecovery,
    SetupCreateRecovery,
    SetupVerifyRecovery,
    SetupVerifyConfirmRecovery,
    SetupPassword,
    SetupWalletName,
    SetupTermsAndConditions
  },
  { headerMode: 'float', headerLayoutPreset: 'center' }
)

const DrawerAppStack = createStackNavigator(
  {
    AppContactSupport
  },
  { headerMode: 'float', headerLayoutPreset: 'center' }
)

const WelcomeStack = createStackNavigator(
  {
    SetupWelcome
  },
  { headerMode: 'none' }
)

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: HomeStack,
    Auth: AuthStack,
    Setup: SetupStack,
    Welcome: WelcomeStack,
    DrawerAppStack: DrawerAppStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
)

export default createAppContainer(AppNavigator)
