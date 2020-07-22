'use strict';
import 'react-native-gesture-handler';
import * as React from 'react';

import { Dimensions, TouchableOpacity, StyleSheet, Button, View, Text, Image, Alert, ScrollView} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CheckBox } from 'react-native';
import { useState } from "react";
import Challenges from './Challenges';                                 //import Challenge Page from Challenges.js
import DailyChallenges from './DailyChallenges';                       //import specific tasks for each Challenge from DailyChallenges
import DailyChallenges2 from './DailyChallenges2';

const {width, height} = Dimensions.get('window');

function HomeScreen({ navigation }) {
  const jumptoch = () => navigation.navigate('Challenges');            //navigate to the Challenge Page
  return (
    <View style={styles.home_style}>
      <TouchableOpacity onPress={jumptoch}>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{uri: 'https://i.imgur.com/2ce7FJc.png'}}         //the "plus" button, which is a picture
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.text_style}>You have no new challenges, click the + button to add!</Text>
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{uri: 'https://i.imgur.com/2ce7FJc.png'}}
    />
  );
}

function Settings(){
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{uri: 'https://i.imgur.com/FHyTSws.png'}}
    />
  );
}

const Stack = createStackNavigator();                        //create a stack of screens

function App() {
  return (
    <NavigationContainer>                                    //home page screen
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="30Days"
          component={HomeScreen}
          options={{headerTitleStyle: {alignSelf: 'center'}}}
        />
        <Stack.Screen                                       //Challenge List screen
          name="Challenges"
          component={Challenges}
          options={{
            headerStyle: {
              backgroundColor: '#FA8072'
            }  
          }}
        />
        <Stack.Screen                                      //tasks for the first challenge
          name="todoPage"
          component={DailyChallenges}
        />
        <Stack.Screen
          name="todoPage2"                                 //tasks for the second challenge
          component={DailyChallenges2}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  challenges_style:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home_style: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_style: {
    color: "#20232a",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold"
  },
  button_style:{
    color: "#A43D27",
  },
  styles_lesson: {
    color: '#F35F3F',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },

//Button style for challenges page ZJ 07/14
  button: {
      marginLeft: 24,
      backgroundColor: '#DCDCDC',
      width: 370,
      height: 50,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    }
    
});

export default App;
