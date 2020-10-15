import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Button } from 'react-native';
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
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => setData(json.movies))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            <Text>Home</Text>
            <Button
                title='Login2'
                onPress={() => {
                    navigation.navigate('Other')
                }}>

            </Button>

            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Text>{item.title}, {item.releaseYear}</Text>
                )}
            />
        </View>
    );
}



export default Home;
