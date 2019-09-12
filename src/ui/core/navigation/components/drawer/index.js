import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import LinearGradient from 'react-native-linear-gradient'
import AppConstants from '@src/data/constants/AppConstants'
import { faTimes, faBars } from '@fortawesome/pro-light-svg-icons'

export function DrawerContainer (props) {
  return (
    <View style={styles.outerDrawerContainer}>
      <LinearGradient
        locations={[0, 1.0]}
        colors={['#0F2748', '#293E63']}
        style={[styles.drawerContainerOverlay]}
      >
        <View style={styles.drawerContainer}>{props.children}</View>
      </LinearGradient>
    </View>
  )
}

export function DrawerExit (props) {
  return (
    <View style={styles.drawerExit}>
      <TouchableOpacity {...props}>
        <FontAwesomeIcon
          size={36}
          icon={faTimes}
          color='#ffffff'
          type='light'
        />
      </TouchableOpacity>
    </View>
  )
}

export function DrawerBorder (props) {
  return <View style={styles.drawerBorder} />
}

export function DrawerEntryItem (props) {
  return (
    <View style={styles.drawerEntry}>
      <TouchableOpacity {...props}>
        <FontAwesomeIcon
          size={22}
          icon={faTimes}
          color={AppConstants.DRAWER_ICON_COLOR}
        />
      </TouchableOpacity>
      <TouchableOpacity {...props}>
        <Text style={styles.drawerText}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  )
}

export function DrawerEntryVersionItem (props) {
  return (
    <View style={styles.drawerVersionEntry}>
      <TouchableOpacity {...props}>
        <FontAwesomeIcon
          size={22}
          icon={faTimes}
          color={AppConstants.DRAWER_ICON_COLOR}
        />
      </TouchableOpacity>
      <TouchableOpacity {...props}>
        <Text style={styles.drawerText}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  )
}

export const DrawerHeader = props => {
  return (
    <View style={styles.drawerHeaderContainer}>
      <FontAwesomeIcon
        icon={faBars}
        size={32}
        color='#fff'
        containerStyle={styles.drawerButton}
        onPress={() => {
          props.navigation.openDrawer()
        }}
      />
      <Text style={styles.drawerHeaderText}>{props.children}</Text>
    </View>
  )
}

export const DrawerHeaderForOverview = props => {
  return (
    <View style={styles.drawerHeaderContainer}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.openDrawer()
        }}
      >
        <FontAwesomeIcon
          icon={faBars}
          size={32}
          color='#fff'
          containerStyle={styles.drawerButton}
        />
      </TouchableOpacity>
      <Text style={styles.drawerHeaderTextForOverview}>{props.children}</Text>
    </View>
  )
}
