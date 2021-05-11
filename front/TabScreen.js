import React from 'react'
import { View, Text, Button } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import MarketMain from './pointMarket/MarketMain';

const Tab = createMaterialBottomTabNavigator();

export default function TabScreen() {
    return (
        <Tab.Navigator initialRouteName="MarketMain" labeled={false}>
            <Tab.Screen name="MarketMain" component={MarketMain}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />

        </Tab.Navigator>
    )
}
