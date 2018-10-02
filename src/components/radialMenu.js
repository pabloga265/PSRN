import React, { Component, PureComponent } from 'React'
import { View, PanResponder, Animated } from 'react-native'
import style from '../style/generalStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'

class DKGRadialMenu extends PureComponent {
  constructor (props) {
    super(props)
    this.mapRef = []
    this.optionCoords = []
    this.isDropArea = this.isDropArea.bind(this)
    this.state = {
      open: false,
      pan: new Animated.ValueXY(),
      color: false,
      dropAreaValues: null,
      opacity: new Animated.Value(0)
    }
  }

  isDropArea (gesture) {
    let a = this.optionCoords.map((c) => {
      let xx = c[0] + 12.5 - gesture.moveX
      let yy = c[1] + 12.5 - gesture.moveY
      return Math.sqrt(xx * xx + yy * yy)
    })
    let chosen = a.indexOf(Math.min(...a))
    return a[chosen] < 70 && chosen
  }

  componentWillMount () {
    this._val = { x: 0, y: 0 }
    this.state.pan.addListener((value) => this._val = value)
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderMove: (e, gesture) => {
        this.setState({ color: this.isDropArea(gesture) })
        Animated.event([
          null, { dx: this.state.pan.x, dy: this.state.pan.y }
        ])(e, gesture)
      },
      onPanResponderGrant: (e, gesture) => {
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 100
        }).start(() => this.setState({open: true}))
      },
      onPanResponderRelease: (e, gesture) => {
        this.setState({
          open: false
        })
        Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 100
        })
        if (this.isDropArea(gesture)) {
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 },
            friction: 5
          }).start()
        } else {
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 },
            friction: 5
          }).start()
        }
      }
    })
  }

  render () {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }

    return <View style={style.radialMenu_Container}>
      <View style={style.radialMenu_Choices}>
        <Animated.View
          ref={ref => (this.mapRef[0] = ref)}
          onLayout={event => {
            let layout = event.nativeEvent.layout
            this.optionCoords[0] = [layout.x, layout.y]
          }}
          style={[style.radialMenu_Choice, {bottom: '20%', opacity: this.state.opacity}]} >
          <Icon
            name={'dot-circle'}
            size={25}
            style={this.state.color === 0 ? style.radialMenu_Icon_Active : style.radialMenu_Icon}
          />
        </Animated.View>
        <Animated.View
          ref={ref => (this.mapRef[1] = ref)}
          onLayout={event => {
            let layout = event.nativeEvent.layout
            this.optionCoords[1] = [layout.x, layout.y]
          }}
          style={[style.radialMenu_Choice, {bottom: '35%', opacity: this.state.opacity}]} >
          <Icon
            name={'dot-circle'}
            size={25}
            style={this.state.color === 1 ? style.radialMenu_Icon_Active : style.radialMenu_Icon}
          />
        </Animated.View>
        <Animated.View
          ref={ref => (this.mapRef[2] = ref)}
          onLayout={event => {
            let layout = event.nativeEvent.layout
            this.optionCoords[2] = [layout.x, layout.y]
          }}
          style={[style.radialMenu_Choice, {bottom: '35%', opacity: this.state.opacity}]} >
          <Icon
            name={'dot-circle'}
            size={25}
            style={this.state.color === 2 ? style.radialMenu_Icon_Active : style.radialMenu_Icon}
          />
        </Animated.View>
        <Animated.View
          ref={ref => (this.mapRef[3] = ref)}
          onLayout={event => {
            let layout = event.nativeEvent.layout
            this.optionCoords[3] = [layout.x, layout.y]
          }}
          style={[style.radialMenu_Choice, {bottom: '20%', opacity: this.state.opacity}]} >
          <Icon
            name={'dot-circle'}
            size={25}
            style={this.state.color === 3 ? style.radialMenu_Icon_Active : style.radialMenu_Icon}
          />
        </Animated.View>
      </View>
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[panStyle, style.radialMenu]}>
        <Icon
          name={this.state.open ? 'circle' : 'dot-circle'}
          size={50}
          style={style.radialMenu_Icon}
        />
      </Animated.View>
    </View>
  }
}

export default DKGRadialMenu
