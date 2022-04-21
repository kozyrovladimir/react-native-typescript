import {ScrollView, StyleSheet, View} from 'react-native';
import AppBar from "./AppBar";
import SearchInput from "./SearchInput";
import MenuSearchOptions from "./MenuSearchOptions";
import React from 'react';
import VideoCards from "./VideoCards";
import { Provider } from 'react-native-paper';
import MenuSearchOptionsBar from './MenuSearchOptionsBar';

export default function Main() {
    return (
        <Provider>
            <View style={styles.container}>
                <AppBar/>
                <SearchInput/>
                <MenuSearchOptionsBar/>
                <VideoCards/>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {}
});
