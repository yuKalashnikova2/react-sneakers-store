import remove from '../public/cartRemove.svg'
const CartItem = ({ name, price, img, onRemove, id }) => {
  return (
    <div className="cartItem mb-20 d-flex align-center">
      <img className="mr-20" width={70} height={70} src={img} alt="sneakers" />
      <div>
        <p>{name}</p>
        <b>{price} руб.</b>
      </div>
      <img className="btnRemove" width={32} height={32} src={remove} onClick={() => onRemove(id)}/>
    </div>
  )
}

export default CartItem
