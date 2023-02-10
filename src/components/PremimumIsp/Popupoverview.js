import React, { useState, useEffect } from "react";
import {
    Popupaction, popupInner, Icon,
    CloseIcon, BtnLinkBlack, BtnLinkRed, ApplyRed
} from './Popelemet'
import '../../App.css';
import ReactModal from "react-modal";

ReactModal.setAppElement(document.getElementById('root'));


function Popupoverview({
    open,
    setOpen,

}) {
    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {

        setOpen(false)
    }



    return (
        <ReactModal
            style={{
                overlay: { backgroundColor: "rgba(12, 12, 12, 0.75)" },
                content: {
                    inset: "0px",
                    background: "transparent",
                    border: "none",
                    backdropFilter: "blur(10px)",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    left: "50%",
                    top: "50%",
                    overflow: "auto",
                    transform: "translate(-50,-50%)",
                },
            }}
            isOpen={open}

            // style={{  }}
            onRequestClose={handleCloseModal}
            shouldCloseOnOverlayClick={true}

        >
            <div
                className="modal-dialog modal-md modal-dialog-centered"
                role="document "

            >
                <form style={{ width: "90%", height: "auto", textAlign: 'center' }} >
                    <div className="modal-content p-3" style={{ backgroundColor: "black " }}>
                        <div className="modal-body border border-1 " style={{ backgroundColor: "black " }}>
                            <div
                                className="row "
                                style={{
                                    justifyContent: "right",
                                    position: "absolute",
                                    backgroundColor: "black !important",
                                    right: "5%",
                                    display: "flex",
                                    color: 'white',
                                }}
                            >
                                {/* <CloseIcon onClick={() => setOpen(!open)} /> */}
                            </div>
                            <div className="d-flex justify-content-between text-white" style={{ borderBottom: "1px solid #ffffff" }}>
                                <p className="">Premium ISP 25 Proxies</p>
                                <p className=""></p>
                                {/* <Icon onClick={handleCloseModal}> */}
                                <CloseIcon onClick={handleCloseModal} />
                                {/* </Icon> */}
                            </div>
                            <div className="modal-action-inputs p-4">

                                <p className="text-center fs-5 text-white  clearsans">25 Proxies </p>
                                <p className="text-center text-white clearsansbold"><sup>$</sup> <sub className="display-5 clearsansbold">40</sub> </p>
                                <p className="text-center text-white clearsans">30 Days plan </p>
                            </div>

                            <div className="row my-2">
                                <div className="col-12">
                                    <div className="row my-2">
                                        <label for="exampleInputEmail1" class="form-label text-white fs-6" style={{ textAlign: 'left' }}>DISCOUNT CODE</label>
                                        <div className="col-md-8 col-sm-12" >

                                            <input
                                                className="form-control py-2 "
                                                name="name"
                                                placeholder="Quantity"
                                                style={{ color: "white", borderRadius: "0px" }}
                                                //value={name}
                                                id="name"
                                            />
                                        </div>
                                        <div className=" col-md-4 col-sm-12">

                                            <ApplyRed
                                                className="btn btn-primary create-new-action  "
                                            >
                                                Apply
                                            </ApplyRed>
                                        </div>
                                    </div>

                                </div>


                                <div className="col-xl-12 col-lg-5 col-md-5 mt-4">
                                    <div class="form-check" style={{ textAlign: 'left' }}>
                                        <input class="form-check-input" style={{ background: 'white !important', color: 'white !important', borderColor: 'white !important' }} type="checkbox" id="gridCheck" />
                                        <label class="form-check-label text-white pb-2" for="gridCheck" style={{ textAlign: 'left' }}>
                                            I agree to the Terms of Service.
                                        </label>
                                    </div>
                                    <BtnLinkRed
                                        className="btn create-new-action w-100 mt-2"
                                    >
                                        Purchase Plan
                                    </BtnLinkRed>
                                    {/* <BtnLinkRed onClick={handleCloseModal}
                    className="btn create-new-action w-100 mt-2"
                  >
                    Close
                  </BtnLinkRed> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </ReactModal >
    );
}



export default Popupoverview;
