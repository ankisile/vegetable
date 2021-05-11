import React from 'react'
import { View, Text, Button } from 'react-native'

export default function DonateMain({navigation}) {
    return (
        <View>
            <Text>보유 포인트 : 000점</Text>
            <Text>~~에 __원 기부합니다.</Text>
            <Button title="기부하기"
            onPress={() => navigation.navigate("DonationResult")}/>
            <Text>History</Text>
            <Text>__님이 ~~에 00원을 기부했습니다.</Text>
        </View>
    )
}
