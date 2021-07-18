import { createStore, combineReducers } from 'redux';
import { orderList } from './reducers/orderList';
//import { personList } from './reducers/personList';
//import { goodList } from './reducers/goodList';
import { filterProps } from './reducers/filterProps';
import { sortMode } from './reducers/sortMode';
import { middleOrders } from './middlewares/orders';
import { applyMiddleware } from '@reduxjs/toolkit';

const storeReducers = combineReducers ({
    orderList,
//    personList,
//    goodList,
    filterProps,
    sortMode,
});

export const store = createStore (storeReducers, applyMiddleware(middleOrders)); 