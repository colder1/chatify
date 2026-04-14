import { useEffect } from 'react'
import './App.css'
import { socket } from '../socket';
import ManageConnection from './components/ManageConnection';
import MyForm from './components/MyForm';


function App() {

  useEffect(() => {
    const onConnect = () => {
      console.log('Conectado');
    };

    socket.on('connect', onConnect);

    // socket.on('disconnect', onDisconnect)
    // const onDisconnect = () => {
    //   console.log("Desconectado")
    // }

  }, []);

  return (
    <>
      <h1>Chatify</h1>
      <ManageConnection />
      <MyForm />
    </>
  );
}

export default App;
