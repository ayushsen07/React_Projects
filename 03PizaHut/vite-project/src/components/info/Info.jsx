
import React from 'react'
import Card from '../card/Card.jsx'

function Info({activeTab}) {

    const basicDetails ={
        pizzas:{
            title: "Pizzas",
            description:"Explore our great range of pizza recipes from the Pizza Hut pizza menu."
        },
        sides:{
            title: "Sides",
            description:"Explore our great choice of delicious sides to complement your pizzas"
        },
        desserts:{
            title: "Desserts",
            description:"Explore our tempting choice of delicious desserts. Available for delivery and collection."
        },
        drinks:{
            title: "Drinks",
            description:"Explore our great selection of refreshing drinks"
        },
        deals:{
            title: "Deals",
            description:"Check out the latest meal deals available from Pizza Hut"
        },
    }

    const pizzas = [
        {
            img :"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-veg.4e51f4733bea47a514c107c9fd2341e3.1.jpg?width=251",
            title :"Momo Mia Pizza-Veg",
            description :'Pizza with juicy Veg Momos placed on the crust and base topped with spicy Schezwan sauce, onions, capsicum, sweet corn, and 100% mozzarella cheese, baked to perfection!  (PAN Per/Med 241 Kcal/100g)'
        },
        {
            img :"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-veg.4e51f4733bea47a514c107c9fd2341e3.1.jpg?width=251",
            title :"Momo Mia Pizza-Veg",
            description :'Pizza with juicy Veg Momos placed on the crust and base topped with spicy Schezwan sauce, onions, capsicum, sweet corn, and 100% mozzarella cheese, baked to perfection!  (PAN Per/Med 241 Kcal/100g)'
        },
        {
            img :"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-veg.4e51f4733bea47a514c107c9fd2341e3.1.jpg?width=251",
            title :"Mia Pizza-Veg",
            description :'Pizza with juicy Veg Momos placed on the crust and base topped with spicy Schezwan sauce, onions, capsicum, sweet corn, and 100% mozzarella cheese, baked to perfection!  (PAN Per/Med 241 Kcal/100g)'
        },
        {
            img :"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-veg.4e51f4733bea47a514c107c9fd2341e3.1.jpg?width=251",
            title :"Mia Pizza-Veg",
            description :'Pizza with juicy Veg Momos placed on the crust and base topped with spicy Schezwan sauce, onions, capsicum, sweet corn, and 100% mozzarella cheese, baked to perfection!  (PAN Per/Med 241 Kcal/100g)'
        },
    ]

  return (
    <div>
        <h1 className='text-center text-3xl font-semibold my-6'>Our {basicDetails[`${activeTab}`].title}</h1>
        <p className='text-center'>{basicDetails[`${activeTab}`].description}</p>

        <div className='my-5 flex gap-5'>
           { pizzas.map((data, index)=><Card image={pizzas[1].img} title={pizzas[1].title} description ={pizzas[1].description}/>)}
        </div>
    </div>
  )
}

export default Info