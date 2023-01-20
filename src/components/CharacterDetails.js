import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function CharacterDetails(props){

    const {characterId} = useParams();
    const navigate = useNavigate();

    const details = props.charactersArr?.find( characterDetails => {
        return characterDetails.id == characterId;
    });
    

    const deleteCharacter = () => {
        axios.delete(process.env.REACT_APP_API_URL + "/characters/" + characterId)
            .then( response => {
                console.log("character was deleted....");
                props.callbackToUpdateList();
                navigate("/");
            })
            .catch((e) => {
                console.log("error deleting character from the API...", e);
            });
    }


    const renderDetails = () => {
        return (
            <div className="box">
                <h1>{details.name} </h1>
                Occupation: {details.occupation} <br />
                Weapon: {details.weapon} <br />
                Debt: {details.debt ? "Yes" : "No"} <br /><br />

                <button onClick={deleteCharacter}>Delete</button>
                <br /><br />
            </div>
        );
    }

    return(
        <>
            {details && renderDetails() }

            <Link to="/">Back</Link>
        </>        
    )

}

export default CharacterDetails;