import React from 'react'
import { Button,View,Text, } from 'react-native'


function QuestMain({navigation}) {
    return ( 
           <View>
            <Text>검색창 / +기호 등등  </Text>
            <Text>짱 멋있는 광고창 - 개발팀 화이팅!  </Text>
            
            <View style={{flex: 1, flexDirection: 'row', height: 100,   justifyContent: 'center', alignItems: 'center'}}>
            <Button title = "  식사  "
             onPress={() => navigation.navigate("Meal") }/>
            <Button title = "  레시피"/>
            <Button title = "  체험  "/>    
            </View>
            <View style={{flex: 1, flexDirection: 'row', height: 100,   justifyContent: 'center', alignItems: 'center'}}>
            <Button title = "생활 습관"/>
            <Button title = "에픽 쿠에스트"/>
            <Button title = "퀘스트 개설"
             onPress={() => navigation.navigate("Makequest") }/>
            </View>
           
           {/* onPress = {() =>navigation.navigate("thisisreturn") } */}
       
        </View>
    )
}

export default QuestMain