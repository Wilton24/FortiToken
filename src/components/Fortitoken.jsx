import "../styles/fortitoken.css";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";

export default function Fortitoken() {
  const [fortitoken, setFortitoken] = useState({token: ""});

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
  
  return (
    <>
      <div id="fortitoken-wrapper">
        <NavBar />
        <ul className="fortitoken-list">
          <li>
            <h3>Fortitoken #1</h3>
            <div className="token-list">
              <h2>{fortitoken.token}</h2>
              <p>EYES</p>
              <p>Cooldown</p>
              <p>Carret right</p>
            </div>
          </li>
        </ul>
      </div>
    </>


  );
}