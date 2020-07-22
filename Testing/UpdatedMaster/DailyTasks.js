import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';
//import {Checkmark} from 'react-checkmark';
import { TouchableOpacity, StyleSheet, Button, View, Text, Image } from 'react-native';
import { CheckBox } from 'react-native';
import { useState } from "react";


function DailyTasks({ id, Day, Instructions, complete }) {
  const [isSelected, setSelection] = useState(complete);
  async function toggleComplete() {
    setSelection(!complete)          //update check mark on the checkbox
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
    
      title={Day}
      description = {Instructions}
      onPress={() => toggleComplete()}
      left={props => (
      //<List.Icon {...props} icon={complete ? 'check' : 'cancel'} />

        <CheckBox
          value={isSelected}
          //onPress={() => toggleComplete()}
          //onPress={() => setSelection(!complete)}
          //onValueChange={setSelection}
          style={styles.checkbox}
        />

      )}
    />
  );
}

const styles = StyleSheet.create({

  text_style: {
    color: "#20232a",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold"
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

export default React.memo(DailyTasks);