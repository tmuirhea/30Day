


'use strict';
import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity, StyleSheet, Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
/***  Firebase integration ***/
import React, { Component } from 'react';
import {addChallenge, getChallenge} from './30dayAPI';
import { ListItem, Divider } from 'react-native-elements';
class ChallengeList extends Component {
    state = {
        challengeList: [],
        currentChallengeItem: null,
    }
    onChallengeAdded = (challenge) => {
        console.log("Challenge Added");
        console.log(challenge);
        this.setState(prevState => ({
            challengeList: [...prevState.challengeList, challenge]
        }));
    }
    onChallengeRecieved = (challengeList) => {
        console.log(challengeList);
        this.setState(prevState => ({
            challengeList: prevState.challengeList = challengeList
        }));
    }
    componentDidMount(){
        getChallenge(this.onChallengeRecieved);
    }
}

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

function ChallengesScreen() {
  return (
    <View style={styles.challenges_style}>
      <Text>Challenge Screen Message hi hello :) </Text>
    </View>
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
  }
});

export default App;