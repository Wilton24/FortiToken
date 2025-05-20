import "../styles/fortitoken.css";
import NavBar from "./NavBar";
import DialogueModal from "./Modals/DialogueModal";
import ImperativeHandle from "./ImperativeHandle";
import { useState, useEffect, useRef } from "react";

export default function Fortitoken({playerName, setPlayerName}) {
  const [fortitoken, setFortitoken] = useState({token: ""});
  const dialogRef = useRef();

  const parentRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setFortitoken((prevState) => ({
        ...prevState,
        token: generateToken()
      }));      
    }, 6000);     

    return () => clearInterval(interval);
  }, []);

  function generateToken(){
    const token = Math.floor(100000 + Math.random() * 900000);
    return token;
  };
  
  function openDialogue(){
    dialogRef.current.openDialogue();
  };

  function focusChild(){
    parentRef.current.focusFire();    
  };

  return (
    <>
      <div id="fortitoken-wrapper">
        <NavBar />
        <DialogueModal 
          ref={dialogRef} 
          playerName={playerName} />

        <ul className="fortitoken-list">
          <li>
            <h3>Fortitoken #1</h3>
            <div className="token-list">
              <h2>{fortitoken.token}</h2>
              <p className="eyes" onClick={()=> openDialogue()}>EYES</p>
              <p onClick={()=> parentRef.current.SayHi()}>Cooldown</p>
              <p>Carret right</p>
            </div>
          </li>
        </ul>
      <button onClick={()=> focusChild()}>Focus child</button>
      </div>
      <ImperativeHandle ref={parentRef}/>
    </>


  );
}