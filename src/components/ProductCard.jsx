import plus from '../public/plus.svg'
import checked from '../public/cheked.svg'
import unlike from '../public/heart-unlike.svg'
import like from '../public/heart-like.svg'
import { useState } from 'react'

const ProductCard = ({
  id,
  name,
  price,
  img,
  onPlus,
  onFavorite,
  favorited,
}) => {
  const [isAdded, setIsAdded] = useState(false)
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
    </div>
  )
}

export default ProductCard
