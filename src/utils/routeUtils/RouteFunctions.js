import React from "react";
import {Route} from "react-router-dom";

export const ROUTE = {
    HOME: '/',
    PROJECTS: '/projects',
    SKILLS: '/skills',
    CONTACT: '/contact',
    BLOG: '/blog'
}
export function createRoutes(){
   return Object.keys(ROUTE).map(key => <Route key={key} path={ROUTE[key]} component={ROUTE} />);
}
export function createPath(...args){
    const [path, params] = args;
    const pathValue = path.path;
    if(!params) return ROUTE[pathValue];

}