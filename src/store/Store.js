import { createStore, combineReducers } from 'redux';
import { orderList } from './OrderList';
import { personList } from './PersonList';
import { goodList } from './GoodList';
import { filterProps } from './FilterProps';

const storeReducers = combineReducers ({
    orderList,
    personList,
    goodList,
    filterProps,
});

export const store = createStore(storeReducers); 