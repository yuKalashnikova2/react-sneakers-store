import remove from '../assets/cartRemove.svg'
import CartItem from './CartItem'
import arrow from '../assets/arrow.svg'

const Cart = () => {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img className="btnRemove" width={32} height={32} src={remove} />
        </h2>
        <div className="items">
          <CartItem />
        </div>

        <div className="cartTotal">
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li className="d-flex">
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
