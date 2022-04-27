import React from 'react';
import {View, Button} from "react-native";
import AppBar from "./AppBar";
import {Provider} from "react-native-paper";
//import {Video} from "react-native-video";
import {theme} from "./Main";
import { VideoDetailType } from '../store/video-details-reducer';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {useNavigation} from "@react-navigation/native";

type DetailsPropsType = {
    videoDetails: VideoDetailType
}

const Details = () => {
    const navigation = useNavigation();
    function onPressHandler() {
        // @ts-ignore
        navigation.navigate('Main');
    }

    return (
        <Provider theme={theme}>
            <View style={{flex: 1}}>
                <AppBar/>
                <Button
                    onPress={onPressHandler}
                    title="Go back"
                    color="#5e9dec"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
            {/*<Video*/}
            {/*    video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}*/}
            {/*    videoWidth={1600}*/}
            {/*    videoHeight={900}*/}
            {/*    thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}*/}
            {/*/>*/}
        </Provider>
    );
};

export default Details;
