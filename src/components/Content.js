import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacter } from '../actions/characterAction';

import CloseIcon from '@mui/icons-material/Close';

const Content = () => {
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();
    const getMyCharacter = (id) => dispatch( getCharacter(id) );

    const myCharacteres = useSelector(store => store);

    const showCharacter = (id) => {
        getMyCharacter(id);
        setModal(true);
    }

    const getDate = (str) => {
        const myDate = new Date(str);
        return `${myDate.getDay()}/${myDate.getMonth() + 1}/${myDate.getFullYear()}`;
    };

    return (
        <div className="content">
            {myCharacteres.characters.loading ? (
                <div className="loader">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div className="card" key={item}>
                            <div className="image"></div>
                            <div className="data"><h2>{''}</h2><p>{''}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    {!myCharacteres.characters.onType ? (
                        <div className="box">
                            {myCharacteres.characters.characters.map((item, idx) => (
                                <div
                                    className="card"
                                    key={idx}
                                    onClick={() => showCharacter(item.id)}
                                >
                                    <h2>{item.name}</h2>
                                    <img src={item.image} alt="character" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            {myCharacteres.characters.onType &&
                             myCharacteres.characters.filters.length > 0 ? (
                                <div className="box">
                                    {myCharacteres.characters.filters.map((item, idx) => (
                                        <div
                                            className="card"
                                            key={idx}
                                            onClick={() => showCharacter(item.id)}
                                        >
                                            <h2>{item.name}</h2>
                                            <img src={item.image} alt="character" />
                                        </div>
                                    ))}
                                </div>
                             ) : (
                                <div className="not-found">
                                    <p>Ningun resultado encontrado :'v </p>
                                </div>
                             )}
                        </>
                    )}
                </>
            )}
            {modal ? (
                <div className="modal">
                    <div className="modal--inside">
                        <div className="close" onClick={() => setModal(false)}>
                            <CloseIcon style={{ fontSize: '3rem' }} />
                        </div>
                        {myCharacteres.character.loading ? (
                            <div className="loader" style={{width: '80%'}}>
                                <div className="card" style={{width: '100%'}}>
                                    <div className="image"></div>
                                    <div className="data"><h2>{''}</h2><p>{''}</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                {Object.keys(myCharacteres.character.character).length > 0 ? (
                                    <div className="main">
                                        <div className="photo">
                                            <img src={myCharacteres.character.character.image} alt="character"/>
                                        </div>
                                        <div className="info">
                                            <h2>{myCharacteres.character.character.name}</h2>
                                            <div className="sec-info">
                                                <p><b>Gender:</b> {myCharacteres.character.character.gender}</p>
                                                <p><b>Location:</b> {myCharacteres.character.character.location.name}</p>
                                                <p><b>Species:</b> {myCharacteres.character.character.species}</p>
                                                <p><b>Created:</b> {getDate(myCharacteres.character.character.created)}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </>
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    )
};

export default Content;
