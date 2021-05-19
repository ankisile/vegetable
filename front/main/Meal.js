import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import { icons, images, COLORS, SIZES, FONTS } from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RequirementDetail = ({ label, days }) => {
    return (
        <View>
            <View style={{
                    height: 110,
                    marginTop:SIZES.padding*3,
                    backgroundColor: COLORS.white,
                    borderColor: COLORS.white,
                    borderRadius: SIZES.radius / 1.5,
                    alignItems: 'center',
                    justifyContent: 'center'  
                }}
            >
                <View style={{marginTop:SIZES.padding*1.5}}>
                    <Text style={{ marginLeft: SIZES.padding*23, color: COLORS.lightGray, ...FONTS.body4 }}>{days}일 동안 수행</Text>
                    <Text style={{ marginTop: SIZES.padding, color: COLORS.black, ...FONTS.h2, alignItems: 'center',
                        justifyContent: 'center' }}>{label}</Text>
                </View>
                <TouchableOpacity
                    style={{
                            marginHorizontal:SIZES.padding*11,
                            height: 20,
                            backgroundColor: COLORS.orange,
                            borderRadius: SIZES.radius / 1.5,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => console.log('hi')}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.body5 }}>상세보기</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const PlantDetail = ({ navigation }) => {

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

                <View style={{ flexDirection: 'row', marginTop: "10%" }}>
                    <View style={{ flex: 1 , alignItems: "center",
                        justifyContent:"center",}}>
                        <Text style={{ color: COLORS.white, ...FONTS.largeTitle }}>식사 퀘스트</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
            </View>
        )
    }


    function renderQuests() {
        return (
            <ScrollView>
            <View style={{ flex: 2.5, marginTop: SIZES.padding, paddingHorizontal: SIZES.padding*5, justifyContent: 'space-around' }}>
                <RequirementDetail
                    label="Sunlight"
                    days="5"
                />
                <RequirementDetail
                    label="Water"
                    days="5"
                                    />
                <RequirementDetail
                    label="Room Temp"
                    days="5"                />
                <RequirementDetail
                    label="Soil"
                    days="5"                />
                <RequirementDetail
                    label="Fertilizer"
                    days="5"                />
            </View>
            </ScrollView>
        )
    }

    
    return (
        <View style={styles.container}>
            {/* Banner Photo */}
            <View style={{ height: "35%", backgroundColor: COLORS.quest}}>
            </View>

            {/* Requirements */}
            <View
                style={{
                    flex: 1,
                    marginTop: -40,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    paddingVertical: SIZES.padding
                }}
            >

                <Text style={{ paddingHorizontal: SIZES.padding, color: COLORS.black, ...FONTS.body4 }}>퀘스트 선택</Text>


                {renderQuests()}

            </View>

            {renderHeader()}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PlantDetail;