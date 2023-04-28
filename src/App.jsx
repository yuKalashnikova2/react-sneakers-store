import { useEffect, useState } from 'react'
import axios from 'axios'

import search from './public/search.svg'
import clearInput from './public/clearInput.svg'
import Cart from './components/Cart'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Link, Route, Routes } from 'react-router-dom'

export function App() {
  const [serachValue, setSerachValue] = useState('')
  const [listSneakers, setListSneakers] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const responsSneakers = await axios.get('http://localhost:3000/sneakers')
      const responsCart = await axios.get('http://localhost:3000/cart')
      const responsFavorites = await axios.get(
        'http://localhost:3000/favorites'
      )

      setCartItems(responsCart.data)
      setFavorites(responsFavorites.data)
      setListSneakers(responsSneakers.data)
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
      console.log(obj, 'ID')
    } else {
      axios.post('http://localhost:3000/favorites', obj)
      setFavorites((prev) => [...prev, obj])
    }
  }

  return (
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
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              onAddToFavorites={onAddToFavorites}
            />
          }
        />
      </Routes>

      {/* <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          {serachValue ? (
            <h1>Поиск по: {serachValue}</h1>
          ) : (
            <h1>Все кроссовки</h1>
          )}
          <div className="searchBlock d-flex">
            <img width={14} height={14} src={search} alt="search" />
            <input
              value={serachValue}
              onChange={handleChangeInputValue}
              placeholder="Поиск..."
            />
            {serachValue && (
              <img
                onClick={() => setSerachValue('')}
                width={14}
                height={14}
                src={clearInput}
                className="c-po"
              />
            )}
          </div>
        </div>

        <div className="d-flex wrap">
          {listSneakers
            .filter((obj) => obj.name.toLowerCase().includes(serachValue))
            .map((obj) => (
              <ProductCard
                name={obj.name}
                price={obj.price}
                img={obj.imgUrl}
                onFavorite={(obj) => onAddToFavorites(obj)}
                onPlus={(obj) => onAddToCard(obj)}
              />
            ))}
        </div>
      </div> */}
    </div>
  )
}
