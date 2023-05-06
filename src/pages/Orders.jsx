import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/orders')
        setOrders(data.map((obj) => obj).flat(), 'VOT DATA')
        setIsLoading(false)
      } catch (error) {
        alert('Ошибка при загрзке заказов! Пожалуйста, попробуйте еще раз')
        console.log(error)
      }
    })()
  }, [])

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>
      <div className="d-flex wrap">
        {(isLoading ? [...Array(10)] : orders).map((obj, index) => (
          <ProductCard key={index} loading={isLoading} {...obj} />
        ))}
      </div>
    </div>
  )
}

export default Orders
