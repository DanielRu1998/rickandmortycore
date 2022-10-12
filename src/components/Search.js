import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';

import SearchIcon from '@mui/icons-material/Search';

import { filterCharacteres } from '../actions/charactersActions';

const Search = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const filterData = (pattern) => dispatch( filterCharacteres(pattern) );

    const deb = useCallback(
        debounce((newVal) => {
            filterData(newVal);
        }, 500), []
    );

    /*  Filter data in the input */
    const filterInput = (e) => {
        if (e.target.value.length < 25) {
          const regex = /^[a-zA-Z0-9\s]*$/;
          if (regex.test(e.target.value)) {
            if (e.target.value === '') {
                deb('');
                setValue('');
            } else {
                let newVal = e.target.value;
                if ((/^(\s)+.*$/).test(newVal)) newVal = newVal.replace(/^(\s)+/g, '');
                setValue(newVal);
                deb(newVal);
            }
          }
        }
    };

    /* When a user press enter on keyboard to search */
    const handleKeyboard = (e) => {
        switch (e.key) {
        case 'Enter':
            e.preventDefault();
            if (value.length !== 0) filterData(value);
            break;
        default:
            break;
        }
    };

    /* When a user clicks on button's search  */
    const handleButton = () => {
        if (value.length !== 0) filterData(value);
    };

    return (
        <div className="search">
            <input 
                type="text"
                placeholder="Buscar..."
                onChange={(e) => filterInput(e)}
                onKeyDown={(e) => handleKeyboard(e)}
                value={value}
            />
            <div className="button-search"
                onClick={() => handleButton()}
            >
                <SearchIcon style={{ fontSize: '4rem' }} />
            </div>

        </div>
    )
};

export default Search;
