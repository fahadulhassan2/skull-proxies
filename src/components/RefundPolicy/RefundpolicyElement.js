import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';
export const RefundPolicycontainer = styled.div`
background-color: none; 
margin-left: 9.5rem;
width: 85%;
margin-bottom: 10rem;
@media screen and (max-width: 576px){
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 0rem;
    width: 95%;
    text-align: justify;
    
}
@media (min-width: 576px) and (max-width: 786px){
    margin-left: 0rem;
    margin-bottom: 0rem;
}
@media (min-width: 786px) and (max-width: 992px){
    margin-left: 0rem;
    margin-bottom: 0rem;
}
@media (min-width: 992px) and (max-width: 1280px){
    margin-left: 5rem;
    margin-bottom: 5rem;
}
` ;
export const Para = styled.p`
color: #fff;
font-size: 0.79rem;
line-height: 2;
padding-top: 0.5rem;
` ;
export const Heading = styled.h1`
 color: #fff;
 font-weight: 500;
 @media screen and (max-width: 576px){
    text-align: center;
}
` ;
