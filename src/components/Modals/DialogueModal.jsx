import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";


const DialogueModal = forwardRef(({playerName}, dialogRef)=>{

  const dialogueModalRef = useRef();
  
  useImperativeHandle(dialogRef, ()=>{
    return {
      openDialogue(){
        dialogueModalRef.current.showModal();
      }
    }
  });

  return (
    createPortal(
      <dialog ref={dialogueModalRef}>
        <form method="dialog">
          <p>Are you sure you want to do this Nigga {playerName}?</p>
          <button>X</button>
        </form>
     </dialog>,
     document.getElementById('modal')
    )
  )
});

export default DialogueModal