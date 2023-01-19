import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CharacterDetails(){

    const baseURL = 'https://ih-crud-api.herokuapp.com';

    const [details, setDetails] = useState(null);

    const {characterId} = useParams();

    useEffect( () => {
        axios.get(baseURL + "/characters/" + characterId)
            .then((response) => {
                setDetails(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);


    const renderDetails = () => {
        return (
            <div className="box">
                <h1>{details.name} </h1>
                Occupation: {details.occupation} <br />
                Weapon: {details.weapon} <br />
                Debt: {details.debt ? "Yes" : "No"} <br />
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