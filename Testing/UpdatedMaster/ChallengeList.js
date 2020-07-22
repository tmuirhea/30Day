import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import DailyChallenges from './DailyChallenges';
//import {Checkmark} from 'react-checkmark';


function ChallengeList({ id, Description, onPress }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(name)}>
        <View style = {styles.button}>
            <Text style ={styles.buttonText}>{Description}</Text>
        </View>
    </TouchableOpacity> 
  );
}

const styles = StyleSheet.create({
    button: {
        marginLeft: 12,
        backgroundColor: '#DCDCDC',
        width: 370,
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',

    }
})


export default React.memo(ChallengeList);
