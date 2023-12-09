//import library
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//import pages
import DaftarMenuPage from './pages/daftarMenu';
import ReviewMenuPage from './pages/ReviewMenu';
import NomorMejaPage from './pages/nomorMeja';

const router = createBrowserRouter([
  //Menuju page memasukkan nomor meja
  {
    path: "",
    element: <NomorMejaPage/>,
  },
  //menuju page daftar menu
  {
    path: "/daftarmenu/",
    element: <DaftarMenuPage />,
  },
  //menuju review menu page
  {
    path: "/reviewmenu/",
    element: <ReviewMenuPage />,
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
