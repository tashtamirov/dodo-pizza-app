import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import Preloader from "./Preloader"

const FullPizza = () => {

    const { id } = useParams()
    const [pizza, setPizza] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const { data } = await axios.get(`https://64932c79428c3d2035d17405.mockapi.io/pizzas/${id}`)
                setPizza(data)
            } catch (e) {
                alert('Такой пиццы нет :(')
                console.log(e)
                navigate('/')
            }
        }
        fetchPizza()
    }, [id, navigate])

    if (!pizza) {
        return (
            <Preloader />
        )
    }

    
    
    return (
        <div className="container">
            <img src={pizza.imageUrl} alt='pizza' />
            <h2>{pizza.title}</h2>
            <h4>{pizza.price} руб.</h4>
        </div>
    )

}



export default FullPizza