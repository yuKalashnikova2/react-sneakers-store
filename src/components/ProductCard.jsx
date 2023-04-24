import plus from '../public/plus.svg'
import unliked from '../public/heart-unlike.svg'

const ProductCard = (props) => {
  return (
    <div className="card mr-30">
      <div class="favorite">
        <img src={unliked} alt="unliked" />
      </div>

      <img width={133} height={112} src={props.img} />
      <h5>{props.name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>

        <button>
          <img width={11} height={11} src={plus} />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
