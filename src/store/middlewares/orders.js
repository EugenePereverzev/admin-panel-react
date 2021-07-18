import { ACT_FILTER_APPLY, ACT_FILTER_CLEAR, ACT_FILTER_SET_WAPPLY } from '../reducers/filterProps';
import { actionFiltrateOrders } from '../actions/orders'

export const middleOrders = ({getState, dispatch}) => next => action => {
    console.group (action.type);

    console.log ('before store', getState());
    console.log ('before next', next);
    console.log ('before action', action);

    const returnValue = next (action);  

    if (action.type === ACT_FILTER_APPLY || action.type === ACT_FILTER_SET_WAPPLY || action.type === ACT_FILTER_CLEAR) {
        dispatch (actionFiltrateOrders (getState().filterProps))
    }

    console.log ('after store', getState());

    console.groupEnd (action.type);
    return returnValue;
}