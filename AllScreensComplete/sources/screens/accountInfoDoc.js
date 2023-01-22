import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, SafeAreaView, Alert, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import DoctorHomePage from './DoctorHomePage';

import { styles } from './styles';

export default function accountInfoDoc({navigation}) {


  return (
      <SafeAreaView style={styles.MainContainer}>
        <View style={[styles.textStyle, {paddingTop:'10%'}]}>
            <Icon name="user" size={120} color='#000044'/>
      </View>

        <View style={{alignItems:'center', marginTop:30}}>
          <Text style={[styles.textStyle, {fontSize: 48, color: '#000044', textAlign: "center" } ]}>Account Infromation</Text>
        </View>

        <View style = {styles.container8}>
            <View style={{marginTop:10,marginLeft:20}}>
              <Text  style={{fontSize:25,color:'#FFFFFF'}}>Name: </Text>
              <TouchableOpacity style={{ backgroundColor: '#9DA990', width:'95%', paddingVertical: "5%" }}>
                <Text style={{ fontSize: 20, color: '#FFFFFF', textAlign: "left" }}> user name</Text>
              </TouchableOpacity>
              
            </View>
            <View style={{marginTop:10,marginLeft:20}}>
              <Text  style={{fontSize:25,color:'#FFFFFF'}}>E-mail ID: </Text>
              <TouchableOpacity style={{ backgroundColor: '#9DA990', width:'95%', paddingVertical: "5%" }}>
                <Text style={{ fontSize: 20, color: '#FFFFFF', textAlign: "left" }}> abc@xyz.com</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop:10,marginLeft:20}}>
              <Text style={{fontSize:25,color:'#FFFFFF'}}>password: </Text>
              <TouchableOpacity style={{ backgroundColor: '#9DA990', width:'95%', paddingVertical: "5%" }}>
                <Text style={{ fontSize: 20, color: '#FFFFFF', textAlign: "left" }}> abc123xyz</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={{ backgroundColor: '#9DA990', width:'40%', paddingVertical: "3%",justifyContent: "center", alignItems: "center", marginTop: '2%' }}>
              <Text style={{ fontSize: 20, color: '#FFFFFF', textAlign: "left" }}>
                <Icon2 name="edit" size={20} color="#FFFFFF" /> Edit</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={{ backgroundColor: '#9DA990', width:'40%', paddingVertical: "3%",justifyContent: "center", alignItems: "center", marginTop: '2%' }}
              onPress={() => navigation.navigate(DoctorHomePage)}>
              <Text style={{ fontSize: 20, color: '#FFFFFF', textAlign: "left" }}>
                <Icon2 name="leftcircle" size={20} color="#FFFFFF" /> back</Text>
              </TouchableOpacity>
            </View>

            

        </View>
          
      </SafeAreaView>
   

  );
}
