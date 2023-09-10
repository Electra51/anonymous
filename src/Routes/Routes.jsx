import {createBrowserRouter} from "react-router-dom";
import FoodCard from "../Pages/FoodCardPage/FoodCard";
import NotificationPage from "../Pages/NotificationPage/NotificationPage";
import GridViewPage from "../Pages/GridViewPage/GridViewPage";
import ReactSliderCard from "../Pages/ReactSliderCard/ReactSliderCard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <FoodCard/>,
  },
   {
    path: "/notify",
    element: <NotificationPage/>,
  },
    {
    path: "/gridView",
    element: <GridViewPage/>,
  },
    {
    path: "/reactSliderCard",
    element: <ReactSliderCard/>,
  },
]);
export default router;