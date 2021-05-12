import React, { Component } from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";

import { createMaterialBottomTabNavigator,createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

import QuestScreen from '../front/main/QuestMain'
import ProfileScreen from '../front/myPage/MyFeed'
import PointScreen from '../front/pointMarket/QuestMain'
import QuestScreen from '../front/main/QuestMain'
import QuestScreen from '../front/main/QuestMain'

const Tab = createMaterialBottomTabNavigator();

export class AppStack extends Component {
    render() {
        return (
            <Tab.Navigator initialRouteName="Quest" labeled={false}>
            <Tab.Screen name="Quest" component={FeedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="Search" component={SearchScreen} navigation={this.props.navigation}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="AddContainer" component={EmptyScreen}
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate("Add")
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
                    navigation.navigate("Profile", {uid: firebase.auth().currentUser.uid})
                }})}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    ),
                }} />
        </Tab.Navigator>
        )
    }
}

export default AppStack
