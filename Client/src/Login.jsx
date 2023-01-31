import React from 'react'
import { useState } from 'react';

async function loginUser(data) {
  const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
   const res=await response.json().then(data=>{ return data });
    const dans=[ res,response.status]
    return dans;
  }

function Login({ value, customer_name}) {
  const [email, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    try {

      const results = await loginUser({
        email,
        password
      }).then(data => {
       
        return (data); // JSON data parsed by `data.json()` call
      });
      const [name,result]=results
 console.log(name);
 console.log(result);

      if (result === 201) {
        window.alert(`sucessfull login ${name}`);
        value(true);
        customer_name(name);

      }
      else {
        window.alert('invalid credentials\ntry again')
        value(false);
      }

    } catch (error) {
     console.log(error)
    }
  }

  return (
    <>
      <div className="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"><h2 alt="" width="72" height="57">myCrops</h2></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div class=" conrainer form-signin">
                <form method='post' onSubmit={handleSubmit} >
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Please sign-in  </strong>
                  </div>

                  <div className="form-floating">
                    <input name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setUserName(e.target.value)} />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating">
                    <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div className="checkbox mb-3">
                    <input type="checkbox" value="remember-me" /><label> remember me
                    </label>
                  </div>
                  <button className="btn  btn-outline-primary" type="submit" >Sign in</button>
                </form>
              </div>
              <p className="mt-5 mb-3 text-muted">© Organics World 2022</p>
            </div>
            <div className="modal-footer">
              <h6 className="text-muted">Don't have an account?</h6>
              <button type="button" className="btn btn-outline-warning me-2" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signup">Sign-up</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login
