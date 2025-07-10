import React from 'react'
import Header from './components/Layout/Header'
import RestaurentCardSummary from './components/Cart/RestaurentCardSummary'
import Meals from './components/Meals/Meals'
import Card from './components/UI/Card'
import OrderModal from './components/UI/OrderModal'


const App = () => {
  return (
    <div >
      <Header />
      <Card />
      <OrderModal />
      <RestaurentCardSummary />
      <Meals />
   
    </div>
  )
}

export default App