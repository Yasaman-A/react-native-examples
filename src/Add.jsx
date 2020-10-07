import React from 'react';
import {
  StyleSheet, Text, View, Image, TextInput, Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Add = () => (
  <View style={styles.container}>
    <Image
      source={{
        uri: 'https://images-na.ssl-images-amazon.com/images/I/412rXWdCJ7L.png',
      }}
      style={{
        width: 100,
        height: 100,
      }}
    />
    <Text>Simple Add Form</Text>
    <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 130,
        marginBottom: 5,
      }}
      defaultValue="0"
      keyboardType="number-pad"
      returnKeyType="done"
    />

    <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 130,
        marginBottom: 5,
      }}
      defaultValue="0"
      keyboardType="number-pad"
      returnKeyType="done"
    />

    <Button
      onPress={() => {
        alert('implement add function here');
      }}
      title="Add"
    />
    <View>
      <Text>
        Result = 0
      </Text>
    </View>
  </View>
);

export default Add;
