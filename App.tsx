import React from 'react';
import 'react-native-get-random-values';
import {store} from "./store/store";
import { Provider } from 'react-redux';

import Main from './components/Main';

export default function App() {
   return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
}

