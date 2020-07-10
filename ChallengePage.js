import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';

//ZJ
import {Alert, ScrollView} from 'react-native'
//ZJ

const {width, height} = Dimensions.get('window');

//ZJ
const Chlg = () => {
	const showAlert1 = () => {
		Alert.alert('Successfully added (need future activity)')
	}
	const showAlert2 = () => {
		Alert.alert(
			'Adding new challenge...',
			'Are you sure you want to add this challenge?',
			[
			    {text: 'yes', onPress: () => showAlert1()},
				{text: 'no', style: 'cancel'},
			],
			{cancelable: false}
		)
	}
	
	return (
	<View style={{AlignItems:"center"}}>
	    <TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 1</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 2</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 3</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 4</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 5</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 6</Text>
		</TouchableOpacity>
		</View>
)
}
//ZJ



export default function App() {
		const showAlert1 = () => {
		Alert.alert('Successfully added (need future activity)')
	}
	const showAlert2 = () => {
		Alert.alert(
			'Adding new challenge...',
			'Are you sure you want to add this challenge?',
			[
			    {text: 'yes', onPress: () => showAlert1()},
				{text: 'no', style: 'cancel'},
			],
			{cancelable: false}
		)
	}
	
  return (
	
	<ScrollView style={{AlignItems:"center"}}>
	    <TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 1</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 2</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 3</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 4</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 5</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 6</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 7</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 8</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 9</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 10</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 11</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress = {showAlert2} style = {style.button}>
		    <Text>Challenge 12</Text>
		</TouchableOpacity>
		
		</ScrollView>
  );
}



const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Yhnn:{
    alignItems: 'center',
    marginTop: width/2,

  },
  yhnn:{
    fontSize:22,
  },
  Title:{
    flexDirection:'row',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 10,
  },
  title:{
    fontSize:32,
  },
  fb:{
    alignItems: 'center',
    backgroundColor:'yellow',
    marginHorizontal: 180,
  },
  pb:{
    fontSize:32,
  },
  plusButton:{
    marginLeft:width/2,
  },
  sb:{
    fontSize:36,
  },
  
  //ZJ
  button: {
	  marginLeft:width/4,
	  backgroundColor: '#87CEFA',
	  width: 200,
	  height: 50,
	  borderRadius: 20,
	  justifyContent: 'center',
	  alignItems: 'center',
	  marginTop: 30,
  }
  //ZJ
});