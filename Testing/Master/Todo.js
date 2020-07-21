<<<<<<< HEAD
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';
//import {Checkmark} from 'react-checkmark';
import { TouchableOpacity, StyleSheet, Button, View, Text, Image } from 'react-native';
import { CheckBox } from 'react-native';
import { useState } from "react";


function Todo({ id, Instructions, complete }) {
  const [isSelected, setSelection] = useState(false);
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
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
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

=======
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';
//import {Checkmark} from 'react-checkmark';
import { TouchableOpacity, StyleSheet, Button, View, Text, Image } from 'react-native';
import { CheckBox } from 'react-native';
import { useState } from "react";


function Todo({ id, Instructions, complete }) {
  const [isSelected, setSelection] = useState(false);
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
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
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

>>>>>>> a3223e418f48187112e6eb131aa0123aa22254e2
export default React.memo(Todo);