import { useState } from 'react'

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

const arr = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12990,
    imgUrl: sneakers1,
  },
  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: 12990,
    imgUrl: sneakers2,
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8499,
    imgUrl: sneakers3,
  },
  {
    name: 'Мужские Кроссовки Under Armour Curry 8',
    price: 15199,
    imgUrl: sneakers4,
  },
  { name: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, imgUrl: sneakers5 },
  {
    name: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: 10799,
    imgUrl: sneakers6,
  },
  {
    name: 'Мужские Кроссовки Nike LeBron XVIII',
    price: 16499,
    imgUrl: sneakers7,
  },
  {
    name: 'Мужские Кроссовки Nike Lebron XVIII Low',
    price: 13999,
    imgUrl: sneakers8,
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imgUrl: sneakers9,
  },
  {
    name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
    price: 11299,
    imgUrl: sneakers10,
  },
]
export function App() {
  const [cartOpened, setCartOpened] = useState(false)

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
          {arr.map((obj) => (
            <ProductCard name={obj.name} price={obj.price} img={obj.imgUrl} />
          ))}
        </div>
      </div>
    </div>
  )
}
