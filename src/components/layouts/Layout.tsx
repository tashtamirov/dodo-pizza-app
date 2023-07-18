import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

const Layout: React.FC = () => {
    return (
        <>
            <div className="wrapper">
                <div className="content">
                    <Header />
                    <div className="container">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout