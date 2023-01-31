import React from 'react'
import { useState } from 'react';

async function registerUser(credentials) {

    const response = await fetch('/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    const res=await response.json().then(data=>{ return data });
    const dans=[ res,response.status]
    return dans;
}


function Signup({ value , customer_name}) {
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const results = await registerUser({
        firstname,
        lastname,
        email,
        password,
        confirmpassword

      }).then(data => {
       
        return (data); // JSON data parsed by `data.json()` call
      });
      const [name,result]=results
 console.log(name);
      if (result === 201) {
        window.alert(`sucessfull registration ${name}`);
        value(true);
        customer_name(name);
      }
      else {
        window.alert('invalid registration');
        value(false);
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="modal fade" id="signup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"><h2 alt="" width="72" height="57">Organics World</h2></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <main>

                <div>
                  <div className="col-md-12">
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                      <strong>Please sign-up </strong>
                    </div>
                    <form method="post" className="needs-validation" novalidate="" onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-sm-6">
                          <label for="firstName" className="form-label">First name</label>
                          <input name="firstname" type="text" className="form-control" id="firstName" placeholder="First name" onChange={e => setfirstname(e.target.value)} />
                          <div className="invalid-feedback">
                            Valid first name is required.
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <label for="lastName" className="form-label">Last name</label>
                          <input name="lastname" type="text" className="form-control" id="lastName" placeholder="Last name" onChange={e => setlastname(e.target.value)} />
                          <div className="invalid-feedback">
                            Valid last name is required.
                          </div>
                        </div>
                        <div className="col-12">
                          <label for="email" className="form-label">Email </label>
                          <input name="email" type="email" className="form-control" id="email" placeholder="you@example.com" onChange={e => setemail(e.target.value)} />
                          <div className="invalid-feedback">
                            Please enter a valid email address.
                          </div>
                        </div>
                        <div className="col-12">
                          <label for="password" className="form-label">Password</label>
                          <input name="password" type="password" className="form-control" id="password" placeholder="password" onChange={e => setpassword(e.target.value)} />

                        </div>
                        <div className="col-12">
                          <label for="password" className="form-label"> confirm Password</label>
                          <input name="confirmpassword" type="password" className="form-control" id="password" placeholder="confirm password" onChange={e => setconfirmpassword(e.target.value)} />
                          <div className="invalid-feedback">
                            Please enter same password as in password.
                          </div>
                        </div>
                      </div>   <p class="mt-5 mb-3 text-muted">© Organics World: 2022</p>
                      <div className="modal-footer">

                        <button type="reset" className="btn btn-outline-danger me-2" >reset</button>

                        <button type="submit" className="btn btn-outline-success" >Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;
