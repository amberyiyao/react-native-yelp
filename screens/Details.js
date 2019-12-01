import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { Container, Text, Content, Card, CardItem, Button, Body, Right, Icon, Spinner, Thumbnail, Left} from 'native-base';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { Header } from 'react-navigation-stack';

export default class Details extends Component {
    static navigationOptions = ({ navigation }) => {
        return{
            title: navigation.state.params.restaurant.name
        }
    }

    render() {
        const restaurant = this.props.navigation.state.params.restaurant

        const styles = StyleSheet.create({
            detailsCtn: {
                display:"flex", 
                flexDirection:"column"
            },
            button: {
              color: '#E4665C'
            },
            p2:{
              fontSize: 12,
              color: '#888882'
            }
          })

        return (
            <Container>
                <Content>
                    <Card style={{flex: 0}}>
                    <CardItem>
                    <Left>
                    <Thumbnail source={{uri: "../assets/icon.png"}} />
                        <Body>
                            <Text>{restaurant.name}</Text>
                            <Text note>{restaurant.phone}</Text>
                        </Body>
                    </Left>
                    </CardItem>
                    <CardItem cardBody>
              <Image source={{uri: restaurant.image_url}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left style={styles.detailsCtn}>
                  <Icon active name="map" />
                  <Text>{ (restaurant.distance/1000).toFixed(2) + " km"}</Text>
              </Left>
              <Left style={styles.detailsCtn}>
                  <Icon active name="wallet" />
                  <Text>{restaurant.price}</Text>
              </Left>
              <Left style={styles.detailsCtn}>
                <Icon active name="star" />
                <Text>{restaurant.rating}</Text>
              </Left>
            </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}
