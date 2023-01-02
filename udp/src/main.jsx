import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const socket = new WebSocket('ws://localhost:8000');

  // Send data to the server
 
ReactDOM.createRoot(document.getElementById('root')).render(
    <App socket={socket}/>
)
