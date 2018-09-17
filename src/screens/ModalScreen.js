import React from 'react'
import { View, Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { DKGContainer } from '../components/components'

class ModalScreen extends React.Component {
  render () {
    return (
      <DKGContainer>
        <Text>CONTENT</Text>
        <Icon name="rocket" size={30} color="#900" />
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title='Dismiss'
        />
      </DKGContainer>
    )
  }
}

export default ModalScreen
