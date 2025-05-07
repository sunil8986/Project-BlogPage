import React from 'react'

export default function AlternateCard() {

    const Cdatatwo = [
        {
            id: 1,
            cover: "/Images/slide-1.jpg",
            category: "lifestyle",
            title: "What are the best countries to visit?",
            desc: "In this post, we are going to highlight the many benefits of blogging for business and how you can get started with",
        },
        {
            id: 2,
            cover: "/Images/slide-2.jpg",
            category: "lifestyle",
            title: "What are the best countries to visit?",
            desc: "Unlock the power of business blogging to drive traffic, leads, and long-term growth.",
        },
        {
            id: 3,
            cover: "/Images/slide-3.jpg",
            category: "lifestyle",
            title: "What are the best countries to visit?",
            desc: "In this post, we are going to highlight the many benefits of blogging for business and how you can get started with",
        }
    ]

    return (
        <>
            <div className='alternate slide'>
                    {
                        Cdatatwo.map((data) => {
                            let { id, cover, category, title, desc } = data;
                            return (
                                <div key={id} className='box'>
                                    <div className='img'>
                                        <img src={cover} alt='' />
                                    </div>
                                    <div className='text'>
                                        <span>{category}</span>
                                        <h2>{title}</h2>
                                        <p>{desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        </>
    )
}
