import { ACT_TOGGLE_SELECTION } from '../reducers/orderList';
import { ACT_SORT_SET } from '../reducers/sortMode';

export const actionToggleSelection = (id) => ({
    type: ACT_TOGGLE_SELECTION,
    payload: id,
});

export const actionSetSort = (sort) => ({
    type: ACT_SORT_SET,
    payload: sort,
});