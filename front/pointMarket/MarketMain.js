import React from 'react'
import { View, Text, Button, ImageBackground, Image } from 'react-native'
let imagePath = require('./koonya.png');
let buycar = require('./Buy.png');
import { Dimensions } from 'react-native';
const Width = Dimensions.get('window').width;    //스크린 너비 초기화
const Height = Dimensions.get('window').height;

function MarketMain({ navigation }) {
    return (
        <View style={{ flexDirection: "column" }}>

            <View style={{ marginTop: 50, width: Width * 0.9, height: Height * 0.1, alignSelf: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', width: "100%", alignSelf: 'center', justifyContent: 'space-evenly' }}>
                    <Text style={{ textAlign: "center", marginLeft: '25%' }} >
                        포인트 상점
                    </Text>
                    <View >
                        <Image
                            style={{ height: 20, width: 20, marginLeft: '90%' }}
                            source={buycar}
                        />
                    </View>
                </View>


                <View
                    style={{ height: 4, width: 100, marginTop: 5, backgroundColor: "orange" }}>
                </View>
                {/* 첫번째 문단  */}
                <View style={{ width: Width * 0.9, height: Height * 0.15, alignSelf: 'center', marginTop: 10, }}>
                    <ImageBackground
                        style={{ width: "100%", height: "100%" }}  //View를 꽉채우도록
                        source={require("./chasic.png")}  //이미지경로
                        resizeMode='stretch' // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                    >
                    </ImageBackground>
                </View>

                <View style={{ width: Width * 0.9, height: Height * 0.05, marginTop: 20, flexDirection: "row", marginBottom: 20 }}>
                    <View style={{ flexDirection: "row", height: '100%', width: '49%' }}>
                        <Image
                            style={{ height: '100%', width: '20%' }}
                            source={require("./heart.png")} />
                        <Button
                            color="#FFDCDC"
                            title="나의 좋아요 보관함" />
                    </View>
                    <View style={{ flexDirection: "row", height: '100%', width: '51%', }}>
                        <Image
                            style={{ height: '100%', width: '20%' }}
                            source={require("./star.png")} />
                        <Button
                            color="#FFDCDC"
                            title="나의 보유 포인트 확인" />
                    </View>
                </View>
                {/* 두번째 문단 살려줘  */}
               

                <View style={{ width: Width * 0.9, height: Height * 0.1, alignSelf: 'center', marginTop: 10,flexDirection:"row",justifyContent :"space-between" }}>
                    <ImageBackground
                        style={{ width: "50%", height: "100%",marginLeft : "8%" }}  //View를 꽉채우도록
                        source={require("./wow.png")}  //이미지경로
                        resizeMode='stretch' // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                    >
                    </ImageBackground>
                    <ImageBackground
                        style={{ width: "50%", height: "100%",marginLeft : "8%" }}  //View를 꽉채우도록
                        source={require("./wow.png")}  //이미지경로
                        resizeMode='stretch' // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                    >
                    </ImageBackground>
                </View>
                <View style={{ width: Width * 0.9, height: Height * 0.1, alignSelf: 'center', marginTop: 10,flexDirection:"row",justifyContent :"space-between" }}>
                    <ImageBackground
                        style={{ width: "50%", height: "100%",marginLeft : "8%" }}  //View를 꽉채우도록
                        source={require("./wow.png")}  //이미지경로
                        resizeMode='stretch' // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                    >
                    </ImageBackground>
                    <ImageBackground
                        style={{ width: "50%", height: "100%",marginLeft : "8%" }}  //View를 꽉채우도록
                        source={require("./wow.png")}  //이미지경로
                        resizeMode='stretch' // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                    >
                    </ImageBackground>
                </View>

                <View style={{ width: Width * 0.9, height: Height * 0.1, alignSelf: 'center', marginTop: 10,flexDirection:"row",justifyContent :"space-between" }}>
                    <ImageBackground
                        style={{ width: "50%", height: "100%",marginLeft : "8%" }}  //View를 꽉채우도록
                        source={require("./wow.png")}  //이미지경로
                        resizeMode='stretch' // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                    >
                        
                    </ImageBackground>
                    <ImageBackground
                        style={{ width: "50%", height: "100%",marginLeft : "8%" }}  //View를 꽉채우도록
                        source={require("./wow.png")}  //이미지경로
                        resizeMode='stretch' // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                    >
                    </ImageBackground>
                </View>
               


                
            </View>



        </View>
    )
}

export default MarketMain

{/* <Button title="기타/환급하기"
                        onPress={() => navigation.navigate("PaybackMain")} />
                        <Button title="카페/베이커리"
                            onPress={() => navigation.navigate("CafeMain")} />
                            <Button title="기부"
                            onPress={() => navigation.navigate("DonateMain")} />
                            <Button title="뷰티/패션" />
                            <Button title="외식" />
                            */}