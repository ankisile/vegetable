import React from 'react'
import { View, Text, Button } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


<<<<<<< HEAD
import MarketMain from './pointMarket/MarketMain';
import button2 from './main/QuestMain';
=======
import QuestMain from './main/QuestMain';
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3

const Tab = createMaterialBottomTabNavigator();

export default function TabScreen() {
    return (
<<<<<<< HEAD
        <Tab.Navigator initialRouteName="MarketMain" labeled={true}>
            <Tab.Screen name="MarketMain" component={MarketMain}
=======
        <Tab.Navigator initialRouteName="QuestMain" labeled={true}>
            <Tab.Screen name="QuestMain" component={QuestMain}
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                    
                }} />

<<<<<<< HEAD
                 <Tab.Screen name="Quest" component={button2} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={26} />
                        
                        ),
                       
                
                    }} />
=======
                
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
        </Tab.Navigator>
    )
}
