import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native'
import logo from '../assets/images/logo.png'
import back from '../assets/images/back.jpg'
import styling from '../styling/styling'

const styles = StyleSheet.create(styling)

function Todo({navigation,route}) {
    const [text, setText] = useState('')
    const [list, setList] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [indexVAL, setindexVAL] = useState()
    console.log(route.params)
    const add = () => {
        if(isEdit){
            // editing 
            list[indexVAL] = text
            setList([...list])
            setIsEdit(false)
        }else{
            //add
            setList([...list, text])
            setText('')
        }
       
    }

    const deleteTodo = (ind)=>{
        list.splice(ind,1)
        setList([...list])
    }
    const editTodo = (ind)=>{
        setText( list[ind])
        setIsEdit(true)
        setindexVAL(ind)
    }
    return <>
    <ImageBackground source={back}>
        <View style={styles.main}>
            <View style={styles.header}>
                {/* <Image style={{width:50,height:50}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/GNOME_Todo_icon_2019.svg/1200px-GNOME_Todo_icon_2019.svg.png'}} /> */}
                <Image style={{width:50,height:50}} source={logo} />
                <Text style={styles.heading}>Todo</Text>
            </View>
            <View>
                <Text>welcome {route.params.email}</Text>
            </View>
            <View style={styles.flexCenter}>
                <TextInput value={text} onChangeText={(e) => setText(e)} style={styles.input} placeholder='Enter Todo ...' />
                <TouchableOpacity style={styles.addBtn} onPress={add}>
                    <Text style={{ fontSize: 20 }}>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={{padding:10}}>
                <ScrollView>

                    {list.map((e, i) => <View style={styles.flexBetween} key={i}>
                        <Text style={styles.todoItem}>{e}</Text>
                        <View>
                            <TouchableOpacity style={styles.addBtn} onPress={()=>deleteTodo(i)}>
                                <Text style={{ fontSize: 20 }}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.addBtn} onPress={()=>editTodo(i)}>
                                <Text style={{ fontSize: 20 }}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>)}
                </ScrollView>
            </View>
        </View>
        </ImageBackground>
    </>
}
export default Todo