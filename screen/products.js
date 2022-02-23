import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import styling from '../styling/styling'
import axios from 'axios'

const styles = StyleSheet.create(styling)


function Products({ navigation, route }) {
    const [user, setUser] = useState({})
    const [productData, setProductData] = useState([])

    const apiHandle = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/todos'
    })

    const productPress = (obj)=>{
        console.log(obj)
        navigation.navigate('ProductPage',obj)
    }
    useEffect(() => {
        setUser(route.params)
        axios.get('https://fakestoreapi.com/products').then((res) => {
            console.log('data =====>', res.data)
            setProductData(res.data)
        })
    }, [])
    return <>
        <View>
            <View style={[styles.p1, styles.bgDark]}>
                <Text style={[styles.fs3, styles.txtWhite, { fontSize: 25 }]}>Welcome {user.email}</Text>
            </View>

            <ScrollView>
                <View>
                    {productData.map((e, i) => <TouchableOpacity onPress={()=>productPress(e)}>
                        <View style={[styles.p1, styles.m1, styles.card]} key={e.id}>
                            <Image style={{ width: 200, height: 200 }} source={{ uri: e.image }} />
                            <Text style={styles.fs2}>{e.title}</Text>
                        </View>
                    </TouchableOpacity>)}
                </View>
            </ScrollView>




        </View>
    </>
}
export default Products

