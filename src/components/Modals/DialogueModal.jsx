import { useRef, forwardRef, useImperativeHandle } from "react";


const DialogueModal = forwardRef(({playerName}, dialogRef)=>{
  
  useImperativeHandle(ref, ()=>{
    return {
      openDialogue(){
        dialogRef.current.showModal();
      }
    }
  })

  return (
    <dialog ref={dialogRef}>
      <form method="dialog">
        <p>Are you sure you want to do this Nigga {playerName}?</p>
        <button>X</button>
      </form>
    </dialog>
  )
});

export default DialogueModal