'use strict';
import 'react-native-gesture-handler';
import * as React from 'react';

//adding "Dimensions", "Alert, ScrollView". Zijun 07/14
import { Dimensions, TouchableOpacity, StyleSheet, Button, View, Text, Image, Alert, ScrollView} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { StatusBar } from 'expo-status-bar';
import { CheckBox } from 'react-native';
import { useState } from "react";
//import React, { Component } from 'react';
//import Challenges from './Todos';
import Challenges from './Challenges';

//Implementing Dimensions ZJ 07/14
const {width, height} = Dimensions.get('window');

function HomeScreen({ navigation }) {
  //const jumptoch = () => navigation.navigate('Challenges');
  const jumptoch = () => navigation.navigate('chlg');
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

//Implement challengesScreen ZJ 07/14
function ChallengesScreen({ navigation }) {
  const showAlert1 = () => {
    Alert.alert(
      'Successfully added!',
      'Going to the challenge lists...',
    [
      {text: 'ok', onPress: () => navigation.navigate("todoPage")}  //import firebase and add activity here
    ],
    
    )
	}
	const challengeAlert1 = () => {
		Alert.alert(
			'Improve your writing skills',
			'Introduction to this challenge',     //import firebase and substitute introductions here?
			[
			  {text: 'yes', onPress: () => showAlert1()}, 
				{text: 'no', styles: 'cancel'},
			],
			{cancelable: false}
		)
  }

  const challengeAlert2 = () => {
		Alert.alert(
			'Practice midfulness techniques',
			'Introduction to this challenge',
			[
			  {text: 'yes', onPress: () => showAlert1()}, 
				{text: 'no', styles: 'cancel'},
			],
			{cancelable: false}
		)
  }
  
	const challengeAlert3 = () => {
		Alert.alert(
			'Learn 30 new chess strategies',
			'The art of chess strategy is knowing how to formulate a plan for the chess game, and arrange your chess pieces to accomplish this plan.',
			[
			  {text: 'yes', onPress: () => showAlert1()}, 
				{text: 'no', styles: 'cancel'},
			],
			{cancelable: false}
		)
  }

  const challengeAlert4 = () => {
		Alert.alert(
			'Code an app from scratch',
			'Introduction to this challenge',
			[
			  {text: 'yes', onPress: () => showAlert1()}, 
				{text: 'no', styles: 'cancel'},
			],
			{cancelable: false}
		)
  }
  const challengeAlert5 = () => {
		Alert.alert(
			'Learn basic day trading',
			'Introduction to this challenge',
			[
			    {text: 'yes', onPress: () => showAlert1()}, 
				{text: 'no', styles: 'cancel'},
			],
			{cancelable: false}
		)
  }
  const challengeAlert6 = () => {
		Alert.alert(
			'Build better daily health habits',
			'Introduction to this challenge',
			[
			    {text: 'yes', onPress: () => showAlert1()}, 
				{text: 'no', styles: 'cancel'},
			],
			{cancelable: false}
		)
  }
  const challengeAlert7 = () => {
		Alert.alert(
			'Create a UI/UX portfolio',
			'Introduction to this challenge',
			[
			    {text: 'yes', onPress: () => showAlert1()}, 
				{text: 'no', styles: 'cancel'},
			],
			{cancelable: false}
		)
  }
  const challengeAlert8 = () => {
		Alert.alert(
			'The name of this challenge',
			'The overall introduction to this challenge',
			[
			  {text: 'yes', onPress: () => showAlert1()}, 
				{text: 'no', styles: 'cancel'},
			],
			{cancelable: false}
		)
  }
  return (
	
	<ScrollView style={{AlignItems:"center"}}>
	    <TouchableOpacity onPress = {challengeAlert1} style = {styles.button}>
		    <Text>Improve your writing skills</Text> 
		</TouchableOpacity>
		<TouchableOpacity onPress = {challengeAlert2} style = {styles.button}>
		    <Text>Practice midfulness techniques</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {challengeAlert3} style = {styles.button}>
		    <Text>Learn 30 new chess strategies</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {challengeAlert4} style = {styles.button}>
		    <Text>Code an app from scratch</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {challengeAlert5} style = {styles.button}>
		    <Text>Learn basic day trading</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {challengeAlert6} style = {styles.button}>
		    <Text>Build better daily health habits</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {challengeAlert7} style = {styles.button}>
		    <Text>Create a UI/UX portfolio</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {challengeAlert8} style = {styles.button}>
		    <Text>Challenge 8</Text>
		</TouchableOpacity>
		
		</ScrollView>
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

          //change the title color ZJ 07/14
          options={{
            headerStyle: {
              backgroundColor: '#FA8072'
            }
            
          }}

          //options={{ title: '30Days' }}
        />
        <Stack.Screen
          name="todoPage"
          component={Challenges}
        />
        <Stack.Screen
          name="chlg"
          component={Challenges}
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