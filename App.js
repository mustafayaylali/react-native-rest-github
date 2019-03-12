import { createStackNavigator, createAppContainer } from 'react-navigation';


import DashboardComponent from './src/components/DashboardComponent';
import SearchComponent from './src/components/SearchComponent';

const AppNavigator = createStackNavigator({
  Home: { 
    screen: SearchComponent,
    //path: 'people/:name',
    navigationOptions: ({ navigation }) => ({
      title: 'Anasayfa',
      headerStyle: {backgroundColor:'gray'},
      headerTintColor: 'white'
    }),
  },
  Result: { screen: DashboardComponent },
});

export default createAppContainer(AppNavigator);