import { useContext } from 'react'
import { AppContext } from '../context'

const Info = ({ title, image, description }) => {
  const { setCartOpened } = useContext(AppContext)
  return (
    <div className="text-center mb-300 mt-150">
      <img width={120} height={120} src={image} />
      <h3>{title}</h3>
      <p className="paragraph">{description}</p>
      <button className="greenButton" onClick={() => setCartOpened(false)}>
        Вернуться назад
      </button>
    </div>
  )
}

export default Info
