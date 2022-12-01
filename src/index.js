import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import App from './App'
import backgroundVideo from './assets/background.mp4'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <video
      autoPlay
      loop
      muted
      id='video'
      src={backgroundVideo}
      type='video/mp4'
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
