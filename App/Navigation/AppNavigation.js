import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'
import AppsScreen from '../Containers/AppsScreen'
import SplashScreen from '../Containers/SplashScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const AuthStack = createStackNavigator({
  AppsScreen: {
    screen: AppsScreen
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'AppsScreen'
})

export default createAppContainer(createSwitchNavigator({
  AuthStack,
  SplashStack: createStackNavigator({
    SplashScreen: {
      screen: SplashScreen
    }
  }, {
    headerMode: 'none',
  })
},
{
  initialRouteName: 'SplashStack',
}))
