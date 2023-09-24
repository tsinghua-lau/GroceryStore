import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/store'
import { BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

  //严格模式
  //  <React.StrictMode>
  //   <App />
  //  </React.StrictMode>,
)
store.subscribe(() => {
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
})
