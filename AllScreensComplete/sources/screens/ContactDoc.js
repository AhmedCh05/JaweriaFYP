import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import axios from 'axios';

const img_src = require('../assets/cdbackground.jpg')

export default function ContactDoc({ navigation }) {
  const [response,setResponse] = useState();
  const [speciality,setSpe] = useState();

  const getDatabyCategory = (obj)=>{
    console.log(speciality)
    axios.get("http://localhost:3000/doctor/"+obj).then((res) => {
      setResponse(res.data);
    });
    console.log(response);
  }
  return (
    //<ImageBackground source={img_src} style={{flex:1}}>
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={{ alignItems: 'center', marginTop: 50 }}>
          <Text style={[styles.textStyle, { fontSize: 48, color: '#000044', textAlign: "center" }]}>Contact Medical {'\n'}Specialist</Text>
        </View>
        <View style={{ marginTop: 25, flexDirection: "row", width: "100%", justifyContent: "center" }}>
          <TouchableOpacity style={[styles.touchableStyle2, { backgroundColor: '#9DA990', width: "50%" }]} onPress={()=>{setSpe("physician");getDatabyCategory(speciality)}}>
            <Text style={{ fontSize: 22, color: '#FFFFFF', textAlign: 'center', marginTop: 15 }} >Physicians</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.touchableStyle3, { backgroundColor: '#9DA990', width: "50%" }]} onPress={()=>{setSpe("cardiologist");getDatabyCategory(speciality)}}>
            <Text style={{ fontSize: 25, color: '#FFFFFF', textAlign: "center", marginTop: 15}}>Cardiologists</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 25, flexDirection: "row" }}>
          <TouchableOpacity style={[styles.touchableStyle2, { backgroundColor: '#89959A' }]} onPress={()=>{setSpe("neurologist");getDatabyCategory(speciality)}}>
            <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Neurologist</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.touchableStyle3, { backgroundColor: '#89959A' }]} onPress={()=>{setSpe("orthopedic");getDatabyCategory(speciality)}}>
            <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Orthopedics</Text>
          </TouchableOpacity>
        </View>


        <View style={{ marginTop: 25, flexDirection: "row" }}>
          <TouchableOpacity style={[styles.touchableStyle2, { backgroundColor: '#A68D80' }]} onPress={()=>{setSpe("gynecologist");getDatabyCategory(speciality)}}>
            <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Gynecologists</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.touchableStyle3, { backgroundColor: '#A68D80' }]} onPress={()=>{setSpe("pediatrician");getDatabyCategory(speciality)}}>
            <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Pediatricians</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 25, flexDirection: "row" }}>
          <TouchableOpacity style={[styles.touchableStyle2, { backgroundColor: '#808977' }]} onPress={()=>{setSpe("pathologist");getDatabyCategory(speciality)}}>
            <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Pathologists</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.touchableStyle3, { backgroundColor: '#808977' }]} onPress={()=>{setSpe("radiologist");getDatabyCategory(speciality)}}>
            <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Radiologists</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 25, flexDirection: "row" }}>
          <TouchableOpacity style={[styles.touchableStyle2, { backgroundColor: '#D4BD75' }]} onPress={()=>{setSpe("dermatologist");getDatabyCategory(speciality)}}>
            <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Dermatologists</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.touchableStyle3, { backgroundColor: '#D4BD75' }]} onPress={()=>{setSpe("virologist");getDatabyCategory(speciality)}}>
            <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Virologists</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 25, flexDirection: "row" }}>
          <TouchableOpacity style={[styles.touchableStyle2, { backgroundColor: '#C89090' }]} onPress={()=>{setSpe("pharmacist");getDatabyCategory(speciality)}}>
            <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Pharmacists</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.touchableStyle3, { backgroundColor: '#C89090' }]} onPress={()=>{setSpe("physoclogist");getDatabyCategory(speciality)}}>
            <Text style={{ fontSize: 25, color: '#FFFFFF', alignSelf: 'center', marginTop: 15 }}>Physoclogists</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>{'\n'}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>









    //</ImageBackground>

  );
}
