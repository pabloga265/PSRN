import React from 'react'
import { View, Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { DKGContainer, DKGMap } from '../components/components'

class ModalScreen extends React.Component {
  render () {
    return (
      <DKGContainer>
        <DKGMap />
      </DKGContainer>
    )
  }
}

export default ModalScreen
