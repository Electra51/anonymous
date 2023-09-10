import './App.css';
import {RouterProvider,} from "react-router-dom";
import router from './Routes/Routes';
import Navbar from './Component/Navbar';

function App() {

  return (
   <div>
    <Navbar/>
     <RouterProvider router={router} />
   </div>
  )
}

export default App
