import React,{useState,useEffect} from 'react';
 import Fade from 'react-reveal/Fade';
 import one from '../../images/pclanding.png';

 import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import { 
    HeroContainer,
    HeroH1,
    HeroP,
    NavBtnLink,
    IMGDIV,
    NavBtnLink1,
    HeroBtnWrapper, 
} from './HeroElements';


const HeroSection = () => {
  

    return (
        <HeroContainer className="py-5 container-fluid-fluid ">
           
        <div className=" row container justify-content-center ">
            <div className="col-xl-5 col-lg-8 col-md-10 col-sm-10 mb-lg-5 pb-lg-5">
            <HeroH1 className="display-4 clearsansbold">Crushing <br/> the Competition </HeroH1>
            <HeroP className="clearsans">
            Our user-friendly dashboard makes it easy for you to purchase plans, manage subscriptions and control usability at any time.
            </HeroP>
            <HeroBtnWrapper>
                <NavBtnLink 
                className="text-decoration-none"            
                >
                    Learn More 
                </NavBtnLink>
                <NavBtnLink1 
                className="text-decoration-none"            
                >
                    Buy Now
                </NavBtnLink1>
            </HeroBtnWrapper>
            </div>

            <IMGDIV className="col-xl-5 col-lg-10 col-md-10 col-sm-8 d-md-block d-sm-none ">
                {/* <Fade right> */}
               
                    <img 
                    className="img-fluid " src={one} alt="" />
                
                 {/* </Fade> */}
            </IMGDIV>

        </div>
       
   
        </HeroContainer>

    )  
}

export default HeroSection;
