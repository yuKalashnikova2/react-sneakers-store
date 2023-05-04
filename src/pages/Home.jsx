import search from '../public/search.svg'
import clearInput from '../public/clearInput.svg'
import ProductCard from '../components/ProductCard'
import { useContext } from 'react'
import { AppContext } from '../context'

const Home = ({
  listSneakers,
  serachValue,
  setSerachValue,
  onAddToCard,
  handleChangeInputValue,
  onAddToFavorites,
  isLoading,
}) => {
  const { isItemAdded } = useContext(AppContext)

  const renderItems = () => {
    const filtredListSneakers = listSneakers.filter((item) =>
      item.name.toLowerCase().includes(serachValue.toLowerCase())
    )
    return (isLoading ? [...Array(10)] : filtredListSneakers).map(
      (item, index) => (
        <ProductCard
          key={index}
          onFavorite={(obj) => onAddToFavorites(obj)}
          onPlus={(obj) => onAddToCard(obj)}
          added={isItemAdded(item && item.id)}
          loading={isLoading}
          {...item}
        />
      )
    )
  }

  return (
    <div className="content p-40">
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

      <div className="d-flex wrap">{renderItems()}</div>
    </div>
  )
}

export default Home
