import React from 'react'


  
export default function Card() {
    
  const Carddata = [
    {
      id: 1,
      cover: "/Images/card-1.jpg",
      category: "lifestyle",
      title: "Best Places to visit in the World",
    },
    {
      id: 2,
      cover: "/Images/card-2.jpg",
      category: "lifestyle",
      title: "How much will it Cost to Travel?",
    },
    {
      id: 3,
      cover: "./Images/card-3.jpg",
      category: "lifestyle",
      title: "Where can People travel right now?",
    },
    {
      id: 4,
      cover: "./Images/card-4.jpg",
      category: "lifestyle",
      title: "What is the best about Travelling?",
    },
    {
      id: 5,
      cover: "./Images/card-5.jpg",
      category: "lifestyle",
      title: "What are the best countries to visit?",
    },
    {
      id: 6,
      cover: "./Images/card-6.jpg",
      category: "lifestyle",
      title: "What do you Gain from Traveling?",
    },
  ]

  return (
    <>
          <div className='crd mt-10'>
              {
                  Carddata.map((data) => {
                      let { id, cover, category, title } = data;
                      return (
                          <div key={id} className='box'>
                              <div className='img'>
                                  <img src={cover} alt='' />
                              </div>
                              <span>{category}</span>
                              <h2>{title}</h2>
                          </div>
                      )
                  })
              }
          </div>
    </>
  )
}
