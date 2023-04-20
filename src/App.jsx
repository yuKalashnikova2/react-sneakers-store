import logo from './assets/imageLogo.png'
import cart from './assets/cart.svg'
import user from './assets/user.svg'
import sneakers1 from './assets/sneakerses/sneakers-1.png'
import sneakers2 from './assets/sneakerses/sneakers-2.png'
import sneakers3 from './assets/sneakerses/sneakers-3.png'
import sneakers4 from './assets/sneakerses/sneakers-4.png'
import plus from './assets/plus.svg'
import search from './assets/search.svg'
import unliked from './assets/heart-unlike.svg'

export function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between p-40 ">
        <div className="headerLeft d-flex align-center">
          <img src={logo} width={40} height={40} />
          <div>
            <h3 className="m-0 text-uppercase">React Sneakers</h3>
            <p className="m-0">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src={cart} />
            <span>1025 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src={user} />
          </li>
        </ul>
      </header>

      <div className="content p-40">

        <div className='d-flex align-center justify-between mb-40'>
        <h1>Все кроссовки</h1>
        <div className='searchBlock d-flex'>
            <img width={14} height={14} src={search} alt='search' />
            <input placeholder='Поиск...'/>
        </div>
        </div>
       

        <div className="d-flex">
          <div className="card mr-30">
            <div class='favorite'>
            <img src={unliked} alt='unliked'/>
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

          <div className="card mr-30">
            <img width={133} height={112} src={sneakers2} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>

              <button>
                <img width={11} height={11} src={plus} />
              </button>
            </div>
          </div>

          <div className="card mr-30">
            <img width={133} height={112} src={sneakers3} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>5 500 руб.</b>
              </div>

              <button>
                <img width={11} height={11} src={plus} />
              </button>
            </div>
          </div>

          <div className="card mr-30">
            <img width={133} height={112} src={sneakers4} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>6 999 руб.</b>
              </div>

              <button>
                <img width={11} height={11} src={plus} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
