import React from 'react'
import AppNavigation from './ui/navigation/AppNavigation'
import I18n from 'react-native-i18n'
import en from './i18n/locales/en'

I18n.fallbacks = true

I18n.translations = {
  en
}

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <AppNavigation />
  }
}
