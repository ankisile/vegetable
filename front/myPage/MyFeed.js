import React from 'react'
import { StyleSheet, View, Text, Image, FlatList, Button } from 'react-native'

export default function MyFeed({navigation}) {
    return (
        <View>
            <Text>
                profile
            </Text>
            <Button
            onPress={() => navigation.navigate("Setting")}
            >나의 계정설정</Button>

        </View>
    )
}
