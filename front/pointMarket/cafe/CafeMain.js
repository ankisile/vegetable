import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import firebase from 'firebase'
import { data } from 'browserslist'
require("firebase/firestore")

export default function CafeMain({ navigation }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        firebase.firestore()
            .collection('pointMarket')
            .where("category", "==", "cafe/bakery")
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                    setProducts(doc.data());
                });
            })
            .catch((error) => {
                console.log(error)
            })

        console.log("products : " + products)
    }, [])

    // const showList = products => {
    //     return products.map((item) => {
    //         return(<Text>{item.brand}</Text>);
    //     });
    // }

    return (
        <View>
            <Text>보유 포인트 : 00점</Text>
            <Text>Best Item</Text>
            <Text>이미지1 이미지2</Text>
            <Text>Brand1 Brand2</Text>
            <Text>스타벅스</Text>
            {/* {showList(products)} */}
        </View>
    )
}
