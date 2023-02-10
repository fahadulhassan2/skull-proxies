import React from 'react'
import {
    FaqContainer,
    FaqWrapper,
    Accord
}
from "./InfoElement"
import logo from '../../images/logo.png'
import rkon from './rkon.png'
import hero from './hero.png'
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

import styled from "styled-components";

const Hide = styled.div`

@media screen and (max-width: 768px){
    display: none;
}
`
const Icon = styled(LinkR)`
        margin-left: 32px;
        margin-top: 32px;
        text-decoration: none ;
        color: #fff;
        font-weight: 700;
        font-size: 32px;

        @media screen and (max-width: 480px){
            margin-left: 16px;
            margin-top: 8px;

        }
`;

export const Text = styled.span`
        text-align: center;
        margin-top: 24px;
        padding: 0 50px;
        color: #fff;
        font-size: 18px;
`
export const NavBtnLink = styled(LinkS)`
    border-radius: 50px;
    background: #DA0000;
    white-space: nowrap;
    padding: 10px 22px;
    color: #FFF;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none ;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #da0000 !important;
    }
`;
const STDIV = styled.div`
// margin-left: 300px;
@media screen and (max-width: 768px){
    // margin-left: 0px;
}
`
export const FormContent = styled.div`
        height: 100%;
        border: 1px solid yellow ;
        display: flex;
        width: 100%;
        
        flex-direction: column;
        justify-content: center;
        
        @media screen and (max-width: 480px){
            padding: 10px;
        }
        
`;
const Info = () => {
    return (
        <FaqContainer >
        <Icon to="/">    <img style={{height:"150px", width:"200px"}} src={logo}/> </Icon>
       <div>
       <h1 style={{color:"#FFF" , textAlign:"center"}}>
     <img style={{height:"250px",justifyContent:"center", textAlign:"center", width:"300px"}} src={rkon}/> 
      
      </h1>
      
       <FormContent >
   
       <h1 style={{color:"#FFF" , textAlign:"center",paddingTop:"20px"}}>
     
               Welcome to  <span style={{color:"#DA0000"}}>RKON</span>
                </h1>
               
                <Text>
                We are launching the 1st Crypto hero battle card collection there are 60 unique Crypto hero’s Hand created and designed,</Text>
                <Text>
                The cards are in 3 sets all 1st editions sets with 3 unique animated backgrounds, set one cards are #1-50 (meaning only 50 of each hero available) set two cards are #1-40 and set 3 cards are #1-30.
                </Text>
                <Text>
                So that means that a max of only 30 people in the whole world can own a full set of the 1st edition cards.
                </Text>
                <Text>
                Also, there will be some Ultra rare cards being created in card designs of blue, bronze, silver and gold to mark their rarity in only 4 blue, 3 Bronze 2 Silver and 1 Gold of 10 selected heros.
                </Text>
                <Text style={{paddingBottom:"50px"}}>
                These will all live on Open see where you can view buy and swop your cards, as well as hold them for rewards and exclusive RKON token Air drops when it launches.
                </Text>
                </FormContent>
               <h1 style={{color:"#FFF" , textAlign:"center"}}>
               <img  style={{height:"240px", width:"200px",textAlign:'center'}} src={hero}/> 
                      
                </h1>
              
        </div>

        </FaqContainer>
    
    )
}

export default Info
