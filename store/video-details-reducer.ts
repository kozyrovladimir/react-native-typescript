import { v1 } from "uuid";
import {ElementType, OrganType, PhaseType, SeasonType} from "./video-list-reducer";

export type VideoDetailType = {
    id: string,
    videoPath: string | undefined,
    title: string,
    description: string,
    benefits: string,
    howToDo: string,
    phase: PhaseType,
    season: SeasonType,
    element: ElementType,
    organ: OrganType
}

const videoDetailInitialSate:VideoDetailType = {
    id: v1(),
    videoPath: 'embed/nmmNWj9YtAw',
    title: 'DAILY QIGONG ROUTINE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    benefits: 'Helps to clear old and stagnant QI',
    howToDo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    organ: 'body',
    phase: 'grow',
    season: 'summer',
    element: 'fire'
};

type SetVideoDetailActionType = {
    type: 'SET-VIDEO-DETAILS',
    videoDetails: VideoDetailType
}

type VideoDetailActionsType = SetVideoDetailActionType;

export const videoDetailReducer = (state:VideoDetailType = videoDetailInitialSate, action:  VideoDetailActionsType): VideoDetailType => {
    switch (action.type) {
        case "SET-VIDEO-DETAILS":
            return {...action.videoDetails}
        default:
            return state
    }
}

export const SetVideoDetailAC = (videoDetails: VideoDetailType): SetVideoDetailActionType => {
    return {type: "SET-VIDEO-DETAILS", videoDetails}
}
