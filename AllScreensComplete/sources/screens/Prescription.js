import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity, Alert, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

import Patient from './Patient';
import Icon3 from 'react-native-vector-icons/AntDesign';
const img_src = require('../assets/background.jpg')

export default function Prescription({navigation}) {
    return (
        <View style = {styles.MainContainer}>
        
            <View>
                <Text style={[styles.container2, {paddingTop:'13%',paddingBottom:50,fontSize:30, color:'#000044',alignSelf:'center'}]}>
                Upload Prescription</Text>
            </View>

            <View style={[styles.container7, {backgroundColor:'#808977'}]}>

                <Text style={{paddingTop:'10%',color: '#FFFFFF',fontSize:25,alignSelf:'center',fontFamily:'Iowan Old Style'}}>
                    How do you want to upload?
                </Text>

                <TouchableOpacity onPress={()=>{ Alert.alert('Work'); } }
                 style={{paddingTop:30,alignSelf:'center'}}>
                    <Icon name="camera" size={70} color="#FFFFFF" />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{ Alert.alert('Work'); } }
                style={{paddingTop:30,paddingLeft:100}} >
                        <Icon1 name="add-to-photos" size={93} color="#FFFFFF" />
                    </TouchableOpacity>

            </View>

            <Text style={{paddingTop:50,color: '#183E9F',fontSize:25,alignSelf:'center',fontFamily:'Iowan Old Style'}}>
                The Prescription upload guide:
            </Text>


            <Text style={{paddingTop:25,color: '#183E9F',fontSize:25,alignSelf:'center',fontFamily:'Iowan Old Style'}}>
                  * Do not crop any part of the Prescription picture
            </Text>

            <Text style={{paddingTop:10,color: '#183E9F',fontSize:25,alignSelf:'center',fontFamily:'Iowan Old Style'}}>
                  * Avoid uploading a blurred and unclear picture of Prescription
            </Text>            
            <View>
              <TouchableOpacity style={{ backgroundColor: '#9DA990', width:'120%', paddingVertical: "3%",justifyContent: "center", alignItems: "center", marginTop: '5%' }}
              onPress={() => navigation.navigate(Patient)}>
              <Text style={{ fontSize: 20, color: '#FFFFFF', textAlign: "left" }}>
                <Icon3 name="leftcircle" size={20} color="#FFFFFF" /> back</Text>
              </TouchableOpacity>
            </View>
        </View>
        
   
 );
}