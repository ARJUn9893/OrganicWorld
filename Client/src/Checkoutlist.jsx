import React from 'react';
import { Prcart } from "./Probutton";
import Checkitem from './Checkitem';

function Checkoutlist() {
    const Gtotal = Prcart.reduce((Gtotal, number)=> { return  Gtotal + number.Price*number.Quantity; }, 0);
    const totalitem=(Prcart.reduce((a) => a + Object.length, 0));

    return (

        <>
          <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Your cart</span>
          <span className="badge bg-success rounded-pill">{totalitem}</span>
        </h4>
            <ol class="list-group mb-3">
        {
        Prcart.map((val)=>{
            return( <Checkitem  name={val.Productname}
                price={val.Price}
                quantity={val.Quantity}/>
                )
        })
        }
                <li class="list-group-item d-flex justify-content-between"><span>Total Amount</span><strong>{Gtotal}₹</strong></li>
            </ol>

            </div>
        </>
    )
}

export default Checkoutlist