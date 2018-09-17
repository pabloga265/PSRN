import React from 'react'
import { observer } from 'mobx-react/native'
import { DKGContainer, DKGNrmText, DKGRadialMenu, DKGWarText, DKGErrText, DKGSccText } from '../components/components'

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
        <DKGNrmText>Home Screen</DKGNrmText>
        <DKGWarText>Home Screen</DKGWarText>
        <DKGErrText>Home Screen</DKGErrText>
        <DKGSccText>Home Screen</DKGSccText>
        <DKGRadialMenu />
      </DKGContainer>
    )
  }
}

export default HomeScreen
