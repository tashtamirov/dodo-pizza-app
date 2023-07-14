import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
// import { Link } from 'react-router-dom'

import PizzaBlock from '../components/PizzaBlock'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/Pagination'
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice'
import { getPizzas } from '../redux/slices/pizzaSlice'
import Preloader from '../components/Preloader'

const Home = () => {

    const dispatch = useDispatch()

    const { items, status } = useSelector(state => state.pizzaSlice)

    const categoryId = useSelector(state => state.filterSlice.categoryId)
    const sortType = useSelector(state => state.filterSlice.sort)
    const currentPage = useSelector(state => state.filterSlice.currentPage)
    const { searchValue } = useSelector(state => state.filterSlice)

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const handleCurrentPage = (number) => {
        dispatch(setCurrentPage(number))
    }

    useEffect(() => {
        dispatch(getPizzas({
            categoryId,
            sortType,
            currentPage
        }))
    }, [categoryId, sortType, currentPage, dispatch])

    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />)

    const renderSearchingPizzas = items.filter(item =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((obj) => (<PizzaBlock key={obj.id} {...obj} />))

        if (status === 'Pending') {
            return (
                    <Preloader />
            )
        }

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {status === 'Error'
                    ? (
                        <div>
                            <h2>Ошибка<icon>😕</icon></h2>
                            <br />
                            <p>
                                Не удалось получить питтсы :( Ошибка отправки запроса...
                            </p>
                            <br />
                        </div>
                    )
                    : status === 'loading' ? skeletons : renderSearchingPizzas
                }
            </div>
            <Pagination currentPage={currentPage} onChangePage={handleCurrentPage} />
        </>
    )
}

export default Home
