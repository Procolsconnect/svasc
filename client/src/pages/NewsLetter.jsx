import React, { useState, useEffect } from 'react'
import Hero from '../components/Common/Hero'
import axios from 'axios'
import './NewsLetter.css'

const API_URL = 'http://localhost:5000/api/newsletter';
const BASE_URL = 'http://localhost:5000';

const NewsLetter = () => {
    const [newsletters, setNewsletters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNewsletters = async () => {
            try {
                setLoading(true);
                const response = await axios.get(API_URL);
                if (response.data.success) {
                    setNewsletters(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching newsletters:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNewsletters();
    }, []);

    return (
        <div>
            <Hero title="NewsLetter"
                description="Get the latest updates and news from us"
                image="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            />
            <div className="container">
                <div className="row">
                    <h2 className='title'>NewsLetter</h2>
                    {loading ? (
                        <div className="text-center py-10">Loading newsletters...</div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                            {newsletters.length > 0 ? (
                                newsletters.map((item) => (
                                    <a
                                        key={item._id}
                                        href={`${BASE_URL}/${item.pdf.replace(/^\/+/, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='content'
                                    >
                                        {item.title} &#8594;
                                    </a>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-10 text-gray-500">
                                    No newsletters available at the moment.
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NewsLetter