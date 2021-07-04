import { createSelector } from 'reselect';
import { getFullOrderData } from '../../data/orders'; 

const getOrders = (state) => {
//    console.log (`get order selector: orders:`, state.orderList);
    return state.orderList;
};
const getFilter = (state) => {
//    console.log (`get filter selector: filter:`, state.filterProps);
    return state.filterProps;
};

const compareOrder = (sort) => (a, b) => {
    const { [sort]: valueA } = getFullOrderData(a.id);
    const { [sort]: valueB } = getFullOrderData(b.id);
    
    if (valueA === valueB) return 0;
    if (valueA < valueB) return -1;
    //if (valueA > valueB) return 1;
    return 1;
}

export const getSort = (state) => {
//    console.log (`get sort selector: sort:`, state.sortMode);
    return state.sortMode;
};

export const getFilteredOrders = createSelector (
    [getOrders, getFilter],
    (orders, filter) => {
//        console.log (`filtered selector: orders: ${orders.length}\tfilter: ${filter.isActive}`);
        if (filter.isActive) {
            return orders.filter (({ id }) => true);
        } else {
            return orders;
        }
    }
);

export const getSorteredOrders = createSelector (
    [getFilteredOrders, getSort],
    (orders, sort) => {
//        console.log (`sorted selector: orders: ${orders.length}\tsort: ${sort}`);
        if (sort) {
            return orders.slice(0).sort (compareOrder(sort))
        } else {
            return orders;
        }
    }
);

export const getVisibleOrders = createSelector (
    [getSorteredOrders],
    (orders) => {
        return orders;
    }
);

export const getSelectCount = (state) => state.orderList.reduce ((counter, { isSelected }) => isSelected ? ++counter : counter, 0);