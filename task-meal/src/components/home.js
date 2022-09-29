// Tool init
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
import './home.css'

function Home () {
    const [theMeal, setTheMeal] = useState([])

    const loadData = async () => {
        try {
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            setTheMeal(res.data.meals)
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect( () => {
        loadData()
    }, [])

    return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                    <Link className="linkNav" to='/' replace >Home</Link>
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

        <div className="container conatiner__content">
            {theMeal.length > 0 && theMeal.map((item) => {
                return <Card key={item.idMeal} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.strMealThumb} />
                <Card.Body>
                    <Card.Title>{item.strMeal}</Card.Title>
                    <Card.Text>{item.strCategory}</Card.Text>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            })}
            
    </div>

    </div>

    
    

    
    )
}

export default Home