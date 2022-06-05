import React, { useState } from "react";
import Header from "../Home/Header/Header";


import "./App.scss";
import { hasAuthenticated } from "../../services/AuthApi";
import Auth from "../../contexts/Auth";
// import AuthenticatedRoad from "./components/AuthenticatedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticaded] = useState(hasAuthenticated());

  return (
    <Auth.Provider value={{ isAuthenticated }}>
      <div className='App'>
     
     
        
        {/* <AuthenticatedRoad path='/account' component={Account} />
        <AuthenticatedRoad path='/profile' component={Profile} /> */}
      </div>
    </Auth.Provider>
  );
}

export default App;
