import React, { Component } from 'react'
import {FlatList, View, StyleSheet } from 'react-native'
import { Container, Text, ListItem, Button, Body, Right, Icon, Thumbnail, Left} from 'native-base';

export default class RestaurantsList extends Component {

  state = {
    restaurants: []
  }

  componentDidMount(){
    let restaurants = this.props.navigation.state.params.restaurants.map((item)=>{
      if(!item.image_url){
        item.image_url = 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6'
      }
      return item
    }) 
    this.setState({restaurants: restaurants})
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
        color: '#E4665C'
      },
      p2:{
        fontSize: 12,
        color: '#888882'
      }
    });

    return (
        <Container>
          <FlatList 
            data={this.state.restaurants}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
              <ListItem onPress={()=> {this.props.navigation.navigate('Detail', { restaurant: item})}} thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: item.image_url }} />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text style={styles.p2}>{(item.distance/1000).toFixed(2) + " km"}</Text>
                </Body>
                <Right>
                  <Button onPress={()=> {this.props.navigation.navigate('Detail', { restaurant: item})}} transparent >
                    <Icon style={styles.button} name="arrow-forward"/>
                  </Button>
                </Right>
              </ListItem>
            ) }
          />
        </Container>
    )
}
}