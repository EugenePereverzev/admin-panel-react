import { orders, orderIndex } from '../../data/orders';
import { ACT_FILTER_APPLY, ACT_FILTER_SET_WAPPLY } from './filterProps';

export const ACT_TOGGLE_SELECTION = 'TOGGLE_SELECTION';

const initialState = () => orders.map (({ id }) => ({ id, isSelected: false, })); 

// const orderFiltered = (id, filter) => {
//     if (!filter.isActive) return true;
//     else {
//         const order = getFullOrderData(id);
//         return (!filter["idBayer"] || order.id.startsWith(filter["idBayer"]) || order.bayer.includes(filter["idBayer"])) 
//             && (!filter["date"] || (
//                                         (!filter["date"].from || (filter["date"].from <= order.date)) 
//                                     && 
//                                         (!filter["date"].to || (filter["date"].to >= order.date))
//                                     )
//                 );
//     }
// }
//
// const filteredState = (filter) => {
//     return orders.filter (({ id }) => orderFiltered (id, filter)).map (({ id }) => ({ id, isSelected: false, }))
// }

const newToggledItem = ({id , isSelected}, payload) => {
    return {
        id, 
        isSelected: payload ?? !isSelected,
    }
};

export const orderList = (state = initialState(), {type, payload}) => {
    switch (type) {
        case ACT_TOGGLE_SELECTION:
            const index = orderIndex[payload];
            console.log (`type: ${type}\tpayload: ${payload}\tindex: ${index}\tstate: ${state.length}`);
            return [
                    ...state.slice (0, index),
                    newToggledItem (state[index]),
                    ...state.slice (index + 1),
            ];

        case ACT_FILTER_SET_WAPPLY:
        case ACT_FILTER_APPLY:
            return state;


        default:
            return state;
    }
}