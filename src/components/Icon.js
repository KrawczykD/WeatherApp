import React from 'react';
import './Icon.css'

const Icon =(props)=>{

    // const iconCode = props.iconCode + ".png";

    var icon = require(`../images/iconsWather/${props.iconCode}.png`)

    return(
        <div className="icon">
            <img alt="weather icon" src={icon} />
        </div>
    )
}


export default Icon;