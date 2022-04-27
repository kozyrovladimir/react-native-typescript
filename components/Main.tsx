import {StyleSheet, View} from 'react-native';
import AppBar from "./AppBar";
import SearchInput from "./SearchInput";
import React from 'react';
import {DefaultTheme, Provider} from 'react-native-paper';
import MenuSearchOptionsBar from './MenuSearchOptionsBar';
import VideoPage from "./VideoPage";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {PaginationType} from "../store/pagination-reducer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#7d7d7d',
        accent: '#f1c40f',
    },
};

export default function Main() {

    return (
        <Provider theme={theme}>
            <View style={styles.container}>
                <AppBar/>
                {/*<SearchInput/>*/}
                <MenuSearchOptionsBar/>
                <VideoPage/>
                {/*<VideoCards/>*/}
                {/*<VideoTable/>*/}
                {/*<AlternativePagination/>*/}
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
