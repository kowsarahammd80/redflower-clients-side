import { createBrowserRouter } from "react-router-dom";
import FullAboutSection from "../../Components/FullAboutSection/FullAboutSection";
import Main from "../../Layout/Main/Main";
import HomePages from "../../Pages/HomePages/HomePages";

 const routers = createBrowserRouter([
   {
    path: '/',
    element:<Main></Main>,
    children: [
      {
        path: '/',
        element: <HomePages></HomePages>
      },

      {
        path: '/about',
        element:<FullAboutSection></FullAboutSection>
      }
    ]
   }
]);

export default routers;