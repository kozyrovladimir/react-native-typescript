import React from 'react';
import 'react-native-get-random-values';
import {store} from "./store/store";
import { Provider } from 'react-redux';
import Main from './components/Main';
import D  from './components/Main';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Details from "./components/Details";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen
                        name="Main" component={Main} />
                    <Stack.Screen name="Details" component={Details} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

