// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { Component } from "react";

import UserScansTable from "./Components/UserScansTable";

import { AppContext } from './Model/AppContext';

import Backend from './API/backend';

export default class App extends Component {

    static contextType = AppContext;

    static backendUrl = process.env.REACT_APP_BACKEND_URL;

    constructor(props) {
        super(props);
        const api = new Backend();
        this.state = {
            api: api
        };
    }


    componentDidMount() {
        console.log("App.componentDidMount():");
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                <BrowserRouter>
                    <Routes>

                        {/* User Scans Table */}
                        <Route 
                            path="/scans/:user" 
                            element={<UserScansTable/>}
                        />



                    </Routes>
                </BrowserRouter>
            </AppContext.Provider>
        );
    }



}
