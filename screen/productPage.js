import React, { useEffect,useState } from 'react'
import { View,Text, Image,StyleSheet } from 'react-native'
import styling from '../styling/styling'

const styles = StyleSheet.create(styling)


function ProductPage ({navigation,route}){
    const [product,setProduct] = useState({})
    
    useEffect(()=>{
        const obj = route.params
        setProduct(obj)
    },[])
    return <>
    <View>
        <Text style={styles.fs2}>{product.title}</Text>
        <Image style={{width:200,height:200}} source={{uri:product.image}} />
        <Text style={styles.fs2}>{product.description}</Text>
        <Text style={styles.fs2}>$ {product.price}</Text>
        <Text style={styles.fs2}>{product.category}</Text>
        {/* <Text style={styles.fs2}>{product.rating.rate}</Text> */}
    </View>
    </>
}
export default ProductPage