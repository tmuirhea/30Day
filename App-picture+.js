/*
npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
*/


'use strict';
import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity, StyleSheet, Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { CheckBox } from 'react-native';
import { useState } from "react";
//import React, { Component } from 'react';


function HomeScreen({ navigation }) {
  const jumptoch = () => navigation.navigate('Challenges');
  return (
    <View style={styles.home_style}>
      <TouchableOpacity onPress={jumptoch}>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{uri: 'https://i.imgur.com/2ce7FJc.png'}}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.text_style}>You have no new challenges, click the + button to add!</Text>
      <StatusBar style="auto" />
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

function ChallengesScreen() {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.challenges_style}>
      <Text>Challenge Screen Message hi hello :) </Text>
      <CheckBox
      value={isSelected}
      onValueChange={setSelection}
      style={styles.checkbox}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="30Days"
          component={HomeScreen}
          options={{headerTitleStyle: {alignSelf: 'center'}}}
          //options={{ headerTitle: props => <Settings {...props} /> }}

        />
        <Stack.Screen
          name="Challenges"
          component={ChallengesScreen}
          //options={{ title: '30Days' }}
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
  }
});

export default App;
