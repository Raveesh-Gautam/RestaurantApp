import RestaurentCardSummary from './components/Cart/RestaurentCardSummary'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
// import OrderModal from './components/UI/OrderModal'
import Cart from './components/Cart/Cart'
import { useState } from 'react'


const App = () => {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <div >
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
       <Cart isOpen={isOpen} setIsOpen={setIsOpen}/>
      {/* <OrderModal /> */}
      <RestaurentCardSummary />
      <Meals />
     
   
    </div>
  )
}

export default App