import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#6600cc',
    color: 'yellow',
  },
});

const Header = (props) => {
  const { setAuthenticated } = props;
  return (
    <View style={styles.header}>
      <Button mode="text" color="#ffffff" icon="location-exit" onPress={() => { setAuthenticated(false); }}> Sign Out </Button>
    </View>
  );
};

Header.propTypes = {
  setAuthenticated: PropTypes.func.isRequired,
};

export default Header;
