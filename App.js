import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Details from './src/screens/Details';
import Home from './src/screens/Home';
import Signup from './src/screens/Signup';
import AuthContext from './src/contexts/auth';

const Stack = createStackNavigator();

export default function App() {

  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      <NavigationContainer>
        {authenticated ? (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />


          </Stack.Navigator>
        ) : (
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} options={{ title: 'Welcome Login' }} />
              <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
          )}
      </NavigationContainer>

    </AuthContext.Provider>
  );
}
