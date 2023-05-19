import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './userInf.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function UserDetail() {
    let { userLogin } = useParams();
    let navigate = useNavigate();
    let [userData, setUserData] = useState();

    useEffect(() => {
        fetch(`https://api.github.com/users/${userLogin}`)
            .then(response => response.json())
            .then(data => setUserData(data))
    }, [userLogin]);

    return (
        <div>
            <button className="back-button" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" />
            </button>

            {userData && (
                <div className="user-detail">
                    <img src={userData.avatar_url} alt={userData.name} className="user-image" />
                    <div className="user-info">
                        <p>Nombre: {userData.name}</p>
                        <p>Usuario: {userData.login}</p>
                        <p>Seguidores: {userData.followers}</p>
                        <p>Siguiendo: {userData.following}</p>
                        <p>Ubicación: {userData.location}</p>
                        <p>Bio: {userData.bio}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserDetail;
