import  'react'

export default function Basket({basket, total}) {
  return (
    <>
    <div className='basket'>
    <h1 style={{textDecoration:'underline'}}>Basket</h1>
    <div >
    {
        basket.map(item => (
            <div className='basket-list'>{ item.amount } x {item.title}  = {item.amount * item.price} $
            </div>
            
        ))
    }
    <p className='total-price'>Total :  {total} $</p>
    </div>
    </div>
    
    
    </>
    
  )
}
