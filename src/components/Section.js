import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Nav from "./Nav";
import Content from "./Content";

import { getCharacteres } from '../actions/charactersActions';

const Section = () => {
    const dispatch = useDispatch();
    const getData = () => dispatch( getCharacteres() );

    useEffect(() => {
        setTimeout(() => {
            getData();
        }, 1000);
        // eslint-disable-next-line
    }, []);

    return(
        <>
            <Nav />
            <Content />
        </>
    );
};

export default Section;
