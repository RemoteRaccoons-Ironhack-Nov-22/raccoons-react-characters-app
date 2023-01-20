import { Link } from 'react-router-dom';

function CharactersList(props) {

    return (
        <>
            <h1>This is CharactersList</h1>

            {/* <h1>number of characters: {props.charactersArr.length}</h1> */}

            {props.charactersArr === null
                ? "loading..."
                : props.charactersArr.map((characterDetails, index) => {
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