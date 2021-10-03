import {
    CREATE_ITEM,
    RETRIEVE_ITEMS,
    UPDATE_ITEM,
    DELETE_ITEM,
} from "./types";

import ItemDataService from "../services/items.service.js";

export const createItem = (title, description, quantity) => async (dispatch) => {
    try {
        // setup dispatch for promise, need all three fields to create
        const res = await ItemDataService.create({ title, description, quantity});
        dispatch({
            type: CREATE_ITEM,
            payload: res.data,
        });
  
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveItems = () => async (dispatch) => {
    try {
        // no params necessary to pull all items
        const res = await ItemDataService.getAll();
        dispatch({
            type: RETRIEVE_ITEMS,
            payload: res.data,
        });

    } catch (err) {
        console.log(err);
    }
};

export const updateItem = (id, data) => async (dispatch) => {
    try {
        // data would be a JSON package similar to the structure from createItem
        const res = await ItemDataService.update(id, data);
        dispatch({
            type: UPDATE_ITEM,
            payload: data,
        });
  
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteItem = (title) => async (dispatch) => {
    try {
        // With a bigger dataset, I would assign ID's but titles should be simple enough here.
        await ItemDataService.delete(title);
        dispatch({
            type: DELETE_ITEM,
            payload: { title },
        });

    } catch (err) {
      console.log(err);
    }
};