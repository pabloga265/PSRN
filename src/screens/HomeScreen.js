import React from 'react'
import { View, Text, Button, TouchableHighlight, StyleSheet, TextInput } from 'react-native'
import { observer } from 'mobx-react/native'
import hunterActions from '../utils/utilHunters'

@observer
class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.store = this.props.screenProps.store

    this.state = {
      hunters: this.store.generalState.hunters
    }
  }

  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        {this.listHunters()}
        <Button
          title='Go to Details'
          onPress={() => this.props.navigation.navigate('Second')}
        />
      </View>
    )
  }

  listHunters () {
    return this.state.hunters && this.state.hunters.map( hunter => <View key={hunter.id + hunter.name}><Text>{hunter.name}</Text></View>)
  }
}

const NoList = () => (
  <View>
    <Text>No List, Add List To Get Started</Text>
  </View>
)

export default HomeScreen
