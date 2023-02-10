import React,{useState} from 'react'
import {PRICINGBTN ,PRICINGBTN1,Wrapper,PRICINGCcontainer,TextWrapper, H1,DIV,Purchase} from './PricingPlanElements'
import tick from '../../images/tickicon.svg'
import {plans,serverplans,resiplans} from '../../data/pricingplan';

import Popup from '../Popup/Popup'
import e from '../../images/expand.png';
import '../Overview/dropdown2.css'
const Index = () => {
    const [display, setDisplay] = useState(false);
    const [open, setOpen] = useState(false);
    const [servers, setServer] = useState(plans);
    const [planD,setPlanD]=useState("");
    const popupclick = () => {
        setOpen(true);
    }
    const handleDrop = (_plan)=>{
        setPlanD(_plan);
    }
    return (
        <>
           <Popup 
                
                setOpen={setOpen} open={open}/>

        <PRICINGCcontainer id="pricing" className="container-fluid-fluid">
       
            <div className="row container justify-content-center mx-auto py-5 gy-4">
            
  
            <div className="row  ">
             <TextWrapper className="col-xl-3"  >

            <H1 className="clearsansbold">Pricing Plan</H1> 
            <Wrapper className="mb-4 ">
                <PRICINGBTN onClick={e=>setServer(plans)}
                className="text-decoration-none ClearSans-Bold"            
                >
                    Premium ISP 
                </PRICINGBTN>
             
                <PRICINGBTN1 
                //disabled 
                onClick={e=>setServer(resiplans)}
                className="text-decoration-none ClearSans-Bold"            
                >
                    Premium Residential 
                </PRICINGBTN1>
                <PRICINGBTN onClick={e=>setServer(serverplans)}
                className="text-decoration-none ClearSans-Bold"            
                >
                    Premium Server 
                </PRICINGBTN>
             </Wrapper> 
             </TextWrapper>
            
            </div>
            {servers.map((plan, index) => (
            <DIV className="col-xl-2 col-lg-3 col-md-4 col-sm-5 p-0 ">
                    <p className="text-center text-white fs-5 mt-4 clearsansthin p-0 m-0">{plan.totalProxies} </p>
                    <p className="text-center text-white clearsansbold  me-3"><sup className="fs-4 text-center">$</sup> <sub className="display-3 clearsansbold text-center">{plan.price}</sub> </p>
                    <p className="text-center text-white clearsansthin p-0 m-0 mt-4 pb-3">{plan.days} </p>
                    <div class=" text-center  pt-2">
                    <div class="dropdown   " style={{display: plan.visiblity?null: "none"}}>
                                                            <button style={{borderRadius:"0px"}} onClick={e=>{
                                                                //setPlanD(plan)
                                                                setPlanD(plan.id === planD.id ? "2412312" : plan);
                                                                //setDisplay(!display); console.log(display)}
                                                                }} class="btn btn-secondary col-md-12 col-sm-12 text-center ps-5" type="button" id="dropdownMenuButton1" aria-expanded="false">
                                                           Quantity
                                                                <img className="img-fluid float-end ms-3" src={e} alt="" />
                                                            </button>
                                                            <ul class="customprice-menu custom-menu" style={{display: planD.id == plan.id? null: "none",textAlign:"center"}} aria-labelledby="dropdownMenuButton1">
                                                                {plan.quantity.map((plan, index) => (
                                                                    <>
                                                                <li><a style={{color:"white"}} class="dropdown-item " href="/">{plan}</a></li>
                                                                </>
                                                                ))}
                                                                </ul>
                                                            </div>     
                            </div>
                    <div className="mx-auto p-0 m-0 ps-4" style={{borderTop:"1px solid white"}} >
                    {plan.features.map((plan, index) => (
                        <p style={{paddingTop: index==0 ? "20px": "0px" ,}} className="text-white  clearsansthin"> <img className="img-fluid mx-1" src={plan!=""?tick:""} alt="" />{plan} </p>
               
                    ))}
                          
                    </div>
                    <Purchase className="mb-4">
                        <PRICINGBTN 
                className="text-decoration-none mx-auto ClearSans-Bold"    onClick={popupclick}         
                >
                    Purchase
                </PRICINGBTN>
                </Purchase>
                </DIV>

))}
            
            </div>
        </PRICINGCcontainer>
        </>
    )
}
export default Index