import React,{useState,useEffect} from 'react'
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import {Button} from "../ButtonElement"
import { fetchData } from "../../redux/data/dataActions";
import {Link} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownDivider
} from 'styled-dropdown-component';
import { 
    Container, 
   
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    Text2

} from './adminElement'
import Fade from 'react-reveal/Fade';



const Admin = () => {
    const [hidden, setHidden] = useState(true);
    const [cost, setCost] = useState('');
    const [rkonAmount, setRkonAmount] = useState('');
    const [withdrawA, setWithdrawA] = useState('');
    const [whitePrice, setWhitePrice] = useState('');
    const [remWhite,setRemWhite] = useState('');
    const [owner, setOwner] = useState('');
    const [createDrop, setCreateDrop] = useState('');
    const [ newTransferId, setNewTransferId] = useState('');
    const [ transferToken, setTransferToken] = useState('');
    const [whitelist, setWhitelist] = useState('');
    const [paused, setPaused] = useState('');
    const data = useSelector((state) => state.data);
    const [URI, setURI] = useState('');
    const dispatch = useDispatch();
    const [feedback, setFeedback] = useState('');
    const [settingPrice , setSettingPrice] = useState(false);
    const [network, setNetwork]= useState("");
    const blockchain = useSelector((state) => state.blockchain);
    const [totalPrice, setTotalPrice] = useState("");
    const [isOwner, setIsOwner] = useState(false);
    const { ethereum } = window;
    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
          dispatch(fetchData(blockchain.account));
        }
      
      };
      let networkId =  ethereum.request({
        method: "net_version",
      });
      useEffect(async() => {
        //dispatch(connect());
        // getData();
        networkId = await ethereum.request({
          method: "net_version",
        });
        console.log(`networkId`)
        console.log(networkId);
        if(networkId!=="4"){
          console.log(`true`);
          setNetwork('Switch Network to Rinkeby')
        }else{
          console.log(`false`);
          setNetwork('')
          //setFeedback('NOT GOOD NETWORK')
        }


    
      }, [networkId]);
      
    // function to set the base price
    const setBasePrice = async(_amount) => {
    
      let owner = await blockchain.smartContract.methods.owner().call();
      if (_amount < 0) {
        return;
      }
      owner= owner.toLowerCase();
      let account = blockchain.account.toLowerCase();
      if(owner ==  account){
        console.log(owner, blockchain.account);
        setFeedback("Setting Base Price...");
        setSettingPrice(true);
        blockchain.smartContract.methods
          .setCost(blockchain.web3.utils.toWei((_amount).toString(), "ether"))
          .send({
            gasLimit: "285000",
            to: "0x281E191C16534520baADfFe67085908b798C81Bd",
            from: blockchain.account,
            
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setSettingPrice(false);
          })
          .then((receipt) => {
            setFeedback(
              "Succesfullty set base price."
            );
            setSettingPrice(false);
            dispatch(fetchData(blockchain.account));
          });
      }else{
        alert(`you are not the owner`);
      }
    }
    const addtoWhiteList = async(_user) => {
    
      let owner = await blockchain.smartContract.methods.owner().call();
      owner= owner.toLowerCase();
      let account = blockchain.account.toLowerCase();
      if(owner ==  account){
        console.log(owner, blockchain.account);
        setFeedback("Setting Base Price...");
        setSettingPrice(true);
        blockchain.smartContract.methods
          .whitelistUser(_user)
          .send({
            gasLimit: "285000",
            to: "0x281E191C16534520baADfFe67085908b798C81Bd",
            from: blockchain.account,
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setSettingPrice(false);
          })
          .then((receipt) => {
            setFeedback(
              "Succesfullty added to whitlist."
            );
            setSettingPrice(false);
            dispatch(fetchData(blockchain.account));
          });
      }else{
        alert(`you are not the owner`);
      }
    }
    const addWhitePrice = async(_user) => {
    
      let owner = await blockchain.smartContract.methods.owner().call();
      owner= owner.toLowerCase();
      let account = blockchain.account.toLowerCase();
      if(owner ==  account){
        console.log(owner, blockchain.account);
        setFeedback("Setting White Price...");
        setSettingPrice(true);
        blockchain.smartContract.methods
          .setWhiteCost(blockchain.web3.utils.toWei((_user).toString(), "ether"))
          .send({
            gasLimit: "285000",
            to: "0x281E191C16534520baADfFe67085908b798C81Bd",
            from: blockchain.account,
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setSettingPrice(false);
          })
          .then((receipt) => {
            setFeedback(
              "Succesfullty added the white list price."
            );
            setSettingPrice(false);
            dispatch(fetchData(blockchain.account));
          });
      }else{
        alert(`you are not the owner`);
      }
    }
    const withdraw = async(_amount) => {
    
      let owner = await blockchain.smartContract.methods.owner().call();
      owner= owner.toLowerCase();
      let account = blockchain.account.toLowerCase();
      if(owner ==  account){
        console.log(owner, blockchain.account);
        setFeedback("Setting Base Price...");
        setSettingPrice(true);
        blockchain.smartContract.methods
          .withdraw(_amount)
          .send({
            gasLimit: "285000",
            to: "0x281E191C16534520baADfFe67085908b798C81Bd",
            from: blockchain.account,
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setSettingPrice(false);
          })
          .then((receipt) => {
            setFeedback(
              "Succesfullty withdrawn."
            );
            setSettingPrice(false);
            dispatch(fetchData(blockchain.account));
          });
      }else{
        alert(`you are not the owner`);
      }
    }
    const MintForRKON = (_amount) => {
      if (_amount <= 0) {
        return;
      }
      setFeedback("Minting your NFT...");
      // setClaimingNft(true);
      blockchain.smartContract.methods
        .mintForRKON(blockchain.account, _amount)
        .send({
          gasLimit: "285000",
          to: "0x281E191C16534520baADfFe67085908b798C81Bd",
          from: blockchain.account,
          value: blockchain.web3.utils.toWei((0).toString(), "ether"),
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          //setClaimingNft(false);
        })
        .then((receipt) => {
          setFeedback(
            "You RKON has been minted, You can visit Open sea to view it."
          );
          //setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        });
    };
    const transferOwnership = (_owner) => {
      setFeedback("Minting your NFT...");
      // setClaimingNft(true);
      blockchain.smartContract.methods
        .transferOwnership(_owner)
        .send({
          gasLimit: "285000",
          to: "0x281E191C16534520baADfFe67085908b798C81Bd",
          from: blockchain.account,
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          //setClaimingNft(false);
        })
        .then((receipt) => {
          setFeedback(
            "Ownership transferred"
          );
          //setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        });
    };
    const setBaseURI = async(URI1) => {
    
      let owner = await blockchain.smartContract.methods.owner().call();
      if(URI==""){
        return;
      }
      owner= owner.toLowerCase();
      let account = blockchain.account.toLowerCase();
      if(owner ==  account){
        console.log(owner, blockchain.account);
        setFeedback("Setting Base Price...");
        setSettingPrice(true);
        blockchain.smartContract.methods
          .setBaseURI(URI1)
          .send({
            gasLimit: "285000",
            to: "0x281E191C16534520baADfFe67085908b798C81Bd",
            from: blockchain.account,
            
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setSettingPrice(false);
          })
          .then((receipt) => {
            setFeedback(
              "Succesfullty set base price."
            );
            setSettingPrice(false);
            dispatch(fetchData(blockchain.account));
          });
      }else{
        alert(`you are not the owner`);
      }
    }
    const transferTOKEN = async(_newUser, _id) => {
      
      let owner = await blockchain.smartContract.methods.owner().call();
 
      owner= owner.toLowerCase();
      let account = blockchain.account.toLowerCase();
      if(owner ==  account){
        alert(`123`);
        console.log(owner, blockchain.account);
        setFeedback("Setting Base Price...");
        setSettingPrice(true);
        blockchain.smartContract.methods
          .safeTransferFrom(blockchain.account,_newUser,_id)
          .send({
            gasLimit: "285000",
            to: "0x281E191C16534520baADfFe67085908b798C81Bd",
            from: blockchain.account,
            
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setSettingPrice(false);
          })
          .then((receipt) => {
            setFeedback(
              "Succesfullty transferred token."
            );
            setSettingPrice(false);
            dispatch(fetchData(blockchain.account));
          });
      }else{
        alert(`you are not the owner`);
      }
    }
    
    const addDrop = async(_id) => {
    
      let owner = await blockchain.smartContract.methods.owner().call();
      owner= owner.toLowerCase();
      let account = blockchain.account.toLowerCase();
      if(owner ==  account){
        console.log(owner, blockchain.account);
        setFeedback("Removing user from whitelist...");
        setSettingPrice(true);
        blockchain.smartContract.methods
          .setDrop(_id)
          .send({
            gasLimit: "285000",
            to: "0x281E191C16534520baADfFe67085908b798C81Bd",
            from: blockchain.account,
            
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setSettingPrice(false);
          })
          .then((receipt) => {
            setFeedback(
              "Succesfullty created a drop."
            );
            setSettingPrice(false);
            dispatch(fetchData(blockchain.account));
          });
      }else{
        alert(`you are not the owner`);
      }
    }
    const removeWhiteList = async(_id) => {
    
      let owner = await blockchain.smartContract.methods.owner().call();
      owner= owner.toLowerCase();
      let account = blockchain.account.toLowerCase();
      if(owner ==  account){
        console.log(owner, blockchain.account);
        setFeedback("Removing user from whitelist...");
        setSettingPrice(true);
        blockchain.smartContract.methods
          .removeWhitelistUser(_id)
          .send({
            gasLimit: "285000",
            to: "0x281E191C16534520baADfFe67085908b798C81Bd",
            from: blockchain.account,
            
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setSettingPrice(false);
          })
          .then((receipt) => {
            setFeedback(
              "Succesfullty removed whitelist."
            );
            setSettingPrice(false);
            dispatch(fetchData(blockchain.account));
          });
      }else{
        alert(`you are not the owner`);
      }
    }
    const pauseContract = async() => {
    
      let owner = await blockchain.smartContract.methods.owner().call();
      let paused2 = await blockchain.smartContract.methods.paused().call();

      owner= owner.toLowerCase();

      let account = blockchain.account.toLowerCase();
      if(owner ==  account){
        console.log(owner, blockchain.account);
        setFeedback("Setting Base Price...");
        setSettingPrice(true);
        blockchain.smartContract.methods
          .pause(!paused2)
          .send({
            gasLimit: "285000",
            to: "0x281E191C16534520baADfFe67085908b798C81Bd",
            from: blockchain.account,
            
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setSettingPrice(false);
          })
          .then((receipt) => {
            setFeedback(
              "Succesfullty set base price."
            );
            setSettingPrice(false);
            dispatch(fetchData(blockchain.account));
          });
      }else{
        alert(`you are not the owner`);
      }
    }
     

    // };
    const sleepwm = (ms = 0) => {
      return new Promise(r => setTimeout(r, ms));
  };
    useEffect(async() => {
    
      try{
      let owner1 = await blockchain.smartContract.methods.owner().call();
      let account = blockchain.account;
      
      owner1= owner1.toLowerCase();
      account = account.toLowerCase();

    if (owner1 == account){

        console.log(`in condition`);
        setIsOwner(true);
        
      }else{
       
      }
    }catch(e){
      setIsOwner(false);
    }
      
  
    }, [blockchain.account]);
  
      useEffect(async() => {

        getData();
        try{
          let val = await blockchain.smartContract.methods.cost().call();
          let state = await blockchain.smartContract.methods.paused().call();
    
          setCost(val/1000000000000000000);
          setPaused(state);
        }catch(e){

        }
      
    
      }, [blockchain.account]);

    return (
        <Container id="traits">
           <div style={{marginTop:'150px'}}>
               <div className="row">
                <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                    <Form action='#' style={{width:"350px"}}>
                     
                        <Text2>Set Unit Price For RKON </Text2>
                        <FormInput 
                        type="number"
                        value={totalPrice}
                        onChange={e=>{
                         

                            setTotalPrice(e.target.value)
                          
                          console.log(totalPrice)
                          
                        }}
                        />
                        <Text2>Current Price: {cost}</Text2>
                        {blockchain.account === "" ||
                     blockchain.smartContract === null ? (
                      <>
                        <Button type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                            getData();
                          }}
                        >Connect</Button>
                        <Text>Connect to Ethereum Mainnet<br/></Text>
                        
                      </>
                  ):
                    ( 
                    <>
                    <Button type="submit"
                 
                    onClick={(e) => {
                        e.preventDefault();
                        setBasePrice(totalPrice);
                  
                        getData();
                      }}
                    > {"Set Price"}</Button>
                    
                
                  
                 

                    </>
                    )}
                    
                   
                      
                    </Form>
                    </div>
                    <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                    <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Set Base URI</Text2>
                     <FormInput 
                     type="text"
                     value={URI}
                     onChange={e=>{
                   

                        setURI(e.target.value)
                       
                       console.log(URI)
                       
                     }}
                     />
                     <Text2>Set Your Base Uri HERE</Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
                     setBaseURI(URI);
                     getData();
                   }}
                 > {"Set Base URI"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>
                 <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                 <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Mint For RKON</Text2>
                     <FormInput 
                     type="number"
                     value={rkonAmount}
                     onChange={e=>{
                       if(e.target.value > 0 && e.target.value <=25){

                        setRkonAmount(e.target.value)
                       }
                       console.log(rkonAmount)
                       
                     }}
                     />
                     <Text2></Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     style={{}}
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
               
                    MintForRKON(rkonAmount);
                     getData();
                   }}
                 > {"Mint For RKON"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>
                 
                 </div>
                 <div className="row">
                 <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                 <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Transfer OwnerShip</Text2>
                     <FormInput 
                     type="text"
                     value={owner}
                     onChange={e=>{
                  

                      setOwner(e.target.value)
                       
                       console.log(totalPrice)
                       
                     }}
                     />
                     <Text2>Current Owner: scar</Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     style={{}}
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
               
                    transferOwnership(owner);
                     getData();
                   }}
                 > {"Transfer OwnerShip"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>
                 <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                 <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Add User to WhiteList</Text2>
                     <FormInput 
                     type="text"
                     value={whitelist}
                     onChange={e=>{
           

                         setWhitelist(e.target.value)
                       
                       console.log(whitelist)
                       
                     }}
                     />
                     <Text2>White Listed will not be charged</Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     style={{}}
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
                     addtoWhiteList(whitelist);
               
                     getData();
                   }}
                 > {"WhiteList User"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>
                 <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                 <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Withdraw Amount</Text2>
                     <FormInput 
                     type="number"
                     value={withdrawA}
                     onChange={e=>{
                       if(e.target.value >=0 ){

                         setWithdrawA(e.target.value)
                       }
                       console.log(withdrawA)
                       
                     }}
                     />
                     <Text2>Available Amount: 20</Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     style={{}}
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
                     withdraw(withdrawA);
               
                     getData();
                   }}
                 > {"Withdraw Amount"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>
                 </div>
                 <div className="row">
                 <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                 <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Transfer Token</Text2>
                     <FormInput 
                     type="text"
                     placeholder="New User"
                     value={newTransferId}
                     onChange={e=>{
                       

                      setNewTransferId(e.target.value)
                       
                       console.log(newTransferId)
                       
                     }}
                     />
                      <FormInput 
                     type="text"
                     placeholder="Token Id"
                     value={transferToken}
                     onChange={e=>{
                       if(e.target.value >= 0 && e.target.value <=5000){

                         setTransferToken(e.target.value)
                       }
                       console.log(transferToken)
                       
                     }}
                     />

                     <Text2>Transfer Token to someone</Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     style={{}}
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
               
                    transferTOKEN(newTransferId,transferToken);
                     getData();
                   }}
                 > {"Transfer Token"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>
                 <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                 <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Remove WhiteList</Text2>
                     <FormInput 
                     type="text"
                     value={remWhite}
                     onChange={e=>{
                     

                         setRemWhite(e.target.value)
                       
                       console.log(remWhite)
                       
                     }}
                     />
                     <Text2>Remove User from whiteList</Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     style={{}}
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
                    removeWhiteList(remWhite);
               
                     getData();
                   }}
                 > {"Remove Whitelist"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>
                 <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                 <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Create a Drop</Text2>
                     <FormInput 
                     type="text"
                     value={createDrop}
                     onChange={e=>{
                     

                      setCreateDrop(e.target.value)
                       
                       console.log(remWhite)
                       
                     }}
                     />
                     <Text2>Enter Number of RKons you want to Drop</Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     style={{}}
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
                    addDrop(createDrop);
               
                     getData();
                   }}
                 > {"Create Drop"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>

                 <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                 <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Set WhiteList Price</Text2>
                     <FormInput 
                     type="text"
                     value={whitePrice}
                     onChange={e=>{
                     

                      setWhitePrice(e.target.value)
                       
                       console.log(whitePrice)
                       
                     }}
                     />
                     <Text2>Enter Number of RKons you want to Drop</Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     style={{}}
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
                    addWhitePrice(whitePrice);
               
                     getData();
                   }}
                 > {"Set White Price"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>

                 <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                 <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Pause Contract<br/></Text2>
                
                     <Text2>Current State: {paused? "True":"False"}</Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     style={{}}
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
                     getData();
                     pauseContract();
                     
                   }}
                 > {"Pause Contract"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>
                 
                 </div>
             
          
                  
{/*                    
                    <Text>{data.totalSupply}/2500</Text> */}
                 
                </div>
         </Container>
    )

}
export default Admin
