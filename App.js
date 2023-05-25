import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// ================================ Start Import all the components ===============================
import LogIn from './src/components/LogIn';
import SplashScreen from './src/components/SplashScreen';
// ================================ End Import all the components ===============================

// create a new NavigationContainer object
const Stack = createNativeStackNavigator();

// Create your app
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home Page">
        <Stack.Screen
          name="Home Page"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogIn page"
          component={LogIn}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};


export default App;