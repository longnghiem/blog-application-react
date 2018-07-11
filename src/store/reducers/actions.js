export const ADD_POST = 'ADD_POST'
export const DEL_POST = 'DEL_POST'
export const EDIT_POST = 'EDIT_POST'

export const actionCreator = (type, payload) => {
    return {type, payload}
}