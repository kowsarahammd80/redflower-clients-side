import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";

 const routers = createBrowserRouter([
   {
    path: '/',
    element:<Main></Main>,
    children: [
      
    ]
   }
]);

export default routers;