import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './content.css'
// import Filter from "../pages/filter";
import Search from "./search";
import NavBar from "../navbar/navBar";

function Content () {
    const [theMeal, setTheMeal] = useState([])
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    let scMeal = JSON.parse(JSON.stringify(theMeal))
    if(search) {
        scMeal = theMeal.filter(meal => meal.strMeal.toLowerCase().includes(search.toLocaleLowerCase()))
    }

    const loadData = async () => {
        try {
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            setTheMeal(res.data.meals)
        } catch (error) {
            console.log(error)
        }
        
    }

    const filtData = async (ingridient) => {
        try {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingridient}`)
            setTheMeal(res.data.meals)
        } catch (error) {
            console.log(error)
        }
    }

    const onChange = (event) => {
        let input = event.target.value
        setSearch(input)
    }

    useEffect( () => {
        loadData()
    }, [])

    

    return (
            <div className="container container__content">
                <NavBar/>
                <div className="container container__util">
                    <div className="row g-2">
                        <div className="col-auto">
                            <Search onChange={onChange}/>
                        </div>
                        <div className="col">
                        <DropdownButton variant="secondary" size="sm" id="dropdown-basic-button" title="Ingridient">
                            <Dropdown.Item onClick={() => loadData()}>All</Dropdown.Item>
                            <Dropdown.Item onClick={() => filtData('Beef')}>Beef</Dropdown.Item>
                            <Dropdown.Item onClick={() => filtData('Chicken')}>Chicken</Dropdown.Item>
                            <Dropdown.Item onClick={() => filtData('Salmon')}>Salmon</Dropdown.Item>
                        </DropdownButton>
                        </div>
                    </div>
                </div>

                <div className="container container__display">
                {scMeal && scMeal.map((item) => {
                return <Card key={item.idMeal} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.strMealThumb} />
                <Card.Body>
                    <Card.Title>{item.strMeal}</Card.Title>
                    <Card.Text>{item.strCategory}</Card.Text>
                    <Button variant="secondary" onClick={() => navigate(`/recipe/${item.idMeal}`)}>Look Recipe</Button>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                    {/* <Link state={item.idMeal} type="button" className="btn btn-primary" onClick={ () => navigate(`/recipe/${item.idMeal}`)}>Look Recipe</Link> */}
                </Card.Body>
            </Card>
            })}
                </div>
            
            </div>
        
    )
}

export default Content