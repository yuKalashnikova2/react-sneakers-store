import search from '../public/search.svg'
import clearInput from '../public/clearInput.svg'
import ProductCard from '../components/ProductCard'

const Home = ({
  listSneakers,
  serachValue,
  setSerachValue,
  onAddToCard,
  handleChangeInputValue,
  onAddToFavorites,
}) => {
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
    </div>
  )
}

export default Home
