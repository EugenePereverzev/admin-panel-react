import { goodIndex, updateGood } from '../data/Goods';

const initialState = () => {
    return { list: {...goodIndex} };
}

export const goodList = (state = initialState(), action) => {
    switch (action.type) {
        case 'GOODLIST_ADD':
        case 'GOODLIST_UPDATE':
            return { 
                list: {
                    ...state.list,
                    [action.payload.id]: updateGood (action.payload),
                }
            };

        case 'GOODLIST_DELETE':
            const {[action.payload.id]: deleted, ...newList} = state.list;
            return { list: newList };
        
        default:
            return state;
    }
}