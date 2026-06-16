import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Account from './components/Account.jsx';

const appRouter = createBrowserRouter([ 
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/Login",
        element:<Login />
      },
      {
        path:"/Signup",
        element:<Signup />
      },
      {
        path:"/Account",
        element:<Account />
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
 <RouterProvider router={appRouter}></RouterProvider>
)
