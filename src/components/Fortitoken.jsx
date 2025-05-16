import "../styles/fortitoken.css";
import NavBar from "./NavBar";
import DialogueModal from "./Modals/DialogueModal";
import { useState, useEffect, useRef } from "react";

export default function Fortitoken() {
  const [fortitoken, setFortitoken] = useState({token: ""});
  const dialogRef = useRef();

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
    dialogRef.current.showModal();
  };

  return (
    <>
      <div id="fortitoken-wrapper">
        <NavBar />
        <DialogueModal ref={dialogRef}/>
        <ul className="fortitoken-list">
          <li>
            <h3>Fortitoken #1</h3>
            <div className="token-list">
              <h2>{fortitoken.token}</h2>
              <p className="eyes" onClick={()=> openDialogue()}>EYES</p>
              <p>Cooldown</p>
              <p>Carret right</p>
            </div>
          </li>
        </ul>
      </div>
    </>


  );
}