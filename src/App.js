import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import CartPage from './Pages/CartPage'
import Home from './Pages/Home'
import Orders from './Pages/Orders'
import CartContextProvider from './CardContext/CartContext'

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/materialui-cart-app' element={<Home />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </Router>
    </CartContextProvider>
  )
}

export default App
