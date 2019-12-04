import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import RestaurantsList from './screens/RestaurantsList';
import Home from './screens/Home';
import Detail from './screens/Details'


const AppNavigation = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home"
      }
    },
    RestaurantsList: {
      screen: RestaurantsList,
      navigationOptions: {
        title: "Restaurants List"
      }
    },
    Detail:{
      screen: Detail,
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitleStyle: {
        color: 'white'
      },
      headerStyle: { 
        backgroundColor: '#E4665C',
      },
      headerTintColor: 'white'
    }
  }
)

export default createAppContainer(AppNavigation)
