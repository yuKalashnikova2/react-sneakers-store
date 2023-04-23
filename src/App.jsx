import search from './assets/search.svg'

import Cart from './components/Cart'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
export function App() {
  return (
    <div className="wrapper clear">
      <Cart />

      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="searchBlock d-flex">
            <img width={14} height={14} src={search} alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}
