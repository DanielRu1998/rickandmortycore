import {
    GET_CHARACTERS,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_ERROR,
    GET_CHARACTERS_FILTER
} from '../types';


// GET all characters
export function getCharacteres() {
    return async(dispatch) => {
        dispatch( getCharacts() );
        try {
            const consume = await fetch('https://rickandmortyapi.com/api/character');
            const data = await consume.json();
            if (data.results) dispatch( getCharactsSuccess(data.results) );
            else dispatch( getCharactsError() );
        } catch (error) {
            console.log('Error => ', error);
            dispatch( getCharactsError() );
        }
    };
}

const getCharacts = () => ({
    type: GET_CHARACTERS,
    payload: true
});

const getCharactsSuccess = (data) => ({
    type: GET_CHARACTERS_SUCCESS,
    payload: data
});

const getCharactsError = () => ({
    type: GET_CHARACTERS_ERROR,
    payload: true
});

// Filter data
export function filterCharacteres(pattern) {
    return (dispatch) => dispatch( getFilterData(pattern) );
}

const getFilterData = (pattern) => ({
    type: GET_CHARACTERS_FILTER,
    payload: pattern
});