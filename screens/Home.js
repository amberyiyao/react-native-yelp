import React, { Component } from 'react'
import { Container, Text, Button, Spinner} from 'native-base';
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

  loadData = () => {
    this.setState({isReady: false})
    const APIKey = 'wns1PtfYaQL_3BvYbPmIPeNLVNmmf6dMuOzCxu4xFnwh-v-a-RWBHGkMMoV_YHXUgrA3E2zFy_b52V_5Bv7PbLJsSnKOHsIKPHJXH_asQQ2r0w0jevdRq6p_GF3hXXYx'
    let url = `https://api.yelp.com/v3/businesses/search?term=restaurant&latitude=${this.state.location.latitude}&longitude=${this.state.location.longitude}&sort_by=distance`;

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
    .then(()=>{
        this.setState({isReady: true})
        this.props.navigation.navigate('RestaurantsList',{ restaurants: this.state.restaurants.businesses})
    })
    .catch(e => {
      console.log(e);
    });
  }

  componentDidMount(){
    
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
          <Button rounded info onPress={this.loadData}>
              <Text>Load Restaurants</Text>
          </Button>
        </Container>
    )
  }
}