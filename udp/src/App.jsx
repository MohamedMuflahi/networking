import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Phaser from 'phaser'
import './App.css'
function App({ socket }) {
  let DATA = []
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 }
      }
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };
  const game = new Phaser.Game(config);
  const SCENE = game.scene.scenes[0]
  let Player;
  function preload() {
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }
  function create() {
    this.add.image(400, 300, 'sky');
    Player = this.add.image(400, 300, 'logo')

    

    

    // let logo = this.add.image(400, 100, 'logo');

  }
  function update() {
    // console.log(cords)
    
    const spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    if(this.input.keyboard.checkDown(spacebar, 150)){
      sendData(JSON.stringify([{ x: Player.x  +1 , y: Player.y +1  }]))
    }
  }
  function sendData(data) {
    socket.send(data);
  }

  // Receive data from the server
  socket.onmessage = async (event) => {
    const data = await event.data
    const parsedData = JSON.parse(data)
    DATA = parsedData[0]
    Player.x = parsedData.x
    Player.y = parsedData.y
    console.log(Player.x, Player.y)
    // setCords({x: parsedData.x, y: parsedData.y});

    // Process the data received from the server
    // and update the game state accordingly
  };
  return (
    <div className="App">

      {/* <p>{cords.x}</p>
      <p>{cords.y}</p> */}
      {/* <button onClick={() => sendData(JSON.stringify([{ x: 10, y: 10 }]))}>Send</button> */}
    </div>
  )
}

export default App
