import React from 'react'
import { useState } from 'react';
import {BeatLoader,BarLoader} from "react-spinners";
 function Loader(props) {
   

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    return (
        <div>asdasdasd
             <div className="sweet-loading">
        <BarLoader  size={150} color={"#123abc"} loading speedMultiplier={1.5} />
      </div>
        </div>
    )
}
export default Loader;
