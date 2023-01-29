import { createBrowserRouter } from "react-router-dom";
import Clients from "../../Components/Clients/Clients";
import FullAboutSection from "../../Components/FullAboutSection/FullAboutSection";
import ServiceSection from "../../Components/ServiceSection/ServiceSection";
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
      },

      {
        path: '/service',
        element: <ServiceSection/>
      },

      {
        path: '/client',
        element: <Clients></Clients>
      }
      
    ]
   }
]);

export default routers;