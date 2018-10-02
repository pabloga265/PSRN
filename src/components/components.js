import React, { Component } from 'React'
import { View, Text, ScrollView} from 'react-native'
import style from '../style/generalStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'

/* STANDARD COMPONENTS */

export class DKGContainer extends Component {
  render () {
    return <View style={style.container} {...this.props}>{this.props.children}</View>
  }
}

export class DKGScrollContainer extends Component {
  render () {
    return <ScrollView
      style={style.scrollContainer}
      contentContainerStyle={style.contentContainerStyle}
      {...this.props}
    >
      {this.props.children}
    </ScrollView>
  }
}
// DKGButton
// DKGScroll
// DKGList

/* STANDARD TEXT */
export class DKGNrmText extends Component {
  render () {
    return <Text {...this.props} style={[style.nrmText, this.props.style]} >{this.props.children}</Text>
  }
}

export class DKGWarText extends Component {
  render () {
    return <Text {...this.props} style={[style.warText, this.props.style]} >{this.props.children}</Text>
  }
}

export class DKGErrText extends Component {
  render () {
    return <Text {...this.props} style={[style.ErrText, this.props.style]} >{this.props.children}</Text>
  }
}

export class DKGSccText extends Component {
  render () {
    return <Text {...this.props} style={[style.sccText, this.props.style]} >{this.props.children}</Text>
  }
}

export class DKGNrmTextBG extends Component {
  render () {
    return <Text {...this.props} style={[style.nrmTextBG, this.props.style]} >{this.props.children}</Text>
  }
}

export class DKGWarTextBG extends Component {
  render () {
    return <Text {...this.props} style={[style.warTextBG, this.props.style]} >{this.props.children}</Text>
  }
}

export class DKGErrTextBG extends Component {
  render () {
    return <Text {...this.props} style={[style.errTextBG, this.props.style]} >{this.props.children}</Text>
  }
}

export class DKGSccTextBG extends Component {
  render () {
    return <Text {...this.props} style={[style.sccTextBG, this.props.style]} >{this.props.children}</Text>
  }
}
