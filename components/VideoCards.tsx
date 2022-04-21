import React from 'react';
import {ScrollView, View} from "react-native";
import { VideoType } from '../store/video-list-reducer';
import VideoCard from "./VideoCard";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";

export type VideoCardsType = {
    videoList: Array<VideoType>
}

const VideoCards = () => {
    const videos = useSelector<AppRootStateType, Array<VideoType>>(state => state.videoList);

    return (
            <ScrollView>
                <View>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                </View>
            </ScrollView>
    );
};

export default VideoCards;
