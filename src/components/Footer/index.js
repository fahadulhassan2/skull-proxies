import React from 'react'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

import { FaDiscord, FaTwitter } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,

} from './FooterElements'
import twitter from '../../images/twitter.svg'
import discord from '../../images/discord.svg'
import logo from '../../images/SKULLPROXIES LOGO-14.png'
const Footer = () => {
    return (
        <FooterContainer className="containter-fluid-fluid clearsansthin " style={{ background: "transparent" }}>
            <FooterWrap className="container justify-content-center mx-auto row">
                <div className="col-lg-4 col-md-8 col-sm-8">
                    <img className="img-fluid w-50" style={{ imageRendering: '-webkit-optimize-contrast' }} alt="not" src={logo} />
                    <p className="text-white mt-3 clearsansthin" style={{ fontSize: "0.8rem", lineHeight: "1.5rem" }}>
                        Providing you with ultra-fast premium proxies to exceed <br /> expectations. All sales are final. We do not change or edit any orders once payment has been processed. Please read all descriptions carefully prior to ordering.
                    </p>
                </div>
                <div className="col-lg-4  col-md-4 col-sm-10">
                    <p className="text-white clearsansbold">NAVIGATION</p>
                    <div className="d-flex text-white col-12 mb-3">
                        <div className="">
                            <LinkS className="text-decoration-none clearsansthin" style={{ fontSize: "0.8rem" }}>About </LinkS><br />
                            <LinkS to="features" className="text-decoration-none clearsansthin" style={{ fontSize: "0.8rem" }}>Features</LinkS> <br />
                            <LinkS className="text-decoration-none clearsansthin" style={{ fontSize: "0.8rem" }}>Products</LinkS>
                        </div>
                        <div className="mx-5 px-1">
                            <LinkS to="faq" className="text-decoration-none clearsansthin" style={{ fontSize: "0.8rem" }}>FAQ </LinkS><br />
                            <LinkS to="contact" className="text-decoration-none clearsansthin" style={{ fontSize: "0.8rem" }}>Contact</LinkS> <br />
                            <LinkS className="text-decoration-none  clearsansthin" style={{ fontSize: "0.8rem" }}>Dashboard</LinkS>
                        </div>
                        <div className="">
                            <LinkR to="/terms" className="text-decoration-none clearsansthin" style={{ fontSize: "0.8rem" }}>Terms of Service </LinkR><br />
                            <LinkR to="privacy" className="text-decoration-none clearsansthin" style={{ fontSize: "0.8rem" }}>Privacy Policy</LinkR> <br />
                            <LinkR to="refund" className="text-decoration-none clearsansthin " style={{ fontSize: "0.8rem" }}>Refund Policy</LinkR>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2  col-md-4 col-sm-10">
                    <p className="text-white clearsansbold pt-lg-0 pt-sm-3">CONTACT</p>
                    <p className="text-white clearsansthin" style={{ fontSize: "0.8rem" }}>contact@skullproxies.com</p>
                    <div className="d-flex mt-4 col-lg-6 col-sm-4 ">
                        <a href="https://twitter.com/SkullProxies">
                            <img className="img-fluid " src={twitter} alt="" />
                        </a>
                        <a href="https://discord.gg/cnhxMNefSz">
                            <img className="img-fluid ps-3" src={discord} alt="" />
                        </a>
                    </div>
                </div>
            </FooterWrap>
            <div className="my-4" style={{ borderTop: "1px solid #ffffff" }}></div>
            <div className="container mx-auto justify-content-center row">
                <p className="clearsansthin text-start text-white offset-lg-2 offset-sm-0" style={{ fontSize: "0.8rem" }}>SKULL IO LLC | Copyright &copy; 2021 | All rights reserved </p>
            </div>
        </FooterContainer>
    )
}

export default Footer
