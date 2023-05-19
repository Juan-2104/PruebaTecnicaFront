import { Route, Routes, Navigate } from 'react-router-dom';
import SearchUserComponent from '../search/searchUser'; // Asegúrate de importar tu componente SearchUserComponent
import UserComponent from '../userInf/userInf'; // Asegúrate de importar tu componente UserComponent

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchUserComponent />} />
        <Route path="/user/:userLogin" element={<UserComponent />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
