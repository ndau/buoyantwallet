import React, { Component } from 'react'
import Spinner from 'react-native-loading-spinner-overlay'

class WaitSpinner extends Component {
  render () {
    return (
      <Spinner
        visible={this.props.spinner}
        textContent={`${this.props.label}...`}
        textStyle={{
          color: '#ffffff',
          fontSize: 20,
          fontFamily: 'TitilliumWeb-Light'
        }}
        animation='fade'
        overlayColor='rgba(0, 0, 0, 0.7)'
      />
    )
  }
}

export default WaitSpinner
