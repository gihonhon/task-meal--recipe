import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from "../navbar/navBar";
import Search from "../content/search";
import Footer from "../footer/footer";



function Category () {
    const [theMeal, setTheMeal] = useState([])
    const { cat } = useParams()


    const loadData = async () => {
        try {
            const res = await axios.get(`https:/www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
            setTheMeal(res.data.meals)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        loadData()
    }, [])


    return (
        <div className="container container__content">
                <NavBar/>
                

                <div className="container container__display">
                    {theMeal && theMeal.map((item) => {
                    return <Card key={item.idMeal} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.strMealThumb} />
                                <Card.Body>
                                    <Card.Title>{item.strMeal}</Card.Title>
                                    <Card.Text>{item.strCategory}</Card.Text>
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

export default Category