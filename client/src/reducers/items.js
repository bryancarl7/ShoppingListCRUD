import {
    CREATE_ITEM,
    RETRIEVE_ITEMS,
    UPDATE_ITEM,
    DELETE_ITEM,
} from "../actions/types.js";

const state = [];

// Reducer class to properly map backend calls to react components
function itemReducer(items = state, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_ITEM:
            return [...items, payload];

        case RETRIEVE_ITEMS:
            return payload;

        case UPDATE_ITEM:
            return items.map((item) => {
                if (item.title === payload.title) {
                    return {
                        ...item,
                        ...payload,
                    };
                } else {
                    return item;
                }
            });

        case DELETE_ITEM:
            return items.filter(({ title }) => title !== payload.title);

        default:
            return items;
    }
};

export default itemReducer;