import { useRef, forwardRef, useImperativeHandle } from "react";


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
    <dialog ref={dialogueModalRef}>
      <form method="dialog">
        <p>Are you sure you want to do this Nigga {playerName}?</p>
        <button>X</button>
      </form>
    </dialog>
  )
});

export default DialogueModal