import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import SecondScreen from './src/screens/SecondScreen'
import HuntersScreen from './src/screens/HuntersScreen'
import ModalScreen from './src/screens/ModalScreen'
import { BackHandler } from 'react-native'
import { observer } from 'mobx-react'
import generalState from './src/state/AppState'
import StackRoutes from './src/routes'
import Icon from 'react-native-vector-icons/FontAwesome'

generalState.init()

HomeScreen.navigationOptions = {
  tabBarLabel: '',
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name={focused ? 'home' : 'home'}
      size={24}
      style={{ color: tintColor }}
    />
  )
}

SecondScreen.navigationOptions = {
  tabBarLabel: '',
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name={focused ? 'flask' : 'flask'}
      size={24}
      style={{ color: tintColor }}
    />
  )
}

HuntersScreen.navigationOptions = {
  tabBarLabel: '',
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name={focused ? 'group' : 'group'}
      size={24}
      style={{ color: tintColor }}
    />
  )
}

const DrawerStack = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Second: {
    screen: SecondScreen
  },
  Hunters: {
    screen: HuntersScreen
  }
},
{
  headerMode: 'none',
  lazy: true,
  swipeEnabled: true,
  tabBarOptions: {
    inactiveTintColor: '#91AEC1',
    activeTintColor: '#274156',
    showLabel: false,
    showIcon: true,
    indicatorStyle: { opacity: 0 },
    style: { backgroundColor: '#D0CCD0', borderWidth: 0, borderColor: 'transparent' }
  }
})

const RootStack = observer(createSwitchNavigator(
  {
    Main: {
      screen: DrawerStack
    },
    Modal: {
      screen: ModalScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0
      }
    })
  }
))

const stackRoutes = Object.assign({}, {root: RootStack}, StackRoutes)
const stackNavigatorConfig = {headerMode: 'none'}
const StackNavigator = createStackNavigator(stackRoutes, stackNavigatorConfig)

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
