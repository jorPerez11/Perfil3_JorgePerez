import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { ApiScreen } from '../screens/ApiScreen';
 
const Stack = createNativeStackNavigator();
 
export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Presentación' }}
      />
      <Stack.Screen
        name="ApiScreen"
        component={ApiScreen}
        options={{ title: 'Listado de API' }}
      />
    </Stack.Navigator>
  );
};