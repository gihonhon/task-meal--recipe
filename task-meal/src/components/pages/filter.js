import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Filter () {
    const[theMeal, setTheMeal] = useState([])

    const loadData = async () => {
        try {
            const res = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
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

    useEffect( () => {
        loadData()
    }, [])


    return (
            <DropdownButton variant="secondary" size="sm" id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item onClick={() => loadData()}>All</Dropdown.Item>
                <Dropdown.Item onClick={() => filtData('Beef')}>Beef</Dropdown.Item>
                <Dropdown.Item onClick={() => filtData('Chicken')}>Chicken</Dropdown.Item>
                <Dropdown.Item onClick={() => filtData('Salmon')}>Salmon</Dropdown.Item>
            </DropdownButton>
        
    )

}

export default Filter