import React from 'react'
import { Link } from "react-router-dom";
import w1 from './img2.jpg';
import w2 from './22.jfif';
import w3 from './1.jpg';
import w4 from './3.jpg';
import f1 from './feed1.png';
import f2 from './feed5.png';
import f3 from './feed3.png';
function Home() {
    const im1=w1;
    const im2=w2;
    const im3=w3;
    const im4=w4;

    const g1=f1;
    const g2=f2;
    const g3=f3;

    return ( <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                </div>
                <div className="container-fluid">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={im1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Welcome to Organics World</h2>
                                <p>let's make great together.</p>
                                <span className="mx-1"><button type="button" className="btn btn-warning">agriculture</button></span>
                                <span className="mx-1"><button type="button" className="btn btn-success">dairy</button></span>
                                <span className="mx-1"><button type="button" className="btn btn-info">nourishment</button></span>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img src={im2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Go natural</h2>
                                <p>Be happy be real.</p>
                                <span className="mx-1"><button type="button" className="btn btn-warning">agriculture</button></span>
                                <span className="mx-1"><button type="button" className="btn btn-success">dairy</button></span>
                                <span className="mx-1"><button type="button" className="btn btn-info">nourishment</button></span>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={im3} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>We are here to nourish you</h2>
                                <p>Pure organic products.</p>
                                <span className="mx-1"><button type="button" className="btn btn-warning">agriculture</button></span>
                                <span className="mx-1"><button type="button" className="btn btn-success">dairy</button></span>
                                <span className="mx-1"><button type="button" className="btn btn-info">nourishment</button></span>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={im4} className="d-block w-100 h-50" alt="..." width="100" height="50" />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Vashudhaiva kutumbkama</h2>
                                <p>Eco friendly range</p>
                                <span className="mx-1"><button type="button" className="btn btn-warning">agriculture</button></span>
                                <span className="mx-1"><button type="button" className="btn btn-success">dairy</button></span>
                                <span className="mx-1"><button type="button" className="btn btn-info">nourishment</button></span>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container-fluid marketing my-4 ">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={g1} alt="" role="img" aria-label="Placeholder: 140x140"
                            preserveAspectRatio="xMidYMid slice" focusable="false" />

                        <h2>Our Farms</h2>
                        <p><Link to="/ourfarm"><button  type="button" className="btn btn-outline-success">Explore</button></Link></p>
                    </div>
                    <div className="col-lg-4 ">
                        <img src={g2}  alt="" role="img" aria-label="Placeholder: 140x140"
                            preserveAspectRatio="xMidYMid slice" focusable="false" />
                        <h2>Our Product</h2>
                        <p><Link to="/product"><button  type="button" className="btn btn-outline-success">Explore</button></Link></p>

                    </div>
                    <div className="col-lg-4">
                        <img src={g3}  alt="" role="img" aria-label="Placeholder: 140x140"
                            preserveAspectRatio="xMidYMid slice" focusable="false" />

                        <h2>Our production</h2>
                        <p><Link to="/ourfarm"><button  type="button" className="btn btn-outline-success">Explore</button></Link></p>
                    </div>
                    </div>
                </div>
               
                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <div className="h-100 p-5 text-white bg-dark rounded-3">
                            <h2>You’re Running Out of Energy! Here’s How to Fix It</h2>
                            <button className="btn btn-outline-light" type="button">Curious ?</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="h-100 p-5 bg-light border rounded-3">
                            <h2>We Need to Talk About Nature....</h2>
                            <button className="btn btn-outline-secondary" type="button">how can I ?</button>
                        </div>
                    </div>
                    </div>
                </>  )
}

export default Home;
