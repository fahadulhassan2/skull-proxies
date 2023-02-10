import React from 'react'
import { OverviewBTN, OverviewBTN1, OverviewBTN2, BuyBtn,ReNewBtn,SVG } from './PremimumIspElements'
import img from '../../images/overviewimg.svg';
import shoes from '../../images/shoes-1.svg';
import recycleicon from '../../images/reloadicon.svg';
import { ispPlans } from '../../data/ispPlan';
import { ips } from '../../data/ips';
import { proxies } from '../../data/proxies';
import { Collapse } from 'react-collapse';
import e from '../../images/expand.png';
import { useState, useEffect } from 'react';
import Popelement from './Popelemet';
import Popupoverview from '../Overview/Popupoverview';


export const PremiumIsp = ({ onClickProxy, expand, proxy }) => {
    const [display, setDisplay] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log(`proxy: `, proxy)
    }, [proxy])
    const popupclick = () => {
        setOpen(true);
    }
    useEffect(() => {
        console.log(`expand: `, expand)
    }, [expand])


    return (
        <>
    
            <Popupoverview setOpen={setOpen} open={open} />
            <div className="py-1" style={{ maxWidth: "1500px", alignContent: "center", margin: "0 auto",marginBottom:"180px" }}>
                <div className="row justify-content-center my-5 me-4" style={{ paddingTop: "60px", paddingBottom: "150px" }}>

                    <div className="col-md-3  col-sm-12  ms-md-5 ms-md-0" >
                        {/* <div className="border border-1 ">
                            <div className=" p-4">
                                <p className="text-white ms-1 my-4">Public IP Authentication</p>
                                <div className="d-flex justify-content-between">
                                    <OverviewBTN1 className="py-2 me-1 flex-fill">75.13.69.250</OverviewBTN1>
                                    <OverviewBTN2 className="py-2 ms-2 flex-fill">Authenticate</OverviewBTN2>
                                </div>

                            </div>
                            {ips.map((plan, index) => (
                                <div className="border border-1 d-flex justify-content-between ">
                                    <p className="text-white py-2 ms-4 my-auto">75.13.69.250</p>
                                    <p className="text-white py-2 me-4 my-auto ">X</p>
                                </div>
                            ))}

                        </div> */}



                        <div className="border border-1 mx-auto " >
                            <div className=" p-3" >
                            <p className=" text-white ms-1  p-0 m-0 clearsansbold">Buy More Premium ISP</p>
                            
                                <div className="  my-3">
                                    <div class="dropdown  mt-3 ">
                                        <button style={{ borderRadius: "0px" }} onClick={e => { setDisplay(!display); console.log(display) }} class="btn btn-secondary col-md-12 col-sm-12 text-start" type="button" id="dropdownMenuButton1" aria-expanded="false">
                                            SkullProxies 25
                                            <img className="img-fluid float-end ms-3" src={e} alt="" />
                                        </button>
                                        <ul class="custom2-menu custom-menu" style={{ display: display ? null : "none" }} aria-labelledby="dropdownMenuButton1">
                                            <li><a style={{ color: "white" }} class="dropdown-item" href="/">25 Premium ISP - $40.00</a></li>
                                            <li><a style={{ color: "white" }} class="dropdown-item" href="/">50 Premium ISP - $40.00</a></li>
                                            <li><a style={{ color: "white" }} class="dropdown-item" href="/">95 Premium ISP - $40.00</a></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="d-flex justify-content-evenly">
                                    <OverviewBTN1 className="py-2 me-3 flex-fill ClearSans-Bold">My Plans</OverviewBTN1>
                                    <OverviewBTN2 className="py-2 px-3 flex-fill ClearSans-Bold" onClick={popupclick}>Buy</OverviewBTN2>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="col-md-6 col-sm-12" >
                        {/* First */}
                        <div className=" " style={{borderTop: '1px solid #ffffff',borderLeft: '1px solid #ffffff',borderRight: '1px solid #ffffff',borderBottom: 'none'}}>
                            <p className=" text-white m-3 mb-2 clearsansbold">Premium ISP Plans</p>
                            <div className="table-responsive  "  >
                                <table className="table text-white p-0 m-0" style={{ textAlign: 'center'}}>
                                    <thead>
                                        <tr  style={{fontSize:"11px"}}>
                                            <th className="clearsansthin" scope="col">STATUS</th>
                                            <th className="clearsansthin" scope="col">PLAN</th>
                                            <th className="clearsansthin" scope="col">START DATE</th>
                                            <th  className="clearsansthin" scope="col">END DATE</th>
                                            <th className="clearsansthin" scope="col">SUBSCRIPTION</th>
                                            <th className="clearsansthin" scope="col">ACTION</th>
                                        </tr>
                                    </thead>

                                    {ispPlans.map((plan, index) => (
                                        <>
                                            <tbody>
                                                <tr style={{ background: expand === plan.id ? "#DA0000" : "" }} onClick={onClickProxy(plan)}>
                                                    <td>{plan.status}</td>
                                                    <td>{plan.plan}</td>
                                                    <td>{plan.start_date}</td>
                                                    <td>{plan.end_date}</td>
                                                    <td>{plan.subscription}</td>
                                                    <td> <ReNewBtn  onClick={e=>setOpen(true)} type="button" class=" btn btn-primary btn-sm ClearSans-Bold " ><SVG xmlns="http://www.w3.org/2000/svg" viewBox="-1.5 -2.5 24 24" width="24" fill="currentColor"><path d="M17.83 4.194l.42-1.377a1 1 0 1 1 1.913.585l-1.17 3.825a1 1 0 0 1-1.248.664l-3.825-1.17a1 1 0 1 1 .585-1.912l1.672.511A7.381 7.381 0 0 0 3.185 6.584l-.26.633a1 1 0 1 1-1.85-.758l.26-.633A9.381 9.381 0 0 1 17.83 4.194zM2.308 14.807l-.327 1.311a1 1 0 1 1-1.94-.484l.967-3.88a1 1 0 0 1 1.265-.716l3.828.954a1 1 0 0 1-.484 1.941l-1.786-.445a7.384 7.384 0 0 0 13.216-1.792 1 1 0 1 1 1.906.608 9.381 9.381 0 0 1-5.38 5.831 9.386 9.386 0 0 1-11.265-3.328z"></path></SVG> Renew</ReNewBtn></td>
                                                
                                                </tr>
                                                <tr style={{ display: expand === plan.id ? null : 'none' }}>
                                                    <td colSpan="6">
                                                        <Collapse isOpened={
                                                            expand === plan.id
                                                        }>
                                                            <div style={{ border: "1px solid #FFF", textAlign: "start", margin: "10px", lineHeight: "2px", overflow: "auto", maxHeight: "250px" }}>
                                                                {proxies.map((proxy, index) => (
                                                                    <p style={{ padding: "12px 0px 0px 20px", fontSize: "13px" }}>
                                                                        {proxy.proxy}
                                                                    </p>
                                                                ))}


                                                            </div>
                                                            <div>
                                                                <div className="d-flex justify-content-between">
                                                                <OverviewBTN1 className="py-2 my-2 px-5 ms-2 ">Copy</OverviewBTN1>
                                                                    <OverviewBTN2 className="py-2 px-4 my-2 me-2 ">Download</OverviewBTN2>
                                                                </div>
                                                            </div>
                                                        </Collapse>
                                                    </td>


                                                </tr>

                                            </tbody>

                                        </>
                                    ))}


                                </table>
                            </div>
                        </div>


                    </div>



                </div>
            </div>
        </>
    )
}
export default PremiumIsp

