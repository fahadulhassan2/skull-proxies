import React from 'react'
import {
    FaqContainer,
    FaqWrapper,
    Accord
}
    from "./CollectionElement"
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import portimg from '../../images/nft-art.gif'
import "animate.css/animate.min.css";
import Marquee from "react-fast-marquee";
import c1 from '../../images/sites/first-1.svg'
import c2 from '../../images/sites/first-2.svg'
import c3 from '../../images/sites/first-3.svg'
import c4 from '../../images/sites/panini.svg'
import c5 from '../../images/sites/first-5.svg'
import c6 from '../../images/sites/first-6.svg'
import c7 from '../../images/sites/first-7.svg'
import c8 from '../../images/sites/first-8.svg'
import c9 from '../../images/sites/first-9.svg'
import c10 from '../../images/sites/first-10.svg'
import c11 from '../../images/sites/first-11.svg'


import a1 from '../../images/sites/second-1.svg'
import a2 from '../../images/sites/microsoft.svg'
import a3 from '../../images/sites/amd.svg'
import a4 from '../../images/sites/second-4.svg'
import a5 from '../../images/sites/second-5.svg'
import a6 from '../../images/sites/second-6.svg'
import a7 from '../../images/sites/topps.svg'
import a8 from '../../images/sites/nike_snkrs.svg'
import a9 from '../../images/sites/newegg.svg'
import a10 from '../../images/sites/second-10.svg'

import b1 from '../../images/sites/third-1.svg'
import b2 from '../../images/sites/third-2.svg'
import b3 from '../../images/sites/fanatics.svg'
import b4 from '../../images/sites/third-4.svg'
import b5 from '../../images/sites/third-5.svg'
import b6 from '../../images/sites/third-6.svg'
import b7 from '../../images/sites/third-7.svg'
import b8 from '../../images/sites/third-8.svg'
import b9 from '../../images/sites/third-9.svg'
import b10 from '../../images/sites/third-10.svg'


import styled from "styled-components";
import RubberBand from 'react-reveal/RubberBand';
import { Slide } from "react-slideshow-image";
import { ColH1, ColP, Text } from '../../components/Collection/CollectionElement';
import { Splide, SplideSlide } from '@splidejs/react-splide';
const Hide = styled.div`

@media screen and (max-width: 768px){
    display: none;
}
`
const STDIV = styled.div`
// margin-left: 300px;
@media screen and (max-width: 768px){
    // margin-left: 0px;
}
`
const Collection = () => {

    return (
        <FaqContainer id="sites">
            {/* <FaqWrapper> */}

            <div className="containter py-5 ">
                <div className="container mx-auto row  ">
                    <div className=" row container">
                        <Text className="offset-1 col-xl-5">
                            <ColH1 className="clearsansbold">
                                Supported Sites
                            </ColH1>
                            <ColP className="clearsans">
                                Below is a list of platforms that we currently crush on.
                            </ColP>
                        </Text>
                    </div>

                </div>
                <div className="container-fluid ">

                    <Marquee style={{ position: "relative", zIndex: "0" }} speed={50} direction={"right"} pauseOnHover={true} gradient={false}>
                        <img className="img-fluid ms-5 ps-2" src={c1} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={c2} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={c3} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={c4} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={c5} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={c6} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={c7} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={c8} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={c9} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={c10} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={c11} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={c1} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={c2} alt="Image 1" />
                        {/* <img className="img-fluid ms-5 ps-2" src={c3}  alt="Image 1"/> */}
                    </Marquee>
                </div>
                <div className=" mt-1">
                    <Marquee style={{ position: "relative", zIndex: "0" }} speed={50} direction={"left"} pauseOnHover={true} gradient={false}>
                        <img className="img-fluid ms-5 ps-5" src={a1} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-5" src={a2} alt="Image 2" />
                        <img className="img-fluid ms-5 ps-5" src={a3} alt="Image 3" />
                        <img className="img-fluid ms-5 ps-5" src={a4} alt="Image 4" />
                        <img className="img-fluid ms-5 ps-5" src={a5} alt="Image 5" />
                        <img className="img-fluid ms-5 ps-2" src={a6} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={a7} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={a8} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={a9} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={a10} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={a1} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-5" src={a2} alt="Image 6" />
                        <img className="img-fluid ms-5 ps-5" src={a3} alt="Image 7" />
                        {/* <img className="img-fluid ms-5 ps-5" src={a4}  alt="Image 8"/> */}
                    </Marquee>
                </div>
                <div className=" mt-1">
                    <Marquee style={{ position: "relative", zIndex: "0" }} speed={50} direction={"right"} pauseOnHover={true} gradient={false}>
                        <img className="img-fluid ms-5 ps-5" src={b1} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-5" src={b2} alt="Image 2" />
                        <img className="img-fluid ms-5 ps-5" src={b3} alt="Image 3" />
                        {/* <img className="img-fluid ms-5 ps-5" src={b4} alt="Image 4" /> */}
                        <img className="img-fluid ms-5 ps-2" src={b5} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={b6} alt="Image 1" />
                        {/* <img className="img-fluid ms-5 ps-2" src={b7} alt="Image 1" /> */}
                        <img className="img-fluid ms-5 ps-2" src={b8} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={b9} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-2" src={b10} alt="Image 1" />
                        <img className="img-fluid ms-5 ps-5" src={b1} alt="Image 5" />
                        <img className="img-fluid ms-5 ps-5" src={b2} alt="Image 6" />
                        {/* <img className="img-fluid ms-5 ps-5" src={b3}  alt="Image 7"/> */}
                        {/* <img className="img-fluid ms-5 ps-5" src={b4} alt="Image 8" /> */}
                    </Marquee>
                </div>

            </div>

            {/* </FaqWrapper> */}
        </FaqContainer>

    )
}

export default Collection
