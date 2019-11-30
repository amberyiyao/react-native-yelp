import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import RestaurantsList from './screens/RestaurantsList';
import Home from './screens/Home';


const AppNavigation = createStackNavigator(
  {
    Home: { 
      screen: Home ,
    },
    RestaurantsList: { screen: RestaurantsList }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitleStyle: {
        color: 'white'
      },
      headerStyle: { 
        backgroundColor: 'hsl(120, 30%, 45%)',
      }
    }
  }
)

export default createAppContainer(AppNavigation)
