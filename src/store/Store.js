import { createStore, combineReducers } from 'redux';
import { orderList } from './reducers/orderList';
//import { personList } from './reducers/personList';
//import { goodList } from './reducers/goodList';
import { filterProps } from './reducers/filterProps';
import { sortMode } from './reducers/sortMode';

const storeReducers = combineReducers ({
    orderList,
//    personList,
//    goodList,
    filterProps,
    sortMode,
});

export const store = createStore (storeReducers); 