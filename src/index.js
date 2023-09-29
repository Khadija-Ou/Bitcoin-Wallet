import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

const root = createRoot(document.querySelector('#root'))
root.render(<App />)
