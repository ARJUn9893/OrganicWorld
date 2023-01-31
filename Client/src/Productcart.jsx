import { Prcart } from "./Probutton";
import React from 'react'
import ProductcartItem from "./ProductcartItem";
import f2 from './farm3.jpg'


import { Link } from "react-router-dom";

function Productcart() {
    const Gtotal = Prcart.reduce((Gtotal, number)=> { return  Gtotal + number.Price*number.Quantity; }, 0);
    const totalitem=(Prcart.reduce((a) => a + Object.length, 0));
    return (
        <>
        <div className="">
        <img src={f2} alt="" width="100%" height="50%"/>
        <div className="mt-5 position-absolute w-75 start-50 top-50 translate-middle">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Items in your Cart</span>
         <span className="badge bg-success rounded-pill">{totalitem}</span>
       </h4>
           <ol class="list-group mb-5 py-1">
       {
       Prcart.map((val)=>{
           return( <ProductcartItem  name={val.Productname}
               price={val.Price}
               quantity={val.Quantity}/>
               )
       })
       }
               <li class="list-group-item d-flex justify-content-between py-3"><span>Total Amount</span><strong>{Gtotal}₹</strong></li>
           </ol>



<Link to="/product"><button className="py-2  btn btn-success w-50 position-absolute top-100 start-0 translate-start">add more</button></Link>
       <Link to="/checkout"><button className="py-2 btn btn-warning w-50 position-absolute top-100 end-0  translate-end">to checkout</button></Link>  
       </div>
       </div>
       </> 
       )
}

export default Productcart;
