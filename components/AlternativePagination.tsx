import * as React from 'react';
import { DataTable } from 'react-native-paper';

const numberOfItemsPerPageList = [2, 3, 4];

const items = [
    {
        key: 1,
        name: 'Page 1',
    },
    {
        key: 2,
        name: 'Page 2',
    },
    {
        key: 3,
        name: 'Page 3',
    },
];

const AlternativePagination = () => {
    const [page, setPage] = React.useState(0);
    const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
    const from = page * numberOfItemsPerPage;
    const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);

    React.useEffect(() => {
        setPage(0);
    }, [numberOfItemsPerPage]);

    return (
        <DataTable>
            <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(items.length / numberOfItemsPerPage)}
                onPageChange={page => setPage(page)}
                label={`${from + 1}-${to} of ${items.length}`}
                showFastPaginationControls
                numberOfItemsPerPageList={numberOfItemsPerPageList}
                numberOfItemsPerPage={numberOfItemsPerPage}
                onItemsPerPageChange={onItemsPerPageChange}
                selectPageDropdownLabel={'Rows per page'}
            />
        </DataTable>
    );
};

export default AlternativePagination;
