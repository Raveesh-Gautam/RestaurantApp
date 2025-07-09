import React from 'react'
import MealItem from './MealItem';
import "./Meals.css"
const foodItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    ingredients: ["Tomato", "Mozzarella", "Basil"],
    price: 299
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    ingredients: ["Paneer", "Tomato", "Butter", "Cream", "Spices"],
    price: 250
  },
  {
    id: 3,
    name: "Veg Biryani",
    ingredients: ["Basmati Rice", "Mixed Vegetables", "Saffron", "Spices"],
    price: 220.45
  },
  {
    id: 4,
    name: "Masala Dosa",
    ingredients: ["Rice", "Urad Dal", "Potato", "Spices", "Coconut Chutney"],
    price: 150
  },
  {
    id: 5,
    name: "Chole Bhature",
    ingredients: ["Chickpeas", "Spices", "Flour", "Yogurt"],
    price: 180
  }
];



const Meals = () => {
  return (
    <div className='meals'>
        {foodItems.map((ele)=>{
            return (<MealItem key={ele.id} name={ele.name} ingredients={ele.ingredients} price={ele.price}></MealItem>)
        })}
    </div>
  )
}

export default Meals
