import "../styles/fortitoken.css";
import NavBar from "./NavBar";

export default function Fortitoken() {

  return (
    <>
      <div id="fortitoken-wrapper">
        <NavBar />
        <ul className="fortitoken-list">
          <li>
            <h3>Fortitoken #1</h3>
            <div className="token-list">
              <h2>123456</h2>
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