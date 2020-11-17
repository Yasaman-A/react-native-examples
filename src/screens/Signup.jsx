import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import firebase from '../firebase/config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: 250,
  },
  rowContainer: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',

  },
  buttons: {
    marginLeft: 25,
    marginRight: 25,
  },
});

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [dName, setDName] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');
  //= =============================================
  const db = firebase.firestore();

  const createUser = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: dName,
        });

        const ref = db.collection('user').doc(result.user.uid);
        const userCredential = {
          name: fullName,
        };
        ref.set(userCredential);

        setErrorMessage('');
        setMessage('Please go to the login page to use the application.');
      }).catch((error) => {
        setErrorMessage(error.message);
        setMessage('');
      });
  };
  //= =========================================================================
  const checkPassword = () => {
    if (password === repeatPassword) {
      setErrorMessage('');
      return true;
    }
    if (repeatPassword.length > 0) {
      setErrorMessage('Password repeat does not match.'); setMessage('');
    }
    return false;
  };
  //= =========================================================================
  return (
    <View style={styles.container}>
      <Text>Please enter your information to register.</Text>
      <Text style={{ color: 'red' }}>{errorMessage}</Text>
      <TextInput style={styles.input} label="Email" mode="outlined" placeholder="Enter your email address" onChangeText={(text) => { setEmail(text); }} />
      <TextInput style={styles.input} label="DisplayName" mode="outlined" placeholder="Enter your display name" onChangeText={(text) => { setDName(text); }} />
      <TextInput style={styles.input} label="FullName" mode="outlined" placeholder="Enter your full name" onChangeText={(text) => { setFullName(text); }} />
      <TextInput style={styles.input} label="Password" secureTextEntry mode="outlined" placeholder="Enter your password" onChangeText={(text) => { setPassword(text); }} onBlur={() => { checkPassword(); }} />
      <TextInput style={styles.input} label="Repeat Password" secureTextEntry mode="outlined" placeholder="Confirm your password" onChangeText={(text) => { setRepeatPassword(text); }} onBlur={() => { checkPassword(); }} />
      <Text style={{ color: 'green' }}>{message}</Text>

      <View style={styles.rowContainer}>
        <Button style={styles.buttons} mode="contained" onPress={() => { if (checkPassword()) { createUser(); } }}> Register     </Button>
        <Button style={styles.buttons} mode="outlined" onPress={() => { navigation.navigate('Login'); }}> Go TO Login </Button>
      </View>
    </View>
  );
};

Signup.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Signup;
