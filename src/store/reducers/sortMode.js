export const ACT_SORT_SET = 'SORT_SET';

export const sortMode = (state = "", {type, payload}) => {
    switch (type) {
        case ACT_SORT_SET:
            console.log (`type: ${type}\tpayload: ${payload}\tstate: ${state}`);
            return state === payload ? "" : payload;
        default:
            return state;
    }
};