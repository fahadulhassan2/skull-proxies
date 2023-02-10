import React,{useState} from 'react'
import {Link as LinkR} from 'react-router-dom';


import PremimumIsp from '../components/PremimumIsp';
import PremimumResidential from '../components/PremimumResidential';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import Footer from '../components/Footer'

import  '../App.css';
import styled from 'styled-components';


const PremiumIsp = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [expand, setExpand] = useState("");
    const [proxy, setProxy] = useState("");
    const [user,setUser] = useState(true);


    const onClickProxy = (_proxy) => () => {

        console.log(_proxy);
        setProxy(_proxy);
        setExpand(_proxy.id === expand ? null : _proxy.id);
        // console.log(expand,proxy.id);
      };
  
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    
    return (
        <>  
  <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar user={user} toggle={toggle}/>
            <div style={{ background:" #000000"}}>

                 {/* <PremimumIsp onClickProxy={onClickProxy} expand={expand} proxy={proxy} /> */}
                 <PremimumResidential onClickProxy={onClickProxy} expand={expand} proxy={proxy} />
            
        
            <Footer/>
            </div>
        
         
        </>
    )
}

export default PremiumIsp
