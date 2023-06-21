import React from 'react'
import { useEffect, useState } from 'react'

import PizzaBlock from '../components/PizzaBlock'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/Pagination'

const Home = ({ searchValue }) => {

    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)
    const [sortType, setSortType] = useState({
        name: 'популярности',
        sortProperty: 'rating'
    })

    useEffect(() => {
            setIsLoading(true)

            fetch(`https://64932c79428c3d2035d17405.mockapi.io/pizzas?${
                categoryId > 0 ? `category=${categoryId}` :
                ''}&sortBy=${sortType.sortProperty}&order=desc`
            )
            .then((res) => res.json())
            .then((json) => {
                setPizzas(json)
                setIsLoading(false)
            })

    }, [categoryId, sortType])

    const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />)

    const renderSearchingPizzas = pizzas.filter(item => 
            item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((obj) => (<PizzaBlock key={obj.id} {...obj} />))

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
                <Sort value={sortType} onClickSort={(id) => setSortType(id)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? skeletons : renderSearchingPizzas
                }
            </div>
            <Pagination />
        </>
    )
}

export default Home
