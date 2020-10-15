import React from "react";
import classes from './NavigationItems.module.css'
import NavigationItem from "./NavigationItem/NavigationItem";
import {createPath, ROUTE} from "../../../utils/routeUtils/RouteFunctions";

const navigationItems = () => {
    const navItemList = Object.keys(ROUTE).map(navItem => <NavigationItem key={navItem} link={createPath({path: navItem})}>{navItem}</NavigationItem>)
    return ( <ul className={classes.NavigationItems}>
            {navItemList}
    </ul>
   )
};

export default navigationItems;