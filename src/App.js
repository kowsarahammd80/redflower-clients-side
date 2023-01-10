import { RouterProvider } from "react-router-dom";
import routers from "./Routers/Router/Router";


function App() {
  return (

    <div className="mx-0 lg:mx-12">

     <RouterProvider router={routers}>
      
     </RouterProvider>

    </div>

  );
}

export default App;
