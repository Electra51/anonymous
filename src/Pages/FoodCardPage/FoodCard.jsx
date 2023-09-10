import './foodCard.css';
const FoodCard = () => {
  return (
    <div className='body-class'>  
 <div className="food-card">
    <div className='card-image'>
    </div>
     
    
    <div className="description">
     <div className='card-header'> <h2 className='card-h'>Pizza Vegelate 👌</h2>
     <div className='button'>
      <button>#VEGETERIAN</button>
      <button>#ITALIAN</button>
     </div>
     </div>
     
      <p className='para'>Yammy veggie pizza with tasty olivs, crisp, peppers, fresh arugula and original italian tomator sauce.</p>
     
     <div className='card-footer'>
      <h3>🍕 850 KCL</h3>
       <h3>🕜 30 MINS</h3>
        <h3>⭐ 4.7/5</h3>
     </div>
    </div>
    <div className='card-price'>
    <p>  $11.99</p>
    </div>
  </div>
  </div>
  )
}

export default FoodCard;