import plus from '../public/plus.svg'
import checked from '../public/cheked.svg'
import unlike from '../public/heart-unlike.svg'
import like from '../public/heart-like.svg'
import { useState } from 'react'
import ContentLoader from 'react-content-loader'

const ProductCard = ({
  id,
  name,
  price,
  img,
  onPlus,
  onFavorite,
  favorited,
  added = false,
  loading,
}) => {
  const [isAdded, setIsAdded] = useState(added)
  const [isFavorite, setIsFavorite] = useState(favorited)

  const handleClickChecked = () => {
    onPlus({ id, name, price, img })
    setIsAdded(!isAdded)
  }

  const handleClickFavorite = () => {
    onFavorite({ id, name, price, img })
    setIsFavorite(!isFavorite)
  }
  return (
    <div className="card mr-30 mb-30">
      {loading ? (
        <ContentLoader
          speed={2}
          width={288}
          height={260}
          viewBox="0 0 288 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="7" y="16" rx="10" ry="10" width="151" height="90" />
          <rect x="6" y="118" rx="3" ry="3" width="150" height="18" />
          <rect x="9" y="147" rx="3" ry="3" width="93" height="18" />
          <rect x="9" y="176" rx="3" ry="3" width="79" height="20" />
          <rect x="122" y="168" rx="8" ry="8" width="33" height="30" />
        </ContentLoader>
      ) : (
        <>
          <div className="favorite" onClick={handleClickFavorite}>
            <img src={isFavorite ? like : unlike} alt="unliked" />
          </div>

          <img width={133} height={112} src={img} />
          <h5>{name}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>

            <img onClick={handleClickChecked} src={isAdded ? checked : plus} />
          </div>
        </>
      )}
    </div>
  )
}

export default ProductCard
