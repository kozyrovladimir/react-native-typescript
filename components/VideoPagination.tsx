import * as React from 'react';
import {DataTable} from 'react-native-paper';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPageTileAC} from "../store/pagination-reducer";
import SwitchTableTileView from "./SwitchTableTileView";
import {AppRootStateType} from "../store/store";
import {Text} from "react-native";

type VideoPaginationType = {
    numPages: number,
    page: number,
    isTableView: boolean,
    switchChangeHandler: () => void
}

const VideoPagination = (props: VideoPaginationType) => {
    //const isTableView = useSelector<AppRootStateType, boolean>(state => state.searchOptions.tableView);
    const dispatch = useDispatch();

    return (
            <DataTable style={{flexDirection: "row", justifyContent: 'space-between'}}>
                <SwitchTableTileView
                    switchChangeHandler={props.switchChangeHandler}
                    isTableView={props.isTableView}
                />
                <Text style={{alignSelf: 'center'}}>{props.isTableView ? 'Table' : 'Tiled'}</Text>
                <DataTable.Pagination
                    page={props.page}
                    numberOfPages={props.numPages}
                    onPageChange={(page) => dispatch(setCurrentPageTileAC(page + 1))}
                    label={`Page: ${props.page + 1}`}
                    showFastPaginationControls
                />
            </DataTable>
    );
};

export default VideoPagination;
