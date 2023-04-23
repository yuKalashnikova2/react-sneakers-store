import sneakers1 from '../assets/sneakerses/sneakers-1.png'
import plus from '../assets/plus.svg'
import unliked from '../assets/heart-unlike.svg'

const ProductCard = () => {
  return (
    <div className="card mr-30">
      <div class="favorite">
        <img src={unliked} alt="unliked" />
      </div>

      <img width={133} height={112} src={sneakers1} />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>

        <button>
          <img width={11} height={11} src={plus} />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
