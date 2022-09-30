import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// Styling Init
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'


function NavBar () {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand >
                <Link className="linkLogo" to='/'>
                <FontAwesomeIcon className="bowl-food" icon={faBowlFood} />
                    Meal Recipe</Link>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {/* <Nav.Link href="#features">Features</Nav.Link> */}
                    <Link className="linkNav" to='/'>Home</Link>
                    <NavDropdown title="Category" id="collasible-nav-dropdown">
                        <NavDropdown.Item >
                            <Link className="linkCat">Category 1</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link className="linkCat">Category 2</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link className="linkCat">Category 3</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar