import { useState } from 'react'
import Cart from './components/Cart/Cart'
import RestaurentCardSummary from './components/Cart/RestaurentCardSummary'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './components/store/CartProvider'


const App = () => {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <CartProvider  >
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
       <Cart isOpen={isOpen} setIsOpen={setIsOpen}/>
      <RestaurentCardSummary />
      <Meals />
     
   
    </CartProvider>
  )
}

export default App