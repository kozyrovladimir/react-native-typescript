import React from 'react';
import { useState } from 'react';
import {ScrollView, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPageTileAC } from '../store/pagination-reducer';
import {
    ElementOptionsType,
    filterVideosAC,
    OrganOptionsType,
    PhaseOptionsType,
    SearchOptionsType, SeasonOptionsType
} from '../store/search-options-reducer';
import { AppRootStateType } from '../store/store';
import MenuSearchOptions from "./MenuSearchOptions";
import {PhaseType} from "../store/video-list-reducer";
import SearchInput from "./SearchInput";

const MenuSearchOptionsBar = () => {
    const dispatch = useDispatch();
    const options = useSelector<AppRootStateType, SearchOptionsType>(state => state.searchOptions);
    const isTableView = useSelector<AppRootStateType, boolean>(state => state.searchOptions.tableView);
    const [searchText, setSearchText] = useState<string>('')

    function changeSearchNameFlowHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchText(event.currentTarget.value);
    }

    // change options handlers
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            dispatch(filterVideosAC(
                {
                    ...options,
                    nameFlow: searchText
                }
            ));
            dispatch(setCurrentPageTileAC(1));
        }
    }

    const handleChangePhaseOption = (value: PhaseOptionsType) => {
        dispatch(filterVideosAC(
            {
                ...options,
                phase: value
            }
        ))
        dispatch(setCurrentPageTileAC(1));
    };

    const handleChangeSeasonOption = (value: SeasonOptionsType) => {
        dispatch(filterVideosAC(
            {
                ...options,
                season: value
            }
        ))
        dispatch(setCurrentPageTileAC(1));
    };

    const handleChangeElementOption = (value: ElementOptionsType) => {
        dispatch(filterVideosAC(
            {
                ...options,
                element: value
            }
        ))
        dispatch(setCurrentPageTileAC(1));
    };

    const handleChangeOrganOption = (value: OrganOptionsType) => {
        dispatch(filterVideosAC(
            {
                ...options,
                organ: value
            }
        ))
        dispatch(setCurrentPageTileAC(1));
    };

    return (
        <View style={{flexDirection: 'row', padding: 10}}>
            <ScrollView horizontal style={{}}>
                <SearchInput/>
                <MenuSearchOptions
                    label={'Phase'}
                    options={['attune', 'purge', 'tonify', 'grow', 'circulate', 'integrate', 'all']}
                    currentItem={options.phase}
                />
                <MenuSearchOptions
                    label={'Season'}
                    options={['spring', 'summer', 'later summer', 'autumn', 'winter', 'all']}
                    currentItem={options.season}
                />
                <MenuSearchOptions
                    label={'Element'}
                    options={['earth', 'metal', 'water', 'wood', 'fire', 'all']}
                    currentItem={options.element}
                />
                <MenuSearchOptions
                    label={'Organ'}
                    options={['body', 'breath', 'essence', 'qi', 'emotional mind', 'spirit', 'all']}
                    currentItem={options.organ}
                />
            </ScrollView>
        </View>
    );
};

export default MenuSearchOptionsBar;
