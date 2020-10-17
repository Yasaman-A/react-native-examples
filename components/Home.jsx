import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import Other from './Other';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const Home = ({ navigation }) => {

    return (
        <View style={{ flex: 1, padding: 24 }}>
            <Text>Home</Text>
            <Button
                title='Login2'
                onPress={() => {
                    navigation.navigate('Other')
                }}>

            </Button>

        </View>
    );
}



export default Home;
