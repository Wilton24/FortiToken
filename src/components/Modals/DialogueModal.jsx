import { useRef, forwardRef } from "react";


const DialogueModal = forwardRef((props, ref)=>{
  
  return (
    <dialog ref={ref}>
      <form method="dialog">
        <p>Are you sure you want to do this?</p>
        <button>Close</button>
      </form>
    </dialog>
  )
});

export default DialogueModal