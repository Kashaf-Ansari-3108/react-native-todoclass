import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


function ImagePicker() {


    const [imageUri,setImageUri] = useState('')
    let camera = () => {
        launchCamera({ mediaType: 'photo', includeBase64: true }, async (callback) => {
            console.log(callback.assets[0].base64)
            let ur = await callback.assets[0].base64
            setImageUri(ur)
        });
    }
    let gallery = () => {
        launchImageLibrary({ mediaType: 'photo', includeBase64: true }, (callback) => {
            console.log(callback)
        });

    }
    return <>
        <View>
            <Text>Image Picker</Text>
            <TouchableOpacity onPress={camera}>
                <Text>
                    Open Camera
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={gallery}>
                <Text>
                    Open Gallery
                </Text>
            </TouchableOpacity>


            <Image style={{width:200,height:200}} source={{uri:imageUri}} />
        </View>
    </>
}

export default ImagePicker