import remove from '../public/cartRemove.svg'
import cartEmpty from '../public/cartEmpty.svg'
import CartItem from './CartItem'
import arrow from '../public/arrow.svg'

const Cart = ({ onClosedCart, items = [], onRemove, onClearAll }) => {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <button onClick={onClearAll} className='delete'>Удалить все</button>
          <img
            className="btnRemove"
            width={32}
            height={32}
            src={remove}
            onClick={onClosedCart}
          />
        </h2>

        {items.length === 0 ? (
          <div className="text-center mb-300 mt-150">
            <img width={120} height={120} src={cartEmpty} />
            <h3>Корзина пустая</h3>
            <p className="paragraph">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button className="greenButton">Вернуться назад</button>
          </div>
        ) : (
            <>
             <div className="items">
            {items.map((obj, index) => (
              <CartItem
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
          <button className="greenButton">
            Оформить заказ
            <img src={arrow} alt="arrow" />
          </button>
        </div>
            </>
         
        )}

      
      </div>
    </div>
  )
}

export default Cart
