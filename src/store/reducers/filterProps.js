export const ACT_FILTER_TOGGLE = 'FILTER_TOGGLE';
export const ACT_FILTER_APPLY = 'FILTER_APPLY';
export const ACT_FILTER_CLEAR = 'FILTER_CLEAR';
export const ACT_FILTER_SET_VALUE = 'FILTER_SET_VALUE';
export const ACT_FILTER_CLEAR_VALUE = 'FILTER_CLEAR_VALUE';

const initialState = () => {
    return {
        isActive: false,
        isExpand: false,
    };
};

export const filterProps = (state = initialState(), action) => {
    switch (action.type) {
        case ACT_FILTER_TOGGLE:
            return {
                ...state,
                isExpand: !state.isExpand,
            };

        case ACT_FILTER_APPLY:
            return {
                ...state,
                isActive: true,
            };

        case ACT_FILTER_CLEAR:
            return initialState();
       
        
        case ACT_FILTER_SET_VALUE:
            return {
                ...state,
                [action.payout.field]: action.payout.value,
            };  

        case ACT_FILTER_CLEAR_VALUE:
            const { [action.payout.field]: cleared, ...newState} = state;
            return newState;         

        default:
            return state;
    }
}