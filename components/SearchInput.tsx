import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

    return (
        <Searchbar
            style={{width: 280, borderRadius: 30, height: 40, shadowColor: '#fff'}}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
    );
};

export default SearchInput;
