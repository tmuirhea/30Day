import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';
//import {Checkmark} from 'react-checkmark';


function ChallengeList({ id, Description, onPress }) {
  

  return (
    <TouchableOpacity onPress={onPress}>
        <View style = {styles.button}>
            <Text style ={styles.buttonText}>{Description}</Text>
        </View>
    </TouchableOpacity>
      
      //onPress={() => toggleComplete()}
      
    
  );
}

const styles = StyleSheet.create({
    button: {
        marginLeft: 24,
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