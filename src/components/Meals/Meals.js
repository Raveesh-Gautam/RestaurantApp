import { useContext } from "react";
import CartContext from "../store/auth-context";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import styles from "./Meals.module.css";

const foodItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    ingredients: ["Tomato", "Mozzarella", "Basil"],
    price: 299,
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    ingredients: ["Paneer", "Tomato", "Butter", "Cream", "Spices"],
    price: 250,
  },
  {
    id: 3,
    name: "Veg Biryani",
    ingredients: ["Basmati Rice", "Mixed Vegetables", "Saffron", "Spices"],
    price: 220.45,
  },
  {
    id: 4,
    name: "Masala Dosa",
    ingredients: ["Rice", "Urad Dal", "Potato", "Spices", "Coconut Chutney"],
    price: 150,
  },
  {
    id: 5,
    name: "Chole Bhature",
    ingredients: ["Chickpeas", "Spices", "Flour", "Yogurt"],
    price: 180,
  },
];
 const CartData=[{id:1,name:"Shushi",price:170}];
const Meals = () => {
const cartCtx=useContext(CartContext);


const handleAddData = (quantity, qid) => {
  const bookData = foodItems.find((item) => item.id === qid);
  if (bookData) {
    cartCtx.addItem({
      id: bookData.id,
      name: bookData.name,
      price: bookData.price,
      quantity: quantity, 
    });
  }

  console.log("Added:", bookData.name, "Qty:", quantity);


}

  return (
    <div className={styles.meals_manage}>
      <Card className={styles.meals}>
        {foodItems.map((ele) => {
          return (
            <MealItem onAddItemData={handleAddData}
              key={ele.id}
              id={ele.id}
              name={ele.name}
              ingredients={ele.ingredients}
              price={ele.price}
            ></MealItem>
          );
        })}
      </Card>
    </div>
  );
};

export default Meals;
