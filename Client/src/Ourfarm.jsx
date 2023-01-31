import React from 'react'
function Ourfarm(props) {
    const name=props.name;
    const image=props.image;
    const heading=props.heading;
    const about=props.about;
    return (
        
        <>
            <div className="container-fluid">
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">{name} <span className="text-muted">{heading}</span></h2>
                        <p className="lead">{about}</p>
                    </div>
                    <img src={image} alt=""  width="100%" height="50%"/>

                </div>
                <hr className="featurette-divider" />
            </div>
        </>)
}

export default Ourfarm;
