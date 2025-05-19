import { useState, useRef, useEffect } from 'react';
import DisplayNameModal from './Modals/DisplayNameModal';
export default function Player({playerName, setPlayerName}) {
  const playerNameRef = useRef(null);
  
  function handleSetName(){
    setPlayerName(playerNameRef.current.value);
    playerNameRef.current.value = "";
  };


  return (
    <section id="player">
        {/* {playerName && 
          <DisplayNameModal setPlayerName={setPlayerName}/>} */}

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
