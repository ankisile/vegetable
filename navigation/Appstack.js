<<<<<<< HEAD
import React, { Component } from 'react'
=======
import React, { Component, useEffect } from 'react'
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

<<<<<<< HEAD
=======
import firebase from 'firebase'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/index'

>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const EmptyScreen = () => {
    return (null)
}

<<<<<<< HEAD
import MakeQuest from '../front/main/MakeQuest';
=======
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
import MakeQuestDetail from '../front/main/MakeQuestDetail';
import Meal from '../front/main/Meal';
import QuestMain from '../front/main/QuestMain';

<<<<<<< HEAD
import Camera from '../front/feed/Camera';
=======
import PickCamera from '../front/feed/PickCamera';
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
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
<<<<<<< HEAD


const HomeStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="QuestMain" component={QuestMain} navigation={navigation} />
        <Stack.Screen name="MarketMain" component={MarketMain} navigation={navigation} />
        <Stack.Screen name="MakeQuestDetail" component={MakeQuestDetail} navigation={navigation} />
        <Stack.Screen name="Meal" component={Meal} navigation={navigation} />
=======
import Recipe from '../front/main/Recipe';


const HomeStack = ({ navigation }) => (
    <Stack.Navigator screenOptions={{
        headerShown: false}}>
        <Stack.Screen name="QuestMain" component={QuestMain}  />
        <Stack.Screen name="Meal" component={Meal}  />
        <Stack.Screen name="Recipe" component={Recipe}  />
        <Stack.Screen name="MakeQuestDetail" component={MakeQuestDetail} />
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
    </Stack.Navigator>
);

const FeedStack = ({ navigation }) => (
<<<<<<< HEAD
    <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed} navigation={navigation} />
=======
    <Stack.Navigator screenOptions={{
        headerShown: false}}>
        <Stack.Screen name="Feed" component={Feed}/>
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
    </Stack.Navigator>
);

//===========================================================Camera.js의 function 이름(Camera)에 문제 발생
// const CameraStack = ({ navigation }) => (
//     <Stack.Navigator>
//         <Stack.Screen name="Camera" component={Camera} navigation={navigation} />
//     </Stack.Navigator>
// );

const MarketStack = ({ navigation }) => (
<<<<<<< HEAD
    <Stack.Navigator>
        <Stack.Screen name="MarketMain" component={MarketMain} navigation={navigation} />
        <Stack.Screen name="CafeMain" component={CafeMain} navigation={navigation} />
        <Stack.Screen name="DonateMain" component={DonateMain} navigation={navigation} />
        <Stack.Screen name="DonationResult" component={DonationResult} navigation={navigation} />
        <Stack.Screen name="PaybackMain" component={PaybackMain} navigation={navigation} />
        <Stack.Screen name="Payback" component={Payback} navigation={navigation} />
        <Stack.Screen name="Payment" component={Payment} navigation={navigation} />
        <Stack.Screen name="PayResult" component={PayResult} navigation={navigation} />
=======
    <Stack.Navigator screenOptions={{
        headerShown: false}}>
        <Stack.Screen name="MarketMain" component={MarketMain}  />
        <Stack.Screen name="CafeMain" component={CafeMain}  />
        <Stack.Screen name="DonateMain" component={DonateMain} />
        <Stack.Screen name="DonationResult" component={DonationResult} />
        <Stack.Screen name="PaybackMain" component={PaybackMain} />
        <Stack.Screen name="Payback" component={Payback}  />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="PayResult" component={PayResult}  />
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
    </Stack.Navigator>
);

const MyPageStack = ({ navigation }) => (
<<<<<<< HEAD
    <Stack.Navigator>
        <Stack.Screen name="MyFeed" component={MyFeed} navigation={navigation} />
        <Stack.Screen name="Setting" component={Setting} navigation={navigation} />
    </Stack.Navigator>
);

const AppStack = ({ navigation }) => {
    return (
        <Tab.Navigator initialRouteName="Market" labeled={false}>
=======
    <Stack.Navigator screenOptions={{
        headerShown: false}}>
        <Stack.Screen name="MyFeed" component={MyFeed}  />
        <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
);

const AppStack = (props, { navigation }) => {
    useEffect(() => {
       //props.clearData();
       props.fetchUser();
       //props.fetchUserPosts();
       //props.fetchUserFollowing();
      }, [])
    return (
        <Tab.Navigator initialRouteName="Home" labeled={false}>
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
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
<<<<<<< HEAD
            {/* <Tab.Screen name="Camera" component={CameraStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} /> */}
=======
            <Tab.Screen name="PickCamera" component={EmptyScreen}
                listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("PickCamera")
                        }
                    })}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                        ),
            }} />
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
            <Tab.Screen name="Market" component={MarketStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="MyPage" component={MyPageStack}
<<<<<<< HEAD
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
=======
             listeners={({ navigation }) => ({
                tabPress: event => {
                    event.preventDefault();
                    navigation.navigate("MyFeed")
                }})}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
                    ),
                }} />
        </Tab.Navigator>
    )
}

<<<<<<< HEAD
export default AppStack;
=======

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(AppStack);
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
