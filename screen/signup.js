import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import styling from '../styling/styling'
import { Icon } from 'react-native-elements';
import database from '@react-native-firebase/database';

const reference = database().ref('users/');


const styles = StyleSheet.create(styling)


function Signup({navigation}) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')

    const signupUser = ()=>{
        let obj = {
            email,password,name
        }
        reference.push(obj).then(()=>{
            Alert.alert('Class Todo App','Data Send Successfully',[{
                label:'Okay',
                onPress:()=>console.log('Alert Button Press')
            }])
            console.log('Data Send Successfully')
        })
        navigation.navigate('Login',obj)
    } 

    return <>
        <View>
            <View style={styles.flexCenter}>
                <Image style={{ width: 200, height: 200 }} source={{ uri: 'https://www.kindpng.com/picc/m/3-34058_download-design-png-photos-logo-images-hd-png.png' }} />
            </View>
            <Text style={[styles.heading,styles.textCenter]}>Signup</Text>
            <View>
                <View style={[styles.p1, styles.m1]}>
                    <TextInput value={name} onChangeText={(e)=>setName(e)} style={[styles.input,styles.bgwhite]} placeholder='Enter Name' />
                </View>
                <View style={[styles.p1, styles.m1]}>
                    <TextInput onChangeText={(e)=>setEmail(e)} keyboardType='email-address' style={[styles.input,styles.bgwhite]} placeholder='Enter Email' />
                </View>
                <View style={[styles.p1, styles.m1]}>
                    <TextInput onChangeText={(e)=>setPassword(e)} secureTextEntry={true} keyboardType='numeric' style={[styles.input,styles.bgwhite]} placeholder='Enter Password' />
                </View>
                <View style={[styles.p1, styles.m1]}>
                    <TouchableOpacity onPress={signupUser} style={styles.addBtn}>
                        <Text style={{ fontSize: 20, textAlign: 'center' }}>  <Icon
                            name='signup'
                            type='fontawsome'
                            color='#517fa4'
                            size={20}
                            ViewStyle={{fontSize:35}}
                        /> signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={[styles.p1, styles.m1,styles.flexCenter,styles.flexColumn]}>
                    <Text>Are You New Here?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={styles.fs2}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}

export default Signup