import React from 'react'
import {
    FaqContainer,
    FaqWrapper,
    Accord
}
    from "./FaqElements"
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import './bg.css';
import e from '../../images/expand.png';
import styled from "styled-components";

const Faq = () => {
    return (
        <FaqContainer className = "container-fluid-fluid" id="faq">
            {/* <FaqWrapper> */}

            <div className="containter py-5 img-fluid">
                <div className="container row justify-content-center mx-auto">
                <h1 className="text-center mb-3 clearsansbold "> Frequently Asked Questions</h1>
                <div className="col-lg-5  col-md-8 col-sm-10  ">
                        <div className="accordion " id="accordionExample">
                            <Fade left>
                                <div className="accordion-item mb-3 ">

                                    <h2 className="accordion-header clearsans" id="headingOne">
                                    
                                        <button className=" text-light  accordion-button collapsed " type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            What is Skull Proxies?
                                        </button>
       
                                   
                                    </h2>

                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body  p-0 m-0">
                                            <p className="text-light pt-3 clearsans  p-0 m-0">
                                            We provided Premium ISP proxies & Residential proxies which work on many platforms providing you ultra-fast speeds to help you secure checkouts on all releases. We also provide multiple Premium Servers to help assist you with your needs.</p>
                                        </div>
                                    </div>

                                </div>
                            </Fade>
                            <Fade right>
                                <div className="accordion-item mb-3  ">
                                    <h2 className="accordion-header clearsans" id="headingTwo">
                                        <button className=" text-light accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            What sites are supported?

                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body p-0 m-0">
                                            <p className="text-light clearsans pt-3  p-0 m-0">
                                            We support platforms such as Shopify, Supreme, Footsites, Yeezy Supply, Finishline, JD Sports, Nike, Target, Walmart, Amazon and many more.
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade left>
                                <div className="accordion-item mb-3 ">
                                    <h2 className="accordion-header clearsans" id="headingThree">
                                        <button className="text-light accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            Where can I expect my proxies to be delivered?

                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body  p-0 m-0">
                                            <p className="text-light clearsans pt-3  p-0 m-0">
                                            After your purchase, your proxies are delivered instantly and can be found in your dashboard.
                 </p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header clearsans" id="headingFour">
                                        <button className="text-light accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapsefour">
                                            How can I test my proxies?

                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body  p-0 m-0">
                                            <p className="text-light pt-3 clearsans p-0 m-0">
                                            We always recommend you to test your proxies with a proxy tester or using a product link on a supported site for best results.

 </p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                   

</div>



                        </div>
                  
                        <div className="col-lg-5 col-md-8 col-sm-10  ">
                        <div className="accordion " id="accordionExample">
                            <Fade left>
                                <div className="accordion-item mb-3">

                                    <h2 className="accordion-header clearsans" id="heading1">
                                        <button className=" text-light accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collaps1" aria-expanded="false"
                                            aria-controls="collaps1">
                                            Are these proxies unbanned?

                                        </button>
                                    </h2>

                                    <div id="collaps1" className="accordion-collapse collapse" aria-labelledby="heading1"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body  p-0 m-0">
                                            <p className="text-light clearsans pt-3  p-0 m-0">
                                            Yes, all proxies come fresh and unbanned on all supported sites.

</p>
                                        </div>
                                    </div>

                                </div>
                            </Fade>
                            <Fade right>
                                <div className="accordion-item mb-3  ">
                                    <h2 className="accordion-header clearsans" id="heading2">
                                        <button className=" text-light accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false"
                                            aria-controls="collapse2">
                                            Is there a limit to the usage of these proxies?

                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body p-0 m-0">
                                            <p className="text-light clearsans pt-3  p-0 m-0">
                                            There is unlimited usage with our datacenter proxies. Residential Proxies are based on the amount of data that you purchase.
 </p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade left>
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header clearsans" id="heading3">
                                        <button className="text-light accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false"
                                            aria-controls="collapse3">
                                            What plans do you offer?

                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body  p-0 m-0">
                                            <p className="text-light clearsans pt-3  p-0 m-0">We currently offer 30 day plans for all of our premium services.
</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header clearsans" id="heading4">
                                        <button className="text-light accordion-button collapsed " type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false"
                                            aria-controls="collapse4">
                                            Who can I contact for more information?

                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body  p-0 m-0">
                                            <p className="text-light clearsans pt-3  p-0 m-0">
                                            You can always contact us via email at contact@skullproxies.com or open a ticket via Discord and we will be happy to assist you.

</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                      

                            </div>

                        </div>

                </div>
                
            </div>

            {/* </FaqWrapper> */}
        </FaqContainer>

    )
}

export default Faq
