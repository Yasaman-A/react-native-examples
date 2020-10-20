import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Button
      mode="text"
      icon="location-exit"
      onPress={() => {
        navigation.navigate('Login');
      }}
    >
      Sign Out
    </Button>

    <Text>
      Welcome to this application.
    </Text>
    <Button
      style={{ width: 100 }}
      mode="text"
      onPress={() => {
        navigation.navigate('Detail');
      }}
    >
      View
    </Button>
  </View>

);

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
