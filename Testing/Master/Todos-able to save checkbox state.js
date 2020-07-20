//import React from 'react';
import React, { useState, useEffect } from 'react';
import { FlatList, View, Text} from 'react-native';
import Todo from './Todo';
import firestore from '@react-native-firebase/firestore';
import { Appbar, Button, TextInput, List } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

function Challenges() {
    const [ challenge, setChallenge ] = useState('');
    const [ loading, setLoading ] = useState(true);
    const [ challenges, setChallenges ] = useState([]);
    const [ challengeDetails, setchallengeDetails ] = useState([]);
    const ref = firestore().collection('Challenges');
    const db = ref.doc('Challenge1');
    const dailyChallenges = db.collection('Days');
    async function addChallenge() {
        await dailyChallenges.add({
          Instructions: challenge,
          complete: false, 
        });
        setChallenge('');
      }
    useEffect(() => {
        return dailyChallenges.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
            const { Instructions, complete } = doc.data();
            list.push({
                id: doc.id,
                Instructions,
                complete,
            });
            });

            setChallenges(list);

            if (loading) {
                setLoading(false);
            }
        });
    }, []);

    
    return (
        <>
        <Appbar>
            <Appbar.Content title={'Challenge List'} />
        </Appbar>
        <FlatList 
            style={{flex: 1}}
            data={challenges}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Todo {...item} />}
        />
        <TextInput label={'New Challenge'} value={challenge} onChangeText={setChallenge} />
        <Button onPress={() => addChallenge()}>Add Challenge (Daily)</Button>
        <Button onPress={() => addChallenge()}>Home Page-></Button>
        </>
    );

}
export default Challenges;