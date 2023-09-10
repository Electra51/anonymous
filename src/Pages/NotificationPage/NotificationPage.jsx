import { useState } from 'react';
import './notificationPage.css';
import { BsSearch } from 'react-icons/bs';
import { TbMenu } from 'react-icons/tb';


const NotificationPage = () => {
  const [open,setOpen]=useState(false);
  const toggle=()=>setOpen(!open);
  // const handleSearch =(e)=>{
  //   console.log('first',e)
  // }
  return (
    <div className='notify-body'>
      <div className='notify-card'>
<div className='notify-header'>
  <TbMenu/>
  <h3>Notification</h3>
<BsSearch className='icon' onClick={toggle} />
</div>
<div className={ open ? 'search-bar':"search-bar-hide"}>
<input type="text" placeholder="Search" className='search-bar-field'/>
</div>

<div className='notify-card-body'>
  <div>
    <small>9:24 AM</small>
    <h3>John Walker <span>posted a photo on <br />your wall</span></h3>
  </div>
   <div>
    <small>8:19 AM</small>
    <h3>Alice Parker <span>commented your  <br />last photo</span></h3>
  </div>
   <div>
    <small>Yesterday</small>
    <h3>Luke Wayne<span> added you as friend</span></h3>
  </div>

</div>
      </div>
    </div>


  )
}

export default NotificationPage