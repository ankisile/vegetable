import React, { Component } from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";

import { createMaterialBottomTabNavigator,createBottomTabNavigator, BottomTabBar } from "@react-navigation/material-bottom-tabs"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import QuestScreen from '../front/main/QuestMain'
import ProfileScreen from '../front/myPage/MyFeed'
import PointScreen from '../front/pointMarket/MarketMain'
import FeedScreen from '../front/feed/Feed'


const Tab = createMaterialBottomTabNavigator();

const EmptyScreen = () => {
    return (null)
}

export class AppStack extends Component {
    render() {
        return (
            <Tab.Navigator initialRouteName="Quest" labeled={false}>
            <Tab.Screen name="Quest" component={QuestScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="Feed" component={FeedScreen} 
                listeners={({ navigation }) => ({
                tabPress: event => {
                    event.preventDefault();
                    navigation.navigate("Feed")
                }})}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="view-grid-outline" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="CameraContainer" component={EmptyScreen}
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate("CameraContainer")
                    }
                })}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="Profile" component={ProfileScreen} 
            listeners={({ navigation }) => ({
                tabPress: event => {
                    event.preventDefault();
                    navigation.navigate("Profile")
                }})}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="Point" component={PointScreen} 
            listeners={({ navigation }) => ({
                tabPress: event => {
                    event.preventDefault();
                    navigation.navigate("Point")
                }})}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="shopping-store
                        " color={color} size={26} />
                    ),
                }} />
        </Tab.Navigator>
        )
    }
}

export default AppStack
