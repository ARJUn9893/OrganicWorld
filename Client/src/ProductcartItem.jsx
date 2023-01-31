import React from 'react'

function ProductcartItem({quantity,name,price}) {

    return (
        <>
                <li class="list-group-item d-flex justify-content-between lh-sm py-2">
                    <div>
                        <h6 class="my-0">Product name : {name}</h6><small class="text-muted">quantity:<span className=" fw-bold text-dark" >{quantity}</span ></small>
                      
                    </div><span class="text-primary">{price}₹</span>
                </li>  
              
     </>
    )
}
export default ProductcartItem
