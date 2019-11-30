import React, { Component } from 'react'
import {FlatList } from 'react-native'
import { Container, Text, ListItem, Button, Body, Right, Icon} from 'native-base';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

export default class RestaurantsList extends Component {

  state = {
    restaurants: [],
    isReady: false
  }

  loadData = () => {
    
    const APIKey = 'wns1PtfYaQL_3BvYbPmIPeNLVNmmf6dMuOzCxu4xFnwh-v-a-RWBHGkMMoV_YHXUgrA3E2zFy_b52V_5Bv7PbLJsSnKOHsIKPHJXH_asQQ2r0w0jevdRq6p_GF3hXXYx'
    let url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurant&location="New York City"`;

    const headers = new Headers();
    headers.append('Content-Type', 'application/json;charset=UTF-8')
    headers.append('Access-Control-Allow-Origin', '*')
    headers.append('Authorization', 'Bearer ' + APIKey)

    let req = new Request(url, {
        headers: headers,
        method: 'GET',
    });
    
    fetch(req)
    .then(response => response.json())
    .then(data => {
      this.setState({restaurants: data})
    })
    .catch(e => {
      console.log(e);
    });
}

  componentDidMount(){
    this.loadData()
    Font.loadAsync({
        Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font
    }).then(() => this.setState({ isReady: true }))
  }

  render() {

    // if(!this.state.isReady) return <AppLoading/>

    return (
        <Container>
          <Text>{}</Text>
        </Container>
    )
}
}