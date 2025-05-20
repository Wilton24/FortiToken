import "../styles/imperativeHandle.css"

export default function ImperativeHandle(){

  function sayHi(){
    console.log("Clicked from ImperativeHandle(Child Component)");
  }
  

  return(
    <div className="imperative-handle">
      <h1>ImperativeHandle</h1>
      <button 
        className="imperative-handle-btn"
        onClick={sayHi}>Say Hi</button>
    </div>
    
  )
}