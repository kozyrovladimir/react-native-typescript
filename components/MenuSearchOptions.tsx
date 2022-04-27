import * as React from 'react';
import {View} from 'react-native';
import {Button, Menu, Provider, Text} from 'react-native-paper';
import {
    ElementOptionsType, filterVideosAC,
    OrganOptionsType,
    PhaseOptionsType, SearchOptionsType,
    SeasonOptionsType
} from '../store/search-options-reducer';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {setCurrentPageTileAC} from "../store/pagination-reducer";

type CombineOptionsType = PhaseOptionsType | SeasonOptionsType | ElementOptionsType | OrganOptionsType;

type LabelType = 'Phase' | 'Season' | 'Element' | 'Organ';

type SearchOptionItemPropsItem = {
    label: LabelType,
    options: Array<CombineOptionsType>,
    currentItem: CombineOptionsType,
}

const MenuOptions = (props: SearchOptionItemPropsItem) => {
    const [visible, setVisible] = React.useState(false);
    const [option, setOption] = React.useState('none');
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const dispatch = useDispatch();
    const options = useSelector<AppRootStateType, SearchOptionsType>(state => state.searchOptions);

    function onPressHandler(kind: LabelType, value: CombineOptionsType) {
        switch (kind) {
            case 'Phase': {
                dispatch(filterVideosAC(
                    {
                        ...options,
                        // @ts-ignore
                        phase: value
                    }
                ));
                dispatch(setCurrentPageTileAC(1));
                closeMenu();
                break;
            }
            case 'Season': {
                dispatch(filterVideosAC(
                    {
                        ...options,
                        // @ts-ignore
                        season: value
                    }
                ))
                dispatch(setCurrentPageTileAC(1));
                closeMenu();
                break;
            }
            case 'Element': {
                dispatch(filterVideosAC(
                    {
                        ...options,
                        // @ts-ignore
                        element: value
                    }
                ))
                dispatch(setCurrentPageTileAC(1));
                closeMenu();
                break;
            }
            case 'Organ': {
                dispatch(filterVideosAC(
                    {
                        ...options,
                        // @ts-ignore
                        organ: value
                    }
                ))
                dispatch(setCurrentPageTileAC(1));
                closeMenu();
                break;
            }
            default:
                dispatch(filterVideosAC(
                    {
                        ...options,
                    }
                ));
                closeMenu();
                break;
        }
    }

    return (
        <View
            style={{
                alignSelf: 'center',
                marginRight: 10,
                marginLeft: 10,
                flexDirection: "column",
            }}>
            <Menu
                style={{paddingTop: 40}}
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button style={{borderWidth: 1, borderColor: '#7d7d7d', borderRadius: 20}}
                                onPress={openMenu}>{`${props.label}: ${props.currentItem}`}</Button>}>
                {props.options.map((option) => {
                    return <Menu.Item key={option} onPress={() => {
                        onPressHandler(props.label, option)
                    }} title={option}/>
                })}
            </Menu>
        </View>
    );
};

export default MenuOptions;
