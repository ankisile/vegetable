<<<<<<< HEAD
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = 220

const CarouselCardItem = ({ item, index }) => {

  // console.log("카드 확인")
  // console.log(item)

  return (
    <TouchableOpacity>
      <View style={styles.container} key={index}>
        <ImageBackground source={item.bguri} style={styles.imagebg}>
          <Image
            source={item.uri}
            style={styles.image}
          />
        </ImageBackground>

        <Text style={{ color: 'gray', fontSize: 10, position: 'absolute', top: 170, left: 20 }}>{item.categori}</Text>
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.body}>{item.content}</Text>
        <Text style={{ color: '#007AE9', fontSize: 10, position: 'absolute', bottom: 60, left: 20 }}>달성시 제공 포인트 {item.point}</Text>
        <Text style={{ color: '#007AE9', fontSize: 10, position: 'absolute', bottom: 30, right: 30 }}>상세보기→</Text>
      </View>


    </TouchableOpacity>

=======
import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH =220

const CarouselCardItem = ({ item, index }) => {
  return (
    <TouchableOpacity>
        <View style={styles.container} key={index}>
      <ImageBackground source={ item.bguri} style={styles.imagebg}>
      <Image
        source={item.uri }
        style={styles.image}
      />
      </ImageBackground>
      
      <Text style={{color:'gray',fontSize:10,position:'absolute', top:170, left:20}}>{item.categori}</Text>
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.content}</Text>
      <Text style={{color:'#007AE9',fontSize:10,position:'absolute', bottom:60, left:20}}>달성시 제공 포인트 {item.point}</Text>
      <Text style={{color:'#007AE9',fontSize:10,position:'absolute', bottom:30, right:30}}>상세보기→</Text>
    </View>


    </TouchableOpacity>
    
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
<<<<<<< HEAD
    height: 400,
=======
    height:400,
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
<<<<<<< HEAD
    alignItems: 'center'
=======
    alignItems:'center'
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
  },
  image: {
    width: 140,
    height: 170,
  },
  imagebg: {
    width: 220,
    height: 170,
<<<<<<< HEAD
    alignItems: 'center'
=======
    alignItems:'center'
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
  },
  header: {
    color: "#222",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 20,
<<<<<<< HEAD
    paddingRight: 20,
=======
    paddingRight:20,
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 12,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem