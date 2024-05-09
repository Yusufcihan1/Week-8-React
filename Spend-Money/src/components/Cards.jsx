import  'react'
import './css/cards.css'




export default function Cards({ data , budget , setBudget , basket, setBasket , total }) {

    const {id, title, price, image} = data; 
    
    const inputChange = (e) => {
      const target = e.target.value ;
      const sameContent = basket.find(item => item.id === id);
      if(sameContent){
        sameContent.amount = target;
        setBasket([...basket.filter(item => item.id !== id), sameContent])
     }else{
      //Eğer ürün yoksa basketin içine title,id olarak ekle ve amount değerini 1 den başlat
      setBasket([...basket , {
        title : title,
        id: id,
        amount : target,
        price: price 
      } ])
     }
      
     }

    //Değeri input içine yazdırmak için a
    const basketValue = basket.find(item => item.id === id)
 
    //Sepet oluşturduk
   const addBasket = () => {
    //Sepetin içerisinde aynı üründen kaç tane olduğunu bulmak istiyoruz
     const sameContent = basket.find(item => item.id === id);
    //Eğer aynı ürün varsa amount değerini 1 arttır ve basketin içine ekledikten sonra aynı ürünü tekrar göstermeyecek şekilde filtrele
     if(sameContent){
        sameContent.amount += 1;
        setBasket([...basket.filter(item => item.id !== id), sameContent])
     }else{
      //Eğer ürün yoksa basketin içine title,id olarak ekle ve amount değerini 1 den başlat
      setBasket([...basket , {
        title : title,
        id: id,
        amount : 1,
        price: price 
      } ])
     }
  
  
   }

   const removeBasket = () => {
    const sameContent = basket.find(item => item.id === id);
    //Eğer sepette aynı ürün varsa amount değerini 1 azalt
    sameContent.amount -= 1;
    //Eğer hepsi satıldıysa basketten çıkar.
    if(sameContent.amount === 0 ){
      setBasket([...basket.filter(item => item.id !== id)])
    }else{ //Satılmadıysa basketi güncelle
      setBasket([...basket.filter(item => item.id !== id), sameContent])
    }

   
        
     
   }
  return (
    <>
    <div className='card-main'>
        <div className='card-body'>
            <img className='card-image'
             src={image}/>
            <h4 className='title'>{title}</h4>
            <h5 className='price'>${price}</h5>
        </div>
        <div className='entry'>
          <button disabled={!basketValue} onClick={removeBasket}  >Sell</button>
          
          <input type="number" onInput={inputChange} />
          <button disabled={total + price > budget} onClick={addBasket} >Buy</button>
        </div>
    </div>
    </>
  )
}
