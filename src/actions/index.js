
//ADD FEATURE

export const ADD_FEATURE = 'ADD_FEATURE'

export function addItem(add) {
    console.log(add);
    return {
        type: ADD_FEATURE,
        payload: add
    };
}

//REMOVE FEATURE

export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export function removeItem(remove) {
    console.log(remove);
    return {
        type: REMOVE_FEATURE,
        payload: remove
    };
}