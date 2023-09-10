import './reactSliderCard.css'
import Slider from "react-slick";
import humburger from '../../assets/hamburger.jpg';
import istockphoto from '../../assets/istockphoto.jpg';
import pizza from '../../assets/pizza.jpg';
import { useState } from 'react';
const ReactSliderCard = () => {

  const [open,setOpen]=useState(true);
   const [open2,setOpen2]=useState(false);
    const [open3,setOpen3]=useState(false);
  const toggle=()=>setOpen(true);
  const toggl2=()=>setOpen2(true);
   const toggl3=()=>setOpen3(true);
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
      centerMode: true,
      
      centerPadding: "60px",
  };
  return (
 <div className='new-class'>
   <div className='card-slider'>
      <Slider {...settings}>
      <div onClick={toggle}>
       <img src={humburger} alt="" />
      </div>
      <div onClick={toggl2}>
 <img src={istockphoto} alt="" />
      </div>
      <div onClick={toggl3}>
   <img src={pizza} alt="" />
      </div>
    </Slider>
  </div>
 {
  open ==true && open2==false &&open3==false && <div>
   <h3>Beef Burger</h3>
   <p>Price :10 USD</p>
   <p>Experience pure burger bliss with our renowned Best Burger in Dhaka – the Beef Burger Only. Savor every succulent bite of our expertly seasoned beef patty, </p>
   <button className='video-button'>Watch Video</button>
  </div>
 }
{
  open2 ==true ?  <div>
   <h3>White Rice</h3>
   <p>Price :100 USD</p>
   <p>Experience pure burger bliss with our renowned Best Burger in Dhaka – the Beef Burger Only. Savor every succulent bite of our expertly seasoned beef patty, </p>
   <button className='video-button'>Watch Video</button>
  </div>:null
}
 


  {
    open3 ==true && open ==false && open2==false && <div>
   <h3>Dinner Item</h3>
   <p>Price :100 USD</p>
   <p>Experience pure burger bliss with our renowned Best Burger in Dhaka – the Beef Burger Only. Savor every succulent bite of our expertly seasoned beef patty, </p>
   <button className='video-button'>Watch Video</button>
  </div>

  }
   </div>
  )
}

export default ReactSliderCard