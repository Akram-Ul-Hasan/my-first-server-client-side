import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Phones from './components/Phones/Phones';
import Home from './components/Home/Home';
import Phone from './components/Phone/Phone';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/phones",
        element: <Phones></Phones>,
        loader: ()=> fetch("http://localhost:5000/phones")
      },
      {
        path: "/phone/:id",
        element: <Phone></Phone>,
        loader: ({params}) => fetch(`http://localhost:5000/phone/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
