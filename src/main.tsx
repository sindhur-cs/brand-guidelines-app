import { createRoot } from 'react-dom/client'
import './index.css'
import RouteProvider from './components/routes/RouteProvider'
import React from 'react'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouteProvider/>
  </React.StrictMode>
)
