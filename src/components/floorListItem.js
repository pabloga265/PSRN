import React, { Component } from 'React'
import { View, TouchableHighlight } from 'react-native'
import style from '../style/generalStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { DKGNrmText } from '../components/components'
import { observer } from 'mobx-react/native'
import huntActions from '../utils/utilHunt'

export default class DKGFloorListItem extends Component {
  constructor (props) {
    super(props)
debugger
let map = huntActions.getMap(1)
debugger

    this.floor = this.props.floor || this.props.floorNumber
  }

  render () {
    return <View style={[style.liContainer, this.props.itemFocus && style.liContainerFocus]}>
      <DKGNrmText style={[style.listContainerFloorNumber, style.smallTitle]}>
        {this.props.floorNumber}
      </DKGNrmText>
      {this.props.itemFocus &&
        <TouchableHighlight>
          <Icon name={'frog'} onPress={() => alert("asd")} style={[style.radialMenu_Icon, {color: '#737A88'}]} size={25}/>
        </TouchableHighlight>
      }
    </View>
  }
}
