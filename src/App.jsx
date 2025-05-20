import Player from './components/Player.jsx';
import Fortitoken from './components/Fortitoken.jsx';
import { useState } from 'react';

function App() {

  const [playerName, setPlayerName] = useState('');

  return (
    <>
      <Player 
        playerName={playerName}
        setPlayerName={setPlayerName}/>

      <div id="challenges">
      </div>
      <Fortitoken 
        playerName={playerName}
        setPlayerName={setPlayerName}/>

      
    </>
  );
}

export default App;
