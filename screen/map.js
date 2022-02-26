import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE,Marker,Callout } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import markerImage from '../assets/images/marker.png'

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default function CustomMap() {
   return <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
        latitude: 24.9143688,
        longitude: 67.0560685,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
       
         <Marker title='Lalu Khait' description='Liaquatabad Lalu Khait' image={markerImage} coordinate={{
         latitude: 24.9143688,
         longitude: 67.0560685,
        
       }} >
           <Callout  tooltip>
               <View style={{backgroundColor:'#fff',padding:20}}>
                   <Text>Lalu Khait</Text>
                   <Text>Liaquatabad Lalu Khait</Text>
               </View>
           </Callout>
       </Marker>
         <Marker title='SAIMS' image={markerImage} coordinate={{
         latitude: 24.9129124,
         longitude: 67.0560685,
        
       }} />
     </MapView>
   </View>
};