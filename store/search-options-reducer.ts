import {ElementType, OrganType, PhaseType, SeasonType} from "./video-list-reducer"

export type SearchOptionsType = {
    nameFlow: string,
    phase: PhaseOptionsType,
    season: SeasonOptionsType,
    element: ElementOptionsType,
    organ: OrganOptionsType,
    tableView: boolean
}

export type SearchOptionsActionType = {
    type: 'FILTER-VIDEOS',
    options: SearchOptionsType
}

type SetIsTableViewActionType = {
    type: 'SET-IS-TABLE-VIEW',
    isTableView: boolean
}

export type PhaseOptionsType = PhaseType | 'all';

export type SeasonOptionsType = SeasonType | 'all';

export type ElementOptionsType = ElementType | 'all';

export type OrganOptionsType = OrganType | 'all';

const searchOptionsInitialState: SearchOptionsType = {
    nameFlow: '',
    phase: "all",
    season: "all",
    element: "all",
    organ: "all",
    tableView: false
};


type SearchOptionsActionsType = SearchOptionsActionType | SetIsTableViewActionType;

export const searchOptionsReducer = (state: SearchOptionsType = searchOptionsInitialState, action: SearchOptionsActionsType): SearchOptionsType => {
    switch (action.type) {
        case 'FILTER-VIDEOS': {
            return {
                ...action.options
            }
        }
        case 'SET-IS-TABLE-VIEW' : {
            return {
                ...state,
                tableView: action.isTableView
            }
        }
        default:
            return state
    }
}

export const filterVideosAC = (options: SearchOptionsType): SearchOptionsActionType => {
    return {type: 'FILTER-VIDEOS', options}
}

export const setIsTableViewAC = (isTableView: boolean): SetIsTableViewActionType => {
    return {type: 'SET-IS-TABLE-VIEW', isTableView }
}
