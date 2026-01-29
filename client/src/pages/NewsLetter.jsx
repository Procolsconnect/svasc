import React from 'react'
import Hero from '../components/Common/Hero'
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div>
            <Hero title="NewsLetter"
                description="Get the latest updates and news from us"
                image="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            />
            <div className="container">
                <div className="row">
                    <h2 className='title'>NewsLetter</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        <div className='content'>NewsLetter 2015-2016 &#8594;</div>
                        <div className='content'>NewsLetter 2016-2017 &#8594;</div>
                        <div className='content'>NewsLetter 2017-2018 &#8594;</div>
                        <div className='content'>NewsLetter 2018-2019 &#8594;</div>
                        <div className='content'>NewsLetter 2019-2020 &#8594;</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter