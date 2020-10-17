import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './Home';
import Other from './Other';
import { firebase } from './firebase/config';
import { AuthContext } from './contexts/auth';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("test@test.com");
    const [password, setPassword] = useState("test123");
    const { signIn } = React.useContext(AuthContext);

    const handleAuth = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                firebase.auth().onAuthStateChanged(
                    function (user) {
                        if (user != null) {
                            signIn();
                        }
                    }
                )
            }
            )
            .catch(error => alert(error));
    }


    return (
        <View style={styles.container}>
            <TextInput
                label="Email"
                returnKeyType="next"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label="password"
                returnKeyType="done"
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Button
                title='Loginaaaa'
                onPress={
                    handleAuth}>

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