import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Payment({navigation}) {
    return (
        <View>
<<<<<<< HEAD
            <Text>보유 포인트 : 00점</Text>
=======
            <Text> 보유 포인트 : 00점</Text>
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
            <Text>상품리스트1</Text>
            <Text>00점에서 00점이 차감되어 00점이 남았습니다!</Text>
            <Text>맛있는 시간 되세요!</Text>
            <Button title="네"
<<<<<<< HEAD
                onPress={() => navigation.navigate("QuestMain")} />
=======
                onPress={() => navigation.navigate("TabScreen")} />
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
        </View>
    )
}
