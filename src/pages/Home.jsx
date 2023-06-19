import React from 'react'
import { useEffect, useState } from 'react'

import PizzaBlock from '../components/PizzaBlock'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/PizzaBlock/Skeleton'

const Home = () => {

    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)

    const [sortType, setSortType] = useState({
        name: 'популярности',
        sortProperty: 'rating'
    })

    useEffect(() => {
            setIsLoading(true)
            fetch(`http://localhost:3002/pizzas/category/${categoryId}`)
            .then((res) => res.json())
            .then((json) => {
                setPizzas(json)
                setIsLoading(false)
            })

    }, [categoryId, sortType])

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
                <Sort value={sortType} onClickSort={(id) => setSortType(id)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                    ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
                    : pizzas.map((obj) => (
                        <PizzaBlock
                            key={obj.id}
                            {...obj}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Home
