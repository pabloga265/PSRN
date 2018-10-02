import React, { Component } from 'React'
import { View, Text, PanResponder, Animated } from 'react-native'
import style from '../style/generalStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'

@observer
export class DKGMap extends Component {
  render () {
    return <View style={style.container} {...this.props}>{this.props.children}</View>
  }
}
