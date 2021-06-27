import { personIndex, updatePerson } from '../data/Persons';

const initialState = () => {
    return { list: {...personIndex} };
}

export const personList = (state = initialState(), action) => {
    switch (action.type) {
        case 'PERSONLIST_ADD':
        case 'PERSONLIST_UPDATE':
            return { 
                list: {
                    ...state.list,
                    [action.payload.id]: updatePerson (action.payload),
                }
            };

        case 'PERSONLIST_DELETE':
            const {[action.payload.id]: deleted, ...newList} = state.list;
            return { list: newList };
        
        default:
            return state;
    }
}