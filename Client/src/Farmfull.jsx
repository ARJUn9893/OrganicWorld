import React from 'react'
import Ourfarm from './Ourfarm';
import Farmdata from './Farmdata'
function Farmfull() {
    return (
        <div>
      {
          Farmdata.map((val) => {
return(
    <Ourfarm name={val.name}
    heading={val.headline}
    image={val.image}/>
)
          })
      }
        </div>
    )
}

export default Farmfull;
