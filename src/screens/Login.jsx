import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import firebase from '../firebase/config';
import AuthContext from '../contexts/auth';

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

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //= =========================================================================
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');
  //= =========================================================================
  const { setAuthenticated } = React.useContext(AuthContext);

  const handleAuth = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if (user != null) {
              setAuthenticated(true);
              setErrorMessage('');
              // setMessage("Successful login");
            } else {
              // Show error message
              setMessage('');
            }
          },
        );
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setMessage('');
      });
  };
    //= =========================================================================

  return (

    <View style={styles.container}>
      <Text style={{ color: 'red' }}>{errorMessage}</Text>
      <Text style={{ color: 'green' }}>{message}</Text>
      <TextInput style={styles.input} value={email} label="Email" mode="outlined" placeholder="Enter your email address" onChangeText={(text) => { setEmail(text); }} />
      <TextInput style={styles.input} value={password} label="Password" mode="outlined" placeholder="Enter your password" onChangeText={(text) => { setPassword(text); }} />
      <View style={styles.rowContainer}>
        <Button style={styles.buttons} mode="contained" onPress={() => { handleAuth(); }}>Login</Button>
        <Button style={styles.buttons} mode="outlined" onPress={() => { navigation.navigate('Signup'); }}>Sign Up</Button>
      </View>
    </View>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
