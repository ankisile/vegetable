import React from 'react'
import { View, Text, Button } from 'react-native'
import firebase from 'firebase';
require('firebase/firestore')

function MarketMain({ navigation }) {
    return (
        <View>
            <Text>광고 이미지</Text>
            <Button title="기부"
                onPress={() => navigation.navigate("DonateMain")} />
            <Button title="카페/베이커리"
                onPress={() => navigation.navigate("CafeMain")} />
            <Button title="뷰티/패션"/>
            <Button title="외식"/>
            <Button title="편의점"/>
            <Button title="기타/환급하기"
                onPress={() => navigation.navigate("PaybackMain")} />
        </View>
    )
}

export default MarketMain

