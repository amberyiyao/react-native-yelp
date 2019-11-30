import React, { Component } from 'react'
import {FlatList } from 'react-native'
import { Container, Text, ListItem, Button, Body, Right, Icon} from 'native-base';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

export default class MovieList extends Component {

  state = {
    restaurants: [],
    isReady: false
  }

  loadData = () => {

    const APIKey = 'wns1PtfYaQL_3BvYbPmIPeNLVNmmf6dMuOzCxu4xFnwh-v-a-RWBHGkMMoV_YHXUgrA3E2zFy_b52V_5Bv7PbLJsSnKOHsIKPHJXH_asQQ2r0w0jevdRq6p_GF3hXXYx'

    const headers = new Headers();
    //headers.append('Content-Type', 'application/json;charset=UTF-8');
    headers.append('Authorization', 'Bearer ' + APIKey)

    let url = `https://api.yelp.com/v3/businesses/search`;

    let req = new Request(url, {
        headers: headers,
        method: 'GET'
    });

    fetch(req)
    .then( res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch( console.error )
}

  componentDidMount(){
    this.loadData()
  }

  render() {

    // if(!this.state.isReady) return <AppLoading/>

    return (
        <Container>
        </Container>
    )
}
}