import ProductCard from '../components/ProductCard'

const Favorites = ({ favorites, onAddToFavorites }) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Закладки</h1>
      </div>
      <div className="d-flex wrap">
        {favorites.map((obj) => (
          <ProductCard
            id={obj.id}
            name={obj.name}
            price={obj.price}
            img={obj.img}
            favorited={true}
            onFavorite={onAddToFavorites}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites
