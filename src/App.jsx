import React from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Add from './Pages/Add/Add';
import Gig from './Pages/Gig/Gig';
import Gigs from './Pages/Gigs/Gigs';
import Orders from './Pages/Orders/Orders';
import Mygigs from './Pages/Mygigs/Mygigs';
import Messages from './Pages/Messages/Messages';
import Message from './Pages/Message/Message';
const App = () => {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Gigs",
          element: <Gigs />,
        },
        {
          path: "/Gig/:id",
          element: <Gig />,
        },
        {
          path: "Orders",
          element: <Orders />,
        },
        {
          path: "Mygigs",
          element: <Mygigs />,
        },
        {
          path: "Add",
          element: <Add />, 
        },
        {
          path: "Messages",
          element: <Messages />,
        },
        {
          path: "Message/:id",
          element: <Message />,
        }
      ]
    },
  ]);
  
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App