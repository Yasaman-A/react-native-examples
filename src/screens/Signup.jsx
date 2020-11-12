import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import firebase from '../firebase/config';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 50,
        width: 250,
    },
    rowContainer: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',

    },
    buttons: {
        marginLeft: 25,
        marginRight: 25,
    },
});

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');
    //= =========================================================================
    const checkPassword = () => {
        if (password === repeatPassword) {
            setErrorMessage('');
            return true;
        }
        if (repeatPassword.length > 0) {
            setErrorMessage('Password repeat does not match.'); setMessage('');
        }
        return false;
    };
    //= =========================================================================
    const createUser = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                setErrorMessage('');
                setMessage('You registered successfully. Please login.');
            })
            .catch((error) => {
                setErrorMessage(error.message);
                setMessage('');
            });
    };
    //= =========================================================================

    return (
        <View style={styles.container}>
            <Text>Please enter your information to register.</Text>
            <Text style={{ color: 'red' }}>{errorMessage}</Text>
            <TextInput style={styles.input} label="Email" mode="outlined" placeholder="Enter your email address" onChangeText={(text) => { setEmail(text); }} />
            <TextInput style={styles.input} label="Password" secureTextEntry={true} mode="outlined" placeholder="Enter your password" onChangeText={(text) => { setPassword(text); }} onBlur={(text) => { checkPassword(); }} />
            <TextInput style={styles.input} label="Repeat Password" secureTextEntry={true} mode="outlined" placeholder="Confirm your password" onChangeText={(text) => { setRepeatPassword(text); }} onBlur={(text) => { checkPassword(); }} />
            <Text style={{ color: 'green' }}>{message}</Text>

            <View style={styles.rowContainer}>
                <Button style={styles.buttons} mode="contained" onPress={() => { if (checkPassword()) { createUser(); } }}> Register     </Button>
                <Button style={styles.buttons} mode="outlined" onPress={() => { navigation.navigate('Login'); }}> Go TO Login </Button>
            </View>
        </View>
    );
};

Signup.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default Signup;
