import { orders, orderIndex, getFullOrderData } from '../../data/orders';

export const ACT_TOGGLE_SELECTION = 'TOGGLE_SELECTION';
export const ACT_FILTRATE_ORDERS = 'FILTRATE_ORDERS';

const initialState = () => orders.map (({ id }) => ({ id, isSelected: false, })); 

const checkRange = (range, value) => {
    return (!range.from || (range.from <= value)) 
            && 
        (!range.to || (range.to >= value))
}

const orderFiltered = (id, filter) => {
    if (!filter.isActive) return true;
    else {
        const order = getFullOrderData(id);
        return (!filter["idBayer"] || order.id.startsWith(filter["idBayer"]) || order.bayer.includes(filter["idBayer"])) 
            && (!filter["date"] || checkRange (filter["date"], order["date"]))
            && (!filter["summa"] || checkRange (filter["summa"], order["summa"]));
    }
}

const filteredState = (filter) => {
    return orders.filter (({ id }) => orderFiltered (id, filter)).map (({ id }) => ({ id, isSelected: false, }))
}

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

        case ACT_FILTRATE_ORDERS:
            return filteredState (payload);

        default:
            return state;
    }
}