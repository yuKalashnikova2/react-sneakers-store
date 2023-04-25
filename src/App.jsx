import { useEffect, useState } from 'react'

import search from './public/search.svg'
import Cart from './components/Cart'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
import sneakers1 from './public/sneakerses/sneakers-1.png'
import sneakers2 from './public/sneakerses/sneakers-2.png'
import sneakers3 from './public/sneakerses/sneakers-3.png'
import sneakers4 from './public/sneakerses/sneakers-4.png'
import sneakers5 from './public/sneakerses/sneakers-5.png'
import sneakers6 from './public/sneakerses/sneakers-6.png'
import sneakers7 from './public/sneakerses/sneakers-7.png'
import sneakers8 from './public/sneakerses/sneakers-8.png'
import sneakers9 from './public/sneakerses/sneakers-9.png'
import sneakers10 from './public/sneakerses/sneakers-10.png'

export function App() {
  console.log('render')
  const [listSneakers, setListSneakers] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/sneakers')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setListSneakers(json)
      })
  }, [])

  return (
    <div className="wrapper clear">
      {cartOpened && <Cart onClocedCart={() => setCartOpened(false)} />}

      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="searchBlock d-flex">
            <img width={14} height={14} src={search} alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex wrap">
          {listSneakers.map((obj) => (
            <ProductCard name={obj.name} price={obj.price} img={obj.imgUrl} />
          ))}
        </div>
      </div>
    </div>
  )
}
