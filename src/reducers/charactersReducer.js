import {
    GET_CHARACTERS,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_ERROR,
    GET_CHARACTERS_FILTER
} from '../types';

import { getDynamicData } from '../helpers/manageData';

const initialState = {
    characters: [],
    filters: [],
    onType: false,
    error: false,
    loading: true
};

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_CHARACTERS:
            return {
                ...state,
                filters: [],
                onType: false,
                loading: action.payload
            };
        case GET_CHARACTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                characters: action.payload
            };
        case GET_CHARACTERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                characters: []
            };
        case GET_CHARACTERS_FILTER:
            const dataFilter = getDynamicData(action.payload, state.characters);
            return {
                ...state,
                onType: dataFilter.onType,
                filters: dataFilter.data
            };
        default:
            return state;
    }
}