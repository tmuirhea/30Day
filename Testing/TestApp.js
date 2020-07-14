

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
const {width, height} = Dimensions.get('window');
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

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Title}>
        <TouchableOpacity style={styles.selectButton}>
          <Text style={styles.sb}> ≡ </Text>
        </TouchableOpacity>
        <Text style={styles.title}> 30 Days</Text>
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.pb}> + </Text>
        </TouchableOpacity>
        </View>
      <View style={styles.Yhnn}>
        <Text style={styles.yhnn}> You have no new{"\n"} challenges,
        click the +{"\n"} button to add</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
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
  }
});
