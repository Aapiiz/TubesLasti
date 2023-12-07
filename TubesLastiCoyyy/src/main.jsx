//import library
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


//import pages
import NoMeja from './page/NoMeja';

const router = createBrowserRouter([
  //menuju page login (pembeli)
  {
    path: "",
    element: <NoMeja />,
  },
  //menuju page x
  {

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
