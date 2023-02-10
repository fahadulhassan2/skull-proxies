import React, { useEffect, useState } from 'react'
import { OverviewBTN, OverviewBTN1, OverviewBTN2, BuyBtn, Dropdown, ReNewBtn, SVG } from './OverviewElements.js'
import img from '../../images/overviewimg.svg';
import shoes from '../../images/shoes-1.svg';
import { ispPlans } from '../../data/ispPlan';
import { drops } from '../../data/drops.js';
import { Collapse } from 'react-collapse';
import "./dropdown2.css"
import { proxies } from '../../data/proxies';
// import Chart from "react-apexcharts";
import e from '../../images/expand.png';
import Popupoverview from './Popupoverview.js';
import { Divider } from 'material-ui';

const Overview = ({ expand, onClickProxy }) => {
    const [display, setDisplay] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        console.log(ispPlans);
    }, [])


    const popupclick = () => {
        setOpen(true);
    }

    //   const options = {

    //     chart: {
    //     type: 'area',
    //     height: 250,
    //     background: 'black',

    //     toolbar: {
    //         show: false
    //       },
    //       sparkline: {
    //         enabled: true
    //       },
    //     zoom: {
    //       enabled: false
    //     }
    //   },
    //   colors: ["red"],
    //   dataLabels: {
    //     enabled: false
    //   },
    //   stroke: {
    //     color: '#FFF',
    //     width: 1,
    //     curve: 'straight'
    //   },
    //    colors: undefined,



    //   labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    //   xaxis: {
    //     type: 'datetime',
    //     crosshairs: {
    //         width: 0
    //       }
    //   },

    //   yaxis: {
    //     opposite: true
    //   },
    //   legend: {
    //     show: false
    //   }
    //   };
    //   const series=  [{
    //     name: "STOCK ABC",
    //     data: [1000,2000,2200,2500,2200,3000,5000,8000,8000,11000,12000,25000,22000,15000,20000,17000,18000,30000,32000,35000]
    //   }];



    return (
        <>
            <Popupoverview setOpen={setOpen} open={open} />
            <div className="py-1 " style={{ maxWidth: "1500px", alignContent: "center", margin: "0 auto" }}>
                <div className="row justify-content-center my-5  ms-2" style={{ paddingTop: "60px", paddingBottom: "150px" }}>


                    <div className="col-md-3 col-sm-12  ms-md-0" style={{ width: "400px" }}>
                        <div className="d-flex justify-content-center border border-1 py-4 px-2 mx-autos ">
                            <img className="img-fluid ms-4 " style={{ width: '7.1em' }} src={img} alt="" />
                            <div className="mx-4">
                                <p className="text-white " style={{ lineHeight: "18px" }}>Welcome,</p>
                                <p className="text-white clearsansbold " style={{ fontSize: "19px", lineHeight: "20px" }}>SUPREMESUAZ#6482</p>
                                <OverviewBTN className="ClearSans-Bold">
                                    Join Discord
                                </OverviewBTN>
                            </div>
                        </div>

                        <div className=" border border-1 mx-auto my-3 ">
                            <p className="text-white px-4 mt-3 clearsansbold">Upcoming Drops</p>

                            {drops.map((plan, index) => (
                                <>
                                    <div className="pb-1 px-4 d-flex">
                                        <div className="border border-1" style={{ height: "90px" }}>
                                            <img className="img-fluid  my-2" style={{ height: "70px", paddingLeft: '7px', paddingRight: "7px" }} src={shoes} alt="" />
                                        </div>

                                        <div className="mx-3">
                                            <div className="d-flex">
                                                <p className="text-white justifty-self-start p-0 m-0 clearsansthin" style={{ fontSize: '0.75rem' }}>CU1727-100</p>
                                                <div style={{ position: 'relative', left: "23%" }}>
                                                    <p className="text-white   justifty-self-end ms-5 p-0 m-0 clearsansthin" style={{ fontSize: '0.75rem' }}>JUL 1, 2020</p>
                                                </div>
                                            </div>

                                            <p className="text-white p-0 m-0 my-2" style={{ fontSize: '1rem' }}>Nike Dunk Low University Red#6482</p>
                                            <p className="text-white p-0 m-0 mt-2 mb-3 clearsansthin" style={{ fontSize: '0.8rem' }}>$100</p>
                                        </div>
                                    </div>
                                    {index == drops.length - 1 ?
                                        ""
                                        :
                                        <div className="bg-white border border-bottom-1 mb-3 mx-4"></div>
                                    }

                                </>

                            ))}
                        </div>

                    </div>



                    <div className="col-md-6 col-sm-12" >
                        {/* First */}
                        <div className=" " style={{ borderTop: '1px solid #ffffff', borderLeft: '1px solid #ffffff', borderRight: '1px solid #ffffff', borderBottom: 'none' }}>
                            <p className=" text-white m-3 mb-2 clearsansbold">Premium ISP Plans</p>
                            <div className="table-responsive  "  >
                                <table className="table text-white p-0 m-0" style={{ textAlign: 'center' }}>
                                    <thead>
                                        <tr style={{ fontSize: "11px" }}>
                                            <th className="clearsansthin" scope="col">STATUS</th>
                                            <th className="clearsansthin" scope="col">PLAN</th>
                                            <th className="clearsansthin" scope="col">START DATE</th>
                                            <th className="clearsansthin" scope="col">END DATE</th>
                                            <th className="clearsansthin" scope="col">SUBSCRIPTION</th>
                                            <th className="clearsansthin" scope="col">ACTION</th>
                                        </tr>
                                    </thead>

                                    {ispPlans.map((plan, index) => (
                                        <>
                                            <tbody >
                                                <tr
                                                    // style={{ background: expand === plan.id ? "#DA0000" : "", cursor: "pointer" }} 
                                                    onClick={onClickProxy(plan)}>
                                                    <td>{plan.status}</td>
                                                    <td>{plan.plan}</td>
                                                    <td>{plan.start_date}</td>
                                                    <td>{plan.end_date}</td>
                                                    <td>{plan.subscription}</td>
                                                    <td className="" > <ReNewBtn onClick={e => setOpen(true)} type="button" class="ClearSans-Bold btn btn-primary btn-sm " ><SVG xmlns="http://www.w3.org/2000/svg" viewBox="-1.5 -2.5 24 24" width="24" fill="currentColor"><path d="M17.83 4.194l.42-1.377a1 1 0 1 1 1.913.585l-1.17 3.825a1 1 0 0 1-1.248.664l-3.825-1.17a1 1 0 1 1 .585-1.912l1.672.511A7.381 7.381 0 0 0 3.185 6.584l-.26.633a1 1 0 1 1-1.85-.758l.26-.633A9.381 9.381 0 0 1 17.83 4.194zM2.308 14.807l-.327 1.311a1 1 0 1 1-1.94-.484l.967-3.88a1 1 0 0 1 1.265-.716l3.828.954a1 1 0 0 1-.484 1.941l-1.786-.445a7.384 7.384 0 0 0 13.216-1.792 1 1 0 1 1 1.906.608 9.381 9.381 0 0 1-5.38 5.831 9.386 9.386 0 0 1-11.265-3.328z"></path></SVG> Renew</ReNewBtn></td>

                                                    {/* <td>{plan.auth_type}</td> */}
                                                </tr>
                                                {/* <tr style={{ display: expand === plan.id ? null : 'none' }}>
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
                                                                    <OverviewBTN1 className="py-2 my-2 px-5 ms-2 ClearSans-Bold ">Copy</OverviewBTN1>
                                                                    <OverviewBTN2 className="py-2 my-2 me-2 ClearSans-Bold">Download</OverviewBTN2>
                                                                </div>
                                                            </div>
                                                        </Collapse>
                                                    </td>


                                                </tr> */}

                                            </tbody>

                                        </>
                                    ))}
                                </table>
                            </div>
                        </div>
                        {/* second */}
                        <div className=" " style={{ borderTop: '1px solid #ffffff', marginTop: "20px", borderLeft: '1px solid #ffffff', borderRight: '1px solid #ffffff', borderBottom: 'none' }}>
                            <p className=" text-white m-3 mb-2 clearsansbold">Premium Residential Plans</p>
                            <div className="table-responsive  "  >
                                <table className="table text-white p-0 m-0" style={{ textAlign: 'center' }}>
                                    <thead>
                                        <tr style={{ fontSize: "11px" }}>
                                            <th className="clearsansthin" scope="col">STATUS</th>
                                            <th className="clearsansthin" scope="col">PLAN</th>
                                            <th className="clearsansthin" scope="col">START DATE</th>
                                            <th className="clearsansthin" scope="col">END DATE</th>
                                            <th className="clearsansthin" scope="col">SUBSCRIPTION</th>
                                            <th className="clearsansthin" scope="col">ACTION</th>
                                        </tr>
                                    </thead>

                                    {ispPlans.map((plan, index) => (
                                        <>
                                            <tbody >
                                                <tr
                                                    // style={{ background: expand === plan.id ? "#DA0000" : "", cursor: "pointer" }} 
                                                    onClick={onClickProxy(plan)}>
                                                    <td>{plan.status}</td>
                                                    <td>{plan.plan}</td>
                                                    <td>{plan.start_date}</td>
                                                    <td>{plan.end_date}</td>
                                                    <td>{plan.subscription}</td>
                                                    <td className="" > <ReNewBtn onClick={e => setOpen(true)} type="button" class="ClearSans-Bold btn btn-primary btn-sm " ><SVG xmlns="http://www.w3.org/2000/svg" viewBox="-1.5 -2.5 24 24" width="24" fill="currentColor"><path d="M17.83 4.194l.42-1.377a1 1 0 1 1 1.913.585l-1.17 3.825a1 1 0 0 1-1.248.664l-3.825-1.17a1 1 0 1 1 .585-1.912l1.672.511A7.381 7.381 0 0 0 3.185 6.584l-.26.633a1 1 0 1 1-1.85-.758l.26-.633A9.381 9.381 0 0 1 17.83 4.194zM2.308 14.807l-.327 1.311a1 1 0 1 1-1.94-.484l.967-3.88a1 1 0 0 1 1.265-.716l3.828.954a1 1 0 0 1-.484 1.941l-1.786-.445a7.384 7.384 0 0 0 13.216-1.792 1 1 0 1 1 1.906.608 9.381 9.381 0 0 1-5.38 5.831 9.386 9.386 0 0 1-11.265-3.328z"></path></SVG> Renew</ReNewBtn></td>

                                                    {/* <td>{plan.auth_type}</td> */}
                                                </tr>
                                                {/* <tr style={{ display: expand === plan.id ? null : 'none' }}>
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
                                                                    <OverviewBTN1 className="py-2 my-2 px-5 ms-2 ClearSans-Bold ">Copy</OverviewBTN1>
                                                                    <OverviewBTN2 className="py-2 my-2 me-2 ClearSans-Bold">Download</OverviewBTN2>
                                                                </div>
                                                            </div>
                                                        </Collapse>
                                                    </td>


                                                </tr> */}

                                            </tbody>

                                        </>
                                    ))}
                                </table>

                            </div>

                        </div>
                        <div className="border border-1 " style={{ marginTop: "20px" }}>
                            <div className="d-flex justify-content-between mx-4 mt-3">
                                <p className="text-white p-0 m-0 clearsansbold">Current Usage</p>
                                <p className="text-white p-0 m-0">0.73/1.00 GB</p>
                            </div>
                            <div className="border border-1 m-4 fluid" style={{ height: "24vh" }}>
                                <div  >
                                    {/* <Chart  
                                                options={options}
                                                series={series}
                                                type="area"
                                               
                                                /> */}
                                </div>

                            </div>
                            <div className="border border-1 m-4">
                                <p className="text-white my-auto p-2 ">Your plan will expire in 11 days. In order to keep your plan active, top up beforehand.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Overview

