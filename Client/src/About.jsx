import React from 'react'
import w from './im1.jpg';
import w1 from './im2.jpg';
;
const im1=w1;
const im2=w;   
function About() {
  return (<>
    <hr className="featurette-divider"></hr>
    <div className="row featurette">
      <div className="col-md-7">
        <h1 className="featurette-heading my-5">Our vision. <span className="text-muted">It’ll blow your mind.</span></h1>
        <p className="lead">we are here to provide you good food and organic products that's help you to improve your health natrually and it will help to  farmer and nature and 30 percent of our profit will give shelter to animals and  to grow more trees on earth      .</p><button type="button" className="btn btn-info">join us</button> 
      </div>
      <div className="col-md-5">
        <img src={im1} alt="" />

      </div>
    </div>
    <hr className="featurette-divider"></hr>
    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading my-5">Our work. <span className="text-muted">one step towards light.</span></h2>
        <p className="lead">we work with farmer and train them to grow organic crops and then we process it naturally and serve across the globe and our products are genuine and natural with no side effect</p><button type="button" className="btn btn-warning">see products</button> 
      </div>
      <div className="col-md-5 order-md-1">
      <img src={im2} alt="" />
      </div>
    </div>


  </>

  )
}

export default About;
