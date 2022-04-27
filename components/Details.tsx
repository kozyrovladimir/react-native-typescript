import React from 'react';
import {View, ScrollView, Text} from "react-native";
import AppBar from "./AppBar";
import {Provider, Button} from "react-native-paper";
import {theme} from "./Main";
import { VideoDetailType } from '../store/video-details-reducer';
import {useNavigation} from "@react-navigation/native";
import YoutubePlayer from 'react-native-youtube-iframe';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {defineElementColor, definePhaseColor} from "../utils/helper_functions";
import {VideoType} from "../store/video-list-reducer";
import { useDispatch } from 'react-redux';
import {ElementOptionsType, filterVideosAC, OrganOptionsType, PhaseOptionsType, SearchOptionsType, SeasonOptionsType} from "../store/search-options-reducer";
import {setCurrentPageTileAC} from "../store/pagination-reducer";

type DetailsPropsType = {
    videoDetails: VideoDetailType
}

const VideoPage = (props: DetailsPropsType) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    function onPressHandler() {
        // @ts-ignore
        navigation.navigate('Main');
    }
    const elementColor = defineElementColor(props.videoDetails.element);
    const phaseColor = definePhaseColor(props.videoDetails.phase);
    const options = useSelector<AppRootStateType, SearchOptionsType>(state => state.searchOptions);

    function filterPhase(phase: PhaseOptionsType) {
        dispatch(filterVideosAC(
            {
                ...options,
                nameFlow: '',
                season: "all",
                element: "all",
                organ: "all",
                phase
            }
        ))
        dispatch(setCurrentPageTileAC(1));
        // @ts-ignore
        navigation.navigate('Main');
    }

    function filterSeason(season: SeasonOptionsType) {
        dispatch(filterVideosAC(
            {
                ...options,
                nameFlow: '',
                phase: "all",
                element: "all",
                organ: "all",
                season
            }
        ))
        dispatch(setCurrentPageTileAC(1));
        // @ts-ignore
        navigation.navigate('Main');
    }

    function filterElement(element: ElementOptionsType) {
        dispatch(filterVideosAC(
            {
                ...options,
                nameFlow: '',
                phase: "all",
                season: "all",
                organ: "all",
                element
            }
        ))
        dispatch(setCurrentPageTileAC(1));
        // @ts-ignore
        navigation.navigate('Main');
    }

    function filterOrgan(organ: OrganOptionsType) {
        dispatch(filterVideosAC(
            {
                ...options,
                nameFlow: '',
                phase: "all",
                season: "all",
                element: "all",
                organ
            }
        ))
        dispatch(setCurrentPageTileAC(1));
        // @ts-ignore
        navigation.navigate('Main');
    }

    return (
        <Provider theme={theme}>
            <View style={{flex: 8}}>
                <AppBar/>
                <Button
                    style={{alignSelf: 'flex-start'}}
                    onPress={onPressHandler}
                    icon="arrow-left"
                >
                    Back
                </Button>
                <YoutubePlayer
                    height={300}
                    play={true}
                    videoId={'nmmNWj9YtAw'}
                />
            </View>
            <View style={{flex: 9, padding: 10}}>
                <ScrollView>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{props.videoDetails.title}</Text>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text style={{fontWeight: 'bold', color: 'black'}}>Phase: </Text>
                        <Text onPress={() => filterPhase(props.videoDetails.phase)} style={{color: phaseColor}} >{props.videoDetails.phase}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text style={{fontWeight: 'bold', color: 'black'}}>Element: </Text>
                        <Text onPress={()=> filterElement(props.videoDetails.element)} style={{color: elementColor}}>{props.videoDetails.element}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Organ: </Text>
                        <Text onPress={()=>filterOrgan(props.videoDetails.organ)}>{props.videoDetails.organ}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Season: </Text>
                        <Text onPress={()=>filterSeason(props.videoDetails.season)}>{props.videoDetails.season}</Text>
                    </View>
                    <Text style={{fontWeight: 'bold', marginTop: 10}}>
                        Description: <Text style={{fontWeight: 'normal'}}>
                            {props.videoDetails.description}
                        </Text>
                    </Text>
                    <Text style={{fontWeight: 'bold', marginTop: 10}}>
                        Benefits: <Text style={{fontWeight: 'normal'}}>
                        {props.videoDetails.benefits}
                    </Text>
                    </Text>
                    <Text style={{fontWeight: 'bold', marginTop: 10}}>
                        How to do the flow: <Text style={{fontWeight: 'normal'}}>
                        {props.videoDetails.howToDo}
                    </Text>
                    </Text>
                </ScrollView>
            </View>
        </Provider>
    );
};

const Details =() =>{
    const video = useSelector<AppRootStateType, VideoDetailType>(state => state.videoDetails);
    return (
        <VideoPage
            videoDetails={video}
        />
            )
}

export default Details;

