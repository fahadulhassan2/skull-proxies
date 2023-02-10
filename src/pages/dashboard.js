import React,{useState} from 'react'
import {Link as LinkR} from 'react-router-dom';
import Overview from '../components/Overview';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import Footer from '../components/Footer'

import  '../App.css';
import styled from 'styled-components';


const Dashboard = () => {
    const [user,setUser] = useState(true);
    const [isOpen,setIsOpen] = useState(false);
    const [expand, setExpand] = useState("");
    const [proxy, setProxy] = useState("");



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
            <Navbar user={user}  toggle={toggle}/>
            <div style={{ background:" #000000"}}>

               <Overview onClickProxy={onClickProxy} expand={expand} />
            
        
            <Footer/>
            </div>
        
         
        </>
    )
}

export default Dashboard
