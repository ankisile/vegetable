import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Payment({ navigation }) {
    return (
        <View>
<<<<<<< HEAD
            <Text>보유 포인트 : 00점</Text>
=======
            <Text> 보유 포인트 : 00점</Text>
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
            <Text>상품리스트1</Text>
            <Text>~~를 보유 포인트로 결제하시겠습니까?</Text>
            <Button title="네"
                onPress={() => navigation.navigate("PayResult")} />
            <Button title="아뇨! 다른거 볼게요"
<<<<<<< HEAD
                onPress={() => navigation.navigate("QuestMain")} />
=======
                onPress={() => navigation.navigate("TabScreen")} />
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
        </View>
    )
}
