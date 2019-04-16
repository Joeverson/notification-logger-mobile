import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/SplashScreenStyles'

export default class LaunchScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('AppsScreen')
    }, 1000)
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.centered}>
          <Image source={Images.logo} style={styles.logo} />
        </View>
      </View>
    )
  }
}
