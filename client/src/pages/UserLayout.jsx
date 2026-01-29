import React from 'react'
import Navbar from '../components/Home/Navbar'
// import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const UserLayout = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    return (
        <div>
            <Navbar className={!isNavbarVisible ? 'header-hidden' : ''} />
            <main>
                <Outlet context={{ setIsNavbarVisible }} />
            </main>
        </div>
    )
}

export default UserLayout