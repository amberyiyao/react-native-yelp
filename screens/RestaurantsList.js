import React, { Component } from 'react'
import {FlatList } from 'react-native'
import { Container, Text, ListItem, Button, Body, Right, Icon, Spinner} from 'native-base';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

export default class RestaurantsList extends Component {

  state = {
    restaurants: [],
    isReady: false,
    location: {
      latitude: 45.3496711,
      longitude: -75.7569551
    }
  }

  componentDidMount(){
    this.setState({restaurants: this.props.navigation.state.params.restaurants})
    Font.loadAsync({
        Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font
    }).then(() => this.setState({ isReady: true }))
  }

  render() {

    if(!this.state.isReady) return <Spinner/>

    return (
        <Container>
          <FlatList 
            data={this.state.restaurants}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
              <ListItem>
                <Body>
                  <Text>{item.name}</Text>
                  <Text>{(item.distance/1000).toFixed(2) + " km"}</Text>
                </Body>
                <Right>
                  <Button transparent onPress={()=>{
                      console.log('To Detail Page')
                  }}>
                    <Icon name="arrow-forward"/>
                  </Button>
                </Right>
              </ListItem>
            )}
          />
        </Container>
    )
}
}