import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
export const TermsConditioncontainer = styled.div`
background-color: none; 
width: 85%;
margin-bottom: 10rem;

@media screen and (max-width: 576px){
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 0rem;
    width: 95%;
    text-align: left;

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

export const TermsConditioncontentTable = styled.div`
overflow: auto !important;
` ;


export const Div = styled.div`
display: block;
position: sticky;
top: 10vh;
@media screen and (max-width: 576px){
    position: sticky;
    display: none;
}
` ;


export const Para = styled(LinkS)`
color: #fff;
cursor: pointer;
text-decoration: none;
font-size: 0.6rem;
&:hover{
    color: #ffffff !important;
}
` ;
export const ParaSection = styled.p`
margin-top: 1.5rem;
color: #fff;
font-size: 0.7rem;
line-height: 2;
` ;



export const Heading = styled.h1`
 color: #fff;
 font-weight: 500;
 
 @media screen and (max-width: 576px){
    text-align: left;
    position: static !important;
    position: relative; !important;
    display: grid !important;
    order: 5 !important;
}
` ;
