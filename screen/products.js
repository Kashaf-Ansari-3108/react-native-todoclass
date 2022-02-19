import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import styling from '../styling/styling'
import axios from 'axios'

const styles = StyleSheet.create(styling)


function Products({ navigation, route }) {
    const [user, setUser] = useState({})

    const apiHandle = axios.create({
        baseURL:'https://jsonplaceholder.typicode.com/todos'
    })

    useEffect(() => {
        setUser(route.params)
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            console.log('data =====>',res.data)
        })
    }, [])
    return <>
        <View>
            <View style={styles.p1}>
                <Text>Welcome {user.email}</Text>
            </View>
            <Text>Products</Text>
            <View style={[styles.m1, styles.p1]}>
                <Image source={{ uri: 'https://www.airforshare.com/assets/img/logo.svg' }} />
            </View>


        </View>
    </>
}
export default Products

