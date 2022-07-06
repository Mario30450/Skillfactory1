import React from "react";


import "./Modal.css";

function Modal({ setOpenModal }) {
  

  return (
    
      <div className="modalContainer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            
          >
            -
          </button>
        
       
       
         </div>
    
  );
}

export default Modal;