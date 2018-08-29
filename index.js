import { Navigation } from 'react-native-navigation'
import App from './App'

Navigation.registerComponent(`navigation.PSRN.WelcomeScreen`, () => App)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'navigation.PSRN.WelcomeScreen'
      }
    }
  })
})
