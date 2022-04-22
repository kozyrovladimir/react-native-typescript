import * as React from 'react';
import { Appbar } from 'react-native-paper';
import {AppbarContent} from "react-native-paper/lib/typescript/components/Appbar/AppbarContent";
import SearchInput from "./SearchInput";

const AppBar = () => {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
            <Appbar.Header>
                <Appbar.Action icon="menu" onPress={_handleSearch} />
                <Appbar.Content title="YOQI RESOURCE"/>
                <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
            </Appbar.Header>
    );
};

export default AppBar;
