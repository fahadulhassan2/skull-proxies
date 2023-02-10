import React, { useState, useEffect } from "react";
import {Link as LinkR} from 'react-router-dom';
import {
  Popupaction, popupInner, Icon,
  CloseIcon, BtnLinkBlack, BtnLinkRed, ApplyRed
} from './PopupElements'
import '../../App.css';
import './Popup.css';
import ReactModal from "react-modal";

ReactModal.setAppElement(document.getElementById('root'));


function Popup({
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
          zIndex: "3",
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
        <form style={{ width: "90%", height: "auto", textAlign: 'center',backgroundColor: "transparent " }}  >
          <div className="modal-content p-3" style={{ backgroundColor: "transparent " }}>
            <div className="modal-body border border-1 " style={{ backgroundColor: "black " }}>
              <div
                className="row "
                style={{
                  justifyContent: "right",
                  position: "absolute",
                  zIndex: "3",
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

                <p className="text-center fs-5 text-white  clearsans m-0 p-0">25 Proxies </p>
                <p className="text-center text-white clearsansbold me-3"><sup className="fs-5">$</sup> <sub className="display-3 clearsansbold">40</sub> </p>
                <p className="text-center text-white pt-3 fs-6 clearsansthin p-0 m-0">30 Day Plan </p>
              </div>
              <div className="row my-2">
                <div className="col-12">
                  <div className="row my-2">
                    <label for="exampleInputEmail1" class="form-label clearsansthin text-white" style={{ textAlign: 'left' ,fontSize:"12px"}}>DISCOUNT CODE</label>
                    <div className="col-md-8 col-sm-12" >

                      <input
                        className="form-control py-2 "
                        name="name"
                        placeholder=""
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
                <label for="exampleInputEmail1" class="form-label clearsansthin text-white" style={{ textAlign: 'left' ,fontSize:"12px"}}>BUY SUBSCRIPTION?</label>
                <div className="col-xl-6 col-lg-7 col-md-7">

                  <BtnLinkBlack
                    className="btn create-new-action w-100"

                  // onClick={() => setOpen(!open)}
                  >
                    Yes
                  </BtnLinkBlack>
                </div>
                <div className="col-xl-6 col-lg-5 col-md-5">
                  <BtnLinkRed
                    className="btn create-new-action w-100"


                  >
                    No
                  </BtnLinkRed>
                </div>

                <div className="col-xl-12 col-lg-5 col-md-5 mt-4">
                  <div class="form-check" style={{ textAlign: 'left' }}>
                    <input class="form-check-input" style={{ background: 'white !important', color: 'white !important', borderColor: 'white !important' }} type="checkbox" id="gridCheck" />
                    <label class="form-check-label text-white pb-2" for="gridCheck" style={{ textAlign: 'left' }}>
                      I agree to the <LinkR to="terms">Terms of Service.</LinkR>
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



export default Popup;
