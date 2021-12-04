// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import AddPostScreen from './src/screens/AddPostScreen';
import { NativeBaseProvider } from 'native-base';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddPost" component={AddPostScreen} />

        </Stack.Navigator>
      </NavigationContainer>
      </NativeBaseProvider>
  );
}

export default App;