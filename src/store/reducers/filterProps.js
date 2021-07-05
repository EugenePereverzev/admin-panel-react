export const ACT_FILTER_TOGGLE = 'FILTER_TOGGLE';
export const ACT_FILTER_APPLY = 'FILTER_APPLY';
export const ACT_FILTER_CLEAR = 'FILTER_CLEAR';
export const ACT_FILTER_SET_VALUE = 'FILTER_SET_VALUE';
export const ACT_FILTER_CLEAR_VALUE = 'FILTER_CLEAR_VALUE';

const initialState = () => {
    return {
        isActive: false,
        isExpand: false,
        isUpdate: false,
    };
};

export const filterProps = (state = initialState(), { type, payload }) => {
    console.log (`state:`, state);
    console.log (`type: ${type}\tvalue:`, payload);
    switch (type) {
        case ACT_FILTER_TOGGLE:
            return {
                ...state,
                isExpand: !state.isExpand,
            };

        case ACT_FILTER_APPLY:
            return {
                ...state,
                isActive: true,
                isUpdate: false,
            };

        case ACT_FILTER_CLEAR:
            return initialState();
       
        
        case ACT_FILTER_SET_VALUE:
            return {
                ...state,
                ...payload,
                isUpdate: true,
            };  

        case ACT_FILTER_CLEAR_VALUE:
            const { [payload.field]: cleared, ...newState} = state;
            return {
                ...newState,
                isUpdate: true,
            };         

        default:
            return state;
    }
}