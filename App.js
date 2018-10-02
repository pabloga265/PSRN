import React from 'react'
import { BackHandler } from 'react-native'
import generalState from './src/state/AppState'
import StackNavigator from './src/routes'

generalState.init()

export default class App extends React.Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', function () {
      const { dispatch, navigation, nav } = this.props
      if (nav.routes[0].index === 0 && nav.index === 0) {
        BackHandler.exitApp()
        return false
      }
      dispatch({ type: 'Navigation/BACK' })
      return true
    }.bind(this))
  }

  render () {
    return <StackNavigator screenProps={{store: generalState}} />
  }
}
