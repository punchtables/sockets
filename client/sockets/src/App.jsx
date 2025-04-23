import { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

function App() {
  
  const [message, setMessage] = useState();
  const [messageReceived, setMessageReceived] = useState();

  const sendMessage = () => {
    socket.emit('send_message', {message});
  }

  useEffect(() => {
    socket.on('receive_message', (data) =>{
      setMessageReceived(data.message);
    })
  }, [socket]);

  return (
    <>
      <div>
          <input onChange={(event) => setMessage(event.target.value)} type="text" name="" id="" placeholder="message"/>
          <button onClick={() => sendMessage()}>Send message</button>
      </div>
      <h1>Message:</h1>
      {messageReceived}
    </>
  )
}

export default App
