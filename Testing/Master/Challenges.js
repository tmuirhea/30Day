//import React from 'react';
import React, { useState, useEffect } from 'react';
import { FlatList, View, Text} from 'react-native';
import ChallengeList from './ChallengeList';
import firestore from '@react-native-firebase/firestore';
import { Appbar, Button, TextInput, List } from 'react-native-paper';

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
          Description: challenge,
        });
        setChallenge('');
      }
    useEffect(() => {
        return ref.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
            const { Description } = doc.data();
            list.push({
                id: doc.id,
                Description,
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
            renderItem={({ item }) => <ChallengeList {...item} />}
        />
        
        </>
    );

}
export default Challenges;