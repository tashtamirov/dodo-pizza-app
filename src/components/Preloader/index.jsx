import React from 'react'
import './Preloader.css'
import loader_img from '../../assets/pizza-loader.png'

const Preloader = () => {
    return (
        <div className='preloader_container'>
            <div className="spinner">
                <img src={loader_img} className="pizza-part pizza-part-1" alt='pizza' />
                <img src={loader_img} className="pizza-part pizza-part-2" alt='pizza' />
                <img src={loader_img} className="pizza-part pizza-part-3" alt='pizza' />
                <img src={loader_img} className="pizza-part pizza-part-4" alt='pizza' />
            </div>
            <br />
            <div>
                <h4>Loading...</h4>
            </div>
        </div>
    )
}

export default Preloader


