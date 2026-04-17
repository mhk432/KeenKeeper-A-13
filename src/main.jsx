import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  RouterProvider } from 'react-router';
import { router } from './routs/Router.jsx';
import { ToastContainer } from 'react-toastify';
import FriendProvider from './context/FriendContext.jsx';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
    <RouterProvider router={router}></RouterProvider>
    </FriendProvider>
    
    <ToastContainer />
  </StrictMode>,
)
