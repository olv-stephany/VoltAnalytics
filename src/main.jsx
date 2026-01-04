import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './HomePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='p-8'>
    <HomePage />

    </div>
  </StrictMode>,
)
