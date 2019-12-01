import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { Container, Text, Content, Card, CardItem, Button, Body, Right, Icon, Spinner, Thumbnail, Left} from 'native-base';
import AppIcon from '../assets/icon.png'

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
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
            },
            textLabel: {
                color: "#888882", 
                fontSize: 14
            },
            p2:{
              fontSize: 12,
              color: '#888882'
            }
          })

          let costs = restaurant.price
          if (!costs) {
              costs = "No info"
          }

        return (
            <Container>
                <Content>
                    <Card style={{flex: 0}}>
                    <CardItem>
                    <Left>
                    <Thumbnail source={AppIcon} />
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
              <Body style={styles.detailsCtn}>
                  <Icon active name="map" style={{color: "#E4665C"}} />
                  <Text style={styles.textLabel}>{ (restaurant.distance/1000).toFixed(2) + " km"}</Text>
              </Body>
              <Body style={styles.detailsCtn}>
                  <Icon active name="wallet" style={{color: "#E4665C"}}/>
                  <Text style={styles.textLabel}>{costs}</Text>
              </Body>
              <Body style={styles.detailsCtn}>
                <Icon active name="star" style={{color: "#E4665C"}}/>
                <Text style={styles.textLabel}>{restaurant.rating}</Text>
              </Body>
            </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}
