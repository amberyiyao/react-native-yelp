import React, { Component } from 'react'
import {FlatList, View, StyleSheet } from 'react-native'
import { Container, Text, ListItem, Button, Body, Right, Icon, Spinner, Thumbnail, Left} from 'native-base';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import NoImage from '../assets/image-regular.svg'

export default class Details extends Component {
    static navigationOptions = ({ navigation }) => {
        return{
            title: navigation.state.params.restaurant.name
        }
    }

    render() {
        const restaurant = this.props.navigation.state.params.restaurant
        return (
            <Container>
                <View>
                    <Text>{restaurant.name}</Text>
                    <Text>{restaurant.phone}</Text>
                    <Text>{restaurant.distance}</Text>
                    <Text>{restaurant.price}</Text>
                    <Text>{restaurant.rating}</Text>
                </View>
            </Container>
        )
    }
}
