import { ACT_TOGGLE_SELECTION, ACT_FILTRATE_ORDERS } from '../reducers/orderList';
import { ACT_SORT_SET } from '../reducers/sortMode';

export const actionToggleSelection = (id) => ({
    type: ACT_TOGGLE_SELECTION,
    payload: id,
});

export const actionSetSort = (sort) => ({
    type: ACT_SORT_SET,
    payload: sort,
});

export const actionFiltrateOrders = (filter) => ({
    type: ACT_FILTRATE_ORDERS,
    payload: filter,
});