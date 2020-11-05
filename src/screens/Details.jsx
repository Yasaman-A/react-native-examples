import React from 'react';
import {
  StyleSheet, View, ScrollView, Image,
} from 'react-native';
import 'react-native-gesture-handler';
import AuthContext from '../contexts/auth';
import Header from '../components/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  images: {
    width: '90%',
    height: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
  },
});

const Details = () => {
  const { setAuthenticated } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Header setAuthenticated={setAuthenticated} style={styles.header} />
      <ScrollView style={styles.body}>
        <Image
          style={styles.images}
          source={{
            uri: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1308&q=80',
          }}
        />
        <Image
          style={styles.images}
          source={{
            uri: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          }}
        />
        <Image
          style={styles.images}
          source={{
            uri: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          }}
        />
        <Image
          style={styles.images}
          source={{
            uri: 'https://images.unsplash.com/photo-1566192091743-5966a6079984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          }}
        />
        <Image
          style={styles.images}
          source={{
            uri: 'https://images.unsplash.com/photo-1527338611623-4e242563220a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          }}
        />
      </ScrollView>
    </View>

  );
};

export default Details;
