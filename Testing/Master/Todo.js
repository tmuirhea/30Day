import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';
//import {Checkmark} from 'react-checkmark';


function Todo({ id, Instructions, complete }) {
  async function toggleComplete() {
    await firestore()
      .collection('Challenges')
      .doc('Challenge1')
      .collection('Days')
      .doc(id)
      .update({
        complete: !complete,
      });
  }

  return (
    <List.Item
      title={Instructions}
      onPress={() => toggleComplete()}
      left={props => (
        <List.Icon {...props} icon={complete ? 'check' : 'cancel'} />
      )}
    />
  );
}

export default React.memo(Todo);