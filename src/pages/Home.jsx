import search from '../public/search.svg'
import clearInput from '../public/clearInput.svg'
import ProductCard from '../components/ProductCard'

const Home = ({
  cartItems,
  listSneakers,
  serachValue,
  setSerachValue,
  onAddToCard,
  handleChangeInputValue,
  onAddToFavorites,
  isLoading,
}) => {
  const renderItems = () => {
    const filtredListSneakers = listSneakers.filter((obj) =>
      obj.name.toLowerCase().includes(serachValue.toLowerCase())
    )
    return (isLoading ? [...Array(10)] : filtredListSneakers).map(
      (obj, index) => (
        <ProductCard
          key={index}
          onFavorite={(obj) => onAddToFavorites(obj)}
          onPlus={(obj) => onAddToCard(obj)}
          added={cartItems.some((item) => Number(obj.id) === Number(item.id))}
          loading={isLoading}
          {...obj}
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
