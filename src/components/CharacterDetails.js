import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function CharacterDetails(){

    const baseURL = 'https://ih-crud-api.herokuapp.com';

    const [details, setDetails] = useState(null);

    const {characterId} = useParams();

    const navigate = useNavigate();

    useEffect( () => {
        axios.get(baseURL + "/characters/" + characterId)
            .then((response) => {
                setDetails(response.data);
            })
            .catch((e) => {
                console.log("error getting character details from the API...", e);
            });
    }, []);


    const deleteCharacter = () => {
        axios.delete(baseURL + "/characters/" + characterId)
            .then( response => {
                console.log("character was deleted....");
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
            {details === null 
                ? "loading...."
                : renderDetails()
            }

            <Link to="/">Back</Link>
        </>        
    )

}

export default CharacterDetails;