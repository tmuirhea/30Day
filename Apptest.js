import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Alert, ScrollView, TextInput } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import CheckBox from 'react-native-check-box';
import * as firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyC_8nX_IFXpm6y3HMdUy60EGMna3m15EpQ",
    authDomain: "day-612a8.firebaseapp.com",
    databaseURL: "https://day-612a8.firebaseio.com",
    projectId: "day-612a8",
    storageBucket: "day-612a8.appspot.com",
    messagingSenderId: "2010735952",
    appId: "1:2010735952:web:c90e583a49f2bd35e83855",
    measurementId: "G-B3PZC5X71P"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const db = app.database();
  firebase.analytics();

const ToDoItem = () => {
  return (
    <View>
      <CheckBox
        checkBoxColor="skyblue"
      />
      <Text>
        A random To-Do item
      </Text>
    </View>
  );
};

export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
    todos: {},
    presentToDo: '',
    };
  }

  componentDidMount() {

  }
  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Challenge 1</Label>
            <input
              autoCorrect={false}
              autoCapitalize="none"
            />
          </Item>

          <Item floatingLabel>
            <Label>Challenge 2</Label>
            <input
              autoCorrect={false}
              autoCapitalize="none"
            />
            </Item>
        </Form>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'top',
    marginTop: 20,
  }
})
