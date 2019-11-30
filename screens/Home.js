import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import { Container, Text, Button, Spinner} from 'native-base';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

export default class RestaurantsList extends Component {

  state = {
    restaurants: [],
    isReady: false,
    location: {
      latitude: null,
      longitude: null
    }
  }

  getLocation = () =>{
        const opts = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 1000 * 60 * 60 * 24,
        };
        navigator.geolocation.getCurrentPosition((pos) => {
            console.log('get geolocation!')
            const location = {
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            }
            this.setState({location})
            this.loadData()
        }, (err) => {
            console.log(err)
        }, opts);
  }

  loadData = () => {
    this.setState({isReady: false})
    const APIKey = 'wns1PtfYaQL_3BvYbPmIPeNLVNmmf6dMuOzCxu4xFnwh-v-a-RWBHGkMMoV_YHXUgrA3E2zFy_b52V_5Bv7PbLJsSnKOHsIKPHJXH_asQQ2r0w0jevdRq6p_GF3hXXYx'
    let url = `https://api.yelp.com/v3/businesses/search?term=restaurant&latitude=${this.state.location.latitude}&longitude=${this.state.location.longitude}&sort_by=distance`;

    const headers = new Headers();
    headers.append('Content-Type', 'application/json;charset=UTF-8')
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
        this.props.navigation.navigate('RestaurantsList',{ restaurants: this.state.restaurants.businesses})
        this.setState({isReady: true})
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

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        button: {
          backgroundColor: '#E4665C'
        }
      });

    if(!this.state.isReady) return (
        <View style={styles.container}>
            <Spinner/>
        </View>
    )

    return (
        <Container>
          <View style={styles.container}>
            <Button style={styles.button} rounded info onPress={this.getLocation}>
                <Text>Load Restaurants</Text>
            </Button>
          </View>
        </Container>
    )
  }
}

