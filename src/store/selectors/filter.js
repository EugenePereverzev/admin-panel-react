import { createSelector } from 'reselect';

export const getFilter = (state) => {
    return state.filterProps;
};

export const getFilterExpanded = createSelector (
    [getFilter],
    (filter) => filter.isExpand
);

export const getFilterActivated = createSelector (
    [getFilter],
    (filter) => filter.isActive
);
