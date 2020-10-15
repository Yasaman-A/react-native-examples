import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './Home';
import Other from './Other';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button
                title='Login'
                onPress={() => {
                    navigation.navigate('Home')
                }}>

            </Button>

            <Button
                title='Login2'
                onPress={() => {
                    navigation.navigate('Other')
                }}>

            </Button>
        </View>
    );
}

export default Login;