import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function CharactersList() {

    
    const [charactersArr, setCharactersArr] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "/characters")
            .then((response) => {
                console.log(response.data);

                setCharactersArr(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);



    return (
        <>
            <h1>This is CharactersList</h1>

            {/* <h1>number of characters: {charactersArr.length}</h1> */}

            {charactersArr === null
                ? "loading..."
                : charactersArr.map((characterDetails, index) => {
                    return (
                        <div className="character" key={index} >
                            <h2>{characterDetails.name}</h2>
                            <p>Weapon: {characterDetails.weapon}</p>
                            <Link to={"/characters/" + characterDetails.id}>More Details</Link>
                        </div>
                    )
                })}
        </>
    )
}

export default CharactersList;