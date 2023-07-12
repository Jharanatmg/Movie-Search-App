import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { MovieProvider } from './context/MovieContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <MovieProvider>
    <App />
    </MovieProvider>
    </BrowserRouter>

  </React.StrictMode>,
)
