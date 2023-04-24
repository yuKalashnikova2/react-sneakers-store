import sneakers1 from '../public/sneakerses/sneakers-1.png'
import remove from '../public/cartRemove.svg'
const CartItem = () => {
  return (
    <div className="cartItem mb-20 d-flex align-center">
      <img
        className="mr-20"
        width={70}
        height={70}
        src={sneakers1}
        alt="sneakers"
      />
      <div>
        <p>Мужские Кроссовки Nike Air Max 270</p>
        <b>12 999 руб.</b>
      </div>
      <img className="btnRemove" width={32} height={32} src={remove} />
    </div>
  )
}

export default CartItem
