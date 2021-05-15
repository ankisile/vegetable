/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsY5CW6nrBkSGIr6yoqyZfUAc0LjCzNt4",
    authDomain: "vegetarian-ff82a.firebaseapp.com",
    projectId: "vegetarian-ff82a",
    storageBucket: "vegetarian-ff82a.appspot.com",
    messagingSenderId: "586646681228",
    appId: "1:586646681228:web:8c296107beaecee1b1ada9",
    measurementId: "G-WDR3T8FJ3D"
};

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
}

import SignUp from "./front/landing/SignUp";
import SignIn from "./front/landing/SignIn";
import Tutorial from "./front/landing/Tutorial";
import AppStack from './navigation/AppStack';
import Makequest from './front/main/MakeQuest';
import Meal from './front/main/Meal';
import MakequestDetail from './front/main/MakeQuestDetail';



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
        "Roboto-Black": require('./assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
    })

    if (!loaded) {
        return null;
    }
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}

export default App;
