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
 

 import SignUp from "./front/landing/SignUp";
 import SignIn from "./front/landing/SignIn";
 import Tutorial from "./front/landing/Tutorial";
 import AppStack from './navigation/AppStack';
import TabScreen from './front/TabScreen';
import MarketMain from './front/pointMarket/MarketMain';
import DonateMain from './front/pointMarket/donation/DonateMain';
import DonationResult from './front/pointMarket/donation/DonationResult';
import CafeMain from './front/pointMarket/cafe/CafeMain';
import PaybackMain from './front/pointMarket/payback/PaybackMain';
import Payback from './front/pointMarket/payback/Payback';
import Payment from './front/pointMarket/Payment';
import PayResult from './front/pointMarket/PayResult';
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
       //have to modify
       <Stack.Screen name="TabScreen" component={TabScreen} navigation={this.props.navigation} />
                    <Stack.Screen name="MarketMain" component={MarketMain} navigation={this.props.navigation} />
                    <Stack.Screen name="CafeMain" component={CafeMain} navigation={this.props.navigation} />
                    <Stack.Screen name="DonateMain" component={DonateMain} navigation={this.props.navigation} />
                    <Stack.Screen name="DonationResult" component={DonationResult} navigation={this.props.navigation} />
                    <Stack.Screen name="PaybackMain" component={PaybackMain} navigation={this.props.navigation} />
                    <Stack.Screen name="Payback" component={Payback} navigation={this.props.navigation} />
                    <Stack.Screen name="Payment" component={Payment} navigation={this.props.navigation} />
                    <Stack.Screen name="PayResult" component={PayResult} navigation={this.props.navigation} />
                    <Stack.Screen name="Makequest" component={Makequest}navigation={this.props.navigation} />
                    <Stack.Screen name="Meal" component={Meal}navigation={this.props.navigation} />
                    <Stack.Screen name="MakequestDetail" component={MakequestDetail}navigation={this.props.navigation} />
                
             </Stack.Navigator>
         </NavigationContainer>
     )
 }
 
 export default App;
