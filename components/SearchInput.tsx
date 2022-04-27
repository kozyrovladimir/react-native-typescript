import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {useDispatch, useSelector} from "react-redux";
import { setCurrentPageTileAC } from '../store/pagination-reducer';
import {filterVideosAC, SearchOptionsType} from "../store/search-options-reducer";
import { AppRootStateType } from '../store/store';

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
    const dispatch = useDispatch();
    const options = useSelector<AppRootStateType, SearchOptionsType>(state => state.searchOptions);
    const onKeyPressHandler = () => {
            dispatch(filterVideosAC(
                {
                    ...options,
                    nameFlow: searchQuery
                }
            ));
            dispatch(setCurrentPageTileAC(1));
    }

    return (
        <Searchbar
            style={{width: 280, borderRadius: 30, height: 40, shadowColor: '#fff'}}
            placeholder="Search"
            onIconPress={onKeyPressHandler}
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
    );
};

export default SearchInput;
