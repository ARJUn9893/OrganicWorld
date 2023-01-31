import React from 'react'
function Buttonls({nvalue , customer_name}) {
    if(nvalue){
        return(<>
        <button type="button" class="btn btn-outline-warning">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
</svg>
            <medium className="text-capitalize"> {customer_name}</medium> 
              </button></>);
    }
    else{
    return (
        <>      
            <div>   
          <button type="button" className="btn btn-outline-light me-2  "   data-bs-toggle="modal" data-bs-target="#login">Login</button>
          <button type="button" className="btn btn-outline-warning me-2 " data-bs-toggle="modal" data-bs-target="#signup">Sign-up</button>
                </div>
        </>
    )
}
}

export default Buttonls;
