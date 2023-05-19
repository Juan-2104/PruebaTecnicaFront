import { Link } from 'react-router-dom';
import SearchIcon from '../../search-square-svgrepo-com.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Charts from '../charts/charts'
import './searchUser.css'
import 'react-toastify/dist/ReactToastify.css';

function SearchUserComponent() {

    const dbEndPoint = "http://localhost:3000/user"

    let [inputUser, setInputUser] = useState("");
    let [loading, setLoading] = useState(false);
    let [userInf, setUser] = useState();

    const searchUser = () => {
        setLoading(true);
        if (!inputUser) {
            toast.error("¡Ingresa un usuario para consultarlo!.");
            setLoading(false);
            return;
        } else if (inputUser.length < 4) {
            toast.error("El usuario para consultar debe tener más de 4 letras.");
            setLoading(false);
            return;
        } else if (inputUser === "doublevpartners") {
            toast.error("¡No puedes hacer esta consulta!");
            setLoading(false);
            return;
        }

        fetch(`https://api.github.com/search/users?q=${inputUser}`)
            .then(res => res.json())
            .then(data => {
                setUser(data.items.slice(0, 10));
                setLoading(false);


            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                toast.error("Error en la consulta, por favor intentalo nuevamente.");
            });
    };

    const handleExportClick = (user) => {
        console.log('Exporting user:', user);
        console.log("body: ", JSON.stringify(user));
        fetch(dbEndPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => 
                
                response.json())
            .then(data => {
                console.log('User exported:', data);
                toast.success("¡Usuario exportado exitosamente!");
            })
            .catch((error) => {
                console.log(error);
                toast.error('Ups, no pudimos exportar el usuario. ¡Intenta nuevamente!');
            });
    }

    return (
        <div>
            <h1>Consulta de usuarios</h1>
            <div className="main-container">
                <input type='text' onChange={(e) => setInputUser(e.target.value)}></input>
                <button className='button' onClick={searchUser}><img src={SearchIcon} className='searchButton' alt="Search" /></button>
            </div>
            <div>
                {userInf && userInf.slice(0, 10).map((userInf, index) => (
                    <div key={index}>
                        <button className="exp-button" onClick={() => handleExportClick(userInf)}><FontAwesomeIcon icon={['solid', 'file-export']} /> Exportar</button>
                        <Link to={`/user/${userInf.login}`}>{userInf.login}</Link>  ID de usuario: {userInf.id}
                        <p></p>
                    </div>
                ))}
            </div>
            {!loading && userInf && userInf.length > 0 && <Charts userInf={userInf} options={{ maintainAspectRatio: false }} />}
            <ToastContainer />
        </div>
    );
}

export default SearchUserComponent;
