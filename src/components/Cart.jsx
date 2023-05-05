import axios from 'axios'
import remove from '../public/cartRemove.svg'
import cartEmpty from '../public/cartEmpty.svg'
import orderComplete from '../public/orderComplete.svg'
import CartItem from './CartItem'
import arrow from '../public/arrow.svg'
import Info from './Info'
import { useContext, useState } from 'react'
import { AppContext } from '../context'

const Cart = ({ onClosedCart, items = [], onRemove, onClearAll }) => {
  const { cartItems, setCartItems } = useContext(AppContext)
  const [orderIsProcessed, setOrderIsProcessed] = useState(false)

  const onClickOrder = () => {
    axios.post('http://localhost:3000/orders', cartItems)
    setOrderIsProcessed(true)

    for (let i = 0; i < cartItems.length; i++) {
      axios.delete('http://localhost:3000/cart/' + cartItems[i].id)
    }

    setCartItems([])
  }

  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <button onClick={onClearAll} className="delete">
            Удалить все
          </button>
          <img
            className="btnRemove"
            width={32}
            height={32}
            src={remove}
            onClick={onClosedCart}
          />
        </h2>

        {items.length ? (
          <>
            <div className="items">
              {items.map((obj, index) => (
                <CartItem
                  key={index}
                  id={obj.id}
                  name={obj.name}
                  price={obj.price}
                  img={obj.img}
                  onRemove={onRemove}
                />
              ))}
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
              <button onClick={onClickOrder} className="greenButton">
                Оформить заказ
                <img src={arrow} alt="arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={orderIsProcessed ? ' Заказ оформлен!' : 'Корзина пустая'}
            description={
              orderIsProcessed
                ? 'Ваш заказ скоро будет передан курьерской доставке'
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'
            }
            image={orderIsProcessed ? orderComplete : cartEmpty}
          />
        )}
      </div>
    </div>
  )
}

export default Cart
