import cart from '../public/cart.svg'
import logo from '../public/imageLogo.png'
import user from '../public/user.svg'
import favorite from '../public/favorite.svg'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

const Header = (props) => {
  const { totalPrice } = useCart()

  console.log(totalPrice, 'vot TYT')
  return (
    <header className="d-flex justify-between p-40 ">
      <div className="headerLeft d-flex align-center">
        <img src={logo} width={40} height={40} />
        <div>
          <h3 className="m-0 text-uppercase">React Sneakers</h3>
          <p className="m-0">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30 c-po" onClick={props.onClickCart}>
          <img width={18} height={18} src={cart} />
          <span>{totalPrice} руб.</span>
        </li>
        <Link to="/favorites">
          <li className="c-po">
            <img width={18} height={18} src={favorite} />
          </li>
        </Link>

        <li className="c-po">
          <img width={18} height={18} src={user} />
        </li>
      </ul>
    </header>
  )
}

export default Header
