import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : '#000')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8x all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: ${({ user }) => (user ? '0 10px' : '0 24px')};
    max-width: ${({ user }) => (user ? '1100px' : '1100px')};
`

export const NavLogo = styled(LinkR)`
    // color: #e1e1e1;
    display: flex;
    max-width: 30rem;
    align-items: center;
    text-decoration: none !important;
    position: relative;
    right:2rem;
    
    height: 100%;
    cursor: pointer;
    @media screen and (max-width: 768px){
        margin-top: 0.5rem;
        width: 75%;
        
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #e1e1e1 !important;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;


    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    padding-left: ${({ user }) => (user ? '25px' : '0')};
    display: ${({ hide }) => (hide ? 'none' : '')};
`

export const NavLinks = styled(LinkS)`
    color: #878787;
    display: flex;

    align-items: center;
    text-decoration: none !important;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
 
    &:hover {
        color : #f4f4f4 !important;
    }    
    &.active {
        color : #f4f4f4 !important;
    }  
`;

export const NavBtn = styled.nav`
    display: flex;
    
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`;
export const NavBtnLink = styled(LinkR)`
    background: #DA0000;
    white-space: nowrap;
    padding: 6px 20px;
    color: #e1e1e1;
    font-size: 15px;
    outline: none;
    border: 1px solid #e1e1e1;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none ;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #000;
        color: #fff !important;
    }
`;

export const NavLinks2 = styled(LinkR)`
    color: #878787;
    display: flex;
    align-items: center;
    text-decoration: none !important;
    padding: 0 0.2rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color : #f4f4f4 !important;
    }    
    &:active {
        color : #f4f4f4 !important;
    }  
    
    @media screen and (max-width: 768px){
        margin-top: 1rem;
        width: 75%;
        
    }

   
`;



export const Button = styled.button`
    
    cursor: pointer;
    border: none !important;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #e1e1e1 !important;
    }
`;

