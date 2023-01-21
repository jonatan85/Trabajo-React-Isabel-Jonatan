import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


import Home from './Views/Home/Home';
import Login from './Views/Login/Login';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/footer';
import Listado from './Views/Listado/Listado';
import Contacto from './Views/Contacto/Contacto';
import SignUp from './Views/SignUp/SignUp'
import { LoginContextProvider } from './state/context';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <div className='container'>
      <LoginContextProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" >
          <Route
            path="/"
            element={<Home />
          }
          />
          <Route
            path="login"
            element={<Login />
          }
          />
          <Route
            path="signup"
            element={<SignUp />
          }
          />
        </Route>
        <Route
            path="contacto"
            element={<Contacto />
          }
          />
       
        <Route
            path="listado"
            element={<Listado />
          }
          />
        
      </Routes>
      <Footer />
      </BrowserRouter>
      </LoginContextProvider>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
