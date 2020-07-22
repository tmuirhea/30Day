//import React from 'react';
import React, { useState, useEffect } from 'react';
import { FlatList, View, Text} from 'react-native';
import DailyTasks from './DailyTasks';
import firestore from '@react-native-firebase/firestore';
import { Appbar, Button, TextInput, List } from 'react-native-paper';
//This file will grab the list of tasks needed for the specific challenge, this has a similar structure to the Challenges function but instead returns the nested doc's inside the 'Days' collection
function DailyChallenges() {
    const [ challenge, setChallenge ] = useState('');
    const [ loading, setLoading ] = useState(true);
    const [ challenges, setChallenges ] = useState([]);
    const [ challengeDetails, setchallengeDetails ] = useState([]);
    const ref = firestore().collection('Challenges');
    const db = ref.doc('Challenge2');
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
            const { Instructions, Day, complete } = doc.data();
            list.push({
                id: doc.id,
                Instructions,
                Day,
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
            renderItem={({ item }) => <DailyTasks {...item} />}
        />
        <TextInput label={'New Challenge'} value={challenge} onChangeText={setChallenge} />
        <Button onPress={() => addChallenge()}>Add Challenge (Daily)</Button>
        </>
    );

}
export default DailyChallenges;
