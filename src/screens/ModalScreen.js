import React from 'react'
import { View, Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

class ModalScreen extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>CONTENT</Text>
        <Icon name="rocket" size={30} color="#900" />
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title='Dismiss'
        />
      </View>
    )
  }
}

export default ModalScreen
