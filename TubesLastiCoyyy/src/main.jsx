//import library
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//import pages
import DaftarMenuPage from './pages/daftarMenu';
import NoMeja from './pages/NoMeja';
import ReviewMenuPage from './pages/ReviewMenu';

const router = createBrowserRouter([
  //menuju page login (pembeli)
  {
    path: "",
    element: <NoMeja />,
  },
  //menuju page daftar menu
  {
    path: "/daftarmenu/",
    element: <DaftarMenuPage />,
  },
  //menuju review menu page
  {
    path: "/reviewMenu/",
    element: <ReviewMenuPage />,
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
