import React from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Terminal from "./components/Terminal/Terminal";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/" component={Terminal}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
