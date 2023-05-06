import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AppContext } from './context'
import axios from 'axios'

import Cart from './components/Cart'
import Orders from './pages/Orders'
import Header from './components/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

export function App() {
  const [serachValue, setSerachValue] = useState('')
  const [listSneakers, setListSneakers] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const [responsSneakers, responsCart, responsFavorites] =
          await Promise.all([
            axios.get('http://localhost:3000/sneakers'),
            axios.get('http://localhost:3000/cart'),
            axios.get('http://localhost:3000/favorites'),
          ])

        setIsLoading(false)

        setCartItems(responsCart.data)
        setFavorites(responsFavorites.data)
        setListSneakers(responsSneakers.data)
      } catch (error) {
        alert('Ошибка загрузки данных. Повторите попытку')
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const onAddToCard = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`http://localhost:3000/cart/${obj.id}`)
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      )
    } else {
      axios.post('http://localhost:3000/cart', obj)
      setCartItems((prev) => [...prev, obj])
    }
  }

  const handleChangeInputValue = (e) => {
    setSerachValue(e.target.value)
    console.log(e.target.value)
  }

  const onRemoveItem = (id) => {
    axios.delete(`http://localhost:3000/cart/${id}`)
    setCartItems((prev) => prev.filter((obj) => obj.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const onAddToFavorites = (obj) => {
    if (favorites.find((objFav) => objFav.id === obj.id)) {
      axios.delete(`http://localhost:3000/favorites/${obj.id}`)
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id))
    } else {
      axios.post('http://localhost:3000/favorites', obj)
      setFavorites((prev) => [...prev, obj])
    }
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider
      value={{
        listSneakers,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorites,
        onAddToCard,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        {cartOpened && (
          <Cart
            onClosedCart={() => setCartOpened(false)}
            items={cartItems}
            onRemove={onRemoveItem}
            onClearAll={clearCart}
          />
        )}

        <Link to="/">
          <Header onClickCart={() => setCartOpened(true)} />
        </Link>

        <Routes>
          <Route
            path="/"
            element={
              <Home
                listSneakers={listSneakers}
                serachValue={serachValue}
                setSerachValue={setSerachValue}
                onAddToCard={onAddToCard}
                handleChangeInputValue={handleChangeInputValue}
                onAddToFavorites={onAddToFavorites}
                cartItems={cartItems}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  )
}
