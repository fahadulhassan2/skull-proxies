import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import one from '../../images/pclanding1.png';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import '../../App.css'
import {
    HeroContainer,
    HeroH1,
    HeroP,
    NavBtnLink2,
    NavBtnLink12,
    NavBtnLink,
    IMGDIV,
    NavBtnLink1,
    HeroBtnWrapper,
} from './HeroElements';


const HeroSection = () => {
    return (
        <HeroContainer id="home" className="py-5 container-fluid-fluid ">

            <div className=" row container justify-content-center mx-auto">
                <div className=" offset-md-1 offset-sm-0 col-xl-5 col-lg-8 col-md-5 col-sm-10 mb-lg-5 pb-lg-5" style={{ paddingTop: "65px" }}>
                    <HeroH1 className="display-4  clearsansbold">Crushing <br /> the Competition </HeroH1>
                    <div className="d-flex justify-content-start col-12 mx-auto">
                        {/* <img className="img-fluid w-100 d-md-none d-sm-block" src={one} alt="" /> */}
                    </div>
                    <HeroP className="clearsans">
                        Our user-friendly dashboard makes it easy for you to purchase plans, manage subscriptions and control usability at any time.
                    </HeroP>
                    <HeroBtnWrapper>
                        <NavBtnLink2 to="faq"
                            className="text-decoration-none  ClearSans-Bold"
                        >
                            Learn More
                        </NavBtnLink2>
                        <NavBtnLink12 to="pricing"
                            className="text-decoration-none ClearSans-Bold"
                        >
                            Buy Now
                        </NavBtnLink12>
                    </HeroBtnWrapper>
                </div>

                <IMGDIV className="col-xl-6 col-lg-10 col-md-5 col-sm-12  " style={{ paddingTop: "70px" }}>
                    {/* <Fade right> */}
                    <img className="img-fluid me-lg-4 pe-lg-5 pe-md-0 me-md-0 pe-sm-0 me-sm-0 " style={{ imageRendering: 'pixelated' }} src={one} alt="" />

                    {/* </Fade> */}
                </IMGDIV>

            </div>


        </HeroContainer>

    )
}

export default HeroSection;
