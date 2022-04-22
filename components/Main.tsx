import {ScrollView, StyleSheet, View} from 'react-native';
import AppBar from "./AppBar";
import SearchInput from "./SearchInput";
import MenuSearchOptions from "./MenuSearchOptions";
import React from 'react';
import VideoCards from "./VideoCards";
import { Provider } from 'react-native-paper';
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

    return (
        <Provider>
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
