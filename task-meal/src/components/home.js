// Tool init
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
// Styling Init
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import './home.css'
import NavBar from "./navbar/navBar";
import Content from "./content/content";
import Footer from "./footer/footer";

function Home () {

    return (
    <div>
        <NavBar />
        <Content/>
        <Footer/>


    </div>
    )
}

export default Home