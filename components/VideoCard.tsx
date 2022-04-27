import * as React from 'react';
import { Card, Button, Text, TouchableRipple } from 'react-native-paper';
import { VideoType } from '../store/video-list-reducer';
import {useNavigation} from "@react-navigation/native";
import {defineElementColor, definePhaseColor, ucFirst} from "../utils/helper_functions";
import {View, Image} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {filterVideosAC, SearchOptionsType } from '../store/search-options-reducer';
import { setCurrentPageTileAC } from '../store/pagination-reducer';

type VideoListItemType = {
    video: VideoType
}

//source={require('../assets/video.png')

const MyComponent = (props: VideoListItemType) => {
    const navigation = useNavigation();
    const phaseColor = definePhaseColor(props.video.phase);
    const elementColor= defineElementColor(props.video.element);

    const dispatch = useDispatch();
    const options = useSelector<AppRootStateType, SearchOptionsType>(state => state.searchOptions);

    const phaseName = ucFirst(props.video.phase);
    const elementName = ucFirst(props.video.element);

    function setPhaseOption() {
        dispatch(filterVideosAC(
            {
                ...options,
                nameFlow: '',
                season: "all",
                element: "all",
                organ: "all",
                phase: props.video.phase
            }
        ))
        dispatch(setCurrentPageTileAC(1));
    }

    function setElementOption() {
        dispatch(filterVideosAC(
            {
                ...options,
                nameFlow: '',
                phase: "all",
                season: "all",
                organ: "all",
                element: props.video.element
            }
        ))
        dispatch(setCurrentPageTileAC(1));
    }

    return(
        <Card style={{padding: 5, borderWidth: 1, marginBottom: 10}}>
            <TouchableRipple
                    onPress={() => {
                        console.log('Pressed');
                        // @ts-ignore
                        navigation.navigate('Details');
                    }}
                    rippleColor="rgba(0, 0, 0, .32)"
                    >
                <Image
                    style={{maxWidth: '100%'}}
                    source={props.video.photoPath}
                />
            </TouchableRipple>
            <View style={{paddingTop: 20}}>
                <Text style={{fontSize: 20}}>
                    {props.video.title}
                </Text>
                <View style={{flexDirection: 'row', paddingTop:10, paddingBottom: 10}}>
                    <Text onPress={setPhaseOption} style={{color: phaseColor, marginRight: 10}}>{phaseName}</Text>
                    <Text onPress={setElementOption} style={{color: elementColor}}>{elementName}</Text>
                    {/*<Button color={phaseColor}>{props.video.phase}</Button>*/}
                    {/*<Button color={elementColor}>{props.video.element}</Button>*/}
                </View>
                <Text>{props.video.description}</Text>
            </View>
        </Card>
)};

export default MyComponent;
