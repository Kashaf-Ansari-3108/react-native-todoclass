import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function MainScreen({ navigation }) {

    return <>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Products')}>
                <Text style={{fontSize:25,padding:10,backgroundColor:'lightgrey',marginVertical:10}}>Products</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={{fontSize:25,padding:10,backgroundColor:'lightgrey',marginVertical:10}}>Todo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={{fontSize:25,padding:10,backgroundColor:'lightgrey',marginVertical:10}}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AddQuestion')}>
                <Text style={{fontSize:25,padding:10,backgroundColor:'lightgrey',marginVertical:10}}>Add Question</Text>
            </TouchableOpacity>
        </View>
    </>
}
export default MainScreen