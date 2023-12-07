//import library
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//import pages
import DaftarMenuPage from './pages/daftarMenu';

const router = createBrowserRouter([
  //menuju page login (pembeli)
  {

  },
  //menuju page daftar menu
  {
    path: "/daftarmenu/",
    element: <DaftarMenuPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
