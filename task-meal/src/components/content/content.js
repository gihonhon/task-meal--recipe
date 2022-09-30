import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './content.css'

function Content () {
    const [theMeal, setTheMeal] = useState([])
    const navigate = useNavigate()

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
        <div className="container conatiner__content">
            {theMeal.length > 0 && theMeal.map((item) => {
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
    )
}

export default Content