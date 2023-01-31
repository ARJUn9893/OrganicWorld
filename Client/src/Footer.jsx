/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Sidebars from './Sidebars';

function Footer() {
    return (
        <>
    <footer className="container my-5">
      <p className="float-end"><a href="#">Back to top</a></p>
      <p>© 2017–2022 Organics World   .<a href="#"> Privacy</a> · <a href="#">Terms conditon</a>   <span className="mx-4"> <Sidebars /></span></p>
    </footer>  
        </>
    )
}

export default Footer;
