// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from '../screen/todo';
import Login from '../screen/login';
import Products from '../screen/products';
import ProductPage from '../screen/productPage';
import Signup from '../screen/signup';
import MainScreen from '../screen/mainscreen';
import AddQuestion from '../screen/addquestion';
import CustomMap from '../screen/map';
import ImagePicker from '../screen/imagePicker';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function Service() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Service Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  options={{ title: 'Overview',headerShown:false }} name="Main" component={MainScreen} />
        <Stack.Screen  options={{ title: 'Overview',headerShown:false }} name="Login" component={Login} />
        <Stack.Screen name="Home" component={Todo} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductPage" component={ProductPage} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="AddQuestion" component={AddQuestion} />
        <Stack.Screen name="Map" component={CustomMap} />
        <Stack.Screen name="ImagePicker" component={ImagePicker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;