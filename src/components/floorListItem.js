import React, { Component } from 'React'
import { View, TouchableHighlight } from 'react-native'
import style from '../style/generalStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { DKGNrmText } from '../components/components'
import monsterBG from '../../resources/images/monsterBG.png'

export default class DKGFloorListItem extends Component {
  constructor (props) {
    super(props)

    this.floor = this.props.floor || this.props.floorNumber
  }

  render () {
    return <View style={[style.liContainer, this.props.itemFocus && style.liContainerFocus]}>
      <DKGNrmText style={[style.listContainerFloorNumber, style.smallTitle]}>
        {this.props.floorNumber}
      </DKGNrmText>
    </View>
  }
}
