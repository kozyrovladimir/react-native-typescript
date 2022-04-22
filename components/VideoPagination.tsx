import * as React from 'react';
import {DataTable} from 'react-native-paper';
import {useDispatch} from "react-redux";
import {setCurrentPageTileAC} from "../store/pagination-reducer";
import {Animated, View} from "react-native";

type VideoPaginationType = {
    numPages: number,
    page: number
}

const VideoPagination = (props: VideoPaginationType) => {
    // const optionsPerPage = [2, 3, 4];
    // const [page, setPage] = React.useState<number>(0);
    // const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    //
    // React.useEffect(() => {
    //     setPage(0);
    // }, [itemsPerPage]);
    const dispatch = useDispatch();

    return (
            <DataTable >
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
