import React from 'react'
import{ OverviewBTN, OverviewBTN1,OverviewBTN2,BuyBtn,ReNewBtn,SVG} from './PremimumResidentialElements'
import img from '../../images/overviewimg.svg';
import shoes from '../../images/shoes-1.svg';
import {ispPlans} from '../../data/ispPlan';
import {ips} from '../../data/ips';
import {proxies} from '../../data/proxies';
import {Collapse} from 'react-collapse';
import e from '../../images/expand.png';
import { useState ,useEffect} from 'react';
import Popupoverview from '../Overview/Popupoverview';

export const PremiumIsp = ({onClickProxy,expand,proxy}) => {
    const [open, setOpen] = useState(false);
    const [display, setDisplay] = useState(false);
    const [proxyF,setproxyF] = useState("");
    const [region,setRegion] = useState("");
    const [amount,setAmount] = useState("");
    const [option,setOption] = useState("");

    const [num, setnum] = useState(0);
    const inc = () => {
        setnum(num + 1);
    };
    const popupclick = () => {
        setOpen(true);
    }
    // const onClickRegion = (_region) => () => {

    //     console.log(_region);
    //     setRegion(region.id === _region ? null : region);
    
    //   };
    const dec = () => {
        setnum(num - 1);
    };


    return (
        <>
        <Popupoverview setOpen={setOpen} open={open} />
            <div className="py-1" style={{maxWidth:"1500px",alignContent:"center",margin: "0 auto"}}>
                 <div className="row justify-content-center my-5 me-4" style={{paddingTop:"60px",paddingBottom:"150px"}}>
                     
                     <div className="col-md-3  col-sm-12  ms-md-5 ms-md-0">
                    
                     


                               <div className="border border-1 mx-auto  ">   
                               <div className=" p-3">
                               <p className=" text-white ms-1  p-0 m-0 clearsansbold">Buy More Data</p>
                                            
                                         <div className="  my-3">
                                         <div class="dropdown  mt-3 ">
                                                            <button style={{borderRadius:"0px"}} onClick={e=>{
                                                                setAmount(!amount);
                                                                setOption(null);
                                                                setproxyF(null);
                                                                setRegion(null);
                                                          
                                                                console.log(amount)}} class="btn btn-secondary col-md-12 col-sm-12 text-start" type="button" id="dropdownMenuButton1" aria-expanded="false">
                                                            SkullProxies 25
                                                                <img className="img-fluid float-end ms-3" src={e} alt="" />
                                                            </button>
                                                            <ul class="custom2-menu custom-menu" style={{display: amount? null: "none"}} aria-labelledby="dropdownMenuButton1">
                                                                <li><a style={{color:"white"}} class="dropdown-item" href="/">SkullProxies 25 Premium ISP - $40.00</a></li>
                                                                <li><a style={{color:"white"}} class="dropdown-item" href="/">SkullProxies 50 Premium ISP - $40.00</a></li>
                                                                <li><a style={{color:"white"}} class="dropdown-item" href="/">SkullProxies 95 Premium ISP - $40.00</a></li>
                                                            </ul>
                                                                                       
                                            </div>    
                                         </div>   
                                        <div className="d-flex justify-content-evenly">       
                                            <OverviewBTN1 className="py-2 me-3 ClearSans-Bold flex-fill">My Plans</OverviewBTN1>
                                            <OverviewBTN2 className="py-2 px-3 ClearSans-Bold flex-fill" onClick={popupclick}>Buy</OverviewBTN2>
                                        </div>
                                       
                               </div>
                              
                               </div> 

                               <div className="border border-1 mx-auto mt-3">   
                               <div className=" p-3">
                               <p className=" text-white ms-1 p-0 m-0 clearsansbold">Proxy Generation</p>
                                    
                                         <div className="  my-3">
                                         <div class="dropdown my-3">
                                                            <button style={{borderRadius:"0px"}} onClick={e=>{
                                                                setproxyF(!proxyF);
                                                                setRegion(null)
                                                                setAmount(null)
                                                                setOption(null)
                                                                console.log(proxyF)}} class="btn btn-secondary col-md-12 col-sm-12 text-start" type="button" id="dropdownMenuButton1" aria-expanded="false">
                                                            Select a Region
                                                                <img className="img-fluid float-end ms-3" src={e} alt="" />
                                                            </button>
                                                            <ul class="custom2-menu custom-menu" style={{display: proxyF? null: "none"}} aria-labelledby="dropdownMenuButton1">
                                                                <li><a style={{color:"white"}} class="dropdown-item" href="/">US</a></li>
                                                                <li><a style={{color:"white"}} class="dropdown-item" href="/">EU</a></li>
                                                                <li><a style={{color:"white"}} class="dropdown-item" href="/">AS</a></li>
                                                            </ul>
                                                                                        
                                            </div>  


                                           


                                                           

                                                            <div classname="d-flex  ">
                                                            <OverviewBTN1 onClick={dec} className="col-2 py-2 px-3 ClearSans-Bold flex-fill">-</OverviewBTN1>

<p className=" d-inline-block border border-1 py-2 col-8 text-white text-center" type="text" name="" id="" >{num}</p>
<OverviewBTN1 onClick={inc} className="col-2 py-2 px-3  flex-fill">+</OverviewBTN1>
</div>       
                                         </div>   

                                         
                                        <div className="d-flex justify-content-evenly col-12 ">       
                                            <OverviewBTN2 className="py-2 ClearSans-Bold flex-fill">Generate</OverviewBTN2>
                                        </div>
                                       
                               </div>
                              
                               </div> 

                     </div>
                   

                     <div className="col-md-6 col-sm-12" >
                  
                        {/* First */}
                        <div className=" " style={{borderTop: '1px solid #ffffff',borderLeft: '1px solid #ffffff',borderRight: '1px solid #ffffff',borderBottom: 'none'}}>
                            <p className=" text-white m-3 mb-2 clearsansbold">Premium Residential Plans</p>
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
                                                <tr 
                                                // style={{ background: expand === plan.id ? "#DA0000" : "" }}
                                                 onClick={onClickProxy(plan)}>
                                                    <td>{plan.status}</td>
                                                    <td>{plan.plan}</td>
                                                    <td>{plan.start_date}</td>
                                                    <td>{plan.end_date}</td>
                                                    <td>{plan.subscription}</td>
                                                    <td> <ReNewBtn onClick={e=>setOpen(true)} type="button" class="ClearSans-Bold btn btn-primary btn-sm " ><SVG xmlns="http://www.w3.org/2000/svg" viewBox="-1.5 -2.5 24 24" width="24" fill="currentColor"><path d="M17.83 4.194l.42-1.377a1 1 0 1 1 1.913.585l-1.17 3.825a1 1 0 0 1-1.248.664l-3.825-1.17a1 1 0 1 1 .585-1.912l1.672.511A7.381 7.381 0 0 0 3.185 6.584l-.26.633a1 1 0 1 1-1.85-.758l.26-.633A9.381 9.381 0 0 1 17.83 4.194zM2.308 14.807l-.327 1.311a1 1 0 1 1-1.94-.484l.967-3.88a1 1 0 0 1 1.265-.716l3.828.954a1 1 0 0 1-.484 1.941l-1.786-.445a7.384 7.384 0 0 0 13.216-1.792 1 1 0 1 1 1.906.608 9.381 9.381 0 0 1-5.38 5.831 9.386 9.386 0 0 1-11.265-3.328z"></path></SVG> Renew</ReNewBtn></td>
                                                
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
                                                                <OverviewBTN1 className="py-2 my-2 px-5 ms-2 ClearSans-Bold">Copy</OverviewBTN1>
                                                                    <OverviewBTN2 className="py-2 px-4 my-2 me-2 ClearSans-Bold">Download</OverviewBTN2>
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


                    

                               {/* First */}
            
                                <div className="border border-1 mt-3 ">
                                    <p className="text-white m-3 mb-2 clearsansbold">Proxy List</p>
                                    <div className=" ">
                                  
                                                
                                                <div className="m-3" style={{border:"1px solid #FFF",textAlign:"start",margin:"10px",lineHeight:"2px",overflow:"auto",maxHeight:"250px"}}>
                                               
                                                <p className="text-white" style={{padding:"12px 0px 0px 20px",fontSize:"13px"}}>
                                                privatepool.skullproxies.io.15432:DObolCMA.ghadaHSDHJJHSDDJSQDAAAA:213ASDSDsaSDADAAAAA
                                                </p>
                                                <p className="text-white" style={{padding:"5px 0px 0px 20px",fontSize:"13px"}}>
                                                privatepool.skullproxies.io.15432:DObolCMA.ghadaHSDHJJHSDDJSQDAAAA:213ASDSDsaSDADAAAAA
                                                </p>
                                                <p className="text-white" style={{padding:"5px 0px 0px 20px",fontSize:"13px"}}>
                                                privatepool.skullproxies.io.15432:DObolCMA.ghadaHSDHJJHSDDJSQDAAAA:213ASDSDsaSDADAAAAA
                                                </p>
                                                <p className="text-white" style={{padding:"5px 0px 0px 20px",fontSize:"13px"}}>
                                                privatepool.skullproxies.io.15432:DObolCMA.ghadaHSDHJJHSDDJSQDAAAA:213ASDSDsaSDADAAAAA
                                                </p>
                                                <p className="text-white" style={{padding:"5px 0px 0px 20px",fontSize:"13px"}}>
                                                privatepool.skullproxies.io.15432:DObolCMA.ghadaHSDHJJHSDDJSQDAAAA:213ASDSDsaSDADAAAAA
                                                </p>
                                                <p className="text-white" style={{padding:"5px 0px 0px 20px",fontSize:"13px"}}>
                                                privatepool.skullproxies.io.15432:DObolCMA.ghadaHSDHJJHSDDJSQDAAAA:213ASDSDsaSDADAAAAA
                                                </p>
                                                <p className="text-white" style={{padding:"5px 0px 0px 20px",fontSize:"13px"}}>
                                                privatepool.skullproxies.io.15432:DObolCMA.ghadaHSDHJJHSDDJSQDAAAA:213ASDSDsaSDADAAAAA
                                                </p>
                                                <p className="text-white" style={{padding:"5px 0px 0px 20px",fontSize:"13px"}}>
                                                privatepool.skullproxies.io.15432:DObolCMA.ghadaHSDHJJHSDDJSQDAAAA:213ASDSDsaSDADAAAAA
                                                </p>
                                                <p className="text-white" style={{padding:"5px 0px 0px 20px",fontSize:"13px"}}>
                                                privatepool.skullproxies.io.15432:DObolCMA.ghadaHSDHJJHSDDJSQDAAAA:213ASDSDsaSDADAAAAA
                                                </p>
                                                <p className="text-white" style={{padding:"5px 0px 0px 20px",fontSize:"13px"}}>
                                                privatepool.skullproxies.io.15432:DObolCMA.ghadaHSDHJJHSDDJSQDAAAA:213ASDSDsaSDADAAAAA
                                                </p>
                                                <p className="text-white" style={{padding:"5px 0px 0px 20px",fontSize:"13px"}}>
                                                privatepool.skullproxies.io.15432:DObolCMA.ghadaHSDHJJHSDDJSQDAAAA:213ASDSDsaSDADAAAAA
                                                </p>
                                                <p className="text-white" style={{padding:"5px 0px 0px 20px",fontSize:"13px"}}>
                                                privatepool.skullproxies.io.15432:DObolCMA.ghadaHSDHJJHSDDJSQDAAAA:213ASDSDsaSDADAAAAA
                                                </p>
                                               
                                                </div>
                                                <div>
                                                <div className="d-flex justify-content-between my-3">       
                                                    <OverviewBTN1 className="py-2 ms-3 ClearSans-Bold px-5">Clear</OverviewBTN1>
                                                    <div>
                                                    <OverviewBTN2 className="py-2 me-3 ClearSans-Bold  px-5">Copy</OverviewBTN2>
                                                    <OverviewBTN2 className="py-2 me-3 ClearSans-Bold  px-4">Download</OverviewBTN2>
                                                    </div>
                                                </div>
                                                </div>
                                              
                                        </div>
                                </div>
                              

                    </div>



                 </div>
            </div>
        </>
    )
}
export default PremiumIsp

