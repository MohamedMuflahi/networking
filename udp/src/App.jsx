import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
function App({socket}) {
  const [cords, setCords] = useState({x: 0, y: 0})

  function sendData(data) {
    socket.send(data);
  }

  // Receive data from the server
    socket.onmessage = async (event) => {
      const data = await event.data
      const parsedData = JSON.parse(data)
      console.log(parsedData)
      setCords({x: parsedData.x, y: parsedData.y});
    
      // Process the data received from the server
      // and update the game state accordingly
    };
  return (
    <div className="App">
      <p>{cords.x}</p>
      <p>{cords.y}</p>
      <button onClick={() => sendData(JSON.stringify({x: 10, y: 10}))}>Send</button>
    </div>
  )
}

export default App
