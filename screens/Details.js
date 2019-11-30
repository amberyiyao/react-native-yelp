import React, { Component } from 'react'
import {FlatList, View, StyleSheet } from 'react-native'
import { Container, Text, ListItem, Button, Body, Right, Icon, Spinner, Thumbnail, Left} from 'native-base';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import NoImage from '../assets/image-regular.svg'

export default class Details extends Component {
    render() {
        return (
            <Container>
                <View>
                    <Text>Name</Text>
                    <Text>Phone</Text>
                    <Text>Distance</Text>
                    <Text>Price</Text>
                    <Text>Rating</Text>
                </View>
            </Container>
        )
    }
}
