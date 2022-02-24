import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator, Alert, ToastAndroid } from 'react-native'
import styling from '../styling/styling'
import axios from 'axios'
import { Icon } from 'react-native-elements'
import auth from '@react-native-firebase/auth';


const styles = StyleSheet.create(styling)


function Products({ navigation, route }) {
    const [user, setUser] = useState({})
    const [loader, setLoader] = useState(false)
    const [productData, setProductData] = useState([])

    const apiHandle = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/todos'
    })

    const productPress = (obj) => {
        console.log(obj)
        navigation.navigate('ProductPage', obj)
    }
    const logout = ()=>{
        auth().signOut().then(()=>{
            navigation.navigate('Login')
            ToastAndroid.show('Successfully Logout',ToastAndroid.SHORT)
        }).catch((err)=>{
            Alert.alert('Auth Error',err.message,[{label:'Okay'}])
        })
    }
    useEffect(() => {
        setLoader(true)
        setUser(route.params)
        axios.get('https://fakestoreapi.com/products').then((res) => {
            console.log('data =====>', res.data)
            setProductData(res.data)
            setLoader(false)
        })
    }, [])
    return <>
        <View>
            <View style={[styles.p1, styles.bgDark,styles.flexBetween]}>
                <Text style={[styles.fs3, styles.txtWhite, { fontSize: 25 }]}>Welcome {user && user.email ? user.email : '--'}</Text>
                <TouchableOpacity onPress={logout}>
                    <Icon type='AndDesign' color='#fff' size={30} name='logout' />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View>
                    {!loader ? productData.map((e, i) => <TouchableOpacity onPress={() => productPress(e)}>
                        <View style={[styles.p1, styles.m1, styles.card]} key={e.id}>
                            <Image style={{ width: 200, height: 200 }} source={{ uri: e.image }} />
                            <Text style={styles.fs2}>{e.title}</Text>
                        </View>
                    </TouchableOpacity>) : <View>
                        <ActivityIndicator size={80} />
                        </View>}
                </View>
            </ScrollView>




        </View>
    </>
}
export default Products

