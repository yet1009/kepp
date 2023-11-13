import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store";


const _root:(HTMLElement | null) = document.getElementById('root')!

createRoot(_root).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
