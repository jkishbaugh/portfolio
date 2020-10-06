import React from "react";
import classes from './Toolbar.module.css'
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle";
import HeaderImage from "../../HeaderImage/HeaderImage";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <HeaderImage className={classes.HeaderImage + classes.DesktopOnly}/>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <nav className={classes.DesktopOnly} >
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;