import './style.css'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import { FiltersProvider } from './context/filters.jsx'

const root = createRoot(document.getElementById('app'))
root.render(
  <FiltersProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </FiltersProvider>
)