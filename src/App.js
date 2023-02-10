import React, { useEffect, useState, useRef } from "react";
import './App.css';
import './fonts/ClearSans-Regular.ttf';
import './fonts/ClearSans-Light.ttf';
import './fonts/ClearSans-Thin.ttf';
import './fonts/ClearSans-Bold.ttf';
import ClipLoader from "react-spinners/ClipLoader";


import Navbar from './components/Navbar/index'
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages'


import InfoPage from "./pages/infopage";
import TermsPage from "./pages/TermPage";
import RefundPage from "./pages/RefundPage";
import PrivacyPage from "./pages/privacyPage";
import Dashboard from "./pages/dashboard";
import Premium from "./pages/premiumisp";
import PremiumResi from './pages/premiumresi';


function App() {
  const[ isOpen, setIsOpen] = useState(false);


  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
    <Router>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/terms" component={TermsPage} exact />
        <Route path="/refund" component={RefundPage} exact />
        <Route path="/privacy" component={PrivacyPage} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/premiumisp" component={Premium} exact />
        <Route path="/premiumresi" component={PremiumResi} exact />
        <Route path="/info" component={InfoPage} exact />
        
      </Switch>

    </Router>
    
    </>
  );
}

export default App;
