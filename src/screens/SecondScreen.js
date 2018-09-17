import React from 'react'
import { View, Text, Button } from 'react-native'
import { DKGContainer } from '../components/components'

export default class DetailsScreen extends React.Component {
  render () {
    return (
      <DKGContainer>
        <Text>Details Screen</Text>
        <Button
          title='Open modal'
          onPress={() => this.props.navigation.navigate('Modal')}
        />
        <Button
          title='Go to Details'
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </DKGContainer>
    )
  }
}
