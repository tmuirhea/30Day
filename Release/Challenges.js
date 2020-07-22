//import React from 'react';
import React, { useState, useEffect } from 'react';
import { FlatList, View, Text} from 'react-native';
import ChallengeList from './ChallengeList';
import firestore from '@react-native-firebase/firestore';
import { Appbar, Button, TextInput, List } from 'react-native-paper';
//Views and obtains data from the challenges collection in the database, takes in the DocumentID as well as a return onPress variable for future implementations 
function Challenges({DocID, onPress}) {
    const [ challenge, setChallenge ] = useState('');
    const [ loading, setLoading ] = useState(true);
    const [ challenges, setChallenges ] = useState([]);
    const [ challengeDetails, setchallengeDetails ] = useState([]);
    const ref = firestore().collection('Challenges');
    const db = ref.doc('Challenge1');
    const dailyChallenges = db.collection('Days');
    //This part is for adding challenges 
    async function addChallenge() {
        await dailyChallenges.add({
          Description: challenge,
        });
        setChallenge('');
      }
    //This part is for obtaining the data from the documents in the database 
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
    
    //This is where the UI is implemented which contains the title of our page as well as renders each item in a flatlist via the ChallengeList
    return (
        <>
        <Appbar>
            <Appbar.Content title={'Challenge List'} />
        </Appbar>
        <FlatList 
            style={{flex: 1}}
            data={challenges}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ChallengeList {...item}/>}
        />
        
        </>
    );

}
export default Challenges;
