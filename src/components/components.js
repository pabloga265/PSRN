import React, { Component } from 'React'
import { View, Text, PanResponder, Animated } from 'react-native'
import style from '../style/generalStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'

/* STANDARD COMPONENTS */

export class DKGContainer extends Component {
  render () {
    return <View style={style.container} {...this.props}>{this.props.children}</View>
  }
}

// DKGButton
// DKGScroll
// DKGList

/* STANDARD TEXT */
export class DKGNrmText extends Component {
  render () {
    return <Text style={style.nrmText} {...this.props}>{this.props.children}</Text>
  }
}

export class DKGWarText extends Component {
  render () {
    return <Text style={style.warText} {...this.props}>{this.props.children}</Text>
  }
}

export class DKGErrText extends Component {
  render () {
    return <Text style={style.ErrText} {...this.props}>{this.props.children}</Text>
  }
}

export class DKGSccText extends Component {
  render () {
    return <Text style={style.sccText} {...this.props}>{this.props.children}</Text>
  }
}

// DKGNrmTextWithBackground
// DKGWarTextWithBackground
// DKGErrTextWithBackground
// DKGSccTextWithBackground

/* RADIAL MENU */
export class DKGRadialMenu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false,
      pan: new Animated.ValueXY()
    }
  }

  componentWillMount () {
    this._val = { x: 0, y: 0 }
    this.state.pan.addListener((value) => this._val = value)

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),
      onPanResponderGrant: (e, gesture) => { this.setState({open: true}) },
      onPanResponderRelease: (e, gesture) => {
        this.setState({open: false})
        Animated.spring(this.state.pan, {
          toValue: { x: 0, y: 0 },
          friction: 5
        }).start()
      }
    })
  }

  render () {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }

    return <View style={style.radialMenu_Container}>
      <Animated.View {...this.panResponder.panHandlers} style={[panStyle, style.radialMenu]} {...this.props}>
        <Icon
          name={this.state.open ? 'circle' : 'dot-circle'}
          size={50}
          style={style.radialMenu_Icon}
        />
      </Animated.View>
    </View>
  }
}
