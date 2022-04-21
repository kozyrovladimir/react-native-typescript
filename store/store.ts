import { videoListReducer } from './video-list-reducer';
import {combineReducers, createStore} from 'redux';
import {searchOptionsReducer} from "./search-options-reducer";
import {paginationReducer} from "./pagination-reducer";
import {videoDetailReducer} from "./video-details-reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    videoList: videoListReducer,
    searchOptions: searchOptionsReducer,
    pagination: paginationReducer,
    videoDetails: videoDetailReducer
})

// непосредственно создаём store
export const store = createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
