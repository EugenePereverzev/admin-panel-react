import { orders, orderIndex } from '../../data/orders';

export const ACT_TOGGLE_SELECTION = 'TOGGLE_SELECTION';

// const PAGE_SIZE = 20;

const initialState = () => {
    return orders.map (({ id }) => ({
            id,
            isSelected: false,
        })
    );
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
        default:
            return state;
    }
}