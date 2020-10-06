import React from "react";
import classes from './Logo.module.css'
import logoPicture from "../../assets/original.png"

const logo = (props) => (
    <div className={classes.Logo} style={{height:props.height}}>
        <img src={logoPicture} alt="logo"/>
    </div>
);

export default logo;