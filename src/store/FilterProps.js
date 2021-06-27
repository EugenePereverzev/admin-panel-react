const initialState = () => {
    return {
        isActive: false,
        isExpand: false,
    };
};

export const filterProps = (state = initialState(), action) => {
    switch (action.type) {
        case 'FILTER_TOGGLE':
            return {
                ...state,
                isExpand: !state.isExpand,
            };

        case 'FILTER_APPLY':
            return {
                ...state,
                isActive: true,
            };

        case 'FILTER_CLEAR':
            return initialState();
       
        
        case 'FILTER_SET_VALUE':
            return {
                ...state,
                [action.payout.field]: action.payout.value,
            };  

        case 'FILTER_CLEAR_VALUE':
            const { [action.payout.field]: cleared, ...newState} = state;
            return newState;         

        default:
            return state;
    }
}