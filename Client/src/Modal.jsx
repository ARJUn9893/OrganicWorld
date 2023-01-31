import React from 'react'
import Login from './Login'
import Signup from './Signup'

function Modal({value,customer_name}) {
 return (
        <>        
<Login value={value} customer_name={customer_name}/>
<Signup value={value} customer_name={customer_name}/>
        </>
)
}

export default Modal;
