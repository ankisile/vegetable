import React from 'react'

let imagePath = require('./koonya.png'); //imagePath변수에 llama경로가 저장된다
import { StyleSheet, View, Text, Image, TextInput, Button, } from 'react-native'


const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 50,
    marginBottom: 50

  },
  second_title: {
    fontSize: 33,


  },
  button1: {
    width: 100,
    height: 40
  },
  card: {
    marginBottom: 20, marginTop :20, 
    marginRight: 60,
    backgroundColor: "white",
    flexDirection: 'row',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "space-around",
    height : 40
  }

});

export default function Setting() {
  return (
    <View style = {{fontSize : 20, fontweight : 300}}>
      <View style={{ marginLeft:30,marginRight:30 }}>
        <Text style={styles.title}>나의 계정 설정</Text>


        <View style={{ flexDirection: 'row', flex: 0.5, justifyContent: "space-between", }}>
          <Text style={styles.second_title}>내 정보</Text>
          <View style={styles.button1}> <Button title="수정하기" />  </View>
        </View>
        <View style={{ backgroundColor: "white", flexDirection: 'row', }}>

          <Image
            style={{ height: 106, width: 106, marginLeft: '10%', marginTop: 20 }}
            source={imagePath}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text>닉네임 님</Text>

            <TextInput
              style={{ backgroundColor: "#eee" }}
              placeholder="자기소개 블라블라" ></TextInput>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 20, marginTop :20, flex : 1}}>
        <View style={styles.card}>
          <Text style={{ backgroundColor: 'white', textAlign : 'center', marginTop :10,marginBottom:10 }}>퀘스트 현황</Text>
          <Button></Button>
          </View>
          <View style={styles.card}>
          <Text style={{  backgroundColor: 'white', textAlign : 'center', marginTop :10,marginBottom:10 }}>보유 포인트</Text>
          <Button></Button>
          </View>
          <View style={styles.card}>
          <Text style={{  backgroundColor: 'white', textAlign : 'center', marginTop :10,marginBottom:10 }}>이벤트</Text>
          <Button></Button>
          </View>
          <View style={styles.card}>
          <Text style={{  backgroundColor: 'white', textAlign : 'center', marginTop :10,marginBottom:10 }}>문의</Text>
          <Button></Button>
           
          </View>
        
      </View>
    </View>
  )
}
{/* <Image
                style={{ height: 106, width: 106, marginLeft: '30%', marginTop: -5 }}
                source={imagePath}
            />  */}
