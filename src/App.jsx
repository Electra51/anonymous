import './App.css';
import {RouterProvider,} from "react-router-dom";
import router from './Routes/Routes';
import Navbar from './Component/Navbar';

function App() {

  return (
   <>
    <Navbar/>
     <RouterProvider router={router} />
   </>
  )
}

export default App
