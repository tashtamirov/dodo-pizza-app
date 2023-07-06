import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
// import qs from 'qs'

import PizzaBlock from '../components/PizzaBlock'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/Pagination'
import { SearchContext } from '../App'
import { setCategoryId, setCurrentPage } from '../redux/slices/categoriesSlice'

const Home = () => {

    const categoryId = useSelector(state => state.categoriesSlice.categoryId)
    const sortType = useSelector(state => state.categoriesSlice.sort)
    const currentPage = useSelector(state => state.categoriesSlice.currentPage)

    const dispatch = useDispatch()

    const { searchValue } = React.useContext(SearchContext)
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const handleCurrentPage = (number) => {
        dispatch(setCurrentPage(number))
    }

    useEffect(() => {

    setIsLoading(true)
            axios
                .get(
                    `https://64932c79428c3d2035d17405.mockapi.io/pizzas?page=${currentPage}&limit=4&${
                    categoryId > 0 ? `category=${categoryId}` :''}&sortBy=${sortType.sortProperty}&order=desc`
                )
                .then((res) => {
                    setPizzas(res.data)
                    setIsLoading(false)
                })

    }, [categoryId, sortType, currentPage])

    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />)

    const renderSearchingPizzas = pizzas.filter(item => 
            item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((obj) => (<PizzaBlock key={obj.id} {...obj} />))

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
                <Sort /> 
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? skeletons : renderSearchingPizzas
                }
            </div>
            <Pagination currentPage={currentPage} onChangePage={handleCurrentPage}/>
        </>
    )
}

export default Home
