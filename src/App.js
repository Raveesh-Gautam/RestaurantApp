import React from 'react'
import Header from './components/Layout/Header'
import RestaurentCardSummary from './components/Cart/RestaurentCardSummary'
import Meals from './components/Meals/Meals'


const App = () => {
  return (
    <div >
      <Header />
      <RestaurentCardSummary />
      <Meals />
   
    </div>
  )
}

export default App