import React from 'react'
import { RefundPolicycontainer, Heading,Para } from './RefundpolicyElement';

export const index = () => {
    return (
        <div className="container-fluid-fluid">
        <div  className="container mx-auto  py-5">
        <RefundPolicycontainer className=" py-5">

            <Heading className="display-5 pb-2 bold">Refund Policy</Heading>

                <Para className="">
                Due to the nature of digital products and services Skull IO LLC provides, we offer no returns, refunds or exchanges for any purchases made on our site once the order is delivered via dashboard.
                </Para>

                <Para className="">
                If the order is yet to be delivered, refunds may be offered solely at the discretion of Skull IO LLC.
                </Para>

                <Para className="">
                Skull IO LLC will not be responsible for any throttles, bans, or any other issues due to misuse and abuse of products by the customer.
                </Para>
                <Para>    
                Proxies will be delivered via email or direct message to the customer. Proxies will be functional upon arrival to the customer.
                </Para>

                <Para className="">
                Skull IO LLC does not guarantee any success by the customer purchasing any of the available products.‍
                </Para>

                <Para className="">
                    Once a product has been purchased by you, no right of cancellation or refund exists under the Consumer Protection (Distance Selling) Regulations 2000 due to the electronic nature of our products. The "Customer" or "Buyer" do acknowledge that any dispute/chargeback initiated via their "Financial institution", "Bank", or "Credit Card company" is an attempt to fraudulently obtain the product while receiving reimbursement of the total value, which will also be recognized by their "Financial Institution", "Bank", or "Credit Card Company" as fraud, which will, in turn, be denied of any such dispute/chargeback. You agree that under no circumstances whatsoever shall you initiate any chargeback for claiming an item as “item not as described” in regards to digital goods and services. You agree that any payments made by you for any of our products are final.
                </Para>

                <Para className="">
                    If you have any questions or concerns and would like to get in touch with us, please contact us at contact@skullproxies.com and we will respond to you within the next 1-2 business days. 
                </Para>
        </RefundPolicycontainer>
                
        </div>
        </div>
    )
}
export default index
