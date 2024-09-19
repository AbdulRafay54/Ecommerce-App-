import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import SingleCardDetails from './Pages/SingleCardDetails'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Layout/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        
        {
          path: "about",
          element: <About/>
        },
        
        {
          path: "contact",
          element: <Contact/>
        },
        
        {
          path: "product",
          element: <Product/>
        },
        {
          path: "singleCardDetails/:id",
          element:  <SingleCardDetails/>
        },
        {
          path: "*",
          element: <h1>Not Found!</h1>
        }
        
      ]
    }
  ]
)




createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} >

  </RouterProvider>
)
