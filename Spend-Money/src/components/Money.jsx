import  'react'
import './css/money.css'
export default function Money({budget, setBudget, total}) {

 
  
    
  
   

    return (
        <>
        <div className='money'>
            <p className='money-text'>${budget-total}</p>
        </div>
        
        
        </>
  )
}
