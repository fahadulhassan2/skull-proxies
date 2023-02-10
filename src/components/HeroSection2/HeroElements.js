
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
export const HeroContainer = styled.div`
  
    height: 105vh;
    display: grid;
    place-items: center;
    @media (min-width: 992px) and (max-width: 1040px){
        
        height: 150vh !important;
    }
    @media screen and (max-width: 786px){
        
        height: 150vh !important;
    }
    
    ${'' /* @media screen and (min-width: 786px) and (max-width: 992){   
        height: 150vh !important;
    } */}

    @media screen and (max-width: 576px){
        
        height: 90vh !important;
    }
    @media screen and (max-width: 400px){
        
        height: 90vh !important;
    }
  
`;
export const HeroH1 = styled.h1`
    color: #fff;
    text-align: left;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 576px){
        font-size: 2rem; 
      
    }

` 
export const NavBtnLink = styled(LinkR)`
border: 1px solid #e1e1e1;
background: #00000;
white-space: nowrap;
padding: 8px 40px;
color: #ffffff;
font-size: 16px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000000 !important;
}
`;
export const NavBtnLink2 = styled(LinkS)`
border: 1px solid #e1e1e1;
background: #00000;
white-space: nowrap;
padding: 8px 40px;
color: #ffffff;
font-size: 16px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000000 !important;
}
`;
export const NavBtnLink1 = styled(LinkR)`
border: 1px solid #ffffffff;
background: #DA0000;
white-space: nowrap;
padding: 8px 40px;
margin-left: 2rem;
color: #e1e1e1;
font-size: 16px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
@media screen and (max-width: 400px){
    margin-left: 1rem;

    }

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #da0000 !important;
}
`;
export const NavBtnLink12 = styled(LinkS)`
border: 1px solid #ffffffff;
background: #DA0000;
white-space: nowrap;
padding: 8px 40px;
margin-left: 2rem;
color: #e1e1e1;
font-size: 16px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
@media screen and (max-width: 400px){
    margin-left: 1rem;

    }

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #da0000 !important;
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

export const IMGDIV = styled.div`
display: flex;
   margin-top:-50px;
   order: 2;
    @media screen and (max-width: 768px){
        font-size: 20px;
        margin-top:0px;
    }

    @media screen and (max-width: 576px){
       display: none;
        margin-top:0px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    @media screen and (max-width: 400px){
       
    }
`
export const Simage = styled.img`
-webkit-backface-visibility: hidden;
-ms-transform: translateZ(0); /* IE 9 */
-webkit-transform: translateZ(0); /* Chrome, Safari, Opera */
transform: translateZ(0);
`

