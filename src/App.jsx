import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './componets/pages/Home/Home'
import Contact from './componets/pages/Contact/Contact'
import Category from './componets/pages/Category/Category'
import Navbar from './componets/sections/Navbar/Navbar'
import Footer from './componets/sections/Footer/Footer'
import CartAside from './componets/pages/Cart/CartAside'
import DetalleProduct from './componets/pages/DetalleProduct/DetalleProduct'
const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category',
        element: <Category />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: <CartAside />,
      },
      {
        path: '/product/:id',
        element: <DetalleProduct />,
      },
    ],
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
