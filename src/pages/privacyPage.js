import React,{useState} from 'react'
import {Link as LinkR} from 'react-router-dom';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import Footer from '../components/Footer'
import PrivacyPolicy from '../components/PrivacyPolicy'
import  '../App.css';
import styled from 'styled-components';


const PrivacyPage = () => {
    const [isOpen,setIsOpen] = useState(false);
  
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    
    return (
        <>  
  <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar   toggle={toggle}/>
            <div style={{ background:" radial-gradient(at 120% 50%, rgba(102,8,8,1) 6%, rgba(0,0,0,1) 60%)"}}>
   
            <PrivacyPolicy/>
            
        
            <Footer/>
            </div>
        
         
        </>
    )
}

export default PrivacyPage
