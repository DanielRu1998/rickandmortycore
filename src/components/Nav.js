import { useDispatch } from "react-redux";

// Components
import Search from "./Search";
import rick from '../images/rick.jpeg';

import { getCharacteres } from "../actions/charactersActions";

const Nav = () => {
    const dispatch = useDispatch();
    const getInitialData = () => dispatch( getCharacteres() );

    return (
        <div className="nav">
            <div
                className="custom-logo"
                onClick={() => getInitialData()}
            >
                <img src={rick} alt="logoImg_" />
            </div>
            <Search />
        </div>
    )
};

export default Nav;
