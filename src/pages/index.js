import React, { useState, useEffect } from 'react'
import { Link as LinkR } from 'react-router-dom';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import HeroSection2 from '../components/HeroSection2';
import Overview from '../components/Overview';
import PremimumIsp from '../components/PremimumIsp';
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import Collection from '../components/Collection'
import SkullProxies from '../components/SkullProxies'
import PricingPlan from '../components/PricingPlan'
import '../App.css';
import styled from 'styled-components';
import { css } from "@emotion/react";

//here bad stuff

const PRICINGBTN = styled.button`
border: 1px solid #e1e1e1;
background: #DA0000 !important;
white-space: nowrap;
padding: 8px 60px;
color: #e1e1e1;
font-size: 16px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff !important;
    color: #da0000 !important;
}
`;
const PRICINGBTNGREEN = styled.button`
border: 1px solid #e1e1e1;
background: green !important;
white-space: nowrap;
padding: 8px 60px;
color: #e1e1e1;
font-size: 16px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff !important;
    color: #da0000 !important;
}
`;

const Wrapper = styled.div`
    margin-top: 2rem;
    color: white;
    font-size: 1rem;
    display: flex;

    align-items: center;
    
    @media screen and (max-width: 576px){
        margin-left: 0em;
        justify-content: center;
        flex-direction: column;
    }
`
const H1 = styled.h1`
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
const TextWrapper = styled.div`
margin-left: 0.8rem;
@media screen and (max-width: 576px){
  margin-left: 0rem;
  }
`
const override = css`
  display: block;
  margin: 0 auto;
  justify-content: center;
  border-color: red;
`;

const Home = () => {
    const [user, setUser] = useState(false);
    const [sent, setSend] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#123abc");
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)

    }, [])
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>

            {/* {loading?
            <div>
                <ClimbingBoxLoader
                color={"#F37A24"} loading={loading}
                size={30} />
            </div>
                :
                
            <> */}
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar user={user} toggle={toggle} />

            <div style={{ background: " radial-gradient(at 120% 50%, rgba(102,8,8,1) 6%, rgba(0,0,0,1) 60%)" }}>
                <HeroSection2 />
                {/* <Overview/> */}
                {/* <PremimumIsp/> */}
                <SkullProxies />
            </div>
            <Collection></Collection>

            <div style={{ background: " radial-gradient(at 130% 70%, rgba(102,8,8,1) 6%, rgba(0,0,0,1) 35%)" }}>
                <PricingPlan />
                <Faq />



                {/* last */}


                <div id="contact" className="container py-5">
                    <div class="row py-5 justify-content-center">
                        <div className="col-md-10 col-sm-12 " style={{ paddingTop: "40px", paddingBottom: "120px" }}>
                            <TextWrapper className="col-xl-8 clearsans"  >

                                <H1 className="clearsansbold">Have more questions?</H1>
                                <Wrapper className="mb-4 ">
                                    <p className="clearsansthin ">
                                        If you are experiencing issues or would like to reach our support team, please submit the form. For information regarding restocks, follow our social media.
                                    </p>

                                </Wrapper>
                            </TextWrapper>
                            <div className="row justify-content-center mx-auto">

                                <div class="col-md-6 col-sm-10">
                                    <input className="clearsans" style={{ borderRadius: "0px", height: "50px", color: "white" }} type="text" className="form-control clearsans" placeholder="Full name" aria-label="First name" />
                                </div>
                                <div class="col-md-6 col-sm-10 mt-md-0 mt-sm-3">
                                    <input style={{ borderRadius: "0px", height: "50px", color: "white" }} type="text" className="form-control clearsans " placeholder="Email Address" aria-label="Last name" />
                                </div>
                                <div class="col-12 ">

                                    <textarea style={{ borderRadius: "0px", height: "190px", color: "white" }} className="form-control mt-3 clearsans" placeholder="Write your message here..." id="exampleFormControlTextarea1" Columns="6" rows="3"></textarea>

                                    <div class="d-grid gap-2 mt-3">
                                        {!sent ?

                                            <PRICINGBTN className="btn btn-danger ClearSans-Bold" onClick={e => setSend(true)} style={{ borderRadius: "0px", height: "45px", textAlign: "center", textDecoration: "none" }} type="button">Send Messages</PRICINGBTN>
                                            :
                                            <PRICINGBTNGREEN className="btn btn-danger ClearSans-Bold" style={{ borderRadius: "0px", height: "45px", textAlign: "center", textDecoration: "none" }} type="button">Message Sent</PRICINGBTNGREEN>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>



                </div>
                {/* <div style={{ background: 'radial-gradient(50% 83% at 4% 77%, rgba(194, 10, 11, 0.5) 4%, rgba(194, 10, 11, 0) 97%)' }}> */}
                <Footer />
                {/* </div> */}

            </div>
        </>
        // }
        //         </>
    )
}

export default Home
