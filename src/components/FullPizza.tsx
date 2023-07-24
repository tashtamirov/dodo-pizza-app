import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Preloader from "./Preloader"

const FullPizza: React.FC = () => {

    const { id } = useParams()
    const [pizza, setPizza] = useState<{
        imageUrl: string,
        title: string,
        price: number
    }>()
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
            <br />
            <Link to="/">
                <button className="button button--outline button--add">
                    Назад
                </button>
            </Link>
        </div>
    )
}

export default FullPizza