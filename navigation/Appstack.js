import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const EmptyScreen = () => {
    return (null)
}

import MakeQuest from '../front/main/MakeQuest';
import MakeQuestDetail from '../front/main/MakeQuestDetail';
import Meal from '../front/main/Meal';
import QuestMain from '../front/main/QuestMain';

import Camera from '../front/feed/Camera';
import Feed from '../front/feed/Feed';

import MarketMain from '../front/pointMarket/MarketMain';
import DonateMain from '../front/pointMarket/donation/DonateMain';
import DonationResult from '../front/pointMarket/donation/DonationResult';
import CafeMain from '../front/pointMarket/cafe/CafeMain';
import PaybackMain from '../front/pointMarket/payback/PaybackMain';
import Payback from '../front/pointMarket/payback/Payback';
import Payment from '../front/pointMarket/Payment';
import PayResult from '../front/pointMarket/PayResult';

import MyFeed from '../front/myPage/MyFeed';
import Setting from '../front/myPage/Setting';




const HomeStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="QuestMain" component={QuestMain} navigation={navigation} />
        {/* <Stack.Screen name="MarketMain" component={MarketMain} navigation={navigation} /> */}
        <Stack.Screen name="MakeQuest" component={MakeQuest} navigation={navigation} />
        <Stack.Screen name="MakeQuestDetail" component={MakeQuestDetail} navigation={navigation} />
        <Stack.Screen name="Meal" component={Meal} navigation={navigation} />
    </Stack.Navigator>
);

const FeedStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed} navigation={navigation} />
    </Stack.Navigator>
);

//===========================================================Camera.js의 function 이름(Camera)에 문제 발생
// const CameraStack = ({ navigation }) => (
//     <Stack.Navigator>
//         <Stack.Screen name="Camera" component={Camera} navigation={navigation} />
//     </Stack.Navigator>
// );

const MarketStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="MarketMain" component={MarketMain} navigation={navigation} />
        <Stack.Screen name="CafeMain" component={CafeMain} navigation={navigation} />
        <Stack.Screen name="DonateMain" component={DonateMain} navigation={navigation} />
        <Stack.Screen name="DonationResult" component={DonationResult} navigation={navigation} />
        <Stack.Screen name="PaybackMain" component={PaybackMain} navigation={navigation} />
        <Stack.Screen name="Payback" component={Payback} navigation={navigation} />
        <Stack.Screen name="Payment" component={Payment} navigation={navigation} />
        <Stack.Screen name="PayResult" component={PayResult} navigation={navigation} />



    </Stack.Navigator>
);

const MyPageStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="MyFeed" component={MyFeed} navigation={navigation} />
        <Stack.Screen name="Setting" component={Setting} navigation={navigation} />
    </Stack.Navigator>
);

const AppStack = ({ navigation }) => {
    return (


        <Tab.Navigator >

            <Tab.Screen name="Market" component={MarketStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="MyPage" component={MyPageStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="Home" component={HomeStack}       //Home == Quest
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="Feed" component={FeedStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />
            {/* <Tab.Screen name="Camera" component={CameraStack}
                options={{  
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} /> */}


        </Tab.Navigator>
    )
}

export default AppStack;