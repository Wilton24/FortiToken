import "../styles/imperativeHandle.css";
import { useImperativeHandle, useRef, forwardRef } from "react";

function ImperativeHandle({}, ref) {

  const imperativeHandleRef = useRef();

  useImperativeHandle(ref, () => ({
    SayHi: () => {
      console.log('Hi, from Child Component');      
    },
    focusFire: ()=>{
      imperativeHandleRef.current.focus();
    }
  }));
  

  return(
    <div className="imperative-handle">
      <h1>ImperativeHandle</h1>
      <input 
        type="text" 
        placeholder="Focus here"
        className="imperative-handle-input" 
        ref={imperativeHandleRef}/>
      <button 
        className="imperative-handle-btn">Say Hi</button>
    </div>
    
  )
};

export default forwardRef(ImperativeHandle)