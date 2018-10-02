import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { DKGContainer } from '../components/components'

class mapS extends React.Component {
  render () {
    return (
      <DKGContainer>
        {this.state.map}
      </DKGContainer>
    )
  }
}

export default mapS
