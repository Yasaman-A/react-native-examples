import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Home from './components/Home';
import Other from './components/Other';
import AsyncStorage from '@react-native-community/async-storage';
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthContext } from './components/contexts/auth';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createStackNavigator();


export default function App() {

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            authenticated: action.authenticated,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            authenticated: true,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            authenticated: false,
          };
      }
    },
    {
      isLoading: true,
      authenticated: false,
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let authenticated;

      try {
        authenticated = await AsyncStorage.getItem('userToken');
        dispatch({ type: 'RESTORE_TOKEN', authenticated: authenticated });
      } catch (e) {
        console.log('Failed to load authentication state.')
        dispatch({ type: 'SIGN_OUT' });
      }
    };

    bootstrapAsync();
  }, []);



  const authContext = React.useMemo(
    () => ({
      signIn: async data => dispatch({ type: 'SIGN_IN' }),
    }),
    []
  );
  return (
    <PaperProvider >
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {state.authenticated ? (
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Other" component={Other} />


            </Stack.Navigator>
          ) : (
              <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ title: 'Welcome Login' }} />
                <Stack.Screen name="Other" component={Other} />
              </Stack.Navigator>
            )}
        </NavigationContainer>

      </AuthContext.Provider>
    </PaperProvider>
  );
}
