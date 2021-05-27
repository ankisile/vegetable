<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React from 'react';
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
} from 'react-native';

import { icons, images, COLORS, SIZES, FONTS } from '../../constants';
import ActionButton from 'react-native-action-button';
<<<<<<< HEAD

import firebase from 'firebase'
require('firebase/firestore')

=======
import Icon from 'react-native-vector-icons/Entypo'
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3

const RequirementDetail = ({ label, days }) => {
    return (
        <View>
            <View style={{
<<<<<<< HEAD
                height: 110,
                marginTop: SIZES.padding * 3,
                backgroundColor: COLORS.white,
                borderColor: COLORS.white,
                borderRadius: SIZES.radius / 1.5,
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: '#000000',
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                elevation: 3,

            }}
            >
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text style={{ marginTop: 10, marginLeft: SIZES.padding * 23, color: COLORS.gray, fontSize: 8, }}>{days}일 동안 수행</Text>
                </View>
                <View style={{ flex: 1, marginTop: -20, }}>
                    <Text style={{ paddingHorizontal: 5, color: COLORS.black, ...FONTS.body3 }}>{label}</Text>
                </View>

                <TouchableOpacity
                    style={{
                        width: 120,
                        height: 20,
                        backgroundColor: COLORS.orange,
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: SIZES.padding * 1,
                    }}
                    onPress={() => console.log('hi')}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.body5 }}>상세보기</Text>
                </TouchableOpacity>
=======
                    height: 110,
                    marginTop:SIZES.padding*3,
                    backgroundColor: COLORS.white,
                    borderColor: COLORS.white,
                    borderRadius: SIZES.radius / 1.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: '#000000',
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                    shadowOffset: {
                    width: 0,
                    height: 3,
                    },
                    elevation: 3,
                    
                } }
            >
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text style={{marginTop: 10, marginLeft: SIZES.padding*23, color: COLORS.gray, fontSize:8, }}>{days}일 동안 수행</Text>
                </View>
                <View style={{ flex: 1, marginTop:-20, }}>
                    <Text style={{ paddingHorizontal:5, color: COLORS.black, ...FONTS.body3 }}>{label}</Text>
                </View>
                
                <View
                    style={{
                            width:120,
                            height: 20,
                            backgroundColor: COLORS.orange,
                            borderRadius: SIZES.radius / 1.5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom : SIZES.padding*1,
                        }}
                        onPress={() => navigation.navigate("QuestDetail")}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.body5 }}>상세보기</Text>
                </View>
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
            </View>
        </View>
    )
}

<<<<<<< HEAD
const PlantDetail = ({ navigation }) => {

    const [quests, setQuests] = useState([{title : ""}])

    useEffect(() => {
        
        if(quests[0]['title'] === ""){
            firebase.firestore()
                .collection("quests")
                .where("category", "==", "food")
                .get()
                .then((snapshot) => {
                    console.log(snapshot.docs[0].data())

                    let quests = snapshot.docs.map(doc => {
                        const data = doc.data();
                        const id = doc.id;
                        return { id, ...data }
                    })
                    setQuests(quests)

                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [quests])
=======
const Meal = ({ navigation }) => {
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3

    // Render

    function renderHeader() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 50,
                    left: SIZES.padding,
                    right: SIZES.padding
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.5)' }}
                            onPress={() => { navigation.navigate("QuestMain") }}
                        >
                            <Image
                                source={icons.back}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

<<<<<<< HEAD
                <View style={{
                    position: 'absolute',
                    top: 50,
                    left: SIZES.padding * 4,
                    right: SIZES.padding
                }}>
                    <View style={{ flex: 1, alignItems: "flex-start", justifyContent: "center", }}>
                        <Text style={{ color: 'black', ...FONTS.body2 }}>식사 퀘스트</Text>
                    </View>
                </View>
                <View style={{
                    position: 'absolute',

                    left: 170,
                    right: SIZES.padding
                }}>
                    <ImageBackground
                        source={images.oframe}
=======
                <View style={{position: 'absolute',
                    top: 50,
                    left: SIZES.padding*4,
                    right: SIZES.padding}}>
                    <View style={{ flex: 1 , alignItems: "flex-start", justifyContent:"center",}}>
                        <Text style={{ color:'black', ...FONTS.body2 }}>식사 퀘스트</Text>
                    </View>
                </View>
                <View style={{position: 'absolute',
                    
                    left: 170,
                    right: SIZES.padding}}>
                    <ImageBackground
                        source={images.oframe}
                        style={{width: 210,
                            height: 220}}
                    >
                    <Image
                        source={images.onionb}
                        resizeMode="contain"
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
                        style={{
                            width: 210,
                            height: 220
                        }}
<<<<<<< HEAD
                    >
                        <Image
                            source={images.onionb}
                            resizeMode="contain"
                            style={{
                                width: 210,
                                height: 220
                            }}
                        />
                    </ImageBackground>

=======
                    />
                    </ImageBackground>
                    
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
                </View>
            </View>
        )
    }


    function renderQuests() {
        return (
<<<<<<< HEAD
            <ScrollView style={{ height: 570 }}>
                <View style={{ flex: 2.5, paddingHorizontal: SIZES.padding * 5, justifyContent: 'space-around' }}>
                    <RequirementDetail
                        label={quests[0]['title']}
                        days="5"
                    />
                    <RequirementDetail
                        label="Water"
                        days="5"
                    />
                    <RequirementDetail
                        label="dd"
                        days="5" />
                    <RequirementDetail
                        label="Soil"
                        days="5" />
                    <RequirementDetail
                        label="Fertilizer"
                        days="5" />
                </View>
=======
            <ScrollView style={{height:570}}>
            <View style={{ flex: 2.5, paddingHorizontal: SIZES.padding*5, justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => navigation.navigate("QuestDetail")}>
                <RequirementDetail
                    label="Sunlight"
                    days="5"
                />
                </TouchableOpacity>
                <RequirementDetail
                    label="Water"
                    days="5"
                                    />
                <RequirementDetail
                    label="dd"
                    days="5"                />
                <RequirementDetail
                    label="Soil"
                    days="5"                />
                <RequirementDetail
                    label="Fertilizer"
                    days="5"                />
            </View>
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
            </ScrollView>
        )
    }

<<<<<<< HEAD

    return (
        <View style={styles.container}>
            {/* Banner Photo */}
            <View style={{ height: "40%", backgroundColor: 'white' }}>
            </View>

            {/* Requirements */}
            <View style={{
                flex: 1,
                marginTop: -50,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                paddingVertical: SIZES.padding,
                backgroundColor: COLORS.white,
                shadowColor: '#000000',
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                elevation: 3,
            }}
            >

                <Text style={{ paddingHorizontal: SIZES.padding * 4, color: COLORS.black, ...FONTS.h5, paddingTop: 10 }}>퀘스트 선택</Text>

                <View style={{ marginTop: 20 }}>{renderQuests()}</View>


=======
    return (
        <View style={styles.container}>
            {/* Banner Photo */}
            <View style={{ height: "40%", backgroundColor: 'white'}}>
            </View>
            
            {/* Requirements */}
            <View style={{
                    flex: 1,
                    marginTop: -50,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    paddingVertical: SIZES.padding,
                    backgroundColor:COLORS.white,
                    shadowColor: '#000000',
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                    shadowOffset: {
                    width: 0,
                    height: 3,
                    },
                    elevation: 3,
                }}
            >

                <Text style={{ paddingHorizontal: SIZES.padding*4, color: COLORS.black, ...FONTS.h5,paddingTop:10 }}>퀘스트 선택</Text>

                <View style={{marginTop:20}}>{renderQuests()}</View>
                
                
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
            </View>

            {renderHeader()}
            <ActionButton
<<<<<<< HEAD
                buttonColor="rgba(231,76,60,1)"
                onPress={() => { navigation.navigate("MakeQuestDetail") }}
            />
        </View>

=======
              style={{elevation:8}}
              buttonColor="rgba(231,76,60,1)"
              //onPress={() => navigation.navigate("MakeQuestDetail")}
            />
            
           
        </View>
       
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    boxShadow: {
        shadowColor: '#000000',
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        shadowOffset: {
<<<<<<< HEAD
            width: 0,
            height: 3,
=======
        width: 0,
        height: 3,
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
        },
        elevation: 3,
    }
})

<<<<<<< HEAD
export default PlantDetail;
=======
export default Meal;
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
