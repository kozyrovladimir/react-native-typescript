import React from 'react';
import {FlatList, SafeAreaView, ScrollView, View} from "react-native";
import { VideoType } from '../store/video-list-reducer';
import VideoCard from "./VideoCard";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";

export type VideoCardsType = {
    videoList: Array<VideoType>
}

const VideoCards = (props: VideoCardsType) => {
    // const videos = useSelector<AppRootStateType, Array<VideoType>>(state => state.videoList);
    // <SafeAreaView>
    //     {props.videoList.map(video =>{
    //         return (
    //             <VideoCard
    //                 key={video.id}
    //                 video={video}
    //             />
    //         )
    //     })}
    // </SafeAreaView>
    return (
            <>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 300 }}
                    data={props.videoList}
                    renderItem={({item}) => (
                        <VideoCard
                            video={item}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
                {/*{props.videoList.map(video =>{*/}
                {/*    return (*/}
                {/*        <VideoCard*/}
                {/*            key={video.id}*/}
                {/*            video={video}*/}
                {/*        />*/}
                {/*    )*/}
                {/*})}*/}
            </>
    );
};

export default VideoCards;
