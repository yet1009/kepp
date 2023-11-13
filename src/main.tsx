import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'


const _root:(HTMLElement | null) = document.getElementById('root')!

createRoot(_root).render(
  <>
    <App />
  </>,
)
