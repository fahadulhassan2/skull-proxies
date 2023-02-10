import React from 'react'
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import icon4 from '../../images/icon4.png'
import icon5 from './1.png'
import icon6 from '../../images/icon6.png'
import {SkullProxiesContainer, 
    H1,DIV,DIVP} from './SkullProxiesElements';

const index = () => {
    return (
        <SkullProxiesContainer id="features" className="container-fluid-fluid">

            <div className="row container gy-4  justify-content-center mx-auto">
            <div className="row">
            <div className="offset-md-0 offset-sm-1 col-xl-8" >

            <H1 className="ms-md-5 ps-md-5 ms-sm-0 ps-sm-0 clearsansbold">Why choose SkullProxies?</H1>
            </div>
            </div>
                <DIV className="col-xl-3 col-lg-6 col-md-6">
                <div className="px-1 py-4" >
                <img className="img-fluid mb-3"  src={icon1} alt="not"/>
                    <p className="p-0 m-0 clearsansbold">Instant Delivery</p>
                    <DIVP className="p-0 m-0 mb-4 clearsans" >Your plan activates immediately via <br/>dashboard after purchase. </DIVP>
                </div>
                </DIV>
                <DIV className="col-xl-3 col-lg-6 col-md-6">
                <div className="px-1 py-4" >
                <img className="img-fluid mb-3"  src={icon2} alt="not"/>
                <p className="p-0 m-0 clearsansbold">Ultra-Fast Speed</p>
                    <DIVP className="p-0  m-0  mb-4 clearsans" >Insane speeds on all supported sites to <br />better help increase your chance of success.</DIVP>
                </div>
                </DIV>
                <DIV className="col-xl-3 col-lg-6 col-md-6">
                <div className="px-1 py-4" >
                <img className="img-fluid mb-3"  src={icon3} alt="not"/>
                <p className="p-0 m-0 clearsansbold">Stable Performance</p>
                    <DIVP className="p-0 m-0 mb-4 clearsans" >99% Uptime. Reliable service on any <br />drop no matter what.
 </DIVP>
                </div>
                </DIV>
                <DIV className="col-xl-3 col-lg-6 col-md-6">
                <div className="px-1 py-4" >
                <img className="img-fluid mb-3"  src={icon4} alt="not"/>
                <p className="p-0 m-0 clearsansbold">User-Friendly Dashboard</p>
                    <DIVP className="p-0 m-0 mb-4 clearsans" >Built to track everything related to your plan<br /> and navigate with ease. </DIVP>
                </div>
                </DIV>
                <DIV className="col-xl-3 col-lg-6 col-md-6">
                <div className="px-1 py-4" >
                <img className="img-fluid mb-3" style={{height:"24px",paddingLeft:"6px"}} src={icon5} alt="not"/>
                <p className="p-0 m-0  clearsansbold">Experienced Team</p>
                    <DIVP className="p-0 m-0 mb-3 clearsans" >Our staff has 10+ years of experience<br /> so you can rely on us for quality service. </DIVP>
                </div>
                </DIV>
                <DIV className="col-xl-3 col-lg-6 col-md-6">
                <div className="px-1 py-4" >
                <img className="img-fluid mb-3"  src={icon6} alt="not"/>
                <p className="p-0 m-0 clearsansbold">24/7 Support</p>
                    <DIVP className="p-0 m-0 mb-3 clearsans" >Our support team is always available to <br /> provide you with solutions to any issues. </DIVP>
                </div>
                </DIV>

            </div>
            
        </SkullProxiesContainer>
    )
}



export default index 
