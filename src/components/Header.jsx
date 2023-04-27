import cart from '../public/cart.svg'
import logo from '../public/imageLogo.png'
import user from '../public/user.svg'
import favorite from '../public/favorite.svg'

const Header = (props) => {
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
          <span>1025 руб.</span>
        </li>
        <li className="c-po">
          <img width={18} height={18} src={favorite} />
        </li>
        <li className="c-po">
          <img width={18} height={18} src={user} />
        </li>
      </ul>
    </header>
  )
}

export default Header
