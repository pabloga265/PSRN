import React from 'react'
import { View, Text, Button } from 'react-native'
import { observer } from 'mobx-react/native'
import hunterActions from '../utils/utilHunters'
import { DKGContainer, DKGNrmText, DKGRadialMenu, DKGWarText, DKGErrText, DKGSccText } from '../components/components'

@observer
export default class HuntersScreen extends React.Component {
  constructor (props) {
    super(props)
    this.listHunters = this.listHunters.bind(this)
    this.store = this.props.screenProps.store
    this.state = {
      hunters: this.store.getHunters
    }
  }

  render () {
    return (
      <DKGContainer>
        <Text>Hunter Screen</Text>
        {this.listHunters()}
        <Button
          title='Procreate'
          onPress={() => this.store.addHunter(hunterActions.procreate(this.state.hunters[0], this.state.hunters[1]))}
        />
      </DKGContainer>
    )
  }

  listHunters () {
    return this.state.hunters && this.state.hunters.map( hunter => <View key={hunter.id}><Text>{hunter.name}</Text></View>)
  }
}
