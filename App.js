import React, { Component } from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import TabScreen from './front/TabScreen';
import MarketMain from './front/pointMarket/MarketMain';
import DonateMain from './front/pointMarket/donation/DonateMain';
import DonationResult from './front/pointMarket/donation/DonationResult';
import CafeMain from './front/pointMarket/cafe/CafeMain';
import PaybackMain from './front/pointMarket/payback/PaybackMain';
import Payback from './front/pointMarket/payback/Payback';
import Payment from './front/pointMarket/Payment';
import PayResult from './front/pointMarket/PayResult';




const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

export class App extends Component {

    constructor(props) {
        super()
        this.state = {
            loaded: false,
        }
    }

    render() {
        return (
            <NavigationContainer theme={theme}>
                <Stack.Navigator initialRouteName={'TabScreen'} >
                    <Stack.Screen name="TabScreen" component={TabScreen} navigation={this.props.navigation} />
                    <Stack.Screen name="MarketMain" component={MarketMain} navigation={this.props.navigation} />
                    <Stack.Screen name="CafeMain" component={CafeMain} navigation={this.props.navigation} />
                    <Stack.Screen name="DonateMain" component={DonateMain} navigation={this.props.navigation} />
                    <Stack.Screen name="DonationResult" component={DonationResult} navigation={this.props.navigation} />
                    <Stack.Screen name="PaybackMain" component={PaybackMain} navigation={this.props.navigation} />
                    <Stack.Screen name="Payback" component={Payback} navigation={this.props.navigation} />
                    <Stack.Screen name="Payment" component={Payment} navigation={this.props.navigation} />
                    <Stack.Screen name="PayResult" component={PayResult} navigation={this.props.navigation} />


                    {/* Tabs */}

                    {/* <Stack.Screen name="Scan" component={Scan} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default App;
