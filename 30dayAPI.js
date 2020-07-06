import firebase from 'react-native-firebase';

export function addChallenge(Challenge, addchallengeComplete){
    firebase.firestore()
    .collection('Challenge')
    .add({
        name: Challenge.name,
        description: Challenge.description,
    }).then((data) => addchallengeComplete(data))
    .catch((error) => console.log(error));
}

export async function getChallenge(challengeRetrieved){
    
    var challengeList = [];
    
    var snapshot = await firebase.firestore()
    .collection('Challenge')
    .get()

    snapshot.forEach((doc) => {
        challengeList.push(doc.data());
    });

    challengeRetrieved(challengeList);
}