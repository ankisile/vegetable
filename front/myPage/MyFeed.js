import React from 'react'
<<<<<<< HEAD
import { StyleSheet, View, Text, Image, FlatList, Button, TextInput } from 'react-native'


let imagePath = require('./koonya.png'); //imagePath변수에 llama경로가 저장된다

const styles = StyleSheet.create({})

export default function MyFeed({ navigation }) {
    return (
        <View>
    
           
            <View style={{ alignItems: 'center', marginTop: 50 }}>
                <Text style={{ fontSize: 20, fontWeight: 500, }}>
                    My page</Text>
                <View style={{ backgroundColor: "orange", height: 4, width: 100, marginTop: 10 }}></View>
            </View>
            {/* 우선 첫번째 블럭  */}

            <View style={{ marginTop: 50, alignItems: 'center', marginBottom: 50 }}>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Image
                        style={{ height: 65, width: 65, }}
                        source={imagePath}
                    />
                    <div>
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 600 }}>닉네임 님</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 500, height: 30, }}>
                            <Text style={{ fontWeight: 600, }}>양파 쿵야 캐릭터</Text>
                            <Text style={{ fontWeight: 600, }}>" " 팔로워</Text>
                            <Text style={{ fontWeight: 600, }}>" " 팔로잉</Text>
                        </View>
                    </div>
                </View>
            </View>
            <View style={{ marginBottom: 20 }}>
                <Text style={{ width: 565, alignSelf: 'center', height: 50, borderStyle: 'solid', borderColor: "black", borderWidth: 3 }}>
                    나중에 들어올 자기소개 값
                    </Text>
            </View>

            <View style={{ width: 565, height: 50, alignSelf: 'center',backgroundColor : "black" }}>
                <Button
                    color="grey"
                    title="  이걸눌러라  "
                    onPress={() => navigation.navigate("Setting")} />
            </View>
            <View style={{ width: 565, backgroundColor: "black", height: "70%", alignItems: "center", backgroundColor: "orange",alignSelf : 'center' }}>
                      
           </View>
=======
import { StyleSheet, View, Text, Image, FlatList, Button } from 'react-native'

export default function MyFeed({navigation}) {
    return (
        <View>
            <Text>
                profile
            </Text> 
            <Text>
                Have to make button
            </Text>
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3

        </View>
    )
}
