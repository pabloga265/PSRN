import React from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { DKGContainer } from '../components/components'
import DKGFloorListItem from '../components/floorListItem'
import style from '../style/generalStyle'

export default class DetailsScreen extends React.Component {
  constructor (props) {
    super(props)

    this.focusFloor = this.focusFloor.bind(this)

    this.state = {
      selectedFloor: 10
    }
  }

  render () {
    return (
      <DKGContainer>
        <View style={style.leftLine} />
        <ScrollView
          style={style.scrollContainer}
          contentContainerStyle={style.contentContainerStyle}
          ref={view => this._scrollView = view}
        >
          {this.paintFloors(this.visibleFloors)}
        </ScrollView>
      </DKGContainer>
    )
  }

  focusFloor (n) {
    this.setState({selectedFloor: n})
    this._scrollView.scrollTo({y: (10 - n) * 60, animated: true})
  }

  paintFloors (visibleFloors) {
    return this.state.floors && this.state.floors.map(floor => floor.visible &&
      <TouchableOpacity style={{width: '100%'}} onPress={() => this.focusFloor(floor.number)}>
        <DKGFloorListItem itemFocus={this.state.selectedFloor === floor.number} floorNumber={floor.number} />
      </TouchableOpacity>)
  }
}
