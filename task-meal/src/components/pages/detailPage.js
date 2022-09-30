import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import NavBar from "../navbar/navBar";
import Footer from "../footer/footer";
import './detailpage.css'

function Detail () {
    const [theMeal, setTheMeal] = useState([])
    const { id } = useParams()

    const loadData = async () => {
        try {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
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
            <NavBar/>
            <div className="container container__detail">
                {theMeal.map((item) => (
                    <Card key={item.idMeal} className="card mb-3" style={{maxWidth: '100vw', marginTop: '4rem'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Card.Img src={item.strMealThumb}/>
                        </div>
                        <div className="col-md-8">
                            <Card.Body>
                                <Card.Title><h2>{item.strMeal}</h2></Card.Title>
                                <br></br>
                                <h5>Ingredients :</h5>
                                <ul>
                                    <li>{`${item.strIngredient1} ${item.strMeasure1}`}</li>
                                    <li>{`${item.strIngredient2} ${item.strMeasure2}`}</li>
                                    <li>{`${item.strIngredient3} ${item.strMeasure3}`}</li>
                                    <li>{`${item.strIngredient4} ${item.strMeasure4}`}</li>
                                    <li>{`${item.strIngredient5} ${item.strMeasure5}`}</li>
                                    <li>{`${item.strIngredient6} ${item.strMeasure6}`}</li>
                                    <li>{`${item.strIngredient7} ${item.strMeasure7}`}</li>
                                    <li>{`${item.strIngredient8} ${item.strMeasure8}`}</li>
                                    <li>{`${item.strIngredient9} ${item.strMeasure9}`}</li>
                                </ul>
                                <br></br>
                                <h5>Instruction :</h5>
                                <Card.Text>{item.strInstructions}</Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                ))}
                
            </div>
            
            <Footer/>
            
            
            {/* <div class="card mb-3" style={'max-width: 540px'}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={theMeal.strMealThumb} class="img-fluid rounded-start"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Detail