import React from 'react'
import { Menu } from './MenuComponent'

export class MenuContainer extends React.Component {
  navigationKey = 'MenuContainer'

  onTabSelect = index => {
    const { navigation } = this.props
    const { [index]: selectedRoute } = navigation.state.routes

    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: selectedRoute.routeName
    })
  }

  render () {
    return (
      <Menu
        selectedIndex={this.props.navigation.state.index}
        onTabSelect={this.onTabSelect}
      />
    )
  }
}
