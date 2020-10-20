import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
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
});

const Detail = ({ navigation }) => (
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

  </View>

);

Detail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Detail;
