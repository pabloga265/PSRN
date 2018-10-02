import React from 'react'
import { observer } from 'mobx-react/native'
import {
  DKGContainer,
  DKGNrmText,
  DKGWarText,
  DKGErrText,
  DKGSccText,
  DKGNrmTextBG,
  DKGWarTextBG,
  DKGErrTextBG,
  DKGSccTextBG
} from '../components/components'
import DKGRadialMenu from '../components/radialMenu'

@observer
class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.store = this.props.screenProps.store

    this.state = {
      hunters: this.store.listHunters
    }
  }

  render () {
    return (
      <DKGContainer>
        <DKGNrmText>Texto normal</DKGNrmText>
        <DKGWarText>Texto warning</DKGWarText>
        <DKGErrText>Texto error</DKGErrText>
        <DKGSccText>Texto success</DKGSccText>
        <DKGNrmTextBG>Normal background</DKGNrmTextBG>
        <DKGWarTextBG>Warning background</DKGWarTextBG>
        <DKGErrTextBG>Error background</DKGErrTextBG>
        <DKGSccTextBG>Success background</DKGSccTextBG>
        <DKGRadialMenu />
      </DKGContainer>
    )
  }
}

export default HomeScreen
