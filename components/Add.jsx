import React, { useState } from 'react';
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

const inputSanitizer = (text, setter) => {
  // const tmp = parseFloat(text);
  if (text.length === 0 || Number.isNaN(text)) {
    setter(0);
    return 0;
  }
  return parseFloat(text);
};

const Add = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);

  return (
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
        value={num1.toString()}
        onChangeText={
          (text) => {
            setNum1(text);
          }
        }
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
        value={num2.toString()}
        onChangeText={
          (text) => {
            setNum2(text);
          }
        }
      />

      <Button
        onPress={() => {
          setTotal(inputSanitizer(num1, setNum1) + inputSanitizer(num2, setNum2));
        }}
        title="Add"
      />
      <View>
        <Text>
          Result =
          {' '}
          {total}
        </Text>
      </View>
    </View>
  );
};

export default Add;
