import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'


import { RouterProvider } from 'react-router-dom'
import my_router from './router/router.jsx'

import 'bootstrap/dist/js/bootstrap.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={my_router}/>
  </StrictMode>,
)
