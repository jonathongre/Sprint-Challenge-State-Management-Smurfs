import React from "react";
import Smurf from "./Smurf";

 const SmurfList = props => {
    return(
        <div className='smurf-list'>
                {props.smurfs.map(smurf => 
                    {return (
                        <div className='smurf-card'>
                            <Smurf key={smurf.id} smurf={smurf} />
                        </div>
                        );}
                    )}     
        </div>
    );
};

 export default SmurfList;