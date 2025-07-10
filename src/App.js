import RestaurentCardSummary from './components/Cart/RestaurentCardSummary'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
// import OrderModal from './components/UI/OrderModal'
import Cart from './components/Cart/Cart'


const App = () => {
  return (
    <div >
      <Header />
       <Cart/>
      {/* <OrderModal /> */}
      <RestaurentCardSummary />
      <Meals />
     
   
    </div>
  )
}

export default App