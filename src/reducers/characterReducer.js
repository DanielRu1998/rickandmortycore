import {
    GET_ONE_CHARACTER,
    GET_ONE_CHARACTER_SUCCESS,
    GET_ONE_CHARACTER_ERROR
} from '../types';

const initialState = {
    character: {},
    error: false,
    loading: false
};

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_ONE_CHARACTER:
            return {
                ...state,
                loading: action.payload
            };
        case GET_ONE_CHARACTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                character: action.payload
            };
        case GET_ONE_CHARACTER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                character: {}
            };
        default:
            return state;
    }
}