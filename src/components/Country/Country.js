import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name,area,flags,maps} = props.country
  
    return (
        <div className='country'>
            <h2> {name.common}  </h2>
            <h3> Area : {area} </h3>
           <img src={flags.png} alt={name.common} />
           <div className="maps">
                <a target='_blank' className='go_to_map' href={maps.googleMaps} rel="noreferrer" >Google map</a>
                <a target='_blank' className='go_to_map' href={maps.openStreetMaps} rel="noreferrer" >Street map</a>
           </div>
        </div>
    );
};

export default Country;