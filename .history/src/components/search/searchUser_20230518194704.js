import { Link } from 'react-router-dom';
import SearchIcon from '../../search-square-svgrepo-com.png';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Charts from '../charts/charts'
import './searchUser.css'
import 'react-toastify/dist/ReactToastify.css';

function SearchUserComponent() {
    let [inputUser, setInputUser] = useState("");
    let [loading, setLoading] = useState(false);
    let [userInf, setUser] = useState();

    const searchUser = () => {
        setLoading(true);
        if (inputUser.length < 4) {
            toast.error("El usuario para consultar debe tener más de 4 letras.");
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
