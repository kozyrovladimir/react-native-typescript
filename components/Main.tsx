import {ScrollView, StyleSheet, View} from 'react-native';
import AppBar from "./AppBar";
import SearchInput from "./SearchInput";
import MenuSearchOptions from "./MenuSearchOptions";
import React from 'react';
import VideoCards from "./VideoCards";
import {DefaultTheme, Provider} from 'react-native-paper';
import MenuSearchOptionsBar from './MenuSearchOptionsBar';
import VideoTable from "./VideoTable";
import VideoPagination from "./VideoPagination";
import VideoPage from "./VideoPage";
import AlternativePagination from "./AlternativePagination";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {PaginationType} from "../store/pagination-reducer";

export default function Main() {
    const pagination = useSelector<AppRootStateType, PaginationType>(state => state.pagination);

    const theme = {
        ...DefaultTheme,
        roundness: 2,
        colors: {
            ...DefaultTheme.colors,
            primary: '#7d7d7d',
            accent: '#f1c40f',
        },
    };

    return (
        <Provider theme={theme}>
            <View style={styles.container}>
                <AppBar/>
                <SearchInput/>
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
