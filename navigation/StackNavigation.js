import {View, Text} from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import WebScreen from '../screens/WebScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PdfScreen from '../screens/PdfScreen';
import WeatherScreen from '../screens/Weather';
import Mapview from '../screens/Mapview';





function StackNavigation(){
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
       <Stack.Navigator initialRouteName='Home'> 
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Web' component={WebScreen}/>
        <Stack.Screen name='pdf' component={PdfScreen}/>
        <Stack.Screen name='weather' component={WeatherScreen}/>
        <Stack.Screen name='Map' component={Mapview}/>
       </Stack.Navigator>
       </NavigationContainer>
    )
}
export default StackNavigation;