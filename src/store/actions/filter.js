import { ACT_FILTER_TOGGLE, ACT_FILTER_CLEAR, ACT_FILTER_SET_VALUE, ACT_FILTER_CLEAR_VALUE, ACT_FILTER_APPLY } from '../reducers/filterProps';

export const actionFilterToggle = () => ({
    type: ACT_FILTER_TOGGLE,
});

export const actionFilterSetValue = (value) => ({
    type: ACT_FILTER_SET_VALUE,
    payload: value
});

export const actionFilterClearValue = (field) => ({
    type: ACT_FILTER_CLEAR_VALUE,
    payload: field
});

export const actionFilterClear = (field) => ({
    type: ACT_FILTER_CLEAR,
});


export const actionFilterApply = () => ({
    type: ACT_FILTER_APPLY,
});