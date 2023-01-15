import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer } from './components/footer/Footer'
import { Navigation } from './components/nav/Navigation'
import { Cart } from './components/pages/cart/Cart'
import { Female } from './components/pages/female/Female'
import { Home } from './components/pages/home/Home'
import { Male } from './components/pages/male/Male'
import { Search } from './components/pages/search/Search'
import { ShopContextProvider } from './context/shop-context'
import './App.css'
import { Kids } from './components/pages/kids/Kids'




function App() {

  return (
      <ShopContextProvider>
        <Router>
          <div className='App'>
            <Navigation />
            <div className='main'>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="male" element={<Male />} />
                  <Route path="female" element={<Female />} />
                  <Route path="cart" element={<Cart/>} />
                  <Route path="search" element={<Search/>} />
                  <Route path="kids" element={<Kids/>} />
                </Route>
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ShopContextProvider>
  )
}

export default App
