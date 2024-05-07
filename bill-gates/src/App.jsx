import { useEffect, useState } from 'react'
import './App.css'
import { data } from './Data'
import Cards from './components/Cards'
import Header from './components/Header'
import Money from './components/Money'
import Basket from './components/Basket'

function App() {

    const [ budget, setBudget] = useState(1000000000)
    const [ basket, setBasket ] = useState([])
    const [ total, setTotal] = useState(0)




   useEffect(()=>{
    setTotal(basket.reduce((acc,item)=>{
      return acc + (item.amount * (data.find(data => data.id === item.id).price))
    },0))
   },[basket])

  return (
    <>
      
        <Header/>
        <Money budget={budget} setBudget={setBudget} total={total} />
        <div className='card-detail'>
        {
          data.map((data)=>(
            <Cards key={data.id} data={data} budget={budget} setBudget={setBudget} basket={basket} setBasket={setBasket} total={total}/>
          ))
        }
       </div>
       <Basket basket={basket} total={total}/>
       


    </>
  )
}

export default App
