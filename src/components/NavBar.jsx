import "../styles/fortitoken.css";

export default function NavBar(){
  return(
    <div className="nav-bar">
      <div className="header-left">
        <h2>Fortitoken</h2>
      </div>

      <div className="header-right">
        <p>search</p>
        <p>plus</p>
        <p>...</p>
      </div>
    </div>  
  )
}