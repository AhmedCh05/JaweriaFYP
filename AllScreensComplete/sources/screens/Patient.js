import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import ContactDoc from './ContactDoc';
import Ddi from './Ddi';
import Dfi from './Dfi';
import MedicalRecord from './MedicalRecord';
import Prescription from './Prescription';
import { ScrollView } from 'react-native';
import PatientLogin from './PatientLogin';
import PatientProfile from './PatientProfile';

// const img_src = require('../assets/patienthome.jpg')

export default function Patient({ navigation }) {
  return (
    //<ImageBackground source={img_src} style={{flex:1}}>
    <View style={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity onPress={() => { Alert.alert('Work'); }}>
            <TextInput style={[styles.container, { color: '#ffffff' }]} placeholder="Search Medicine" placeholderTextColor="#ffffff" />
          </TouchableOpacity>
        </View>


        <View style={{ marginTop: 1 }}>
          <Text style={[styles.container2, { fontSize: 30, color: '#183E9F', width: "100%", textAlign: "center" }]}>Patient's Profile {'\n'} Select:</Text>
        </View>


        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%", borderRadius:'20' }}>
          <TouchableOpacity style={{ backgroundColor: '#9DA990', width:'100%', paddingVertical: "5%" }}
            onPress={() =>{navigation.navigate(PatientProfile)}}>
            <Text style={{ fontSize: 30, color: '#FFFFFF', textAlign: "left" }}>
              <Icon name="user" size={50} color="#FFFFFF" />  Patient's  Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%", marginTop: "1%", borderRadius:'20' }}>
          <TouchableOpacity style={{ backgroundColor: '#89959A', width: "100%", paddingVertical: "5%" }}
            onPress={() => navigation.navigate(ContactDoc)}>
            <Text style={{ fontSize: 30, color: '#FFFFFF', textAlign: "left" }}>
              <Icon2 name="doctor" size={50} color="#FFFFFF" />  Contact  Specialist</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%", marginTop: "1%", borderRadius:'20' }}>
          <TouchableOpacity style={{ backgroundColor: '#A68D80', width: "100%", paddingVertical: "5%" }}
            onPress={() => navigation.navigate(MedicalRecord)}>
            <Text style={{ fontSize: 30, color: '#FFFFFF', textAlign: "left" }}>
              <Icon name="heartbeat" size={50} color="#FFFFFF" />  Medical Record</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%", marginTop: "1%", borderRadius:'20' }}>
          <TouchableOpacity style={{ backgroundColor: '#808977', width: "100%", paddingVertical: "5%" }}
            onPress={() => navigation.navigate(Prescription)}>
            <Text style={{ fontSize: 30, color: '#FFFFFF', textAlign: "left" }}>
              <Icon name="camera" size={50} color="#FFFFFF" />  Scan Prescription</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%", marginTop: "1%", borderRadius:'20' }}>
          <TouchableOpacity style={{ backgroundColor: '#D4BD75', width: "100%", paddingVertical: "5%" }}
            onPress={() => navigation.navigate(Ddi)}>
            <Text style={{ fontSize: 30, color: '#FFFFFF', textAlign: "left" }}>
              <Icon2 name="drug-pack" size={50} color="#FFFFFF" />  DDI  Checker</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%", marginTop: "1%", borderRadius:'20' }}>
          <TouchableOpacity style={{ backgroundColor: '#C89090', width: "100%", paddingVertical: "5%" }}
            onPress={() => navigation.navigate(Dfi)}>
            <Text style={{ fontSize: 30, color: '#FFFFFF', textAlign: "left" }}>
              <Icon3 name="no-food" size={50} color="#FFFFFF" />  DFI  Checker</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%", marginTop: "1%", borderRadius:'20' }}>
          <TouchableOpacity style={{ backgroundColor: '#C89090', width: "100%", paddingVertical: "5%" }}
            onPress={() =>{localStorage.removeItem("token");localStorage.removeItem("id");navigation.navigate(PatientLogin)}}>
            <Text style={{ fontSize: 30, color: '#FFFFFF', textAlign: "left" }}>
              <button size={20} color="#FFFFFF" /> LOG OUT</Text>
          </TouchableOpacity>
        </View>

      
      </ScrollView >
    </View >
    //</ImageBackground>
  );

}