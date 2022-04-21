export type PaginationType = {
    currentPageTileView: number,
    currentPageTableView: number,
    numOfPages: number
}

export type SetCurrentPageTileActionType = {
    type: 'SET-CURRENT-PAGE-TILE-VIEW',
    currentPageTileView: number
}

export type SetCurrentPageTableActionType = {
    type: 'SET-CURRENT-PAGE-TABLE-VIEW',
    currentPageTableView: number
}

type PaginationActionsType = SetCurrentPageTileActionType | SetCurrentPageTableActionType;

const paginationInitialState: PaginationType = {
    currentPageTileView: 1,
    currentPageTableView: 1,
    numOfPages: 1
}

export const paginationReducer = (state: PaginationType = paginationInitialState, action: PaginationActionsType): PaginationType => {
    switch (action.type) {
        case 'SET-CURRENT-PAGE-TILE-VIEW': {
            return {
                ...state,
                currentPageTileView: action.currentPageTileView
            }
        }
        default:
            return state
    }
}

export const setCurrentPageTileAC = (currentPageTileView: number): SetCurrentPageTileActionType => {
    return {type: 'SET-CURRENT-PAGE-TILE-VIEW', currentPageTileView}
}

export const setCurrentPageTableAC = (currentPageTableView: number): SetCurrentPageTableActionType => {
    return {type: 'SET-CURRENT-PAGE-TABLE-VIEW', currentPageTableView}
}
