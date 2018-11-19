import React from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { DKGContainer } from '../components/components'
import DKGFloorListItem from '../components/floorListItem'
import style from '../style/generalStyle'
import { observer } from 'mobx-react/native'
import floors from '../models/floors'

@observer
export default class DetailsScreen extends React.Component {
  constructor (props) {
    super(props)

    this.focusFloor = this.focusFloor.bind(this)
    this.store = this.props.screenProps.store
    this.state = {    
      floorReached: 10,//this.store.getFloor,
      selectedFloor: 0
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
    this._scrollView.scrollTo({y: (n * 52) - 35, animated: true})
  }

  paintFloors (visibleFloors) {
    return floors && floors.map(floor => parseInt(floor.level) <= this.state.floorReached &&
      <TouchableOpacity key={floor.level} style={{width: '100%'}} onPress={() => this.focusFloor(parseInt(floor.level))}>
        <DKGFloorListItem itemFocus={this.state.selectedFloor === parseInt(floor.level)} floorNumber={parseInt(floor.level)} />
      </TouchableOpacity>)
  }
}
