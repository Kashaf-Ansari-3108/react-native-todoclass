import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import styling from '../styling/styling'
import { Icon } from 'react-native-elements';


const styles = StyleSheet.create(styling)


function Login({navigation}) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const loginUser = ()=>{
        let obj = {
            email,password
        }
        navigation.navigate('Products',obj)
    } 

    return <>
        <View>
            <Text style={styles.heading}>Login</Text>
            <View>
                <Image style={{ width: 200, height: 200 }} source={{ uri: 'https://www.kindpng.com/picc/m/3-34058_download-design-png-photos-logo-images-hd-png.png' }} />
            </View>
            <View>
                <View style={[styles.p1, styles.m1]}>
                    <TextInput onChangeText={(e)=>setEmail(e)} keyboardType='email-address' style={styles.input} placeholder='Enter Email' />
                </View>
                <View style={[styles.p1, styles.m1]}>
                    <TextInput onChangeText={(e)=>setPassword(e)} secureTextEntry={true} keyboardType='numeric' style={styles.input} placeholder='Enter Password' />
                </View>
                <View style={[styles.p1, styles.m1]}>
                    <TouchableOpacity onPress={loginUser} style={styles.addBtn}>
                        <Text style={{ fontSize: 20, textAlign: 'center' }}>  <Icon
                            name='login'
                            type='fontawsome'
                            color='#517fa4'
                            size={20}
                            ViewStyle={{fontSize:35}}
                        /> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={[styles.p1, styles.m1]}>
                    <Text>Are You New Here?</Text>
                    <TouchableOpacity style={styles.addBtn}>
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}

export default Login