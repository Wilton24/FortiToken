import "../../styles/nameModal.css"

export default function DisplayNameModal({setPlayerName}){
  function closeModal(){
    setPlayerName(null);
  }

  return(
    <div className="name-modal-bg">
      <div className="name-modal">
        <p className="close-btn" onClick={()=> closeModal()}>
          X
        </p>
        sound check
      </div>
    </div>
  )
}