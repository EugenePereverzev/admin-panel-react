import { orders } from '../data/Orders';

const PAGE_SIZE = 20;

const initialState = () => {
    const orderList = orders.map(item => ({
            id: item.id,
            isSelected: false,
        })
    );
    return {
        list: orderList,
        pageSize: PAGE_SIZE,
        pages: Math.ceil(orderList.length/PAGE_SIZE),
        activeIndex: 0,
        viewRange: {
            start: 0, 
            end: PAGE_SIZE
            },
    };
}

const filteredList = (state) => {
    // здесь надо реализовать фильтрации и сортировку
    return orders.map(item => ({
        id: item.id,
        isSelected: false,
    }))
};

export const orderList = (state = initialState(), action) => {
    switch (action.type) {
        case 'ORDERLIST_ADD':
        case 'ORDERLIST_UPDATE':
        case 'ORDERLIST_DELETE':
            return { 
                ...state,
                list: filteredList (state),
            };
       
        default:
            return state;
    }
}