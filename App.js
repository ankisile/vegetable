/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useEffect, useState} from 'react';

 import { createStackNavigator } from "@react-navigation/stack";
 import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
 import { useFonts } from 'expo-font';
 
 

 import SignUp from "./front/landing/SignUp";
 import SignIn from "./front/landing/SignIn";
 import Tutorial from "./front/landing/Tutorial";
 import AppStack from './navigation/AppStack';

 const theme = {
     ...DefaultTheme,
     colors: {
         ...DefaultTheme.colors,
         border: "transparent",
     },
 };
 
 const Stack = createStackNavigator();
 
 const App = () => {
     const [loaded] = useFonts({
         "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
         "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
         "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
     })
    
     


     if(!loaded){
     return null;
     }
     
     
     
     return (

         <NavigationContainer theme={theme}>
             <Stack.Navigator
                 screenOptions={{
                     headerShown: false
                 }}
                 initialRouteName={'SignIn'}
             >
                <Stack.Screen name="SignIn" component={SignIn} />   
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Tutorial" component={Tutorial}/>
                <Stack.Screen name="AppMain" component={AppStack} />
                
             </Stack.Navigator>
         </NavigationContainer>
     )
 }
 
 export default App;
 