import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity,ImageBackground,TextInput, SafeAreaView, StyleSheet, Text, View, ScrollView,Alert, Image } from 'react-native';
import DoctorLogin from './DoctorLogin';
import axios from "axios";

const bkimage = require('../assets/background.jpg')

export default function NewAccount({navigation}) {
  
  const [speciality,setSpeciality]=useState('');
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const newDoctor = ()=>{

      axios.post('http://localhost:3000/doctor/signup',{
        name:name,
        email:email,
        password:password,
        speciality:speciality
      }).then(()=>{
        navigation.navigate(DoctorLogin);
      }).catch(()=>{
      });
		//   var headers= {
		//     Accept: "application/json",
		//     "Content-Type": "application/json",
		//   };

		//   var apiUrl="http://localhost:8080/esmart/insertSpecialist.php";

		//  let result = await  fetch(
		//     apiUrl,
		//   {
		//     mode: 'no-cors',
		//      withCredentials: true,
		//      crossorigin: true,
		//      mode: 'no-cors',
		//     method: "POST",
		//     headers:headers,
		//     body: JSON.stringify(data)
		//   }
		//    )

     

  }


  return (
    <>
    <ImageBackground source={bkimage} style={styles.imageBackgroundContainer}>
      <SafeAreaView style={{ flex: 1 }}>

        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <Text style={[styles.textStyle, { fontSize: 50 }]}>Specialist Profile</Text>
        </View>
        <ScrollView style={{ marginTop: '20%' }}>
          <View>
            <TextInput style={styles.inputStyle} onChangeText={setName} placeholder="Name" placeholderTextColor="#D3D3D3" />
            <TextInput style={styles.inputStyle} onChangeText={setEmail} placeholder="Enter Email" placeholderTextColor="#D3D3D3" />
            <TextInput secureTextEntry={true} style={styles.inputStyle} onChangeText={setPassword} placeholder="Enter Password" placeholderTextColor="#D3D3D3" />
            <TextInput style={styles.inputStyle} onChangeText={setSpeciality} placeholder="Specialization" placeholderTextColor="#D3D3D3" />


            <TouchableOpacity style={styles.touchable}
              onPress={()=>{newDoctor();alert(`Doctor Added`)}}>
              <Text style={{ fontSize: 20, color: '#D3D3D3' }}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
    </>
  );
}

  

const styles = StyleSheet.create({
    imageBackgroundContainer:{
      flex:1,
    },
    textStyle:{
        color:'white',
        fontWeight:'bold',
        color:'silver',
    },
    inputStyle: {
        backgroundColor:'rgba(83, 110, 115, 0.6)',
        fontSize: 20,
        color: '#D3D3D3',
        marginBottom: 25,
        marginHorizontal:45,
        paddingLeft:15,
        height:55,
        borderRadius:10
    },

    DpView:{
      backgroundColor:'#D3D3D3',
      height:150,
      width:150,
      borderRadius:200,
      justifyContent:'center',
      alignSelf:'center',
      alignItems:'center',
      marginTop:'10%',
      marginBottom:50,
    },
    touchable:{
      backgroundColor:'rgba(83, 110, 115, 0.6)',
        alignSelf:'center',
        height:50,
        width:'70%',
        borderRadius:7,
        marginTop:30, 
        justifyContent:'center',
        marginBottom:10,
        alignItems:'center'
    },
  });