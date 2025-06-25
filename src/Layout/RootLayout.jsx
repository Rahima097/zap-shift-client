import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/NavBar/NavBar';
import Footer from '../shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;