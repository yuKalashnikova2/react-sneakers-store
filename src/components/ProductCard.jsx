import plus from '../public/plus.svg'
import checked from '../public/cheked.svg'
import unliked from '../public/heart-unlike.svg'
import { useState } from 'react'

const ProductCard = (props) => {
  const [isAdded, setIsAdded] = useState(false)

  const handleClickChecked = () => {
    setIsAdded(!isAdded)
  }
  return (
    <div className="card mr-30 mb-30">
      <div className="favorite">
        <img src={unliked} alt="unliked" />
      </div>

      <img width={133} height={112} src={props.img} />
      <h5>{props.name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>

        <img onClick={handleClickChecked} src={isAdded ? checked : plus} />
      </div>
    </div>
  )
}

export default ProductCard
