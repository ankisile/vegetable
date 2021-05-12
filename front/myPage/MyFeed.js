import React from 'react'
import { StyleSheet, View, Text, Image, FlatList, Button } from 'react-native'

export default function MyFeed() {
    return (
        <View>
            <Text>
                Profile
            </Text>
            <Button
            
            onPress={() => navigation.navigate("Setting")}>
                setting
            </Button>
        </View>
    )
}
