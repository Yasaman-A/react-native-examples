import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';

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

const Signup = ({ navigation }) => (
  <View style={styles.container}>

    <View style={styles.rowContainer}>
      <Button
        style={styles.buttons}
        mode="contained"
        onPress={() => {
          alert('Not connected to the backend');
        }}
      >
        Register

      </Button>

      <Button
        style={styles.buttons}
        mode="outlined"
        onPress={() => {
          navigation.navigate('Login');
        }}
      >
        Cancle
      </Button>
    </View>
  </View>
);

Signup.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Signup;
