import React, { Component, useEffect, useState, createRef } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { icons, images, COLORS, SIZES, FONTS } from '../../constants';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

import firebase from 'firebase'
require('firebase/firestore')

import Carousel from 'react-native-snap-carousel'
import CardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CardItem'

const width = Dimensions.get('window').width;

const QuestMain = ({ navigation }) => {

  const [quests, setQuests] = useState([])
  const [dataState, setData] = useState([])

  var data = []

  useEffect(() => {

    firebase.firestore()
      .collection("quests")
      .doc(item['qid'])
      .get()
      .then((snapshot) => {
        // console.log("snapshot")
        // console.log(snapshot.data())
        let tmp = dataState

        tmp.push(snapshot.data())
        setData(tmp)
        console.log("data inner")
        console.log(dataState)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  const settingData = async () => {

    await firebase.firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("userQuests")
      .get()
      .then((snapshot) => {
        let quest = snapshot.docs.map((doc) => {
          var qid = doc.id
          var complete = doc.data()
          return { qid, ...complete }
        })
        setQuests(quest);
        //console.log(quests)
      })
      .catch((err) => {
        console.log(err)
      })

    //console.log(quests)

    if (data.length > 0) {
      return
    }

    data = async () => {
      await quests.forEach((item) => {
        if (item.complete === false) {
          //console.log(item['qid'])


        }
      })
      return dataState
    }


    console.log("data = state")
    console.log(dataState)
  }



  const datasample = [
    {
      bguri: images.oibg,
      uri: images.onionb,
      title: 'Lorem ipsum dolor sit amet',
      content: 'Neque porro quisquam est qui dolorem ipsum quia ',
      point: 500,
      categori: '식사'
    },
    {
      bguri: images.oframe,
      uri: 'https://i.imgur.com/Pz2WYAc.jpg',
      title: 'Lorem ipsum ',
      content: 'Neque porro quisquam est qui dolorem ipsum ',
      point: 500,
      categori: '식사'
    },
    {
      bguri: images.oframe,

      uri: 'https://i.imgur.com/IGRuEAa.jpg',
      title: 'Lorem ipsum dolor',
      content: 'Neque porro quisquam est qui',
      point: 500,
      categori: '식사'
    },
    {
      bguri: images.oframe,

      uri: 'https://i.imgur.com/fRGHItn.jpg',
      title: 'Lorem ipsum dolor',
      content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
      point: 500,
      categori: '식사'
    },
    {
      bguri: images.oframe,

      uri: 'https://i.imgur.com/WmenvXr.jpg',
      title: 'Lorem ipsum ',
      content: 'Neque porro quisquam est qui dolorem ipsum quia dolor ',
      point: 500,
      categori: '식사'
    }
  ];


  const renderInner = () => {
    return (
      <View style={styles.panel}>
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.border}
              onPress={() => navigation.navigate("Meal")}>
              <View style={{ alignItems: 'flex-start' }}>
                <ImageBackground source={images.pink} style={{
                  width: 110,
                  height: 110
                }}>
                  <Image
                    source={images.onion}
                    resizeMode="contain"
                    style={{
                      width: 110,
                      height: 110
                    }}

                  />
                </ImageBackground>
              </View>
              <View style={{ paddingHorizontal: 25, paddingTop: 20 }}>
                <Text style={styles.panelButtonTitle}>식사 퀘스트</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.border}
              onPress={() => navigation.navigate("Meal")}>
              <View style={{ alignItems: 'flex-start' }}>
                <ImageBackground source={images.bgpum} style={{
                  width: 110,
                  height: 110
                }}>
                  <Image
                    source={images.pumkin}
                    resizeMode="contain"
                    style={{
                      width: 110,
                      height: 110
                    }}
                  />
                </ImageBackground>
              </View>
              <View style={{ paddingHorizontal: 25, paddingTop: 20 }}>
                <Text style={styles.panelButtonTitle}>레시피 퀘스트</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.border}
              onPress={() => navigation.navigate("Meal")}>
              <View style={{ alignItems: 'flex-start' }}>
                <ImageBackground source={images.bgpo} style={{
                  width: 110,
                  height: 110
                }}>
                  <Image
                    source={images.potato}
                    resizeMode="contain"
                    style={{
                      width: 110,
                      height: 110
                    }}
                  />
                </ImageBackground>
              </View>
              <View style={{ paddingHorizontal: 25, paddingTop: 20 }}>
                <Text style={styles.panelButtonTitle}>체험 퀘스트</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.border}
              onPress={() => navigation.navigate("Meal")}>
              <View style={{ alignItems: 'flex-start' }}>
                <ImageBackground source={images.bgca}
                  style={{
                    width: 110,
                    height: 110
                  }}>
                  <Image
                    source={images.carrot}
                    resizeMode="contain"
                    style={{
                      width: 110,
                      height: 110
                    }}

                  />
                </ImageBackground>
              </View>
              <View style={{ paddingHorizontal: 25, paddingTop: 20 }}>
                <Text style={styles.panelButtonTitle}>생활습관 퀘스트</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.border}
              onPress={() => navigation.navigate("Meal")}>
              <View style={{ alignItems: 'flex-start' }}>
                <ImageBackground source={images.bge} style={{
                  width: 110,
                  height: 110
                }}>
                  <Image
                    source={images.epic}
                    resizeMode="contain"
                    style={{
                      width: 110,
                      height: 110
                    }}

                  />
                </ImageBackground>
              </View>
              <View style={{ paddingHorizontal: 25, paddingTop: 20 }}>
                <Text style={styles.panelButtonTitle}>에픽 퀘스트</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

    );
  }
  const renderHeader = () => (

    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View sytle={{ marginBottom: 10 }}>
          <Text >
            퀘스트 선택하기
                </Text>


        </View>

        <TouchableOpacity style={{ alignItems: 'flex-end', marginLeft: 220 }}
          onPress={() => bs.current.snapTo(1)}>
          <Image
            source={icons.down}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );


  const bs = React.useRef(null);
  const fall = new Animated.Value(1);
  const isCarousel = React.useRef(null);

  return (
    <SafeAreaView style={styles.container} >

      <BottomSheet
        ref={bs}
        snapPoints={[650, 60]}
        initialSnap={1}
        renderContent={renderInner}
        renderHeader={renderHeader}
        callbackNode={fall}
        enabledGestureInteraction={true}
        enabledContentGestureInteraction={false}
      />
      <View >

      </View>
      <Animated.View style={{
        opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
      }}>
        <View style={{ marginTop: 100, marginHorizontal: 60 }}>
          <Text style={{ color: '#407B69', fontSize: 16, fontWeight: 'bold' }}>십이간지님, 안녕하세요!</Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body5 }}>퀘스트를 함께 달성하세요</Text>
          <TouchableOpacity style={{ flexDirection: 'row', paddingTop: 10 }}>
            <Image source={icons.heart} />
            <Text style={{ color: COLORS.gray, fontSize: 10 }}>  퀘스트 좋아요 보관함</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          alignItems: 'center',
          marginTop: 10,
          paddingTop: 30,
          height: 500,
          width: width,
          shadowColor: '#333333',
          shadowOffset: { width: 0, height: 3 },
          shadowRadius: 2,
          shadowOpacity: 0.2,
          elevation: 2,
        }}>
          <Text style={{ marginBottom: 20 }}>
            진행중인 퀘스트
          </Text>
          <Carousel
            layout="default"
            layoutCardOffset={9}
            ref={isCarousel}
            data={data}
            renderItem={CardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            useScrollView={true}
          />
        </View>
      </Animated.View>
    </SafeAreaView>
  )

}



export default QuestMain;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    paddingBottom: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: 0, height: -10 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  panelHeader: {
    //alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 40,
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
    textAlignVertical: 'top',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },

  border: {
    height: 110,
    width: 300,
    marginTop: SIZES.padding * 3,
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    borderRadius: SIZES.radius / 1.5,
    //alignItems: 'center',
    //justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
    flexDirection: 'row'
    //alignItems:'flex-start'
  },
  carousel: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    borderWidth: 2,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    borderColor: 'white',
    elevation: 3
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#EBEBEB',
    borderWidth: 5,
    borderColor: 'white',
    width: 220,
    height: 170
  },
  rightTextContainer: {
    marginLeft: 'auto',
    marginRight: -2,
    backgroundColor: 'rgba(49, 49, 51,0.5)',
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  rightText: { color: 'white' },
  lowerContainer: {
    flex: 1,
    margin: 10
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  contentText: {
    fontSize: 12
  }
});
