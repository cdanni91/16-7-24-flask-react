import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Protected from './pages/Protected';
import Register from './pages/Register';
import Login from './pages/Login';

/// Recordar borrar el <Router> en App.js pero dejar el import, sino no se muestra

function App() {
    return (


            // Basicamente aca se define que elemento funcional se llama cuando se ingresa a cada ruta, en nuestro caso las pages
        
            <Routes>
                                         { /* Aca llama la funcion Home de Home.js */ }
                <Route path="/" element={<Home />} />
                                         { /* Aca llama la funcion Protected de Protected.js */ }
                <Route path="/protected" element={<Protected />} />
        
                <Route path="/register" element={<Register />} />

                <Route path="/login" element={<Login />} />
                
                
            </Routes>
        
    );
}

export default App;