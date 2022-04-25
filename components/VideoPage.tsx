import React from 'react';
import {View, ScrollView} from "react-native";
import VideoCards from "./VideoCards";
import VideoPagination from './VideoPagination';
import VideoTable from "./VideoTable";
import {useSelector} from "react-redux";
import {VideoType} from "../store/video-list-reducer";
import {AppRootStateType} from "../store/store";
import {SearchOptionsType} from "../store/search-options-reducer";
import {PaginationType} from "../store/pagination-reducer";
import {filterVideos, PackingVideos} from "../utils/helper_functions";
import NoResults from "./NoResults";

const VideoPage = () => {
    const videos = useSelector<AppRootStateType, Array<VideoType>>(state => state.videoList);
    const options = useSelector<AppRootStateType, SearchOptionsType>(state => state.searchOptions);
    const pagination = useSelector<AppRootStateType, PaginationType>(state => state.pagination);
    const isTableView = useSelector<AppRootStateType, boolean>(state => state.searchOptions.tableView);

    //filter videos
    const filteredVideos = filterVideos(videos, options);
    //pack videos into arrays for pagination
    const videoPackages = PackingVideos(filteredVideos, 12);

    return (
        <View>
            <VideoPagination
                //to-do: create separate variables
                page={pagination.currentPageTileView - 1}
                numPages={videoPackages.length}
            />
            <View>
                {videoPackages.length && isTableView === false ? <VideoCards videoList={videoPackages[pagination.currentPageTileView - 1]}/> : null}
                {videoPackages.length && isTableView === true ? <VideoTable videoList={videoPackages[pagination.currentPageTileView - 1]}/> : null}
                {videoPackages.length ? null : <NoResults/>}
            </View>
        </View>
    );
};

export default VideoPage;
