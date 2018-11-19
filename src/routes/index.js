import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import Icon5 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/FontAwesome'
import { observer } from 'mobx-react'
import HomeScreen from '../screens/HomeScreen'
import HuntScreen from '../screens/HuntScreen'
import HuntersScreen from '../screens/HuntersScreen'
import ModalScreen from '../screens/ModalScreen'
import HunterDetailScreen from '../screens/HunterDetailScreen'

const StackRoutes = {
  HunterDetail: {
    screen: HunterDetailScreen,
    path: 'hunter/:id'
  }
}

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

HuntScreen.navigationOptions = {
  tabBarLabel: '',
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon5
      name={focused ? 'crow' : 'crow'}
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
  Hunt: {
    screen: HuntScreen
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
    inactiveTintColor: '#737A88',
    activeTintColor: '#51E3C2',
    showLabel: false,
    showIcon: true,
    indicatorStyle: { opacity: 0 },
    style: { backgroundColor: '#272C38', borderWidth: 0, borderColor: 'transparent' }
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

export default StackNavigator
