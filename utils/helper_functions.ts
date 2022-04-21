import {ElementType, PhaseType, VideoType} from "../store/video-list-reducer";
import {SearchOptionsType} from "../store/search-options-reducer";

//helper function for filtering video by parameters
export function filterVideos (videos: Array<VideoType>, options: SearchOptionsType): Array<VideoType> {
    let videosCopy: Array<VideoType> = JSON.parse(JSON.stringify(videos));
    videosCopy = videosCopy.filter(video => {
        return video.organ === options.organ || options.organ === 'all';
    });
    videosCopy = videosCopy.filter(video => {
        return video.phase === options.phase || options.phase === 'all'
    });
    videosCopy = videosCopy.filter(video => {
        return video.element === options.element || options.element === 'all'
    });
    videosCopy = videosCopy.filter(video => {
        return video.season === options.season || options.season === 'all'
    });
    videosCopy = videosCopy.filter(video => {
        let videoTitle = video.title.toLocaleLowerCase();
        let searchText = options.nameFlow.toLocaleLowerCase();
        return videoTitle.includes(searchText) || options.nameFlow === '';
    });
    return videosCopy
}

//helper function for packing videos in arrays for pagination
export function PackingVideos(videos: Array<VideoType>, num: number): Array<VideoType>[]{
    const videosForPacking: Array<VideoType> = JSON.parse(JSON.stringify(videos));
    const videoPackages: Array<VideoType>[] = [];
    for (let i = 0; i < Math.ceil(videosForPacking.length / num); i++) {
        videoPackages[i] = videosForPacking.slice((i * num), (i * num) + num);
    }
    return videoPackages;
}

//helper functions for define colors
export function definePhaseColor (phase: PhaseType): string {
    switch (phase) {
        case "attune":
            return "rgba(255,192,1,0.8)"
        case "purge":
            return "rgba(165,165,165,0.9)"
        case "tonify":
            return "rgba(68,147,240,0.8)"
        case "grow":
            return "rgb(150,211,88)"
        case "circulate":
            return "rgba(254,38,39,0.7)"
        case "integrate":
            return "rgba(238,6,180,0.7)"
        default:
            return "rgba(125,125,125,0.7)"
    }
};

export function defineElementColor (element: ElementType): string {
    switch (element) {
        case "earth":
            return "rgba(255,192,1,0.8)"
        case "metal":
            return "rgba(165,165,165,0.9)"
        case "water":
            return "rgba(68,147,240,0.8)"
        case "wood":
            return "rgb(150,211,88)"
        case "fire":
            return "rgba(254,38,39,0.7)"
        default:
            return "#7d7d7d"
    }
};
