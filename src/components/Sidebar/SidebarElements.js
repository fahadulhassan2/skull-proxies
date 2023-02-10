import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from "react-icons/fa";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen})=>(isOpen? '100%' : '0')};
    top: ${({isOpen})=>(isOpen? '0' : '100%')};
`;

export const CloseIcon= styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grip-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }

`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none !important;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none !important;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #DAC90D;
        transition: 0.2s ease-in-out;
    }

`;
export const SidebarLink2 = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none !important;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none !important;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #DAC90D;
        transition: 0.2s ease-in-out;
    }

`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
        background: #DA0000;
        white-space: nowrap;
        padding: 6px 20px;
        margin-left:30px;
        color: #e1e1e1;
        font-size: 22px;
        outline: none;
        border: 1px solid #e1e1e1;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none ;

        &:hover {
            transition: all 0.2s ease-in-out;
            background: #fff;
            color: #da0000 !important;
        }
`
