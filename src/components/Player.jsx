import { useState, useRef } from 'react';
export default function Player() {

  const [playerName, setPlayerName] = useState('');
  const playerNameRef = useRef(null);



  return (
    <section id="player">
      <h2>Welcome, {playerName ? `nigga ${playerName}!` : 'nigga!'}</h2>
      <p>
        <input          
          type="text"
          ref={playerNameRef}
           />

        <button onClick={()=>setPlayerName(playerNameRef.current?.value)}>Set Name</button>
      </p>
    </section>
  );
}
