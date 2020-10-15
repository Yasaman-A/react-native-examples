import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import Login from './Login';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const Other = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Other</Text>
            <Button
                title='Signout'
                onPress={() => {
                    navigation.navigate('Login')
                }}>

            </Button>
        </View>
    );
}

export default Other;