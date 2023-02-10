import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import Traits from '../components/Traits'
import Footer from '../components/Footer'
import Terms from '../components/Terms'
import Info from '../components/InfoPage';
//here bad stuff


const InfoPage = () => {
    const [isOpen,setIsOpen] = useState(false);
  
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    

    
    return (
        <>  
           <Info/>
            <Footer/>
           
        </>
    )
}

export default InfoPage
