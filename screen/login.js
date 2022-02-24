import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert, ToastAndroid } from 'react-native'
import styling from '../styling/styling'
import { Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';



const styles = StyleSheet.create(styling)


function Login({navigation}) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const loginUser = ()=>{
       
        let obj = {
            email,password
        }

        if(!obj.email){
            Alert.alert('Authentication Error','Enter Email',[{label:'Okay'}])
            return
        }
        if(!obj.password && password.length<6){
            Alert.alert('Authentication Error','Enter Password and password should be more that 6 characters',[{label:'Okay'}])
            return
        }

        auth().signInWithEmailAndPassword(obj.email,obj.password).then((scces)=>{
            ToastAndroid.show("User login Successfully ", ToastAndroid.SHORT);
            navigation.navigate('Products',obj)
            console.log(scces)
        }).catch((err)=>{
            Alert.alert('Authentication Error',err.messag,[{label:'Okay'}])
            console.log(err)
        })
        
    } 

    return <>
        <View>
            <View style={styles.flexCenter}>
                <Image style={{ width: 200, height: 200 }} source={{ uri: 'https://www.kindpng.com/picc/m/3-34058_download-design-png-photos-logo-images-hd-png.png' }} />
            </View>
            <Text style={[styles.heading,styles.textCenter]}>Login</Text>
            <View>
                <View style={[styles.p1, styles.m1]}>
                    <TextInput onChangeText={(e)=>setEmail(e)} keyboardType='email-address' style={[styles.input,styles.bgwhite]} placeholder='Enter Email' />
                </View>
                <View style={[styles.p1, styles.m1]}>
                    <TextInput onChangeText={(e)=>setPassword(e)} secureTextEntry={true} keyboardType='numeric' style={[styles.input,styles.bgwhite]} placeholder='Enter Password' />
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
                <View style={[styles.p1, styles.m1,styles.flexCenter,styles.flexColumn]}>
                    <Text>Are You New Here?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                        <Text style={styles.fs2}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}

export default Login