'use strict';
import 'react-native-gesture-handler';
import * as React from 'react';

//adding "Dimensions", "Alert, ScrollView". Zijun 07/14
import { Dimensions, TouchableOpacity, StyleSheet, Button, View, Text, Image, Alert, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
//import React, { Component } from 'react';

//Implementing Dimensions ZJ 07/14
const {width, height} = Dimensions.get('window');

function HomeScreen({ navigation }) {
  return (
    <View style={styles.home_style}>
      <Button
        style ={styles.button_style}
        title="+"
        onPress={() => navigation.navigate('Challenges')}
      />
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

//Implement challengesScreen ZJ 07/14
function ChallengesScreen() {
  const showAlert1 = () => {
		Alert.alert('Successfully added (need future activity)')
	}
	const showAlert2 = () => {
		Alert.alert(
			'Adding new challenge...',
			'Are you sure you want to add this challenge?',
			[
			    {text: 'yes', onPress: () => showAlert1()}, 
				{text: 'no', styles: 'cancel'},
			],
			{cancelable: false}
		)
	}
	
  return (
	
	<ScrollView style={{AlignItems:"center"}}>
	    <TouchableOpacity onPress = {showAlert2} style = {styles.button}>
		    <Text>Challenge 1</Text> 
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {styles.button}>
		    <Text>Challenge 2</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {styles.button}>
		    <Text>Challenge 3</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {styles.button}>
		    <Text>Challenge 4</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {styles.button}>
		    <Text>Challenge 5</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {styles.button}>
		    <Text>Challenge 6</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {styles.button}>
		    <Text>Challenge 7</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {styles.button}>
		    <Text>Challenge 8</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {styles.button}>
		    <Text>Challenge 9</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {styles.button}>
		    <Text>Challenge 10</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {styles.button}>
		    <Text>Challenge 11</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {styles.button}>
		    <Text>Challenge 12</Text>
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
          name="Home" 
          component={HomeScreen} 
          options={{ headerTitle: props => <LogoTitle {...props} /> }}
          //options={{ title: '30days' }}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  challenges_style:{
    flex: 1, 
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