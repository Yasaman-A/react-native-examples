import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { Button } from 'react-native-paper';
import 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import AuthContext from '../contexts/auth';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    height: '85%',
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    borderWidth: 2,
    borderColor: 'black',
    height: '15%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

const Home = ({ navigation }) => {
  const { setAuthenticated } = React.useContext(AuthContext);
  return (

    <View style={styles.container}>
      <Header setAuthenticated={setAuthenticated} style={styles.header} />
      <View style={styles.body}>
        <Image
          style={{
            width: '90%', height: 150, marginTop: 30, marginLeft: 'auto', marginRight: 'auto',
          }}
          source={{
            uri: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1308&q=80',
          }}
        />
        <Text>
          I did a road trip in Summer 2010. We travelled to Egypt. My memories are registered here.
        </Text>
        <Button
          style={{ width: 100 }}
          mode="text"
          onPress={() => {
            navigation.navigate('Details');
          }}
        >
          View
        </Button>
      </View>
    </View>

  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
