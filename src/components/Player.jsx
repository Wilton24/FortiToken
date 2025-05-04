import { useState, useRef, useEffect } from 'react';
export default function Player() {

  const [playerName, setPlayerName] = useState('');
  const playerNameRef = useRef(null);

  
  function handleSetName(){
    setPlayerName(playerNameRef.current.value);
    playerNameRef.current.value = "";
  };


  return (
    <section id="player">
      <h2>Welcome, {playerName ? `nigga ${playerName}!` : 'nigga!'}</h2>
      <p>
        <input          
          type="text"
          ref={playerNameRef}
           />

        <button onClick={()=> handleSetName()}>Set Name</button>
      </p>
    </section>
  );
}
