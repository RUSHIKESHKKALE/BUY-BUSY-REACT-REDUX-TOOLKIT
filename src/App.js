
// react router
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";


// all the pages and component to render
import Navbar from "./Component/Navbar/Navbar";
import { Home } from "./Pages/Home";
import {MyOrder} from "./Pages/MyOrder";
import {Cart} from "./Pages/Cart";
import { SignIn } from "./Pages/SingIn";
import { SignUp } from "./Pages/SingUp";
import { Error } from "./Pages/Error";

// main app function 
function App() {

  // all the link routes
  const router = createBrowserRouter([
    {
      path:"/", 
      element: <Navbar />,
      errorElement: <Error />,
      children:[
        { index:true, element: <Home />},
        { path:"/myorder", element: <MyOrder />},
        { path:"/cart", element: <Cart />},
        { path:"/signin", element: <SignIn />},
        { path:"/signup", element: <SignUp />},
      ]
    }
  ]);

  return (
    <>
      {/* routes */}
        <Provider store={store}>

       
        <RouterProvider router={router} />
        </Provider>
    </>
  );
}

export default App;