import {
    GET_ONE_CHARACTER,
    GET_ONE_CHARACTER_SUCCESS,
    GET_ONE_CHARACTER_ERROR
} from '../types';

// GET A USER
export function getCharacter (id) {
    return async(dispatch) => {
        dispatch( getCharact() );
        try {
            const consume = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await consume.json();
            if (data.error) dispatch( getCharactError() );
            else dispatch( getCharactSuccess(data) );
        } catch (error) {
            console.log('Error => ', error);
            dispatch( getCharactError() );
        }
    };
}


const getCharact = () => ({
    type: GET_ONE_CHARACTER,
    payload: true
});

const getCharactSuccess = (data) => ({
    type: GET_ONE_CHARACTER_SUCCESS,
    payload: data
});

const getCharactError = () => ({
    type: GET_ONE_CHARACTER_ERROR,
    payload: true
});