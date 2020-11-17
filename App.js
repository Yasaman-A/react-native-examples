import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, } from 'react-native';
import firebase from './src/firebase/config';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {

  //---------------------------------------------------
  const db = firebase.firestore();

  const ref = db.collection('user');
  ref.get().then(
    (records) => {
      records.forEach((doc) => {
        console.log(doc.id, ':', doc.data());
      });
    }
  ).catch((error) => { console.log(error) });
  //---------------------------------------------------
  return (

    <View style={styles.container}>
      <Text>
        Write the rest of your app here!
      </Text>
    </View>

  );
};
export default App;