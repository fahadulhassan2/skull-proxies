import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';


export const PRICINGCcontainer = styled.div`
padding-top: 70px;
background-color: none; 

` ;
export const DIV = styled.div`
 border: 1px solid #ffffff;
 margin-left: 0.5rem;
 margin-right: 0.5rem;
 background: #000000;    
 width: 20%;
 @media screen and (max-width: 576px){
        width: 60%;
        justify-content: center !important;
    }
    @media (min-width: 576px) and (max-width: 786px){
        width: 50%;
        
    }
    @media (min-width: 786px) and (max-width: 992px){
        width: 70%;
        
    }
    @media (min-width: 992px) and (max-width: 1280px){
        width: 35%
    }
    @media screen and (max-width: 415px){
        width: 70%
    }
    @media screen and (max-width: 320px){
        width: 100%
    }
` ;

export const H1 = styled.h1`
    color: #fff;
    font-size: 2.5rem;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 576px){
        margin-left: 1em;
        text-align: center;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }

` 
export const PRICINGBTN1 = styled.button`
border: 1px solid #707070 !important; 
background: #00000 !important;
white-space: nowrap;
padding: 8px 30px;
color: #707070 !important;
font-size: 16px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
@media screen and (max-width: 480px){
        margin-top: 1rem;
    }
&:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid #ffffff !important; 
    color: #ffffff !important;
}
`;
export const PRICINGBTN = styled.button`
border: 1px solid #e1e1e1;
background: #DA0000 !important;
white-space: nowrap;
padding: 8px 60px;
color: #e1e1e1 !important;
font-size: 16px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #000000 !important;
    color: #ffffff !important;
}
`;
export const HeroP = styled.p`
   
    color: #bbbbbb;
    font-size: 1.1rem;
    text-align: left;

    @media screen and (max-width: 768px){
        font-size: 20px;
    }

    @media screen and (max-width: 480px){
        font-size: 15px;
    }
`;



export const Wrapper = styled.div`
    margin-top: 2rem;
  
    font-size: 2.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    @media screen and (max-width: 576px){
        margin-left: 0em;
        justify-content: center;
        flex-direction: column;
    }
`
export const Purchase = styled.div`
  
    font-size: 2.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const TextWrapper = styled.div`
  margin-left: 5.5rem;
  @media screen and (max-width: 576px){
    margin-left: 0rem;
    }
`