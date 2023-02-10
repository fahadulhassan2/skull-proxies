import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import ReactModal  from "react-modal";

import {FaTimes} from "react-icons/fa";
export const CloseIcon= styled(FaTimes)`
    color: #fff;
    font-size: 1.5rem;
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
export const Popupaction = styled.p`
position: fixed;
top: 0;
left: 0;
width: 100;
height: 100vh;
background-color: rgba(0, 0, 0, 0.2) !important;
display: flex;
justify-content: center;
align-items: center;
`

;

export const ModalStyle = styled(ReactModal)`


`

;

export const popupInner = styled.p`
  position: relative;
    padding: 32px;
    width: 100%;
    max-width: 640px;
    background-color: #000000 !important;`
;


export const BtnLinkRed = styled.button`
border-radius: 0px !important;
border: 1px solid #e1e1e1 !important;
background: red !important;
white-space: nowrap;
padding: 8px 40px;
color: #e1e1e1;
font-size: 16px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #ffffffff !important;
}`
;


export const BtnLinkBlack = styled(LinkR)`
border: 1px solid #e1e1e1 !important;
background: black !important;
border-radius: 0px !important;
white-space: nowrap;
padding: 8px 40px;
color: #e1e1e1;
font-size: 16px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #ffffffff !important;
}`
;


export const ApplyRed = styled(LinkR)`
border: 1px solid #e1e1e1 !important;
background: red !important;
white-space: nowrap;
padding: 7px 30px;
border-radius: 0px !important;
color: #e1e1e1;
font-size: 16px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #ffffffff !important;
}`
;